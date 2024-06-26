"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[11014],{15442:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=s(74848),t=s(28453),n=s(78924);const i={title:"Moodle 3.1",tags:["Release notes","Moodle 3.1"],sidebar_position:-301,moodleVersion:"3.1"},l=void 0,d={id:"releases/3.1",title:"Moodle 3.1",description:"Release date: 23 May 2016",source:"@site/general/releases/3.1.md",sourceDirName:"releases",slug:"/releases/3.1",permalink:"/moodledevdocs/general/releases/3.1",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.1.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 3.1",permalink:"/moodledevdocs/general/tags/moodle-3-1"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1712757252e3,sidebarPosition:-301,frontMatter:{title:"Moodle 3.1",tags:["Release notes","Moodle 3.1"],sidebar_position:-301,moodleVersion:"3.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.2.9",permalink:"/moodledevdocs/general/releases/3.2/3.2.9"},next:{title:"Moodle 3.1.1",permalink:"/moodledevdocs/general/releases/3.1/3.1.1"}},a={},h=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Forum",id:"forum",level:3},{value:"Assignment",id:"assignment",level:3},{value:"External tool (LTI)",id:"external-tool-lti",level:3},{value:"Feedback",id:"feedback",level:3},{value:"SCORM",id:"scorm",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Workshop",id:"workshop",level:3},{value:"Other activity modules",id:"other-activity-modules",level:3},{value:"Gradebook",id:"gradebook",level:3},{value:"Performance",id:"performance",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Usability",id:"usability",level:3},{value:"Other improvements",id:"other-improvements",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Significant new areas",id:"significant-new-areas",level:3},{value:"Smaller new things",id:"smaller-new-things",level:3},{value:"Smaller changes in core APIs",id:"smaller-changes-in-core-apis",level:3},{value:"Themeability improvements",id:"themeability-improvements",level:3},{value:"Changes related to particular plugins",id:"changes-related-to-particular-plugins",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Translations",id:"translations",level:2}];function c(e){const r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:i,metadata:d}),"\n",(0,o.jsx)(r.p,{children:"Release date: 23 May 2016"}),"\n",(0,o.jsxs)(r.p,{children:["Here is ",(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 3.1"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["See our ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/New_features",children:"New Features page"})," for a more user-friendly introduction to Moodle 3.1 with screenshots."]}),"\n",(0,o.jsxs)(r.p,{children:["If you are upgrading from previous version, make sure you read the ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Upgrading",children:"Upgrading"})," documentation."]}),"\n",(0,o.jsx)(r.h2,{id:"server-requirements",children:"Server requirements"}),"\n",(0,o.jsx)(r.p,{children:"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Moodle upgrade:  Moodle 2.7 or later (if upgrading from earlier versions, you must upgrade to 2.7.14 as a first step)"}),"\n",(0,o.jsxs)(r.li,{children:["PHP version: minimum PHP 5.4.4 (always use latest PHP 5.4.x , 5.5.x or 5.6.x on Windows - ",(0,o.jsx)(r.a,{href:"http://windows.php.net/download/",children:"http://windows.php.net/download/"}),"). PHP 7.0.x is supported but has some ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Moodle_and_PHP7#Can_I_use_PHP7_yet.3F",children:"engine limitations"}),". PHP 7.1.x is not supported."]}),"\n",(0,o.jsx)(r.li,{children:"Ghostscript should be installed for pdf annotation."}),"\n",(0,o.jsx)(r.li,{children:"Unoconv should be installed for file conversion used by pdf annotations (new in Moodle 3.1)"}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"New requirement for Moodle 3.1 comparing to 3.0"}),": PHP extension ",(0,o.jsx)("tt",{children:"xmlreader"})]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"database-requirements",children:"Database requirements"}),"\n",(0,o.jsx)(r.p,{children:"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Database"}),(0,o.jsx)(r.th,{children:"Minimum version"}),(0,o.jsx)(r.th,{children:"Recommended"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.postgresql.org/",children:"PostgreSQL"})}),(0,o.jsx)(r.td,{children:"9.1"}),(0,o.jsx)(r.td,{children:"Latest"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.mysql.com/",children:"MySQL"})}),(0,o.jsx)(r.td,{children:"5.5.31"}),(0,o.jsx)(r.td,{children:"Latest"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"https://mariadb.org/",children:"MariaDB"})}),(0,o.jsx)(r.td,{children:"5.5.31"}),(0,o.jsx)(r.td,{children:"Latest"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/",children:"Microsoft SQL Server"})}),(0,o.jsx)(r.td,{children:"2008"}),(0,o.jsx)(r.td,{children:"Latest"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.oracle.com/us/products/database/overview/index.html",children:"Oracle Database"})}),(0,o.jsx)(r.td,{children:"10.2"}),(0,o.jsx)(r.td,{children:"Latest"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"client-requirements",children:"Client requirements"}),"\n",(0,o.jsx)(r.h3,{id:"browser-support",children:"Browser support"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Browser"}),(0,o.jsx)(r.th,{children:"Minimum version"}),(0,o.jsx)(r.th,{children:"Recommended version"}),(0,o.jsx)(r.th,{children:"Notes"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"https://www.google.com/intl/en_au/chrome/browser/",children:"Google Chrome"})}),(0,o.jsx)(r.td,{children:"30.0"}),(0,o.jsx)(r.td,{children:"Latest"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.mozilla.org/en-US/",children:"Mozilla Firefox"})}),(0,o.jsx)(r.td,{children:"25.0"}),(0,o.jsx)(r.td,{children:"Latest"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://www.apple.com/safari/",children:"Apple Safari"})}),(0,o.jsx)(r.td,{children:"6"}),(0,o.jsx)(r.td,{children:"Latest"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:(0,o.jsx)(r.a,{href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie",children:"Microsoft Internet Explorer"})}),(0,o.jsx)(r.td,{children:"9"}),(0,o.jsx)(r.td,{children:"Latest"}),(0,o.jsx)(r.td,{children:"Version 10 is required for drag-and-drop upload of content from outside the browser into Moodle"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"major-features",children:"Major features"}),"\n",(0,o.jsx)(r.h3,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53451",children:"MDL-53451"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Competencies",children:"Competencies"})," support in Moodle"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52954",children:"MDL-52954"})," - Improvements to the ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Assignment_activity",children:"Assignment"})," grading user interface"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-31989",children:"MDL-31989"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Global_search",children:"Global Search"})," API allows to search forums, wikis and other content throughout the whole site. ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Global_search",children:"Installation and setup"})," of SOLR server is required,"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52002",children:"MDL-52002"})," - Significant performance improvements in gradebook calculations"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48012",children:"MDL-48012"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Recycle_bin",children:"Recycle bin"}),' plugin is now part of standard Moodle distribution: allow instructors to "undo" deletions of course modules and courses. ',(0,o.jsx)(r.a,{href:"https://moodleassociation.org/",children:"Moodle Users Association"})," project"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-49279",children:"MDL-49279"}),' - Add support in moodle plugins for exporting "',(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Moodle_Mobile_Remote_add-ons",children:"Mobile app addons"}),'"']}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"forum",children:"Forum"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-372",children:"MDL-372"})," - Allow to ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Using_Forum#Pinned_posts",children:'"pin" discussions'})," to keep them always on the top of the list"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-34160",children:"MDL-34160"})," - Allow forum email subject to be customised"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-47365",children:"MDL-47365"})," - Add  ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Using_Forum#Permalinks",children:"permalink"})," option to forum posts"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51214",children:"MDL-51214"})," - Rename the News forum to ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Announcements",children:'"Announcements"'})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-44087",children:"MDL-44087"})," - Forum does not observe message notification settings for digest emails"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53050",children:"MDL-53050"})," - Highlight the selected forum post when deep linking with a #anchor"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"assignment",children:"Assignment"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52397",children:"MDL-52397"})," - Feedback for Assignments is not sent if the assignment grade timemodified setting was set to two days ago"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52596",children:"MDL-52596"})," - Add a 'maxperpage' site wide setting for grading table size (to mitigate broken grading pages in large courses)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52269",children:"MDL-52269"}),' - Not obvious to tell if an assignment is in blind marking if user holds the "mod/assign',":viewblinddetails",'" capabilty']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52270",children:"MDL-52270"})," - Difficult to cross reference users with their blind identities"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-44598",children:"MDL-44598"})," - List student names on 'grant extension' screen"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52490",children:"MDL-52490"})," - Download selected assign submissions as a zip file"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52290",children:"MDL-52290"})," - EditPDF - Also show the total page number in the pagination"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52489",children:"MDL-52489"}),' - "Download all submissions as a zip" should maintain the folder structure in students submissions']}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"external-tool-lti",children:"External tool (LTI)"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52154",children:"MDL-52154"})," - Rework LTI admin screens"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-45064",children:"MDL-45064"})," - Option to add preconfigured ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/External_tool_settings",children:"external tool"})," to the activity chooser"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52035",children:"MDL-52035"})," - Integrate LTI Provider support in Moodle as the ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Publish_as_LTI_tool",children:"Publish as LTI tool"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52821",children:"MDL-52821"})," - Compliance: Send tool_consumer_instance_description in LTI launch request"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"feedback",children:"Feedback"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53738",children:"MDL-53738"})," - Feedback activity module will be enabled by default in new 3.1 installations. If you are upgrading to 3.1 we recommend you to enable it manually."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52094",children:"MDL-52094"})," - Various improvements to UI and bug fixes, including:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:'Performance improvement to download responses as raw data in multiple formats (CSV, Excel, etc.) - now available on "Show responses" page instead of "Analysis"'}),"\n",(0,o.jsx)(r.li,{children:"Allow any characters in labels, do not display empty labels"}),"\n",(0,o.jsx)(r.li,{children:"Do not display empty pages"}),"\n",(0,o.jsx)(r.li,{children:"Map frontpage feedback to multiple courses without leaving the form"}),"\n",(0,o.jsx)(r.li,{children:"Improved display of automatic question numbers"}),"\n",(0,o.jsx)(r.li,{children:'Disable "Response time" for anonymous feedbacks'}),"\n",(0,o.jsx)(r.li,{children:"Use moodleforms to display feedback"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"scorm",children:"SCORM"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-45712",children:"MDL-45712"})," - Add Result field to the SCORM Interactions Report"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48680",children:"MDL-48680"})," - Add score and status submission events to SCORM activity"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-42473",children:"MDL-42473"})," - Add group support to SCORM activity"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"quiz",children:"Quiz"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52738",children:"MDL-52738"})," - Quiz attempt/review page should have a previous button to match next"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-46092",children:"MDL-46092"})," - Add the OU styling of the Quiz navigation into Moodle core as the default"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-46091",children:"MDL-46091"})," - Rationalise confirmations when you start a quiz"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52806",children:"MDL-52806"})," - Show right answers when manually grading automatically marked questions"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53304",children:"MDL-53304"})," - Immediate feedback behaviours should not show a disabled check button when you can't use it"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"workshop",children:"Workshop"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-42190",children:"MDL-42190"})," - Option to ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Using_Workshop",children:"delete a workshop submission"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50794",children:"MDL-50794"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Workshop_settings",children:"Restricting file types as attachments"})," to a workshop"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"other-activity-modules",children:"Other activity modules"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51306",children:"MDL-51306"})," - Folder: ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Folder_resource",children:"Bulk download all files within a folder activity as ZIP file"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52414",children:"MDL-52414"})," - Lesson: Allow Default Settings for ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Lesson_settings",children:"Lesson Module Settings"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51267",children:"MDL-51267"})," - URL/File: Make setting up a ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/URL_resource_settings#General",children:"URL"}),"/",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/File_resource_settings#Uploading_files",children:"File"})," resource more obvious"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"gradebook",children:"Gradebook"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48634",children:"MDL-48634"})," - Option to rescale existing grades when changing max points"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52522",children:"MDL-52522"})," - grade_minmaxtouse should be respected for overridden categories"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51900",children:"MDL-51900"})," - Tab Down Grade Column in Single View of Gradebook"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52309",children:"MDL-52309"})," - Make Grade History report require user to submit parameters before the report starts running"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"performance",children:"Performance"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51374",children:"MDL-51374"})," - Do not purge entire databasemeta cache when there are structure changes (esp temp tables)."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51603",children:"MDL-51603"})," - Refactor downloading of csv, ods, excel etc files in reports and exports across moodle to stream progressively"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-34925",children:"MDL-34925"})," - Improve bulk user export performance"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50385",children:"MDL-50385"})," - Performance improvement to the grade history report"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"tagging",children:"Tagging"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50851",children:"MDL-50851"})," - Introduce tag collections - ability to separate independent tag areas"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52252",children:"MDL-52252"})," - Add tags to modules (Resources and Activities)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-25742",children:"MDL-25742"})," - Allow to search wiki pages by tags"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51283",children:"MDL-51283"}),' - Rename "official" tags to "standard", allow admin to set for each tag area how to use standard tags']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-16855",children:"MDL-16855"}),' - Add tag filtering to "Manage tags" page']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52707",children:"MDL-52707"})," - Allow tags to be combined"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"usability",children:"Usability"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-27628",children:"MDL-27628"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/Course_meta_link",children:"Enrol meta:"})," Possible to add multiple courses without leaving the form"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51818",children:"MDL-51818"})," - Move the profile 'Message' button to be next to the user picture"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52258",children:"MDL-52258"})," - Calendar now shows duration in calendar block"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53043",children:"MDL-53043"})," - Move user search box above the students list in the manual enrolments popup"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-35590",children:"MDL-35590"})," - Navigation block redesign to meet ARIA specification"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-49963",children:"MDL-49963"})," - Allow to message all participants when there are more than one page in participants list"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51354",children:"MDL-51354"})," - Help popup and improved name for events dropdown menu on the course and site logs pages"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53026",children:"MDL-53026"})," - Use inplace editable for editing cohort names"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51706",children:"MDL-51706"})," - Move plagiarism links to the top of the summary and full text outputs"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53382",children:"MDL-53382"}),' - "Show all" link on participants page should be moved beneath the page switcher']}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"other-improvements",children:"Other improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53057",children:"MDL-53057"})," - Add ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/31/en/File_system_repository#Using_a_File_System_repository_file",children:"search feature to the File system repository"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48506",children:"MDL-48506"})," - Improve memcached cache store so that it is multi-site safe"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50661",children:"MDL-50661"}),' - Restyle "Clean" theme to use Logo and Header in Frontpage with smaller logo option in other pages.']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-36652",children:"MDL-36652"})," - When downloading an Excel spreadsheet of student logs, have the course short name included in the file name."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53207",children:"MDL-53207"})," - Display stock avatar instead of own user picture from messages from fake users"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51698",children:"MDL-51698"})," - Markup the crumb trail so search engines understand it and leverage it"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53072",children:"MDL-53072"})," - Option to choose whether we include suspended users when auto-creating groups"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52869",children:"MDL-52869"})," - Convert inline activity name edit to use the inplace editable element"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"for-administrators",children:"For administrators"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-26935",children:"MDL-26935"})," - New capability to control role renaming"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-28030",children:"MDL-28030"})," - Add config.php settings to allow plugins to rewrite output moodle_urls (eg clean / semantic urls)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52752",children:"MDL-52752"})," - Administrators can specify an alternate URL to use for MathJax"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52219",children:"MDL-52219"})," - Completion tracking & availability should default to on for new installs"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52990",children:"MDL-52990"})," - Enable all emails to be themed, ie add 4 wrapper mustache templates"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53260",children:"MDL-53260"})," - Option to display CLI upgrade messages in English"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52386",children:"MDL-52386"})," - Allow to control field for flagging enabled/disabled users in LDAP authentication (useful for Active Directory)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52383",children:"MDL-52383"}),' - Calendar "Days to look ahead" should allow intervals up to 1 year']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-49934",children:"MDL-49934"})," - Admins or managers should be able to retrieve assignments info via get_assignments web service"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(r.p,{children:["There are no security issues included in this release, please refer to ",(0,o.jsx)(r.a,{href:"/moodledevdocs/general/releases/3.0/3.0.4",children:"Moodle 3.0.4 release notes"})]}),"\n",(0,o.jsx)(r.h2,{id:"for-developers",children:"For developers"}),"\n",(0,o.jsx)(r.h3,{id:"significant-new-areas",children:"Significant new areas"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-31989",children:"MDL-31989"})," - ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Search_API",children:"Global Search"})," API allows to index and search forums, wikis and other content throughout the whole site."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-49279",children:"MDL-49279"}),", ",(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50032",children:"MDL-50032"}),' - Add support in moodle plugins for exporting "',(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Moodle_Mobile_Remote_add-ons",children:"Mobile app addons"}),'"']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53451",children:"MDL-53451"})," - Competencies support in Moodle (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Competency_API",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50887",children:"MDL-50887"})," - Implement plugins infrastructure for antivirus and create ClamAV plugin (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/plugintypes/antivirus",children:"documentation"}),")."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51603",children:"MDL-51603"})," - New ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Data_formats",children:"Dataformat"})," plugin type for downloading data as csv, ods, excel etc (eg from table_sql export)"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50851",children:"MDL-50851"})," - Significant changes to Tags API, tag areas can now implement callbacks to display tagged items (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/subsystems/tag/",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-46891",children:"MDL-46891"})," - Upgrade to behat 3.x (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Acceptance_testing/Migrating_from_Behat_2.5_to_3.x_in_Moodle",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52954",children:"MDL-52954"})," - The mod_assign grading interface has been modified in multiple aspects, and the new page layout is quite different from many other Moodle pages. Check it carefully if you have a custom theme. There is some information available in the ",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Assignment_Grading_UX",children:"Assignment Grading UX"})," specs, particularly in section 2.0 of that document."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"smaller-new-things",children:"Smaller new things"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51802",children:"MDL-51802"})," - Reusable element for inplace editing (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/subsystems/output/inplace",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-30811",children:"MDL-30811"})," - Introduce notification stack to moodle sessions (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Notifications",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52237",children:"MDL-52237"})," - Add a callback to inject nodes in the user profile navigation (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/core/navigation/#user-profile",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51324",children:"MDL-51324"})," - New course chooser element for moodleforms (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#autocomplete",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53311",children:"MDL-53311"})," - Reusable element for displaying tree similar to navigation tree (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Tree",children:"documentation"}),")"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"smaller-changes-in-core-apis",children:"Smaller changes in core APIs"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52954",children:"MDL-52954"})," - file_storage class can now convert between office documents (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/subsystems/files#convert-between-file-formats-office-documents",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53274",children:"MDL-53274"})," - Throw exception (in developer mode) if page context is not set, otherwise it is easily missed in AJAX calls"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52826",children:"MDL-52826"}),", ",(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52715",children:"MDL-52715"})," - Allow to use moodleforms in AJAX requests (",(0,o.jsx)(r.a,{href:"https://docs.moodle.org/dev/Fragment",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51718",children:"MDL-51718"})," - Allow to specify scheme in moodle_url"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-51700",children:"MDL-51700"})," - Ajax service should clean the return values of the external functions"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53962",children:"MDL-53962"})," - ",(0,o.jsx)(r.strong,{children:"Changes to webservices XML-RPC API"})," - it is now ",(0,o.jsx)(r.strong,{children:"critical"})," to specify parameters for XML-RPC calls in the correct order. Previously Zend may have been able to work out the order, our new implementation, at this stage, cannot."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"themeability-improvements",children:"Themeability improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-50464",children:"MDL-50464"})," - New renderer for RSS Client Block allows themes to customise its look"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"changes-related-to-particular-plugins",children:"Changes related to particular plugins"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52013",children:"MDL-52013"})," - Allow mod_assign plugins to add calendar events"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48362",children:"MDL-48362"})," - Improve the enrol API to prevent logic in the UI (",(0,o.jsx)(r.a,{href:"/docs/4.4/apis/plugintypes/enrol#standard-editing-ui",children:"documentation"}),")"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52996",children:"MDL-52996"})," - Allow Atto customisation for special-purpose plugins"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52781",children:"MDL-52781"})," - Improved validation on user fields when creating users from external datasources"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-53304",children:"MDL-53304"})," - Changes to interactive question behaviour may cause the unit tests for your question type to break if you have followed the common patter. You will need to make changes like ",(0,o.jsx)(r.a,{href:"https://github.com/moodle/moodle/commit/81e47a35e8bb98a94ea88e45eee63dcda1b46f74#diff-d16a78021131604bb14ae59ebe6eeebbL235",children:"this"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,o.jsx)(r.p,{children:"For full list of deprecations refer to lib/upgrade.txt and upgrade.txt files in the folder where the particular plugin is located. Here are the most major deprecations:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-49414",children:"MDL-49414"})," - Remove deprecated web services"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-48621",children:"MDL-48621"})," - Deprecate the old events system"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52207",children:"MDL-52207"})," - Delete Zend framework"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.1",children:"Notes de mise \xe0 jour de Moodle 3.1"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_3.1",children:"Notas de Moodle 3.1"})}),"\n"]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);