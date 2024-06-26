"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[46811],{21350:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=o(74848),i=o(28453),t=o(78924);const l={title:"Moodle 3.4.3",tags:["Release notes","Moodle 3.4"],sidebar_position:3,moodleVersion:"3.4.3"},n=void 0,a={id:"releases/3.4/3.4.3",title:"Moodle 3.4.3",description:"Release date: 17 May 2018",source:"@site/general/releases/3.4/3.4.3.md",sourceDirName:"releases/3.4",slug:"/releases/3.4/3.4.3",permalink:"/moodledevdocs/general/releases/3.4/3.4.3",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.4/3.4.3.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.4",permalink:"/moodledevdocs/general/tags/moodle-3-4"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:3,frontMatter:{title:"Moodle 3.4.3",tags:["Release notes","Moodle 3.4"],sidebar_position:3,moodleVersion:"3.4.3"},sidebar:"releaseNotes",previous:{title:"Moodle 3.4.2",permalink:"/moodledevdocs/general/releases/3.4/3.4.2"},next:{title:"Moodle 3.4.4",permalink:"/moodledevdocs/general/releases/3.4/3.4.4"}},d={},c=[{value:"GDPR preparation",id:"gdpr-preparation",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.A,{frontMatter:l,metadata:a}),"\n",(0,r.jsx)(s.p,{children:"Release date: 17 May 2018"}),"\n",(0,r.jsxs)(s.p,{children:["Here is ",(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.4.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 3.4.3"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"gdpr-preparation",children:"GDPR preparation"}),"\n",(0,r.jsxs)(s.p,{children:["Plugins are available for Moodle 3.3 and 3.4 to help Moodle sites to comply with GDPR - ",(0,r.jsx)(s.a,{href:"https://moodle.org/plugins/tool_dataprivacy",children:"Data privacy"}),", ",(0,r.jsx)(s.a,{href:"https://moodle.org/plugins/tool_policy",children:"Policies"}),". In Moodle 3.5 they will be included in the standard distribution. Work on changes in core is almost completed, the new minor release with the remaining components will follow in several days."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61306",children:"MDL-61306"})," - Implement privacy API in various components and standard plugins for user data export and deletion"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-58697",children:"MDL-58697"}),' - Assignment: Fixed incorrect "No submission" status if group submission changed to individual submission']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61724",children:"MDL-61724"})," - File resource: Fixed download problem for files with long names"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61519",children:"MDL-61519"})," - Performance improvement in Calendar in case of big number of course categories"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-55532",children:"MDL-55532"})," - Show grade category name in Grades Export"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61714",children:"MDL-61714"})," - GDPR and privacy: Change default age of digital consent according to current legislation on each country"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-52989",children:"MDL-52989"})," - Lesson: Fixed regression in cluster navigation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61183",children:"MDL-61183"})," - Display participants count on course participants page"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-60196",children:"MDL-60196"})," - Display custom external tool icon in activity chooser"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61736",children:"MDL-61736"})," - Show self enroled user as inactive when self enrolement method is disabled"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61800",children:"MDL-61800"})," - A bug which led to the failure of some Scheduled Tasks in certain circmstances has been fixed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61733",children:"MDL-61733"})," - Database module: Fixed bug with creating tables in templates using Atto editor"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61348",children:"MDL-61348"})," - Quiz: Fixed a report bug where the count of the number of attempts is sometimes incorrect in group averages"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61520",children:"MDL-61520"})," - Quiz: Fixed a bug where the question text was no longer exported in the quiz statistics HTML download"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61950",children:"MDL-61950"})," - Quiz: Fixed a bug in the statistics report to display the chosen questions for random question slots"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-62202",children:"MDL-62202"})," - GDPR: Moved the Privacy and policies administration section to the Users tab (when GDPR plugins are installed)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-62042",children:"MDL-62042"})," - Global search: Remove unicode non-characters from indexing to resolve indexing errors"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-61827",children:"MDL-61827"})," - Facebook OAuth2: Update the Facebook Graph API to v2.12"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371199",children:"MSA-18-0007"})," Calculated question type allows remote code execution by Question authors"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371200",children:"MSA-18-0008"})," Users can download any file via portfolio assignment caller class"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371201",children:"MSA-18-0009"})," Portfolio forum caller class allows a user to download any file"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371202",children:"MSA-18-0010"})," User can shift a block from Dashboard to any page"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371203",children:"MSA-18-0011"})," User who did not agree to the site policies can see the site homepage as if they had full site access"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=371204",children:"MSA-18-0012"})," Portfolio script allows instantiation of class chosen by user"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.4.3",children:"Notes de mise \xe0 jour de Moodle 3.4.3"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_3.4.3",children:"Notas de Moodle 3.4.3"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);