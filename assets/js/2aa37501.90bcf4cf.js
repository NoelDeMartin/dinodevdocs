"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[80189],{73747:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>u});var o=s(74848),n=s(28453),r=s(78924);const l={title:"Moodle 1.5.4",tags:["Release notes"],sidebar_position:4,moodleVersion:"1.5.4"},d=void 0,t={id:"releases/1.5/1.5.4",title:"Moodle 1.5.4",description:"Release date: 21st May 2006",source:"@site/general/releases/1.5/1.5.4.md",sourceDirName:"releases/1.5",slug:"/releases/1.5/1.5.4",permalink:"/moodledevdocs/general/releases/1.5/1.5.4",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.5/1.5.4.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464492e3,sidebarPosition:4,frontMatter:{title:"Moodle 1.5.4",tags:["Release notes"],sidebar_position:4,moodleVersion:"1.5.4"},sidebar:"releaseNotes",previous:{title:"Moodle 1.5.3",permalink:"/moodledevdocs/general/releases/1.5/1.5.3"},next:{title:"Moodle 1.4",permalink:"/moodledevdocs/general/releases/1.4"}},h={},u=[{value:"Various fixes",id:"various-fixes",level:2},{value:"Security",id:"security",level:3},{value:"General",id:"general",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Enrolment",id:"enrolment",level:3},{value:"Forum Module",id:"forum-module",level:3},{value:"Glossary Module",id:"glossary-module",level:3},{value:"Hotpot Module",id:"hotpot-module",level:3},{value:"Lesson Module",id:"lesson-module",level:3},{value:"Quiz Module",id:"quiz-module",level:3},{value:"Resource Module",id:"resource-module",level:3},{value:"Wiki Module",id:"wiki-module",level:3}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{frontMatter:l,metadata:t}),"\n",(0,o.jsx)(i.p,{children:"Release date: 21st May 2006"}),"\n",(0,o.jsx)(i.p,{children:"(Because this release contains important security fixes, we highly advise that sites using any previous version of Moodle upgrade to this version as soon as possible.)"}),"\n",(0,o.jsx)(i.h2,{id:"various-fixes",children:"Various fixes"}),"\n",(0,o.jsx)(i.h3,{id:"security",children:"Security"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Improved kses cleaning of html SC#204"}),"\n",(0,o.jsx)(i.li,{children:"Prevent unwanted password change here SC#225"}),"\n",(0,o.jsx)(i.li,{children:"Fix for Secunia Advisory SA18267, plus some logging of suspicious activity."}),"\n",(0,o.jsx)(i.li,{children:"AdoDB tests cleanup after Secunia Advisory SA18267"}),"\n",(0,o.jsx)(i.li,{children:"Fixed $cfg->forceloginforprofiles logic SC#207. Backported from HEAD"}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"general",children:"General"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Various updates/improvements in the the Environmental Check allowing to check if your server suits future Moodle requirements."}),"\n",(0,o.jsx)(i.li,{children:"Bug 4619. Fixed one DB query not following coding rules."}),"\n",(0,o.jsx)(i.li,{children:"Bug 4607. Avoid duplication of course shortname on restore."}),"\n",(0,o.jsx)(i.li,{children:"Fixed one problem with auto-link filters and frames."}),"\n",(0,o.jsx)(i.li,{children:"Important fixes to multi-byte text handling routines."}),"\n",(0,o.jsx)(i.li,{children:"Small changes to the installer."}),"\n",(0,o.jsx)(i.li,{children:"Bug 3853. Some important improvements in the restore of log actions."}),"\n",(0,o.jsx)(i.li,{children:"Bug 4328. Prevent some warnings in the blocks system."}),"\n",(0,o.jsx)(i.li,{children:'Bug 4341. Extending multi-lang support to the "jumpto" menu (showed in collapsed mode).'}),"\n",(0,o.jsx)(i.li,{children:"Added rss_get_url() to 1.5 to help support data module"}),"\n",(0,o.jsx)(i.li,{children:"Added support for having a linked tab even if it is currently selected."}),"\n",(0,o.jsxs)(i.li,{children:["RSS Client block: Removed secondary cache. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4625",children:"Bug 4625"})]}),"\n",(0,o.jsxs)(i.li,{children:["Email confirmation now includes lastname. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4869",children:"Bug 4869"})]}),"\n",(0,o.jsx)(i.li,{children:"Database connection errors can now be reported to an admin. See $CFG->emailconnectionerrors in config-dist.php."}),"\n",(0,o.jsx)(i.li,{children:"Metacourses: Fixed a problem with self enrolment in child courses."}),"\n",(0,o.jsx)(i.li,{children:"Several MySQL v5 compatibility fixes"}),"\n",(0,o.jsx)(i.li,{children:"Avoid listing more than 200 courses in my courses block, and course listing pages."}),"\n",(0,o.jsx)(i.li,{children:"SCORM: Fixed lesson status skin support"}),"\n",(0,o.jsx)(i.li,{children:"Skype: Added webstatus icon"}),"\n",(0,o.jsxs)(i.li,{children:["File uploads: Only create a directory if needed, ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4659",children:"bug 4659"})]}),"\n",(0,o.jsxs)(i.li,{children:["Admin Block. Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4627",children:"bug 4627"}),': Hide "change password" link in admin block if the user is restricted. Credits for report & patch go to Joseph Rezeau.']}),"\n",(0,o.jsxs)(i.li,{children:["HTMLArea: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4562",children:"bug 4562"}),". Fix posted by sgarcia."]}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4626",children:"bug 4626"}),' - weblib.php: $course object conversion error in "print_footer " function']}),"\n",(0,o.jsxs)(i.li,{children:["Messaging: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4621",children:"bug 4621"})," errors in MySQL v3.23 with message backup."]}),"\n",(0,o.jsx)(i.li,{children:"Introducing Admin->Environment to help users assess installed software prior to the 1.6 upgrade"}),"\n",(0,o.jsxs)(i.li,{children:["Course Restore: Now we avoid duplicates. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4607",children:"Bug 4607"})]}),"\n",(0,o.jsxs)(i.li,{children:["Assignment: Guests can no longer submit an online assignment. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4604",children:"Bug 4604"})]}),"\n",(0,o.jsx)(i.li,{children:"File Downloads: Fixed problems for slow (dial up) clients, and avoid hogging memory when PHP's output compression is on."}),"\n",(0,o.jsxs)(i.li,{children:["Wiki: Supports initial load of contents from course file area. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=3830",children:"Bug 3830"})]}),"\n",(0,o.jsx)(i.li,{children:'Lesson: Now when a teacher edits a page with the "Edit page contents" button and then saves or cancels, s/he gets redirected back to the lesson navigation. This will help to streamline the editing.'}),"\n",(0,o.jsxs)(i.li,{children:["Activity Modules Block - ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4586",children:"bug 4586"})]}),"\n",(0,o.jsxs)(i.li,{children:["Metacourse: Fixes unenrolling ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4541",children:"bug 4541"})]}),"\n",(0,o.jsxs)(i.li,{children:["File uploads: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4533",children:"bug 4533"})," - Max upload size at course level ignored."]}),"\n",(0,o.jsx)(i.li,{children:"Enrol/Authorize.net: Added Address Verification System (AVS) support."}),"\n",(0,o.jsx)(i.li,{children:"Online Users Block: Limit the number of students displayed."}),"\n",(0,o.jsx)(i.li,{children:"Unicode Support: Typo3 Library updated to newest version."}),"\n",(0,o.jsxs)(i.li,{children:["Course Categories: Fixed courses and subcategories in an invisible category being visible. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4074",children:"Bug 4074"})]}),"\n",(0,o.jsx)(i.li,{children:"Wiki: Fixed a fatal error updating wiki pages."}),"\n",(0,o.jsxs)(i.li,{children:["Added autocomplete=off in form tag to avoid browser auto complete ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4423",children:"bug:4423"})]}),"\n",(0,o.jsx)(i.li,{children:"Password change: Primary administrator password can only be changed by the administrator him/herself."}),"\n",(0,o.jsx)(i.li,{children:"Enrol/Authorize.net: Some changes:- allow_internal is not need any more. Shows two option if enrolment key of course is set.- login_https is required for payment pages. My credit card is important. If you haven't a certificate forgot this module. (security)- Expiry date of credit card is more friendly :)."}),"\n",(0,o.jsxs)(i.li,{children:["User profile: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4400",children:"bug 4400"})]}),"\n",(0,o.jsx)(i.li,{children:"Removed old THEME variable."}),"\n",(0,o.jsx)(i.li,{children:"Added some more CSS hooks for the correctness feedback"}),"\n",(0,o.jsxs)(i.li,{children:["Fix ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4366",children:"bug 4366"})]}),"\n",(0,o.jsx)(i.li,{children:"Makes autologinguest possible at site level"}),"\n",(0,o.jsx)(i.li,{children:"Micro-increment version number to 2.0.10"}),"\n",(0,o.jsxs)(i.li,{children:["Corrected adjustment of relative URLs in ",(0,o.jsx)(i.code,{children:"<EMBED>"})," tag"]}),"\n",(0,o.jsxs)(i.li,{children:["Merging from HEAD",":Fix"," for ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4371",children:"bug 4371"})," (also SC#199)",":Now"," manually created users with admin privileges and force change password cannot change their username with impunity."]}),"\n",(0,o.jsxs)(i.li,{children:["Fix for ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4067",children:"bug 4067"})," - allow user to update assignment when not yet marked"]}),"\n",(0,o.jsxs)(i.li,{children:["Fix for ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4314",children:"bug 4314"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fix for ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4206",children:"bug 4206"})]}),"\n",(0,o.jsx)(i.li,{children:"Delayed merge from HEAD - If tablelib is going to do fullname voodoo, allow default sort field to be firstname/lastname"}),"\n",(0,o.jsxs)(i.li,{children:["Log actions must be stored to DB without &print_log() takes care of it! ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=3853",children:"Bug 3853"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fixes ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4354",children:"bug 4354"})]}),"\n",(0,o.jsxs)(i.li,{children:["shorten_text() AFTER format properly. See ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4355",children:"bug  4355"})]}),"\n",(0,o.jsxs)(i.li,{children:["Prevent a warning when params is empty. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4328",children:"Bug 4328"})]}),"\n",(0,o.jsxs)(i.li,{children:['Now the section "jumpto" menu (showed in collapse mode), supports the multilang filter. ',(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4341",children:"Bug 4341"})]}),"\n",(0,o.jsx)(i.li,{children:"Print performance info if exists and $CFG->perfdebug is enabled."}),"\n",(0,o.jsxs)(i.li,{children:["Fix for ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4351",children:"bug 4351"}),". New parameter for get_record_sql to disable auto-added LIMIT (in case we are using our own)"]}),"\n",(0,o.jsxs)(i.li,{children:["Solved bug found when trying to backup all users! ",(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=27105",children:"http://moodle.org/mod/forum/discuss.php?d=27105"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fixing ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4345",children:"bug 4345"}),": merging problem when fixing ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4303",children:"bug 4303"})]}),"\n",(0,o.jsx)(i.li,{children:'Mimic changes from "Ought to mention the improved assignment grading!"Merged from HEAD'}),"\n",(0,o.jsx)(i.li,{children:"Ought to mention the improved assignment grading!"}),"\n",(0,o.jsxs)(i.li,{children:["Fixes ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4086",children:"bug 4086"})," spelling mistake"]}),"\n",(0,o.jsxs)(i.li,{children:["Commenting out gz_handler since it seem to cause problemsmore on ",(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=34376",children:"http://moodle.org/mod/forum/discuss.php?d=34376"})]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"assignment",children:"Assignment"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:['Fixed bug in "Prevent late submissions", thanks to Samuli, ',(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4780",children:"bug 4780"})]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"enrolment",children:"Enrolment"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Enrolment: Better explanation of flat file enrolment format. Re-formatted the improved flat file enrolment description"}),"\n",(0,o.jsx)(i.li,{children:"Auth/LDAP: Better support for ActiveDirectory"}),"\n",(0,o.jsx)(i.li,{children:"Enrol/Authorize.net: PostgreSQL support and some indexes for speed."}),"\n",(0,o.jsx)(i.li,{children:"Authorize.net: Address Verification System (AVS) support added."}),"\n",(0,o.jsx)(i.li,{children:"Authorize.net: $CGF->login_https must be ON for payment pages."}),"\n",(0,o.jsx)(i.li,{children:"Authorize.net: Shows two forms if the enrolment key of the course is set (internal and authorize forms)."}),"\n",(0,o.jsxs)(i.li,{children:["Authorize.net: IIS https fix. It doesn't recognize ",(0,o.jsx)(i.code,{children:"empty($_SERVER['HTTPS'])"})," but accepts ",(0,o.jsx)(i.code,{children:"HTTPS=off"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"forum-module",children:"Forum Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Bug 4355. Solved one visualisation problem in the page showing the list of forums."}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4360",children:"bug 4360"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4431",children:"bug 4431"}),", affecting site course, added function forum_user_can_view_post in lib.php"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"glossary-module",children:"Glossary Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Bug 4543, 4713. Fixed some problems with entries and categories containing more than one word in their title."}),"\n",(0,o.jsx)(i.li,{children:"Bug 4858. Fixed one problem with formats, not being detected properly."}),"\n",(0,o.jsx)(i.li,{children:'Bug 4915. Entrylist format now displays the "Send Ratings" button.'}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"hotpot-module",children:"Hotpot Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Add support for HP5 quizzes (including JBC and old JQuiz)"}),"\n",(0,o.jsx)(i.li,{children:"Removed weighting from question text in JCloze import"}),"\n",(0,o.jsx)(i.li,{children:"Fixed import of JCloze into quiz module as a MULTIANSWER question"}),"\n",(0,o.jsx)(i.li,{children:"Fixed bug in restoring attempts from backup"}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"lesson-module",children:"Lesson Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Lesson: $navigation and $grade_value were undefined when lesson was added to site main page"}),"\n",(0,o.jsxs)(i.li,{children:["Lesson: Lesson Essay Question Can't be Graded when attempt not finished. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4174",children:"Bug 4174"})]}),"\n",(0,o.jsxs)(i.li,{children:["Lesson: Added cancel button. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4216",children:"Bug 4216"})," - cancel button"]}),"\n",(0,o.jsxs)(i.li,{children:["Lesson: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=37537",children:"problem with storing the answerid for numerical questions"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["Lesson: Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=1187",children:"bug 1187"})]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"quiz-module",children:"Quiz Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Fixed bug 4250: Added missing percentages to the grade selector"}),"\n",(0,o.jsx)(i.li,{children:"Fixed bug 4495: Don't apply lateness check when teacher previews"}),"\n",(0,o.jsx)(i.li,{children:"Fixed bug 4544: Incorrect path to exported files in some language packs"}),"\n",(0,o.jsx)(i.li,{children:'Fixed bug 4780: Bug in "Prevent late submissions" setting fixed'}),"\n",(0,o.jsx)(i.li,{children:"Fixed bug 5070: Students can't see quizzes when they are closed"}),"\n",(0,o.jsx)(i.li,{children:"Turned off regrading of quizzes that have the attemptonlast option set"}),"\n",(0,o.jsx)(i.li,{children:"A number of other minor interface fixes"}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4319",children:"bug 4319"}),". Thanks to Jaroslav"]}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4217",children:"bug 4217"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4829",children:"bug 4829"})]}),"\n",(0,o.jsxs)(i.li,{children:["Now we avoid checking for lateness when teacher previews. ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4495",children:"Bug 4495"})]}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4688",children:"bug 4688"})]}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=39548",children:'Rounding errors could lead to "Partially correct" for correct answers'})}),"\n",(0,o.jsxs)(i.li,{children:["Added missing percentages to the grade selector, ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4250",children:"bug 4250"})]}),"\n",(0,o.jsxs)(i.li,{children:["Avoid error messages in case $quiz->sumgrades is zero, ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4454",children:"bug 4454"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=27730#181773",children:"get_actual_response() method for cloze question type"})," contributed by Jean-Michel"]}),"\n",(0,o.jsx)(i.li,{children:"Better PostgreSQL support"}),"\n",(0,o.jsx)(i.li,{children:"Now With Nicer Presentation of Questions"}),"\n",(0,o.jsx)(i.li,{children:"Summary text shouldn't be cleaned as only entered by teacher."}),"\n",(0,o.jsxs)(i.li,{children:["Fixed ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4345",children:"bug 4345"}),". Report performance improvements caused regression with MySQLv3"]}),"\n",(0,o.jsxs)(i.li,{children:["Now we turn off browser-based autocomplete. Fixes ",(0,o.jsx)(i.a,{href:"http://moodle.org/bugs/bug.php?op=show&bugid=4423",children:"bug 4423"})," - Short Answer Quiz Q's Saving Form Entries"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"resource-module",children:"Resource Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Solved one problem on restore that was causing some links to become corrupted."}),"\n",(0,o.jsx)(i.li,{children:"Slightly changes to the delete_instance() function in resources to allow future improvements."}),"\n",(0,o.jsxs)(i.li,{children:["Resource restore: Solved bug when ",(0,o.jsx)(i.a,{href:"http://moodle.org/mod/forum/discuss.php?d=38801",children:"decoding encoded links for resource"})]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"wiki-module",children:"Wiki Module"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Solved one problem sending double-slashed info to DB."}),"\n",(0,o.jsx)(i.li,{children:"Bug 3830. Load of initial content from course file area is now allowed."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);