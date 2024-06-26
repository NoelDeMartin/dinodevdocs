"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[71965],{24074:(e,s,r)=>{r.d(s,{Ke:()=>d});r(96540);var o=r(72511),l=r(81090),n=r(74848);function i(e,s){const r=(0,o.kF)(e);return r&&void 0!==r[s]?(0,n.jsx)(n.Fragment,{children:r[s]}):(0,n.jsx)(n.Fragment,{children:"not yet released"})}function t(e){let{releaseName:s}=e;return i(s,"releaseDate")}function d(e){let{releaseName:s}=e;const r=s.endsWith(".0")?s.slice(0,-2):s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Release date:"," ",(0,n.jsx)(t,{releaseName:s}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("p",{children:["Here is"," ",(0,n.jsxs)(l.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${r}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",s]}),"."]})]})}},30673:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var o=r(74848),l=r(28453),n=r(78924),i=r(24074);const t={title:"Moodle 3.11.2",tags:["Release notes","Moodle 3.11"],sidebar_position:2,moodleVersion:"3.11.2",description:"The release notes for Moodle version 3.11.2."},d=void 0,a={id:"releases/3.11/3.11.2",title:"Moodle 3.11.2",description:"The release notes for Moodle version 3.11.2.",source:"@site/general/releases/3.11/3.11.2.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.2",permalink:"/moodledevdocs/general/releases/3.11/3.11.2",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.2.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/moodledevdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1657629908e3,sidebarPosition:2,frontMatter:{title:"Moodle 3.11.2",tags:["Release notes","Moodle 3.11"],sidebar_position:2,moodleVersion:"3.11.2",description:"The release notes for Moodle version 3.11.2."},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.1",permalink:"/moodledevdocs/general/releases/3.11/3.11.1"},next:{title:"Moodle 3.11.3",permalink:"/moodledevdocs/general/releases/3.11/3.11.3"}},c={},h=[{value:"Regression fix",id:"regression-fix",level:2},{value:"Accessibility fix",id:"accessibility-fix",level:2},{value:"Other fixes",id:"other-fixes",level:2},{value:"Translations",id:"translations",level:2}];function u(e){const s={a:"a",h2:"h2",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:t,metadata:a}),"\n","\n",(0,o.jsx)(i.Ke,{releaseName:t.moodleVersion}),"\n",(0,o.jsx)(s.h2,{id:"regression-fix",children:"Regression fix"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-72203",children:"MDL-72203"})," - Redirect security checks should not introduce additional cURL requests"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"accessibility-fix",children:"Accessibility fix"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-71672",children:"MDL-71672"})," - Title of some dialogs are not read by screen reader when they are opened"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"other-fixes",children:"Other fixes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-63770",children:"MDL-63770"})," - Moodle doesn't work when external port number doesn't equal internal"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-72139",children:"MDL-72139"})," - Encoding is lost after upgrading 3.9 to 3.9.8"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.11.2",children:"Notes de mise \xe0 jour de Moodle 3.11.2"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_3.11.2",children:"Notas de Moodle 3.11.2"})}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);