"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[64451],{70790:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=i(74848),r=i(28453),n=i(78924);const l={title:"Moodle 1.9.3",tags:["Release notes","Moodle 1.9"],sidebar_position:3,moodleVersion:"1.9.3"},t=void 0,d={id:"releases/1.9/1.9.3",title:"Moodle 1.9.3",description:"Release date: 15th October 2008",source:"@site/general/releases/1.9/1.9.3.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.3",permalink:"/moodledevdocs/general/releases/1.9/1.9.3",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.3.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/moodledevdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655446754e3,sidebarPosition:3,frontMatter:{title:"Moodle 1.9.3",tags:["Release notes","Moodle 1.9"],sidebar_position:3,moodleVersion:"1.9.3"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.2",permalink:"/moodledevdocs/general/releases/1.9/1.9.2"},next:{title:"Moodle 1.9.4",permalink:"/moodledevdocs/general/releases/1.9/1.9.4"}},a={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language pack",id:"new-language-pack",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:l,metadata:d}),"\n",(0,o.jsx)(s.p,{children:"Release date: 15th October 2008"}),"\n",(0,o.jsxs)(s.p,{children:["Here is ",(0,o.jsx)(s.a,{href:"http://tracker.moodle.org/secure/BrowseVersion.jspa?id=10011&versionId=10290&showOpenIssuesOnly=false",children:"the full list of fixed issues in 1.9.3"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Major ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/SCORM_module",children:"SCORM module"})," improvements","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Passes all SCORM 1.2 Conformance tests"}),"\n",(0,o.jsx)(s.li,{children:"Improved Visualisation of SCORM objects"}),"\n",(0,o.jsx)(s.li,{children:"New Debug tool"}),"\n",(0,o.jsx)(s.li,{children:"Improved handling of AICC objects"}),"\n",(0,o.jsx)(s.li,{children:"Better cross-platform compatible JavaScript"}),"\n",(0,o.jsx)(s.li,{children:"Improved the interaction of SCO completion and Gradebook interaction"}),"\n",(0,o.jsx)(s.li,{children:"TOC fixes - structure, expand/collapse, and prerequisites"}),"\n",(0,o.jsx)(s.li,{children:"Corrected element behaviour for cmi.objectives, cmi.comments_from_learner, cmi.interactions,  cmi.launch_data"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["New capabilities: ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/role/safeoverride",children:["moodle/role",":safeoverride"]}),", ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/course/changefullname",children:["moodle/course",":changefullname"]}),", ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/course/changeidnumber",children:["moodle/course",":changeidnumber"]})," and ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/course/changeshortname",children:["moodle/course",":changeshortname"]})]}),"\n",(0,o.jsxs)(s.li,{children:["New option in ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/HTML_settings",children:"HTML settings"})," to allow HTML tags in activity and resource names"]}),"\n",(0,o.jsx)(s.li,{children:"Improved detection of misconfigured dataroot directory"}),"\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Manage_authentication",children:"Manage authentication"})," setting for relaxing email domain restrictions when changing email"]}),"\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.a,{href:"/docs/4.4/apis/plugintypes/enrol",children:"Enrolments"})," setting for disabling the email welcome message which users receive when they self-enrol in a course"]}),"\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Internal_enrolment",children:"Internal enrolment"})," setting for disabling the ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Enrolment_key",children:"enrolment key"})," hint"]}),"\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Gradebook_report_settings",children:"Gradebook report setting"})," to show/hide percentages in the ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/User_report",children:"user report"})]}),"\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Statistics",children:"statistics setting"})," for specifying the maximum number of days processed in each stats execution"]}),"\n",(0,o.jsxs)(s.li,{children:["Checkbox ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/User_profile_fields",children:"user profile field"})]}),"\n",(0,o.jsxs)(s.li,{children:["Indication for administrators when a site is in ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Maintenance_mode",children:"Maintenance mode"})]}),"\n",(0,o.jsxs)(s.li,{children:["Fix for major ",(0,o.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/group",children:"groups"})," upgrade problem"]}),"\n",(0,o.jsx)(s.li,{children:"Fix for Firefox password manager problem"}),"\n",(0,o.jsx)(s.li,{children:"Fixes for course category edit and add capabilities problems"}),"\n",(0,o.jsxs)(s.li,{children:["Multiple choice questions in quizzes. Following feedback, we have reversed the change in Moodle 1.9 that showed students feedback to all option, not just the ones they had selected. (",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-14643",children:"MDL-14643"}),")"]}),"\n",(0,o.jsx)(s.li,{children:"The regression in 1.9.2 that broke images in quiz questions has been fixed."}),"\n",(0,o.jsxs)(s.li,{children:["Starting in October 2008, authorize.net codes need true 10cc integers. (",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-16715",children:"MDL-16715"}),")"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108587",children:"MSA-08-0019"}),": customised PhpMyAdmin package upgraded to 2.11.9.2"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108588",children:"MSA-08-0020"}),": quiz/questions capabilities lack some risk flags in access.php files"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108589",children:"MSA-08-0021"}),": design deficiency combined with incorrect use of format_string() allowing XSS"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108590",children:"MSA-08-0022"}),": XSS through Wiki page titles"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108591",children:"MSA-08-0023"}),": CSRF in messaging setting"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108592",children:"MSA-08-0024"}),": Overriding of frozen values in Moodle forms"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108593",children:"MSA-08-0025"}),": SQL injection in tags code"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=108594",children:"MSA-08-0026"}),": customised HTML Purifier upgraded to 2.1.5"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"new-language-pack",children:"New language pack"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Bangla - Razib Mustafiz"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["(See ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Translation_credits",children:"Translation credits"})," for additional details.)"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.3",children:"French version of this page"})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);