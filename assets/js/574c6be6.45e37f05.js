"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[21345],{20907:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=r(74848),i=r(28453),t=r(78924);const l={title:"Moodle 1.9.4",tags:["Release notes","Moodle 1.9"],sidebar_position:4,moodleVersion:"1.9.4"},n=void 0,a={id:"releases/1.9/1.9.4",title:"Moodle 1.9.4",description:"Release date: 28th January 2009",source:"@site/general/releases/1.9/1.9.4.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.4",permalink:"/moodledevdocs/general/releases/1.9/1.9.4",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.4.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/moodledevdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:4,frontMatter:{title:"Moodle 1.9.4",tags:["Release notes","Moodle 1.9"],sidebar_position:4,moodleVersion:"1.9.4"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.3",permalink:"/moodledevdocs/general/releases/1.9/1.9.3"},next:{title:"Moodle 1.9.5",permalink:"/moodledevdocs/general/releases/1.9/1.9.5"}},d={},c=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language strings file",id:"new-language-strings-file",level:2},{value:"New language pack",id:"new-language-pack",level:2},{value:"Known problems and regressions",id:"known-problems-and-regressions",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{frontMatter:l,metadata:a}),"\n",(0,o.jsx)(s.p,{children:"Release date: 28th January 2009"}),"\n",(0,o.jsxs)(s.p,{children:["Here is ",(0,o.jsx)(s.a,{href:"http://tracker.moodle.org/secure/IssueNavigator.jspa?reset=true&pid=10011&fixfor=10300&sorter/field=priority&sorter/order=DESC",children:"the full list of fixed issues in 1.9.4"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-17205",children:"MDL-17205"})," New options to allow Moodle to be configured to comply with European and US privacy regulations, like FERPA.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-17472",children:"MDL-17472"})," New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Site_policies",children:"Site policies"})," setting for disabling ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Notes",children:"Notes"})," completely"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-17472",children:"MDL-17472"})," New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Internal_enrolment",children:"Internal enrolment"})," settings for enforcing ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Enrolment_key",children:"enrolment key"})," usage and complexity"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-17222",children:"MDL-17222"})," New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Security_overview",children:"Security overview"})," report"]}),"\n",(0,o.jsx)(s.li,{children:"Separate capabilities for each report and other parts with sensitive information"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://tracker.moodle.org/secure/IssueNavigator.jspa?reset=true&pid=10011&query=categor*+-question&summary=true&description=true&resolution=1&fixfor=10300&assigneeSelect=specificuser&assignee=timhunt",children:"Fix multiple bugs"})," relating to creating and editing course categories. Previously, giving admin permissions in a category and its subcategories did not work reliably. In the process, the separate create, update and delete category capabilities were replaced with ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/category/manage",children:["moodle/category",":manage"]}),", and moodle/category",":visibility"," was renamed to ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/category/viewhiddencategories",children:["moodle/category",":viewhiddencategories"]}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-8648",children:"MDL-8648"})," Essay questions can now be randomised by random questions. This must be enabled under ",(0,o.jsx)(s.em,{children:"Administration > Miscellaneous > Experimental"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-14926",children:"MDL-14926"})," A new capability ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/mod/quiz/reviewmyattempts",children:["mod/quiz",":reviewmyattempts"]}),", separate from ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/mod/quiz/attempt",children:["mod/quiz",":attempt"]}),". This let's you create a read-only role that lets students see what they have done on a course in the past, without being able to change anything any more."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-16651",children:"MDL-16651"})," A new capability ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/mod/scorm/deleteresponses",children:["mod/scorm",":deleteresponses"]})," allowing deletion of SCORM attempts"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-6160",children:"MDL-6160"})," Email notification of ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Course_request",children:"course requests"}),", and a new capability ",(0,o.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/course/request",children:["moodle/course",":request"]})," to control who can request courses."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-17364",children:"MDL-17364"})," New ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Forum_settings",children:"Forum setting"})," for enabling ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Forum_ratings",children:"AJAX forum ratings"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-10021",children:"MDL-10021"}),' New option, "Yes, without frame", for the ',(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/File_or_website_link",children:"file resource"}),' "Keep page navigation visible on the same page" setting. This option displays a resource in a XHTML strict page. Other options have been kept.']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-16999",children:"MDL-16999"})," Some ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Adding/editing_a_database",children:"database module settings"})," have been fixed ('Required Entries' and ' Required Entries before viewing). If the fix has an impact on your Moodle installation, you will be warned during upgrade."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115523",children:"MSA-09-0001"})," No way easy to remove pictures of deleted users"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115524",children:"MSA-09-0002"})," User pix disclosure"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115525",children:"MSA-09-0003"})," Vulnerability in Snoopy 1.2.3"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115526",children:"MSA-09-0004"}),' XSS vulnerabilities in HTML blocks if "Login as" used']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115527",children:"MSA-09-0005"})," Moodle 'spell-check-logic.cgi' Insecure Temporary File Creation Vulnerability"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115528",children:"MSA-09-0006"})," Calendar export may allow brute force attacks"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115529",children:"MSA-09-0007"})," Missing input validation in logs allows potential XSS attacks"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=115532",children:"MSA-09-0008"})," CSRF vulnerability in forum code"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"new-language-strings-file",children:"New language strings file"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"report_security.php"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"new-language-pack",children:"New language pack"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Kazakh - \u041a\u0430\u043b\u0438\u043c\u0430 \u0422\u0443\u0435\u043d\u0431\u0430\u0435\u0432\u0430"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["(See ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/en/Translation_credits",children:"Translation credits"})," for additional details.)"]}),"\n",(0,o.jsx)(s.h2,{id:"known-problems-and-regressions",children:"Known problems and regressions"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["New ",(0,o.jsx)(s.em,{children:"Security overview report"})," on large sites extremely slow and overloading database server ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-18040",children:"MDL-18040"})," - update to latest weekly or copy /admin/report/security/* files from latest weekly"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.4",children:"French version of this page"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);