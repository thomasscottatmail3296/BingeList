param(
    [string]$VaultRoot = (Join-Path $PSScriptRoot '..')
)

$VaultRoot = (Resolve-Path -LiteralPath $VaultRoot).Path
$errors = [System.Collections.Generic.List[string]]::new()
$warnings = [System.Collections.Generic.List[string]]::new()

foreach ($required in @('00 - Directory','01 - TV Shows','02 - Movies','03 - Documentaries','04 - Franchises','05 - Templates','06 - Sources','07 - Data','99 - Inbox')) {
    if (-not (Test-Path -LiteralPath (Join-Path $VaultRoot $required) -PathType Container)) {
        $errors.Add("Missing required folder: $required")
    }
}

$markdown = Get-ChildItem -LiteralPath $VaultRoot -Recurse -File -Filter '*.md'
$knownFiles = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
$knownDirs = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach ($directory in (Get-ChildItem -LiteralPath $VaultRoot -Recurse -Directory)) {
    [void]$knownDirs.Add($directory.FullName.Substring($VaultRoot.Length + 1).Replace('\','/'))
}
foreach ($file in $markdown) {
    $relative = $file.FullName.Substring($VaultRoot.Length + 1).Replace('\','/')
    [void]$knownFiles.Add($relative)
}

foreach ($file in $markdown) {
    $text = Get-Content -LiteralPath $file.FullName -Raw
    if ($text -match '(?m)^---\s*$' -and (($text -split '(?m)^---\s*$').Count -lt 3)) {
        [void]$errors.Add("Unclosed frontmatter: $($file.FullName.Substring($VaultRoot.Length + 1))")
    }
    if ($text -match 'Γò|Γö|ï¿½') {
        [void]$warnings.Add("Possible mojibake: $($file.FullName.Substring($VaultRoot.Length + 1))")
    }
    foreach ($match in [regex]::Matches($text, '\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]')) {
        $target = (($match.Groups[1].Value -replace '\s+',' ').Trim()).TrimEnd('/')
        if ($target -notmatch '/' -or $target -match '^(https?|mailto):') { continue }
        $candidate = [IO.Path]::GetFullPath((Join-Path $file.Directory.FullName ($target -replace '/','\')))
        $relativeCandidate = $candidate.Substring($VaultRoot.Length + 1).Replace('\','/')
        $rootRelative = $target.TrimStart('/')
        $valid = $knownFiles.Contains($relativeCandidate) -or
            $knownFiles.Contains("$relativeCandidate.md") -or
            $knownDirs.Contains($relativeCandidate) -or
            $knownFiles.Contains($rootRelative) -or
            $knownFiles.Contains("$rootRelative.md") -or
            $knownDirs.Contains($rootRelative)
        if (-not $valid) {
            [void]$warnings.Add("Unresolved path link (review relative/vault-root semantics): $($file.FullName.Substring($VaultRoot.Length + 1)) -> $target")
        }
    }
}

$doubleSpaceNames = Get-ChildItem -LiteralPath $VaultRoot -Recurse -Force | Where-Object Name -match ' -  '
foreach ($item in $doubleSpaceNames) {
    if ($item.Name -notmatch '^(Bitcoin|Jeffrey Epstein|Trainwreck|Minecraft|DC specials|Marvel specials)') {
        [void]$warnings.Add("Review double-space title: $($item.FullName.Substring($VaultRoot.Length + 1))")
    }
}

[PSCustomObject]@{
    VaultRoot = $VaultRoot
    MarkdownFiles = $markdown.Count
    Errors = $errors.Count
    Warnings = $warnings.Count
    ErrorDetails = ($errors -join "`n")
    WarningDetails = ($warnings -join "`n")
}

if ($errors.Count -gt 0) { exit 1 }
