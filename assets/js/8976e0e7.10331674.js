"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[47102],{39493:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var n=i(74848),l=i(28453),r=i(78924);const o={title:"Moodle 1.6.2",tags:["Release notes"],sidebar_position:2,moodleVersion:"1.6.2"},d=void 0,t={id:"releases/1.6/1.6.2",title:"Moodle 1.6.2",description:"Release date: 12th September 2006",source:"@site/general/releases/1.6/1.6.2.md",sourceDirName:"releases/1.6",slug:"/releases/1.6/1.6.2",permalink:"/moodledevdocs/general/releases/1.6/1.6.2",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.6/1.6.2.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:2,frontMatter:{title:"Moodle 1.6.2",tags:["Release notes"],sidebar_position:2,moodleVersion:"1.6.2"},sidebar:"releaseNotes",previous:{title:"Moodle 1.6.1",permalink:"/moodledevdocs/general/releases/1.6/1.6.1"},next:{title:"Moodle 1.6.3",permalink:"/moodledevdocs/general/releases/1.6/1.6.3"}},a={},c=[{value:"Security",id:"security",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Known Problems",id:"known-problems",level:2}];function u(e){const s={h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{frontMatter:o,metadata:t}),"\n",(0,n.jsx)(s.p,{children:"Release date: 12th September 2006"}),"\n",(0,n.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Fixed handling of uploaded files in Database module"}),"\n",(0,n.jsx)(s.li,{children:"Module instance id is now properly validated when creating course module object; developers should use get_coursemodule_from_id() to get valid $cm"}),"\n",(0,n.jsx)(s.li,{children:"Default error reporting level was lowered to 5, E_WARNINGs are no longer displayed on production sites with debug off."}),"\n",(0,n.jsx)(s.li,{children:"Multiple problems leading to information leakage fixed in help.php file"}),"\n",(0,n.jsx)(s.li,{children:"Fixed information leakage from scheduled backups"}),"\n",(0,n.jsx)(s.li,{children:"Added basic detection of dataroot accessible from Internet, web installer now better suggests dataroot location outside of web file area"}),"\n",(0,n.jsx)(s.li,{children:"Swf is now disabled by default in Mediaplugin"}),"\n",(0,n.jsx)(s.li,{children:"forgot_password.php does not allow remote email or username enumeration by default, the old behavior can be enabled by setting protectusernames to No in site configuration"}),"\n",(0,n.jsx)(s.li,{children:"Undisclosed SQL injections fixed by automatic data conversions in adodb layer"}),"\n",(0,n.jsx)(s.li,{children:"Theoretical XSS problems fixed in doc/index.php and files/index.php scripts"}),"\n",(0,n.jsx)(s.li,{children:"Access to tex and algebra files is blocked when filters are disabled"}),"\n",(0,n.jsx)(s.li,{children:"Request for redirection in jumpto.php protected with sesskey"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Fixed error when upgrading forum read tracking"}),"\n",(0,n.jsx)(s.li,{children:"Locales from language packs should finally work - please check your configuration variables and empty the locale field"}),"\n",(0,n.jsx)(s.li,{children:"Added missing link for course request"}),"\n",(0,n.jsx)(s.li,{children:"Fixed several glossary problems with non-ascii characters"}),"\n",(0,n.jsx)(s.li,{children:"Fixed bug where you could not regrade a quiz question where the teacher had added a comment with a ' character."}),"\n",(0,n.jsx)(s.li,{children:"Quiz import of BlackBoard V6 files now much more reliable"}),"\n",(0,n.jsx)(s.li,{children:"Fixed scheduled backups - they were broken in 1.6 and 1.6.1"}),"\n",(0,n.jsx)(s.li,{children:"Fixed missing guest icons from course listing"}),"\n",(0,n.jsx)(s.li,{children:"Database sessions respect sessiontimeout setting"}),"\n",(0,n.jsx)(s.li,{children:'Fixed redirect problems during upgrade resulting in "Table xxx already exists"'}),"\n",(0,n.jsx)(s.li,{children:'Lesson module: the "(Continue)" no longer displays for 3 seconds after branch tables.'}),"\n",(0,n.jsx)(s.li,{children:"Lesson module: now properly checks import formats for support."}),"\n",(0,n.jsx)(s.li,{children:"Lesson module: feedback is set properly during the import process."}),"\n",(0,n.jsx)(s.li,{children:"and many other smaller fixes"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"new-features",children:"New Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Authorize.net Payment Gateway: Auto configures credit card types if the merchant does not accept some types of credit cards"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"known-problems",children:"Known Problems"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Broken images in published question categories"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);