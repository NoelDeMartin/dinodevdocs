"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74970],{24074:(e,s,r)=>{r.d(s,{Ke:()=>a});r(96540);var o=r(72511),t=r(81090),l=r(74848);function i(e,s){const r=(0,o.kF)(e);return r&&void 0!==r[s]?(0,l.jsx)(l.Fragment,{children:r[s]}):(0,l.jsx)(l.Fragment,{children:"not yet released"})}function n(e){let{releaseName:s}=e;return i(s,"releaseDate")}function a(e){let{releaseName:s}=e;const r=s.endsWith(".0")?s.slice(0,-2):s;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["Release date:"," ",(0,l.jsx)(n,{releaseName:s}),(0,l.jsx)("br",{})]}),(0,l.jsxs)("p",{children:["Here is"," ",(0,l.jsxs)(t.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${r}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",s]}),"."]})]})}},24434:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var o=r(74848),t=r(28453),l=r(78924),i=r(24074);const n={title:"Moodle 4.1.10",tags:["Release notes","Moodle 4.1"],sidebar_position:10,moodleVersion:"4.1.10",description:"The release notes for Moodle version 4.1.10."},a=void 0,d={id:"releases/4.1/4.1.10",title:"Moodle 4.1.10",description:"The release notes for Moodle version 4.1.10.",source:"@site/general/releases/4.1/4.1.10.md",sourceDirName:"releases/4.1",slug:"/releases/4.1/4.1.10",permalink:"/moodledevdocs/general/releases/4.1/4.1.10",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/4.1/4.1.10.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 4.1",permalink:"/moodledevdocs/general/tags/moodle-4-1"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1713534731e3,sidebarPosition:10,frontMatter:{title:"Moodle 4.1.10",tags:["Release notes","Moodle 4.1"],sidebar_position:10,moodleVersion:"4.1.10",description:"The release notes for Moodle version 4.1.10."},sidebar:"releaseNotes",previous:{title:"Moodle 4.1.9",permalink:"/moodledevdocs/general/releases/4.1/4.1.9"},next:{title:"Moodle 4.0",permalink:"/moodledevdocs/general/releases/4.0"}},c={},p=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2}];function h(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{frontMatter:n,metadata:d}),"\n","\n",(0,o.jsx)(i.Ke,{releaseName:n.moodleVersion}),"\n",(0,o.jsx)(s.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-81060",children:"MDL-81060"})," - Private files area quota applies when unzipping to non-private file areas"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-80835",children:"MDL-80835"})," - Add CHIPS support to LTI cookies"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-79712",children:"MDL-79712"})," - Ensure SameSite=None on MoodleSession cookie to retain support for embedded launches"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-81405",children:"MDL-81405"})," - Support Chrome's partitioned cookies in the mobile app"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-80836",children:"MDL-80836"})," - Replace session piggyback with login flow during account linking process in LTI provider"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-80167",children:"MDL-80167"})," - Add environment check for Oracle database"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsx)(s.p,{children:"A number of security related issues were resolved. Details of these issues will be released after a period of approximately one week to allow system administrators to safely update to the latest version."})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);