"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[50264],{28073:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=r(74848),l=r(28453),i=r(78924);const t={title:"Moodle 3.0.6",tags:["Release notes","Moodle 3.0"],sidebar_position:6,moodleVersion:"3.0.6"},n=void 0,d={id:"releases/3.0/3.0.6",title:"Moodle 3.0.6",description:"Release date: 12 September 2016",source:"@site/general/releases/3.0/3.0.6.md",sourceDirName:"releases/3.0",slug:"/releases/3.0/3.0.6",permalink:"/moodledevdocs/general/releases/3.0/3.0.6",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.0/3.0.6.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.0",permalink:"/moodledevdocs/general/tags/moodle-3-0"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:6,frontMatter:{title:"Moodle 3.0.6",tags:["Release notes","Moodle 3.0"],sidebar_position:6,moodleVersion:"3.0.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.0.5",permalink:"/moodledevdocs/general/releases/3.0/3.0.5"},next:{title:"Moodle 3.0.7",permalink:"/moodledevdocs/general/releases/3.0/3.0.7"}},a={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:t,metadata:d}),"\n",(0,o.jsx)(s.p,{children:"Release date: 12 September 2016"}),"\n",(0,o.jsxs)(s.p,{children:["Here is ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.0.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 3.0.6"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-37250",children:"MDL-37250"})," - Lessons: save students attempts if they timeout"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50586",children:"MDL-50586"})," - Warn teachers about removing level 0 in rubrics as it leads to unexpected grades."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-41174",children:"MDL-41174"})," - Update the calendar event when inline changing activity name or duplicating activity"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-33741",children:"MDL-33741"})," - Allow teacher to access course files in hidden categories using Server files repository in filepicker"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=339631",children:"MSA-16-0022"})," Web service tokens should be invalidated when the user password is changed or forced to be changed"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-55312",children:"MDL-55312"})," - Bugfix: Load timeout for modules: core/first occurs after purge caches"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-55292",children:"MDL-55292"})," - Include tideways profiler along with xhprof for PHP7 profiling"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-54892",children:"MDL-54892"})," - Uninstall scheduled tasks when plugin is uninstalled"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-22183",children:"MDL-22183"})," - Prevent stats from running later and later - use scheduled task time only"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-47371",children:"MDL-47371"}),' - Bugfix: The character & is displayed as " & amp ; " in book module']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-52544",children:"MDL-52544"})," - Resolved problems of Oracle driver in PHP7 environment"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-51078",children:"MDL-51078"}),' - Add "All changes" option to the Action selector in report_log (was present in 2.6 and removed in 2.7+)']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-52105",children:"MDL-52105"})," - Remove CAP_PROHIBIT in manager role for capability 'enrol/self",":holdkey","'"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-54847",children:"MDL-54847"})," - Allow students to insert HTML audio and video tags"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-55273",children:"MDL-55273"})," - Default setting for cookiesecure should be on"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.0.6",children:"Notes de mise \xe0 jour de Moodle 3.0.6"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_3.0.6",children:"Notas de Moodle 3.0.6"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);