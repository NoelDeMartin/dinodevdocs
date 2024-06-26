"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[59517],{98177:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var r=o(74848),i=o(28453),n=o(78924);const d={title:"Moodle 1.8.11",tags:["Release notes","Moodle 1.8"],sidebar_position:11,moodleVersion:"1.8.11"},l=void 0,t={id:"releases/1.8/1.8.11",title:"Moodle 1.8.11",description:"Release date: 25th November 2009",source:"@site/general/releases/1.8/1.8.11.md",sourceDirName:"releases/1.8",slug:"/releases/1.8/1.8.11",permalink:"/moodledevdocs/general/releases/1.8/1.8.11",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.8/1.8.11.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 1.8",permalink:"/moodledevdocs/general/tags/moodle-1-8"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:11,frontMatter:{title:"Moodle 1.8.11",tags:["Release notes","Moodle 1.8"],sidebar_position:11,moodleVersion:"1.8.11"},sidebar:"releaseNotes",previous:{title:"Moodle 1.8.10",permalink:"/moodledevdocs/general/releases/1.8/1.8.10"},next:{title:"Moodle 1.8.12",permalink:"/moodledevdocs/general/releases/1.8/1.8.12"}},a={},c=[{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}];function h(e){const s={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{frontMatter:d,metadata:t}),"\n",(0,r.jsx)(s.p,{children:"Release date: 25th November 2009"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Important"}),":  Upgrading is very highly recommended!"]}),"\n",(0,r.jsxs)(s.p,{children:["Here is ",(0,r.jsx)(s.a,{href:"http://tracker.moodle.org/browse/MDL/fixforversion/10383",children:"the full list of fixed issues in 1.8.11"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"functional-changes",children:"Functional changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"After upgrading, admins will be asked to change their passwords next time they log in (manual or email based self-registration accounts only)."}),"\n",(0,r.jsxs)(s.li,{children:["To reduce the risk of password theft, a ",(0,r.jsx)(s.a,{href:"https://docs.moodle.org/en/Password_salting",children:"password salt"})," is set in ",(0,r.jsx)(s.em,{children:"config.php"})," in new installs and for upgrades, admins are sent an email recommending that they do so."]}),"\n",(0,r.jsxs)(s.li,{children:["Teachers lose permission to include ANY user data in a course backup or restore a course including user data due to new capabilities  ",(0,r.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo",children:["moodle/backup",":userinfo"]})," and ",(0,r.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo",children:["moodle/restore",":userinfo"]})," which are not set for the default role of teacher.  Sites with custom roles should check permissions carefully."]}),"\n",(0,r.jsx)(s.li,{children:'Hashed user passwords are no longer saved in backup files containing user data. If a backup is restored to a new site, users will be asked to go through the "forgot my password" routine the first time they log in.'}),"\n",(0,r.jsxs)(s.li,{children:["In Moodle 1.8.11+ weekly from 23/12/09 onwards: Moodle will no longer serve any uploaded Flash files to browsers with old Flash plugins. Admins can set the minimum required Flash player version in ",(0,r.jsx)(s.em,{children:"Site Administration > Security > HTTP Security"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139100",children:"MSA-09-0022"})," - Multiple CSRF problems fixed"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139102",children:"MSA-09-0023"})," - Fixed user account disclosure in ",(0,r.jsx)(s.a,{href:"https://docs.moodle.org/en/LAMS_module",children:"LAMS module"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139103",children:"MSA-09-0024"})," - Fixed insufficient access control in ",(0,r.jsx)(s.a,{href:"https://docs.moodle.org/en/Glossary_module",children:"Glossary module"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139105",children:"MSA-09-0025"})," - Unneeded MD5 hashes removed from user table"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139106",children:"MSA-09-0026"})," - Fixed invalid application access control in MNET interface"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139107",children:"MSA-09-0027"})," - Ensured login information is always sent secured when using SSL for logins"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139110",children:"MSA-09-0028"})," - Passwords and secrets are no longer ever saved in backups, new backup capabilities ",(0,r.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo",children:["moodle/backup",":userinfo"]})," and ",(0,r.jsxs)(s.a,{href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo",children:["moodle/restore",":userinfo"]})," for controlling who can backup/restore user data"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139111",children:"MSA-09-0029"})," - Enabling a ",(0,r.jsx)(s.a,{href:"https://docs.moodle.org/en/Password_salting",children:"password salt"})," in encouraged in ",(0,r.jsx)(s.em,{children:"config.php"})," and admins are forced to change password after the upgrade"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139120",children:"MSA-09-0031"})," - Fixed SQL injection in ",(0,r.jsx)(s.a,{href:"https://docs.moodle.org/en/SCORM_module",children:"SCORM module"})]}),"\n",(0,r.jsxs)(s.li,{children:["In Moodle 1.8.11+ weekly from 23/12/09 onwards: ",(0,r.jsx)(s.a,{href:"http://moodle.org/mod/forum/discuss.php?d=139119",children:"MSA-09-0030"})," - New detection of insecure Flash player plugins, Moodle won't serve Flash to insecure plugins"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.8.11",children:"Notes de mise \xe0 jour de Moodle 1.8.11"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_1.8.11",children:"Notas de Moodle 1.8.11"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.moodle.org/de/Moodle_1.8.11_Versionsinformationen",children:"Moodle 1.8.11 Versionsinformationen"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);