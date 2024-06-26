"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[83754],{59758:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var o=r(74848),n=r(28453),i=r(78924);const t={title:"Moodle 2.8.7",tags:["Release notes","Moodle 2.8"],sidebar_position:7,moodleVersion:"2.8.7"},l=void 0,d={id:"releases/2.8/2.8.7",title:"Moodle 2.8.7",description:"Release date: 6 July 2015",source:"@site/general/releases/2.8/2.8.7.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.7",permalink:"/moodledevdocs/general/releases/2.8/2.8.7",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.7.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/moodledevdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:7,frontMatter:{title:"Moodle 2.8.7",tags:["Release notes","Moodle 2.8"],sidebar_position:7,moodleVersion:"2.8.7"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.6",permalink:"/moodledevdocs/general/releases/2.8/2.8.6"},next:{title:"Moodle 2.8.8",permalink:"/moodledevdocs/general/releases/2.8/2.8.8"}},a={},h=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}];function c(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:t,metadata:d}),"\n",(0,o.jsx)(s.p,{children:"Release date: 6 July 2015"}),"\n",(0,o.jsxs)(s.p,{children:["Here is ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true",children:"the full list of fixed issues in 2.8.7"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsxs)(s.p,{children:["A lot of work has been done in dealing with unexpected grade changes in the gradebook which some users have experienced when upgrading from Moodle 2.7 to 2.8 or 2.9. See the user documentation ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/28/en/Grades_min_max",children:"Grades min max"})," and ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/28/en/Gradebook_calculation_changes",children:"Gradebook calculation changes"})," for details."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-48618",children:"MDL-48618"})," - Dealing with unexpected changes to grades after upgrading to Moodle 2.8"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49257",children:"MDL-49257"})," - Adjusting weights when extra credit item is present causes unexpected behaviour"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-48239",children:"MDL-48239"})," - Changing the maximum grade of items with calculation to the value different from 100"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Another release highlight is the introduction of the authorised access to the YouTube repository. After upgrading you will need to enter an API key from YouTube into your site's ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/28/en/Youtube_videos_repository",children:"YouTube repository settings"}),"."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50176",children:"MDL-50176"})," - Authenticated access to the YouTube repository"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"functional-changes",children:"Functional changes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50089",children:"MDL-50089"})," - Gradebook export now respects aggregate only non-empty grades for percentage and letter"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49680",children:"MDL-49680"})," - Sort by age option added when viewing question banks (backport of ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-25721",children:"MDL-25721"}),")"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-48467",children:"MDL-48467"})," - Atto: Clean the html even if submitting the form when Atto is in html view mode"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"api-changes",children:"API changes"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49022",children:"MDL-49022"})," - sync_users must trigger event core\\event\\user_updated"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=316662",children:"MSA-15-0026"})," Possible phishing when redirecting to external site using referer header"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=316664",children:"MSA-15-0028"})," Possible XSS through custom text profile fields in Web Services"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=316665",children:"MSA-15-0029"})," Javascript injection in SCORM module"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"fixes-and-improvements",children:"Fixes and improvements"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50177",children:"MDL-50177"})," - Upgrading assignments in 2.7/2.8 works even when conditional access is used"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-39353",children:"MDL-39353"})," - Connection to a hub from behind a proxy server"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49742",children:"MDL-49742"})," - Enrolled users page no longer displays sorting by fields that are not used in user identity"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-47787",children:"MDL-47787"})," - After deleting a quiz, its question categories and questions remain in database"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49764",children:"MDL-49764"})," - Fixed gradebook UI inconsistencies in Internet Explorer"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49885",children:"MDL-49885"})," - The course overview block can now be added to My home"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50675",children:"MDL-50675"})," - Display Wikimedia repository thumbnails (caused by the change in Wikimedia API)"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50091",children:"MDL-50091"})," - Fixed fatal error in gradebook singleview after a module has been uninstalled"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-48664",children:"MDL-48664"})," - Messaging contacts paging bar no longer expands and overlaps other text"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50092",children:"MDL-50092"})," - User unenrollment is now working with IMS Enterprise"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49560",children:"MDL-49560"})," - SOAP web service now works with token"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50004",children:"MDL-50004"})," - Fix coursename and enrolment icons in category combo on Frontpage"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49061",children:"MDL-49061"})," - The activity completion report in a course correctly shortens headers when multi language filter is used"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50275",children:"MDL-50275"})," - Added missing version bump after risk bitmap change in ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-49941",children:"MDL-49941"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-50380",children:"MDL-50380"})," - Fixed missing parameter error when editing files in wiki"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.7",children:"Notes de mise \xe0 jour de Moodle 2.8.7"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.7",children:"Notas de Moodle 2.8.7"})}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);