"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[72642],{24074:(e,r,s)=>{s.d(r,{Ke:()=>a});s(96540);var o=s(72511),t=s(81090),i=s(74848);function n(e,r){const s=(0,o.kF)(e);return s&&void 0!==s[r]?(0,i.jsx)(i.Fragment,{children:s[r]}):(0,i.jsx)(i.Fragment,{children:"not yet released"})}function l(e){let{releaseName:r}=e;return n(r,"releaseDate")}function a(e){let{releaseName:r}=e;const s=r.endsWith(".0")?r.slice(0,-2):r;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["Release date:"," ",(0,i.jsx)(l,{releaseName:r}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("p",{children:["Here is"," ",(0,i.jsxs)(t.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${s}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",r]}),"."]})]})}},88699:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var o=s(74848),t=s(28453),i=s(78924),n=s(24074);const l={title:"Moodle 4.3.4",tags:["Release notes","Moodle 4.3"],sidebar_position:4,moodleVersion:"4.3.4",description:"The release notes for Moodle version 4.3.4."},a=void 0,d={id:"releases/4.3/4.3.4",title:"Moodle 4.3.4",description:"The release notes for Moodle version 4.3.4.",source:"@site/general/releases/4.3/4.3.4.md",sourceDirName:"releases/4.3",slug:"/releases/4.3/4.3.4",permalink:"/moodledevdocs/general/releases/4.3/4.3.4",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/4.3/4.3.4.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 4.3",permalink:"/moodledevdocs/general/tags/moodle-4-3"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1713534731e3,sidebarPosition:4,frontMatter:{title:"Moodle 4.3.4",tags:["Release notes","Moodle 4.3"],sidebar_position:4,moodleVersion:"4.3.4",description:"The release notes for Moodle version 4.3.4."},sidebar:"releaseNotes",previous:{title:"Moodle 4.3.3",permalink:"/moodledevdocs/general/releases/4.3/4.3.3"},next:{title:"Moodle 4.2",permalink:"/moodledevdocs/general/releases/4.2"}},c={},h=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2}];function m(e){const r={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:l,metadata:d}),"\n","\n",(0,o.jsx)(n.Ke,{releaseName:l.moodleVersion}),"\n",(0,o.jsx)(r.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-78547",children:"MDL-78547"})," - Question modifications made during quiz preview are not visible"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-69656",children:"MDL-69656"})," - H5P embeds not rewritten during restore/import"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-52891",children:"MDL-52891"})," - Unable to overwrite old wildcards in a calculated simple question"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-78370",children:"MDL-78370"})," - Course Overview Block Performance"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-79174",children:"MDL-79174"}),' - "Membership is hidden" groups do not work for availability restrictions']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81327",children:"MDL-81327"})," - Resolve log and loglive report issues when external database are used to store logs"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80766",children:"MDL-80766"})," - The grader report does not accept unlimited grades"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-79802",children:"MDL-79802"})," - Add a new setting for adding custom H5P styles"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-78902",children:"MDL-78902"})," - Error when restoring quiz with random questions"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81152",children:"MDL-81152"})," - Backport LTI custom params support"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-77779",children:"MDL-77779"})," - Fatal error when restoring a Moodle 3.11 course with competencies to 4.1"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-76024",children:"MDL-76024"})," - Calculated Question - Negative Answer with Units incorrectly evaluated"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80684",children:"MDL-80684"})," - When PHP runs out of memory, tasks are treated as still running instead of being marked as failed"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81060",children:"MDL-81060"})," - Private files area quota applies when unzipping to non-private file areas"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80865",children:"MDL-80865"})," - Label printed for empty textarea course custom fields"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80565",children:"MDL-80565"})," - Fix log and loglive report user selectors to show the list in expected order"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80384",children:"MDL-80384"})," - Prevent activity name to be read twice by screen reader in course content"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81127",children:"MDL-81127"})," - Support filters on course completion message"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81114",children:"MDL-81114"})," - Selecting random questions to start a quiz attempt does not handle draft state correctly"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80835",children:"MDL-80835"})," - Add CHIPS support to LTI cookies"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-79712",children:"MDL-79712"})," - Ensure SameSite=None on MoodleSession cookie to retain support for embedded launches"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80302",children:"MDL-80302"})," - Error when accessing the default activity completion page"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81306",children:"MDL-81306"})," - xsendfiles ",(0,o.jsx)(r.em,{children:"cannot"})," support per-request directories"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80818",children:"MDL-80818"})," - When Completion conditions are locked, the radio buttons options should remain disabled"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81359",children:"MDL-81359"})," - Availability condition display 'show more' sometimes doesn't show more"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-78457",children:"MDL-78457"})," - Link to Participants changes to site id if user cannot view for current course"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81402",children:"MDL-81402"})," - Activity Chooser won't load after indenting content"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80481",children:"MDL-80481"})," - Missing the breadcrumb in the Activity completion on the Classic theme"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80646",children:"MDL-80646"})," - Unable to set key and secret for a manually configured tool instance restored in Moodle 4.3"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80930",children:"MDL-80930"})," - Course delete modules adhoc task handle non deletable modules"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81405",children:"MDL-81405"})," - Support Chrome's partitioned cookies in the mobile app"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80827",children:"MDL-80827"})," - XMLDB editor broken with PHP 8.1"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81584",children:"MDL-81584"})," - Gradebook popover is positioned below the table footer, so an option can't be seen"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80836",children:"MDL-80836"})," - Replace session piggyback with login flow during account linking process in LTI provider"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81393",children:"MDL-81393"})," - VideoJS not playing .ogv files in Chrome browser"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80765",children:"MDL-80765"})," - Creating fields with space at the end break the Add entry template"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80598",children:"MDL-80598"})," - Bigbluebuttonbn adhoc tasks do not gracefully handle missing course modules or users"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81300",children:"MDL-81300"})," - Inline edit icons overlap drag and drop to upload on Course"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81307",children:"MDL-81307"})," - Fix course bulk action buttons in sticky footer in small resolutions"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80934",children:"MDL-80934"}),' - "Text and media" resources are not automatically open when clicking the course index if their section is collapsed']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80919",children:"MDL-80919"})," - Duplicate empty section throws an error"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80869",children:"MDL-80869"})," - Fix random BigBlueButton test failure getting meeting information from log"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80936",children:"MDL-80936"})," - Custom field report columns show default values when they shouldn't"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81472",children:"MDL-81472"})," - Exception related to the SCORM activity hinders privacy data processing"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80630",children:"MDL-80630"})," - Hidden timer in timed quiz un-hides every page change"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80326",children:"MDL-80326"})," - Availability shouldn't be changed when the user hasn't the right capability"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-79829",children:"MDL-79829"})," - Use move or grab/grabbing cursors, not a copy cursor when moving elements"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80383",children:"MDL-80383"})," - The floating previous/next buttons for navigating book chapters pose usability issues on narrow screens"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80917",children:"MDL-80917"})," - asynchronous_copy_task does not clear course cache"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80943",children:"MDL-80943"}),' - Custom reports containing "select" custom fields offer incorrect aggregation']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80605",children:"MDL-80605"})," - User upload DB error when matching by email and new and existing upload type"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80167",children:"MDL-80167"})," - Add environment check for Oracle database"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80391",children:"MDL-80391"})," - Cannot add and edit source code when using TinyMCE in a modal"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80338",children:"MDL-80338"})," - Unable to embed Youtube video on a URL resource when title of video contains quotation mark"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81123",children:"MDL-81123"})," - TinyMCE source code viewer has limited height"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-77015",children:"MDL-77015"})," - HTML in database field management page escaped in an unexpected way"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"accessibility-improvements",children:"Accessibility improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-68674",children:"MDL-68674"})," - Dashboard block headings should be h3, not h5; and there should be an overall block heading"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-79007",children:"MDL-79007"})," - Improve screen reader feedback in calendar UI"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-70829",children:"MDL-70829"})," - ARIA role presentation conflicts with the empty alt"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80195",children:"MDL-80195"}),' - Moodleform datepicker in report builder filter form shifts the focus to "Skip to main content" link']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81110",children:"MDL-81110"})," - Keyboard focus is off screen when Skip to Content link is used"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-81029",children:"MDL-81029"}),' - When adding a new activity module the title attribute is "Editing..." instead of "Adding..."']}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80279",children:"MDL-80279"})," - Missing alt text in the common user header when user does not have picture"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80183",children:"MDL-80183"})," - Online status in messaging toolbar has no alt text. Plus incorrect use of ARIA label"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80731",children:"MDL-80731"})," - Invalid /Lang attribute in generated PDF files"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80364",children:"MDL-80364"})," - Insufficient colour contrast of the icon on notification message on hover or focus"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80469",children:"MDL-80469"})," - Add a legend to the Submit-cancel button group"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-72923",children:"MDL-72923"})," - Messaging drawer missing levels of headings in search results"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80805",children:"MDL-80805"})," - Required form fields should indicate required status"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80197",children:"MDL-80197"})," - Datepicker popup in moodleform is not accessible with keyboard"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"security-improvements",children:"Security improvements"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://tracker.moodle.org/browse/MDL-80160",children:"MDL-80160"})," - Site admins selector does not indicate when $CFG->siteadmins is defined in config.php"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,o.jsx)(r.p,{children:"A number of security related issues were resolved. Details of these issues will be released after a period of approximately one week to allow system administrators to safely update to the latest version."})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);