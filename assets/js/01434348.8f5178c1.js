"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[60226],{15232:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=s(74848),t=s(28453),i=s(78924);const l={title:"Moodle 3.8.1",tags:["Release notes","Moodle 3.8"],sidebar_position:1,moodleVersion:"3.8.1"},n=void 0,a={id:"releases/3.8/3.8.1",title:"Moodle 3.8.1",description:"Release date: 13 January 2020",source:"@site/general/releases/3.8/3.8.1.md",sourceDirName:"releases/3.8",slug:"/releases/3.8/3.8.1",permalink:"/moodledevdocs/general/releases/3.8/3.8.1",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.8/3.8.1.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.8",permalink:"/moodledevdocs/general/tags/moodle-3-8"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:1,frontMatter:{title:"Moodle 3.8.1",tags:["Release notes","Moodle 3.8"],sidebar_position:1,moodleVersion:"3.8.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.8",permalink:"/moodledevdocs/general/releases/3.8"},next:{title:"Moodle 3.8.2",permalink:"/moodledevdocs/general/releases/3.8/3.8.2"}},d={},c=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:3},{value:"Translations",id:"translations",level:2}];function h(e){const r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:l,metadata:a}),"\n",(0,o.jsx)(r.p,{children:"Release date: 13 January 2020"}),"\n",(0,o.jsxs)(r.p,{children:["Here is ",(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.8.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 3.8.1"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67327",children:"MDL-67327"}),' - Switching "JavaScript Cache" on crashes first.js']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48024",children:"MDL-48024"})," - Plugins should be able to provide data generators for Behat"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-65956",children:"MDL-65956"})," - A teacher trying to remove a submission without having the relevant capability encounters an error"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67410",children:"MDL-67410"})," - Ajax call to enroll potential users is too slow"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-66581",children:"MDL-66581"})," - Password reset email doesn't fill in $a->link when auth_method is LDAP"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67392",children:"MDL-67392"}),' - Forum information about timed discussion doesn\'t handle correctly "displaystartdate" and "displayenddate" containing quotes']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67285",children:"MDL-67285"})," - Filepicker does not work in the modal forms - unable to click on input texts"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-66503",children:"MDL-66503"})," - Scorm player is really narrow in new window on classic theme"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-66871",children:"MDL-66871"})," - Moodle calendar is not able to import .ics files with repeated events anymore"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67042",children:"MDL-67042"})," - Block overview course filter displays hidden custom fields"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-65735",children:"MDL-65735"})," - Activity completion report - clicking initial should reset page number"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67152",children:"MDL-67152"})," - Current day not displayed by default when using the calendar day view"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67458",children:"MDL-67458"})," - Fatal error if cohort_role_sync task is run when an assigned role no longer exists"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67359",children:"MDL-67359"})," - Relocate the Notifications area in the grader interface"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67300",children:"MDL-67300"})," - Calendar: Inconsistent behaviour of managegroupentries capability"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67277",children:"MDL-67277"})," - Discussion list shows subjects in bold"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67154",children:"MDL-67154"})," - Quiz print version should not split questions over two pages"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-66708",children:"MDL-66708"})," - LTI 1.3 private key reset on each tool edit"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-64695",children:"MDL-64695"})," - tool_dataprivacy doesn't filter multilang tags within $SITE->fullname"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67233",children:"MDL-67233"})," - Choices with only open dates in the future do not appear on timeline"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67336",children:"MDL-67336"})," - Forum inline reply option is applying filters before saving content in the DB"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67596",children:"MDL-67596"})," - Cron / adhoc task runners ramp up slowly for no reason"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=395953",children:"MSA-20-0001"})," Stored XSS in message conversation overview"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.8.1",children:"Notes de mise \xe0 jour de Moodle 3.8.1"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_3.8.1",children:"Notas de Moodle 3.8.1"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);