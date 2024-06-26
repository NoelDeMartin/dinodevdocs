"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[65736],{24074:(e,s,r)=>{r.d(s,{Ke:()=>d});r(96540);var o=r(72511),i=r(81090),t=r(74848);function n(e,s){const r=(0,o.kF)(e);return r&&void 0!==r[s]?(0,t.jsx)(t.Fragment,{children:r[s]}):(0,t.jsx)(t.Fragment,{children:"not yet released"})}function l(e){let{releaseName:s}=e;return n(s,"releaseDate")}function d(e){let{releaseName:s}=e;const r=s.endsWith(".0")?s.slice(0,-2):s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Release date:"," ",(0,t.jsx)(l,{releaseName:s}),(0,t.jsx)("br",{})]}),(0,t.jsxs)("p",{children:["Here is"," ",(0,t.jsxs)(i.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${r}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",s]}),"."]})]})}},73364:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var o=r(74848),i=r(28453),t=r(78924),n=r(24074);const l={title:"Moodle 4.1.9",tags:["Release notes","Moodle 4.1"],sidebar_position:9,moodleVersion:"4.1.9",description:"The release notes for Moodle version 4.1.9."},d=void 0,a={id:"releases/4.1/4.1.9",title:"Moodle 4.1.9",description:"The release notes for Moodle version 4.1.9.",source:"@site/general/releases/4.1/4.1.9.md",sourceDirName:"releases/4.1",slug:"/releases/4.1/4.1.9",permalink:"/moodledevdocs/general/releases/4.1/4.1.9",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/4.1/4.1.9.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 4.1",permalink:"/moodledevdocs/general/tags/moodle-4-1"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1708355863e3,sidebarPosition:9,frontMatter:{title:"Moodle 4.1.9",tags:["Release notes","Moodle 4.1"],sidebar_position:9,moodleVersion:"4.1.9",description:"The release notes for Moodle version 4.1.9."},sidebar:"releaseNotes",previous:{title:"Moodle 4.1.8",permalink:"/moodledevdocs/general/releases/4.1/4.1.8"},next:{title:"Moodle 4.1.10",permalink:"/moodledevdocs/general/releases/4.1/4.1.10"}},c={},h=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2}];function m(e){const s={a:"a",h2:"h2",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{frontMatter:l,metadata:a}),"\n","\n",(0,o.jsx)(n.Ke,{releaseName:l.moodleVersion}),"\n",(0,o.jsx)(s.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-79937",children:"MDL-79937"})," - Lesson: Matching questions does not match with expected response"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-80667",children:"MDL-80667"})," - Running a task in the admin UI isn't possible, if config.php use environments variables"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455634",children:"MSA-24-0001"})," - Denial of service risk in file picker unzip functionality"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455635",children:"MSA-24-0002"})," - Forum search accepted random parameters in its URL"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455636",children:"MSA-24-0003"})," - H5P attempts report did not respect activity group settings"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455637",children:"MSA-24-0004"})," - Forum export did not respect activity group settings"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455638",children:"MSA-24-0005"})," - CSRF risk in Language import utility"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=455641",children:"MSA-24-0006"})," - IDOR on dashboard comments block"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);