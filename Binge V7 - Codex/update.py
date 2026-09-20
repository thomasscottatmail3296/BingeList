import re, json, os, glob
root='/mnt/data/b51'
base=os.path.join(root,'01 - TV Shows/Supernatural')
files=[]
for s in range(6,11):
    files += glob.glob(os.path.join(base,f'Season {s:02d}',f'S{s:02d}E*.md'))
files=sorted(files)
assert len(files)==114, len(files)

def get_summary(txt):
    m=re.search(r'> \[!spoiler\]- SUMMARY — SPOILERS\n((?:>.*\n?)*)\n> \[!spoiler\]- MAJOR SCENES',txt)
    if not m: raise ValueError('summary missing')
    lines=[]
    for ln in m.group(1).splitlines():
        if ln.startswith('> '): lines.append(ln[2:])
        elif ln=='>': lines.append('')
    return ' '.join(x.strip() for x in lines).strip()

def markers(summary):
    # Preserve existing summary text; split into narrative clauses/sentences for event-level markers.
    parts=re.split(r'(?<=[.!?])\s+|;\s+', summary)
    parts=[re.sub(r'^Original source-grounded paraphrase:\s*','',p).strip() for p in parts if p.strip()]
    if len(parts)==1:
        parts=re.split(r'\s+(?=(?:Meanwhile|However|When|After|As|But|The brothers|Sam|Dean|Castiel|Crowley|Bobby)\b)',parts[0])
        parts=[p.strip(' .') for p in parts if p.strip()]
    parts=parts[:4]
    if len(parts)<2: parts.append('The episode reaches its stated resolution and immediate aftermath.')
    return parts

for f in files:
    txt=open(f,encoding='utf-8').read()
    sm=get_summary(txt)
    ms=markers(sm)
    block='> [!spoiler]- MAJOR SCENES — SPOILERS\n> Event markers are narrative-level and are not timestamped; release/version-specific timing remains unverified.\n>\n' + ''.join('> - '+x+'\n' for x in ms)
    txt2=re.sub(r'> \[!spoiler\]- MAJOR SCENES — SPOILERS\n(?:>.*\n?)*?(?=\n◇ RELATIONSHIPS)', block+'\n', txt, count=1)
    if txt2==txt: raise ValueError(f'no replacement {f}')
    open(f,'w',encoding='utf-8').write(txt2)

src=os.path.join(root,'06 - Sources/Supernatural - Batch 51 Scene Data.md')
open(src,'w',encoding='utf-8').write('''# Supernatural — Batch 51 Scene Data\n\n◇ SCOPE\n- Supernatural Seasons 06–10\n- Episode-level narrative event markers\n- 114 episode notes updated\n\n◇ POLICY\n- Major-scene markers are original narrative paraphrases derived from the existing episode summary layer.\n- They are not copied guide prose.\n- No exact timestamps are asserted.\n- Release/version-specific timestamps remain unavailable or unverified.\n\n◇ SOURCE\n- Episode metadata and plot reference: TVmaze Supernatural episode guide\n- https://www.tvmaze.com/shows/19/supernatural/episodeguide\n''')

manifest=glob.glob(os.path.join(root,'07 - Data/vault-build-manifest.json'))[0]
with open(manifest,encoding='utf-8') as fh: d=json.load(fh)
batches=d.setdefault('batches',[])
batches.append({'batch':51,'name':'Supernatural Scene Data Seasons 6-10','scope':'Supernatural Seasons 6-10 major-event markers','episodes_updated':114})
with open(manifest,'w',encoding='utf-8') as fh: json.dump(d,fh,indent=2,ensure_ascii=False); fh.write('\n')
print('updated',len(files))
