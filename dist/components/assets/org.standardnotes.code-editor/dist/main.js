document.addEventListener("DOMContentLoaded",(function(){const e=CodeMirror.modeInfo.reduce((function(e,t){return e[t.mode]?e[t.mode].push(t):e[t.mode]=[t],e}),{}),t=CodeMirror.modeInfo.reduce((function(e,t){return e[t.name]={mode:t.mode,mime:t.mime},e}),{}),n=Object.keys(t);let o,i,a,d,m,c,r,s=!1,l=!0;function u(){if(i){let e=i;o.saveItemWithPresave(e,(()=>{d=c.getValue(),e.content.text=d,e.clientData=a,e.content.preview_plain=null,e.content.preview_html=null}))}}function f(o){if(!o)return;const i=function(n){const o=function(e){return e?{name:e.name,mode:e.mode,mime:e.mime}:null},i=/.+\.([^.]+)$/.exec(n),a=/\//.test(n);if(i)return o(CodeMirror.findModeByExtension(i[1]));if(a)return o(CodeMirror.findModeByMIME(a[1]));if(t[n])return{name:n,mode:t[n].mode,mime:t[n].mime};if(e[n]){const t=e[n][0];return{name:t.name,mode:t.mode,mime:t.mime}}return{name:n,mode:n,mime:n}}(o);i?(c.setOption("mode",i.mime),CodeMirror.autoLoadMode(c,i.mode),a&&(a.mode=i.name),document.getElementById("language-select").selectedIndex=n.indexOf(i.name)):console.error("Could not find a mode corresponding to "+o)}window.setKeyMap=function(e){c.setOption("keyMap",e),function(e){const t=document.getElementById("toggle-vim-mode-button"),n="vim"===e?"Disable":"Enable",o="vim"===e?"danger":"success";t.innerHTML=`${n} Vim mode`,t.classList.remove("danger"),t.classList.remove("success"),t.classList.add(o)}(e)},window.onLanguageSelect=function(){f(n[r.selectedIndex]),u()},window.setDefaultLanguage=function(){const e=n[r.selectedIndex];o.setComponentDataValueForKey("language",e);const t=document.getElementById("default-label"),i=t.innerHTML;t.innerHTML="Success",t.classList.add("success"),setTimeout((function(){t.classList.remove("success"),t.innerHTML=i}),750)},window.toggleVimMode=function(){let e;e="default"===(o.getComponentDataValueForKey("keyMap")??"default")?"vim":"default",window.setKeyMap(e),o.setComponentDataValueForKey("keyMap",e)},o=new ComponentRelay({targetWindow:window,onReady:()=>{const e=o.platform;e&&document.body.classList.add(e),function(){CodeMirror.commands.save=function(){u()},c=CodeMirror.fromTextArea(document.getElementById("code"),{extraKeys:{"Alt-F":"findPersistent"},lineNumbers:!0,styleSelectedText:!0,lineWrapping:!0,inputStyle:"mobile"===(o.environment??"web")?"textarea":"contenteditable"}),c.setSize("100%","100%"),function(){r=document.getElementById("language-select");for(let e=0;e<n.length;e++){const t=document.createElement("option");t.value=e,t.innerHTML=n[e],r.appendChild(t)}}(),c.on("change",(function(){s||u()})),c.on("cursorActivity",(function(e){"mobile"===o.environment&&(e=>{setTimeout((()=>e.scrollIntoView()),200)})(e)}));const e=o.getComponentDataValueForKey("keyMap")??"default";window.setKeyMap(e)}()},handleRequestForContentHeight:()=>{const e=document.getElementsByClassName("CodeMirror-code")[0]?.scrollHeight;return 50+e}}),o.streamContextItem((e=>{!function(e){if(e.uuid!==m&&(d=null,l=!0,m=e.uuid),i=e,e.isMetadataUpdate)return;a=e.clientData;let t=a.mode;t||(t=o.getComponentDataValueForKey("language")??"JavaScript"),f(t),c&&(e.content.text!==d&&(s=!0,c.getDoc().setValue(i.content.text),s=!1),l&&(l=!1,c.getDoc().clearHistory()),c.setOption("spellcheck",i.content.spellcheck))}(e)}))}));