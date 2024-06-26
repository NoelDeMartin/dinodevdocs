"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[47486],{35098:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=r(74848),l=r(28453),n=r(78924);const i={title:"Moodle Mobile 2.1 release notes",sidebar_label:"Moodle Mobile 2.1",tags:["Moodle App","Release notes"]},t=void 0,a={id:"app_releases/v2/v2.1",title:"Moodle Mobile 2.1 release notes",description:"Release date: 28th August 2015",source:"@site/general/app_releases/v2/v2.1.md",sourceDirName:"app_releases/v2",slug:"/app_releases/v2/v2.1",permalink:"/moodledevdocs/general/app_releases/v2/v2.1",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v2/v2.1.md",tags:[{label:"Moodle App",permalink:"/moodledevdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Pau Ferrer Oca\xf1a",lastUpdatedAt:1654070137e3,frontMatter:{title:"Moodle Mobile 2.1 release notes",sidebar_label:"Moodle Mobile 2.1",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle Mobile 2.0",permalink:"/moodledevdocs/general/app_releases/v2/v2.0"},next:{title:"Moodle Mobile 2.2",permalink:"/moodledevdocs/general/app_releases/v2/v2.2"}},d={},h=[{value:"New features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Development",id:"development",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Improvement",id:"improvement",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Task",id:"task",level:3}];function c(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:i,metadata:a}),"\n",(0,o.jsx)(s.p,{children:"Release date: 28th August 2015"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=14666",children:"Complete list of issues for Moodle Mobile 2.1"})}),"\n",(0,o.jsx)(s.h2,{id:"new-features",children:"New features"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"New add-on: Course completion - Users can see course completion status if they're allowed to. They can also mark a course as self-completed."}),"\n",(0,o.jsx)(s.li,{children:"Errors in the app can be sent to our server to improve bug fixing."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Participant's country name is now translated."}),"\n",(0,o.jsx)(s.li,{children:"Loading a site or starting the app is no longer blocked until the site info is updated."}),"\n",(0,o.jsx)(s.li,{children:"Improved accessibility."}),"\n",(0,o.jsx)(s.li,{children:"If local_mobile check returns an unexpected response now it shows a warning and no longer blocks the authentication."}),"\n",(0,o.jsx)(s.li,{children:"Deleted users are handled in a similar way to Moodle web."}),"\n",(0,o.jsx)(s.li,{children:"Pull to refresh has been added to user profile."}),"\n",(0,o.jsx)(s.li,{children:"The app is now able to detect local_mobile plugin has been installed to a stored Moodle site."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"fixes",children:"Fixes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Fixed an error with Android notification IDs being too high."}),"\n",(0,o.jsx)(s.li,{children:"Fixed errors with credentials not being stored in Samsung Galaxy S4 Mini."}),"\n",(0,o.jsx)(s.li,{children:"In mod_book, using pull to refresh now re-loads the current chapter instead of the first one. The same goes for IMSCP."}),"\n",(0,o.jsx)(s.li,{children:"Fixed an error with files included in mod_book."}),"\n",(0,o.jsx)(s.li,{children:"Fixed a problem with user profile images in recent discussions."}),"\n",(0,o.jsx)(s.li,{children:"Fixed icon shown in push notifications when the app is in foreground."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"development",children:"Development"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"An app init process has been implemented to handle processes that should be executed before the app is ready."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"complete-list-of-issues",children:"Complete list of issues"}),"\n",(0,o.jsx)(s.h3,{id:"bug",children:"Bug"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1076",children:"MOBILE-1076"})," - App doesn't notice local_mobile is installed on a site already stored"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1131",children:"MOBILE-1131"})," - iOS: HTML in Notifications"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1140",children:"MOBILE-1140"})," - Audio Files not playing"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1141",children:"MOBILE-1141"})," - Unable to return from Vimeo/YouTube"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1143",children:"MOBILE-1143"})," - App not loading on Chrome/Chromium Windows"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1146",children:"MOBILE-1146"})," - App fails to load when viewed in iOS devices"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1147",children:"MOBILE-1147"})," - Unexpected error. Please close and reopen the application to try again."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1149",children:"MOBILE-1149"})," - Pull to refresh on mod_book: always shows the first chapter, not the current one"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1169",children:"MOBILE-1169"}),' - Course completion: "Completion of other courses" status is not shown right']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1171",children:"MOBILE-1171"})," - Some checks if addon is enabled are wrong"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1172",children:"MOBILE-1172"})," - IMSCP: Pull to refresh loading is shown forever"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1173",children:"MOBILE-1173"})," - Can't see discussions from non-contacts"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1175",children:"MOBILE-1175"})," - Moodle icon not shown in push notifications received with the app in foreground"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1180",children:"MOBILE-1180"})," - iOS: TypeError: null is not an object (evaluating 'm.offsetX')"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"improvement",children:"Improvement"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-975",children:"MOBILE-975"})," - Translate participant's country name"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1017",children:"MOBILE-1017"})," - Handle deleted users"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1019",children:"MOBILE-1019"})," - Update site info periodically"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1079",children:"MOBILE-1079"}),' - Implement an app "init process"']}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1124",children:"MOBILE-1124"})," - Accessibility improvements"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1133",children:"MOBILE-1133"})," - Upgrade to ionic 1.0.1 (and fix dependency issues)"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1135",children:"MOBILE-1135"})," - Reconnect should not allow back"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1136",children:"MOBILE-1136"})," - Error message on failed request is ambiguous"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1137",children:"MOBILE-1137"})," - Display and retrieve un-expected errors in the app so we can get feedback"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1139",children:"MOBILE-1139"})," - Do not show the grades option if grades are disabled for a course"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1142",children:"MOBILE-1142"})," - Improve accessibility for iOs and Android using headings"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1144",children:"MOBILE-1144"})," - Pass username, password and service to login/token.php in $mmSitesManager#siteExists to be able to use CORS"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1153",children:"MOBILE-1153"})," - Modify language files doesn't automatically build in ionic serve"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"new-feature",children:"New Feature"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1104",children:"MOBILE-1104"})," - Add support for course completion display"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"task",children:"Task"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1122",children:"MOBILE-1122"})," - Add .jshintrc to project"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MOBILE-1165",children:"MOBILE-1165"})," - Release version 2.1"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);