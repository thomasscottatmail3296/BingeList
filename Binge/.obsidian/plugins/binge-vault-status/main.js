const {Plugin, Notice, Modal, Setting, MarkdownView} = require("obsidian");
const STATUSES=["Not Watched","Watched","In Progress of Watching"];
class StatusModal extends Modal {
  constructor(app,onChoose,current){super(app);this.onChoose=onChoose;this.current=current;}
  onOpen(){const {contentEl}=this;contentEl.empty();contentEl.createEl("h2",{text:"Watch Status"});
    new Setting(contentEl).setName("Status").addDropdown(d=>{STATUSES.forEach(s=>d.addOption(s,s));d.setValue(STATUSES.includes(this.current)?this.current:STATUSES[0]);d.onChange(v=>{this.onChoose(v);this.close();});});
  }
}
module.exports=class BingeVaultStatus extends Plugin{
 async onload(){this.addCommand({id:"set-watch-status",name:"Set Watch Status",editorCallback:(editor,view)=>this.pick(view)});this.addRibbonIcon("check-square","Set Watch Status",()=>this.pick(this.app.workspace.getActiveViewOfType(MarkdownView)));}
 async pick(view){if(!view?.file)return new Notice("Open a media note first.");const file=view.file;const cache=this.app.metadataCache.getFileCache(file);const current=cache?.frontmatter?.status||"Not Watched";new StatusModal(this.app,async status=>{let data=await this.app.vault.read(file);if(/^---\n/.test(data)){data=data.replace(/^(---\n)([\s\S]*?)(\n---)/,(_,a,f,c)=>{if(/^status:\s*.*$/m.test(f))f=f.replace(/^status:\s*.*$/m,`status: "${status}"`);else f=`status: "${status}"\n`+f;return a+f+c;});await this.app.vault.modify(file,data);new Notice(`Status: ${status}`);}},current).open();}
};
