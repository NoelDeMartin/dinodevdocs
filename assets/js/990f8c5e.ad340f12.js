"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[28954],{49977:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=o(74848),n=o(28453),t=o(78924);const i={title:"Moodle 2.7.2",tags:["Release notes","Moodle 2.7"],sidebar_position:2,moodleVersion:"2.7.2"},l=void 0,d={id:"releases/2.7/2.7.2",title:"Moodle 2.7.2",description:"Release date: 8 September, 2014",source:"@site/general/releases/2.7/2.7.2.md",sourceDirName:"releases/2.7",slug:"/releases/2.7/2.7.2",permalink:"/moodledevdocs/general/releases/2.7/2.7.2",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.7/2.7.2.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 2.7",permalink:"/moodledevdocs/general/tags/moodle-2-7"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:2,frontMatter:{title:"Moodle 2.7.2",tags:["Release notes","Moodle 2.7"],sidebar_position:2,moodleVersion:"2.7.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.7.1",permalink:"/moodledevdocs/general/releases/2.7/2.7.1"},next:{title:"Moodle 2.7.3",permalink:"/moodledevdocs/general/releases/2.7/2.7.3"}},a={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{frontMatter:i,metadata:d}),"\n",(0,r.jsx)(s.p,{children:"Release date: 8 September, 2014"}),"\n",(0,r.jsxs)(s.p,{children:["Here is ",(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.7.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 2.7.2"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-45780",children:"MDL-45780"})," - Atto now working with form change checker and quiz autosave"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-46748",children:"MDL-46748"})," - Mathjax address that changed, that caused Atto to fail to load, has been updated in Moodle"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-35984",children:"MDL-35984"})," - Gradebook Sum of grades shows correct total if items are hidden"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"functional-changes",children:"Functional changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-45724",children:"MDL-45724"})," - Warning given when the same memcached instance is used for both sessions and MUC"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-46681",children:"MDL-46681"}),' - For Multiple choices questions in the quiz / question bank, the options "Clear incorrect responses" and "Show the number of correct responses" did not make sense for "One answer only" questions. It is now impossible to select that combination of options on the form.']}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=269590",children:"MSA-14-0033"})," URL parameter injection in CAS authentication"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=269591",children:"MSA-14-0034"})," Identity information revealed early in Q&A forum"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-37509",children:"MDL-37509"}),' - Description of assignment hidden in calendar if "always show description" = NO']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-46545",children:"MDL-46545"})," - Weekly stats now working again"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-46589",children:"MDL-46589"})," - Automatic emails now sent after users import from CSV"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-43197",children:"MDL-43197"})," - Parent role only sees course total and no longer individual grades"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-46236",children:"MDL-46236"})," - Start New Attempt option is now followed if SCORM is set to appear in a popup"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.7.2",children:"Notes de mise \xe0 jour de Moodle 2.7.2"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_2.7.2",children:"Notas de Moodle 2.7.2"})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);