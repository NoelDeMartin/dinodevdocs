"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[60851],{24074:(e,r,s)=>{s.d(r,{Ke:()=>d});s(96540);var o=s(72511),i=s(81090),n=s(74848);function t(e,r){const s=(0,o.kF)(e);return s&&void 0!==s[r]?(0,n.jsx)(n.Fragment,{children:s[r]}):(0,n.jsx)(n.Fragment,{children:"not yet released"})}function l(e){let{releaseName:r}=e;return t(r,"releaseDate")}function d(e){let{releaseName:r}=e;const s=r.endsWith(".0")?r.slice(0,-2):r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Release date:"," ",(0,n.jsx)(l,{releaseName:r}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("p",{children:["Here is"," ",(0,n.jsxs)(i.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${s}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",r]}),"."]})]})}},22333:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var o=s(74848),i=s(28453),n=s(78924),t=s(24074);const l={title:"Moodle 4.0.2",tags:["DevDocs Migration","Release notes","Moodle 4.0"],sidebar_position:2,moodleVersion:"4.0.2",description:"The release notes for Moodle 4.0.2."},d=void 0,a={id:"releases/4.0/4.0.2",title:"Moodle 4.0.2",description:"The release notes for Moodle 4.0.2.",source:"@site/general/releases/4.0/4.0.2.md",sourceDirName:"releases/4.0",slug:"/releases/4.0/4.0.2",permalink:"/moodledevdocs/general/releases/4.0/4.0.2",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/4.0/4.0.2.md",tags:[{label:"DevDocs Migration",permalink:"/moodledevdocs/general/tags/dev-docs-migration"},{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 4.0",permalink:"/moodledevdocs/general/tags/moodle-4-0"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1658139839e3,sidebarPosition:2,frontMatter:{title:"Moodle 4.0.2",tags:["DevDocs Migration","Release notes","Moodle 4.0"],sidebar_position:2,moodleVersion:"4.0.2",description:"The release notes for Moodle 4.0.2."},sidebar:"releaseNotes",previous:{title:"Moodle 4.0.1",permalink:"/moodledevdocs/general/releases/4.0/4.0.1"},next:{title:"Moodle 4.0.3",permalink:"/moodledevdocs/general/releases/4.0/4.0.3"}},c={},h=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}];function m(e){const r={a:"a",h2:"h2",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:l,metadata:a}),"\n","\n",(0,o.jsx)(t.Ke,{releaseName:l.moodleVersion}),"\n",(0,o.jsx)(r.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-68867",children:"MDL-68867"})," - Group override does not appear on user calendar"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74632",children:"MDL-74632"})," - Cannot link to image in Atto"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74752",children:"MDL-74752"})," - Question versioning: regrading does not work for all question types (including multiple choice)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-69400",children:"MDL-69400"})," - Moodle Core Forum Due Dates not restoring on backup and restore"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-67966",children:"MDL-67966"})," - Error writing to database when adding example submission to Workshop"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74449",children:"MDL-74449"})," - Error in gradebook with PHP 8.0"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74764",children:"MDL-74764"})," - Activity is not in alphabetical order when the name is lowercase"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-69756",children:"MDL-69756"})," - Nextcloud error when moving/copying access controlled link file over existing file having the same name"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-72324",children:"MDL-72324"})," - Plugin incompatible check is backwards in upgradelib"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74718",children:"MDL-74718"})," - All files from Nextcloud instance are not shown in Moodle"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74533",children:"MDL-74533"})," - Activity completion calculating with old passing grade requirement when that completion condition is modified"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74906",children:"MDL-74906"})," - Adding multiple LTI activities via content selection is failing silently when global search is enabled"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74790",children:"MDL-74790"})," - Description for File resource not displayed if it only contains an image"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-73898",children:"MDL-73898"})," - Site participants listing page shows the guest user account"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-72555",children:"MDL-72555"}),' - All activities are being created in frontpage when "Main menu" block is added to the frontpage']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74597",children:"MDL-74597"})," - Incorrect URLs in the user menu for messages and calendar"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74929",children:"MDL-74929"})," - Assignment overrides page gets hidden by the footer"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74715",children:"MDL-74715"})," - Report builder UI not always responding"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74358",children:"MDL-74358"})," - Error in availability code when importing activity from old course using PHP 8.0"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74516",children:"MDL-74516"})," - Create a quiz with passing grade completion causing error"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74577",children:"MDL-74577"})," - login_failed_count_since_success isn't counted correctly"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74886",children:"MDL-74886"})," - Cast both value and units to int for configduration write_setting"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74605",children:"MDL-74605"})," - Videojs lost the feature of adjusting playback rate in 4.0"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-73225",children:"MDL-73225"})," - Exception when BigBlueButton server does not respond"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74505",children:"MDL-74505"})," - Cannot edit questions in question bank if you do not have the 'question/move' capability"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74710",children:"MDL-74710"})," - BigBlueButton setting link is broken on manage activities page"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"accessibility-improvements",children:"Accessibility improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74742",children:"MDL-74742"})," - Fix colour contrast issues on the course homepage"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74812",children:"MDL-74812"})," - Accessibility issues found on assignment with rubrics"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74802",children:"MDL-74802"})," - Notification close button does not have meaningful label"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74701",children:"MDL-74701"})," - Notification popover elements are focusable even when hidden"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74813",children:"MDL-74813"})," - Filepicker drag and drop gif animation lasts for more than 5 secs"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74815",children:"MDL-74815"})," - Colour contrast issues on the site homepage"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-75055",children:"MDL-75055"})," - Notification alert close button is misaligned"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-72885",children:"MDL-72885"})," - Languages in language selection menu are missing lang attribute"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74741",children:"MDL-74741"})," - Accessibility issues regarding the move block modal"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"for-developers",children:"For developers"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-75084",children:"MDL-75084"})," - Add behat generators for blog entries"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74613",children:"MDL-74613"})," - Add behat generators for grades grade"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74674",children:"MDL-74674"})," - Add behat generator to create notification"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74864",children:"MDL-74864"})," - Allow specifying forum discussion group in behat generators"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74816",children:"MDL-74816"})," - Allow specifying default file's name in mod_resource generator"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-74548",children:"MDL-74548"})," - Course copy controllers can be instantiated in an invalid state"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-69939",children:"MDL-69939"})," - Remove use of 'true' and 'false' strings in db/services.php"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436456",children:"MSA-22-0015"})," - PostScript Code Injection / Remote code execution risk"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436457",children:"MSA-22-0016"})," - Arbitrary file read when importing lesson questions"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436458",children:"MSA-22-0017"})," - Stored XSS and blind SSRF possible via SCORM track details"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436459",children:"MSA-22-0018"})," - Open redirect risk in mobile auto-login feature"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436460",children:"MSA-22-0019"})," - LTI module reflected XSS risk - affecting unauthenticated users only"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://moodle.org/mod/forum/discuss.php?d=436461",children:"MSA-22-0020"})," - Upgrade moodle-mlbackend-python and update its reference in /lib/mlbackend/python/classes/processor.php (upstream)"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.moodle.org/4x/fr/Notes_de_version_de_Moodle_4.0.2",children:"Notes de version de Moodle 4.0.2"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);