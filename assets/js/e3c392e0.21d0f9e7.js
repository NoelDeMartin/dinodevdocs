"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[59279],{24074:(e,s,r)=>{r.d(s,{Ke:()=>d});r(96540);var o=r(72511),l=r(81090),t=r(74848);function n(e,s){const r=(0,o.kF)(e);return r&&void 0!==r[s]?(0,t.jsx)(t.Fragment,{children:r[s]}):(0,t.jsx)(t.Fragment,{children:"not yet released"})}function i(e){let{releaseName:s}=e;return n(s,"releaseDate")}function d(e){let{releaseName:s}=e;const r=s.endsWith(".0")?s.slice(0,-2):s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Release date:"," ",(0,t.jsx)(i,{releaseName:s}),(0,t.jsx)("br",{})]}),(0,t.jsxs)("p",{children:["Here is"," ",(0,t.jsxs)(l.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${r}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",s]}),"."]})]})}},56220:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=r(74848),l=r(28453),t=r(78924),n=r(24074);const i={title:"Moodle 3.11.12",tags:["Release notes","Moodle 3.11"],sidebar_position:12,moodleVersion:"3.11.12",description:"The release notes for Moodle version 3.11.12."},d=void 0,a={id:"releases/3.11/3.11.12",title:"Moodle 3.11.12",description:"The release notes for Moodle version 3.11.12.",source:"@site/general/releases/3.11/3.11.12.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.12",permalink:"/moodledevdocs/general/releases/3.11/3.11.12",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.12.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/moodledevdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1674554992e3,sidebarPosition:12,frontMatter:{title:"Moodle 3.11.12",tags:["Release notes","Moodle 3.11"],sidebar_position:12,moodleVersion:"3.11.12",description:"The release notes for Moodle version 3.11.12."},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.11",permalink:"/moodledevdocs/general/releases/3.11/3.11.11"},next:{title:"Moodle 3.11.13",permalink:"/moodledevdocs/general/releases/3.11/3.11.13"}},c={},h=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security fixes",id:"security-fixes",level:2}];function m(e){const s={a:"a",h2:"h2",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{frontMatter:i,metadata:a}),"\n","\n",(0,o.jsx)(n.Ke,{releaseName:i.moodleVersion}),"\n",(0,o.jsx)(s.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-76340",children:"MDL-76340"})," - Video JS player doesn't display the control bar"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-76666",children:"MDL-76666"})," - setlocale() problems with locale strings longer than 255 characters"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-76674",children:"MDL-76674"})," - String for timezone america/ciudad_juarez not found (tzdb 2022g)"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-76679",children:"MDL-76679"})," - Admin config fields of type password inconsistent behaviour"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-73017",children:"MDL-73017"})," - Add environment check for versions not supporting PHP 8.1"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"for-developers",children:"For developers"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-75105",children:"MDL-75105"})," - List available behat data generators on admin/tool/behat/index.php"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=443272",children:"MSA-23-0001"})," - Reflected XSS risk in some returnurl parameters"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=443274",children:"MSA-23-0003"}),' - Possible to set the preferred "start page" of other users']}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);