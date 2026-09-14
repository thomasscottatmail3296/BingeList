const {Plugin, Notice, Modal, Setting, MarkdownView} = require("obsidian");
const STATUSES = ["Not Watched", "Watched", "In Progress of Watching"];

class StatusModal extends Modal {
  constructor(app, onChoose, current) { super(app); this.onChoose = onChoose; this.current = current; }
  onOpen() {
    const {contentEl} = this; contentEl.empty(); contentEl.createEl("h2", {text: "Watch Status"});
    new Setting(contentEl).setName("Status").addDropdown(d => {
      STATUSES.forEach(s => d.addOption(s, s));
      d.setValue(STATUSES.includes(this.current) ? this.current : STATUSES[0]);
      d.onChange(v => { this.onChoose(v); this.close(); });
    });
  }
}

module.exports = class BingeVaultStatus extends Plugin {
  async onload() {
    this.addCommand({ id: "set-watch-status", name: "Set Watch Status", editorCallback: (editor, view) => this.pick(view) });
    this.addRibbonIcon("check-square", "Set Watch Status", () => this.pick(this.app.workspace.getActiveViewOfType(MarkdownView)));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshStatusControl()));
    this.registerEvent(this.app.metadataCache.on("changed", () => this.refreshStatusControl()));
    this.refreshStatusControl();
  }

  getStatus(file) {
    const cache = this.app.metadataCache.getFileCache(file);
    const value = cache?.frontmatter?.status;
    return typeof value === "string" && STATUSES.includes(value) ? value : "Not Watched";
  }

  async writeStatus(file, status) {
    let data = await this.app.vault.read(file);
    data = data.replace(/^\uFEFF/, "");
    const newline = data.includes("\r\n") ? "\r\n" : "\n";
    const fm = data.match(/^---(?:\r?\n)([\s\S]*?)(?:\r?\n)---/);
    if (fm) {
      let body = fm[1];
      if (/^status:\s*.*$/m.test(body)) body = body.replace(/^status:\s*.*$/m, `status: "${status}"`);
      else body = `status: "${status}"${newline}` + body;
      data = data.slice(0, fm.index) + "---" + newline + body + newline + "---" + data.slice(fm.index + fm[0].length);
    } else {
      data = `---${newline}status: "${status}"${newline}---${newline}${data}`;
    }
    await this.app.vault.modify(file, data);
    new Notice(`Status: ${status}`);
  }

  async pick(view) {
    if (!view?.file) return new Notice("Open a media note first.");
    const file = view.file;
    new StatusModal(this.app, status => this.writeStatus(file, status), this.getStatus(file)).open();
  }

  refreshStatusControl() {
    // The command/modal remains the canonical control. This lightweight status-bar select
    // also works when the Properties UI is inconsistent between notes.
    if (!this.statusEl) this.statusEl = this.addStatusBarItem();
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view?.file) { this.statusEl.empty(); return; }
    this.statusEl.empty();
    const select = this.statusEl.createEl("select", { cls: "binge-vault-status-select" });
    STATUSES.forEach(s => select.createEl("option", { text: s, value: s }));
    select.value = this.getStatus(view.file);
    select.onchange = () => this.writeStatus(view.file, select.value);
  }
};
