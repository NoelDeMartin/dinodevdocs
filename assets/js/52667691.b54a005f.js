"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7599],{824:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var o=r(74848),n=r(28453),i=r(78924);const l={title:"Moodle 2.2.1",tags:["Release notes","Moodle 2.2"],sidebar_position:1,moodleVersion:"2.2.1"},d=void 0,t={id:"releases/2.2/2.2.1",title:"Moodle 2.2.1",description:"Release date: 9 January 2012",source:"@site/general/releases/2.2/2.2.1.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.1",permalink:"/moodledevdocs/general/releases/2.2/2.2.1",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.1.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/moodledevdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:1,frontMatter:{title:"Moodle 2.2.1",tags:["Release notes","Moodle 2.2"],sidebar_position:1,moodleVersion:"2.2.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2",permalink:"/moodledevdocs/general/releases/2.2"},next:{title:"Moodle 2.2.2",permalink:"/moodledevdocs/general/releases/2.2/2.2.2"}},a={},h=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}];function c(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:l,metadata:t}),"\n",(0,o.jsx)(s.p,{children:"Release date: 9 January 2012"}),"\n",(0,o.jsxs)(s.p,{children:["Here is ",(0,o.jsx)(s.a,{href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 2.2.1"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-26974",children:"MDL-26974"})," - SCORM now has logging for opening individual SCOs"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-28710",children:"MDL-28710"})," - CSS class names have been added for rating div/span elements enabling theming"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"functional-changes",children:"Functional changes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-19147",children:"MDL-19147"})," - Single Simple forums are no longer targets for moving (and losing) discussions"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-20245",children:"MDL-20245"})," - Bigger values allowed in user preferences, alleviating some problems with grader report"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194008",children:"MSA-12-0001"})," - Recaptcha transmission consistency issue"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194011",children:"MSA-12-0003"})," - Added password protection"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194012",children:"MSA-12-0004"})," - Added profile image security"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194013",children:"MSA-12-0005"})," - Encryption enhancement"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194014",children:"MSA-12-0006"})," - Additional email address validation"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194015",children:"MSA-12-0007"})," - Email injection prevention"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194016",children:"MSA-12-0008"})," - Unsynchronised access via tokens"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194017",children:"MSA-12-0009"})," - Role access issue"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194019",children:"MSA-12-0011"})," - Browser autofill password issue"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=194020",children:"MSA-12-0012"})," - Form validation issue"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-30623",children:"MDL-30623"})," - Guest are no longer asked for an enrolment password when trying to enter courses"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-30569",children:"MDL-30569"})," - Editing the front page when defaulthomepage = mymoodle now works as expected"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-28180",children:"MDL-28180"})," - Duplicating an assignment that has course completion enabled no longer breaks course completion for the course"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-27314",children:"MDL-27314"})," - It is now possible to delete or regrade quiz attempts in separate groups mode"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-28282",children:"MDL-28282"})," - Groups/grouping support in SCORM 2.0 is now working"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_2.2.1",children:"Notas de Moodle 2.2.1"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.1",children:"Notes de mise \xe0 jour de Moodle 2.2.1"})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);