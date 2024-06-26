"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[57851],{91560:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(74848),t=s(28453),r=s(78924);const o={title:"Moodle 1.5",tags:["Release notes"],sidebar_position:-105,moodleVersion:"1.5"},l=void 0,a={id:"releases/1.5",title:"Moodle 1.5",description:"Release date: 5th June 2005",source:"@site/general/releases/1.5.md",sourceDirName:"releases",slug:"/releases/1.5",permalink:"/moodledevdocs/general/releases/1.5",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.5.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653464491e3,sidebarPosition:-105,frontMatter:{title:"Moodle 1.5",tags:["Release notes"],sidebar_position:-105,moodleVersion:"1.5"},sidebar:"releaseNotes",previous:{title:"Moodle 1.6.9",permalink:"/moodledevdocs/general/releases/1.6/1.6.9"},next:{title:"Moodle 1.5.1",permalink:"/moodledevdocs/general/releases/1.5/1.5.1"}},d={},c=[{value:"Headline features",id:"headline-features",level:3},{value:"Other major system-wide improvements",id:"other-major-system-wide-improvements",level:3},{value:"Activity module improvements",id:"activity-module-improvements",level:3},{value:"Translations",id:"translations",level:2}];function h(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{frontMatter:o,metadata:a}),"\n",(0,i.jsx)(n.p,{children:"Release date: 5th June 2005"}),"\n",(0,i.jsxs)(n.p,{children:["Here you can find the release notes of the current stable version of Moodle. ",(0,i.jsxs)(n.strong,{children:["If you experience any bugs in this release, please report them at ",(0,i.jsx)(n.a,{href:"http://moodle.org/bugs",children:"moodle.org/bugs"})," so we can fix them in the next release."]})]}),"\n",(0,i.jsx)(n.h3,{id:"headline-features",children:"Headline features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Web pages are compliant with XHTML Transitional 1.0"}),"\n",(0,i.jsxs)(n.li,{children:["Improved ",(0,i.jsx)(n.strong,{children:"Accessibility"}),", aiming for compliance with WAI (W3C), SENDA (UK) and Section 508 (US) criteria."]}),"\n",(0,i.jsxs)(n.li,{children:["Very strong ",(0,i.jsx)(n.strong,{children:"new Themes system"}),", allowing cascading themes, user themes, course themes, with very fine control of every page in Moodle via CSS."]}),"\n",(0,i.jsxs)(n.li,{children:["Integrated ",(0,i.jsx)(n.strong,{children:"Messaging"})," feature for direct communication between all users in the site, featuring realtime popup windows, notification, email copies, blocking, history, WYSIWYG editor, etc"]}),"\n",(0,i.jsx)(n.li,{children:"Forum read/unread tracking with highlights allows you to see new postings at a glance and to control how these are displayed (per forum, per user or per site)."}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.strong,{children:"Blocks"})," system, allowing multiple copies of blocks and better block configuration"]}),"\n",(0,i.jsxs)(n.li,{children:["Full support for ",(0,i.jsx)(n.strong,{children:"Daylight Savings Time"})," in every locality around the globe, so everyone always see the correct local time for all events."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.strong,{children:"extended gradebook"})," allowing custom weighting of different activities, setting extra grades (or taking out others) and improved display and sorting options"]}),"\n",(0,i.jsx)(n.li,{children:"Users can be required to agree to a '''Site Policy\n'''"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"other-major-system-wide-improvements",children:"Other major system-wide improvements"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Admin"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'New "maintenance mode" allows the admin to temporarily disable a site (during upgrades, for example).'}),"\n",(0,i.jsx)(n.li,{children:"Moodle can automatically download a new list of timezones from moodle.org or elsewhere and install it to the database (Olson files are supported too)"}),"\n",(0,i.jsx)(n.li,{children:"New version of Moodle MySQL Admin module (available separately)"}),"\n",(0,i.jsx)(n.li,{children:"New calendar options page provides user interface to configure the behavior of the calendar"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Authentication"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New Shibboleth Support"}),"\n",(0,i.jsx)(n.li,{children:"New CAS Support"}),"\n",(0,i.jsx)(n.li,{children:"New PAM Support"}),"\n",(0,i.jsx)(n.li,{children:"Improved LDAP integration, so that LDAP can now control course creation, group assignments. Increased performance and scalability performing user synchronisation."}),"\n",(0,i.jsx)(n.li,{children:"Certain user fields can be locked by the admin when using external authentication"}),"\n",(0,i.jsx)(n.li,{children:'Improved session handling now detects "crossover" sessions that we have found in some buggy PHP installations and prevents them'}),"\n",(0,i.jsx)(n.li,{children:"Sessions can now be stored in the database (good for clustered installations!)"}),"\n",(0,i.jsx)(n.li,{children:"Users can be forced to change their password"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Files"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Standardised file browsing in all areas"}),"\n",(0,i.jsx)(n.li,{children:"Improved uploading, with support for automated Virus scanning of new documents using ClamAV."}),"\n",(0,i.jsx)(n.li,{children:"Slasharguments now work also on IIS (upgrade to PHP 4.3.11 needed for ISAPI)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Filters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Standardised filter library makes it trivial to write new filters that require searching and highlighting of text."}),"\n",(0,i.jsx)(n.li,{children:"Huge efficiency improvements for complex filters like the Glossary filter"}),"\n",(0,i.jsx)(n.li,{children:"New Tidy filter uses the W3C Tidy program to (optionally) clean all user-entered texts throughout the site and convert it to valid XHTML code"}),"\n",(0,i.jsx)(n.li,{children:'Improved censorship filter, now "blacks out" words using styles and uses a word list from the language packs.'}),"\n",(0,i.jsx)(n.li,{children:"Improved Flash MP3 player, now shows progress bar while downloading and playing"}),"\n",(0,i.jsxs)(n.li,{children:["Improved Multi-language filter is faster, more forgiving of syntax errors, and uses new editor-friendly syntax: ",(0,i.jsx)("span",{lang:"en"})]}),"\n",(0,i.jsx)(n.li,{children:"Auto-linking filters (glossary, activities) can work to link all the occurrences (old behaviour), once for each text block or only once for the whole page ($CFG->filtermatchonepertext, $CFG->filtermatchoneperpage)."}),"\n",(0,i.jsx)(n.li,{children:"More text can now be filtered in Moodle, including activity names, headings and other such small texts. This makes it possible to design completely multi-lingual sites in Moodle that fully appears in the user's chosen language."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Themes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Modules can provide standard styles"}),"\n",(0,i.jsx)(n.li,{children:"Themes can override required styles of other themes"}),"\n",(0,i.jsx)(n.li,{children:"Users and courses can choose their own themes if the admin allows it"}),"\n",(0,i.jsx)(n.li,{children:"Implementation of tabs interface on many pages"}),"\n",(0,i.jsx)(n.li,{children:"Modules, Blocks and Languages can define their own standard styles"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"HTML Editor"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The toolbuttons offered in the editor toolbar are now configurable by the admin"}),"\n",(0,i.jsx)(n.li,{children:"Search and Replace text within the editor text area (with optional use of regular expressions)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Course management"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transparent Blackboard 5.5 course importing (partial 6.0 support)"}),"\n",(0,i.jsx)(n.li,{children:"The new meta-courses allow to get users automatically enroled in a general course (the metacourse) when enroled in any of the metacourse-linked courses"}),"\n",(0,i.jsx)(n.li,{children:"New tool to copy content from a course to other."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"New blocks"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTML block: allowing to place arbitrary content (text, images links) in any course mainpage"}),"\n",(0,i.jsx)(n.li,{children:"Remote RSS feed: allows to display external news channels inside a Moodle course"}),"\n",(0,i.jsx)(n.li,{children:"Glossary Selection: to choose and display content from a Moodle glossary in course mainpage"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Calendar"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Major speed improvements for sites with a large number of courses using groups"}),"\n",(0,i.jsx)(n.li,{children:"Repeating events can now be modified or deleted all at the same time or separately as before"}),"\n",(0,i.jsx)(n.li,{children:'New "remember filter settings" preference that allows calendar filters to remember their status between logins'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"activity-module-improvements",children:"Activity module improvements"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Assignment"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Completely refactored into a new class-based design, allowing new plugin-assignment types"}),"\n",(0,i.jsx)(n.li,{children:"New Online Text assignment type that doesn't require files and allows inline comments when grading - this new type effectively replaces the old Journal module"}),"\n",(0,i.jsx)(n.li,{children:"Vastly improved grading interface for handling large classes"}),"\n",(0,i.jsx)(n.li,{children:"New configuration options to disable late submission and to e-mail alerts to teachers when students submit new work"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Chat"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Streamlined interface looks smoother, works faster, even without using the optional server daemon"}),"\n",(0,i.jsx)(n.li,{children:"Blocks can now be added to chat pages (e.g. for additional information)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Choice"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Rewritten to allow any number of choices"}),"\n",(0,i.jsx)(n.li,{children:'The number of users per choice can be limited, which allows it to be used as tool for "signing up" to an array of options.'}),"\n",(0,i.jsx)(n.li,{children:"You can now download the results of the choice to XLS or a TXT file"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Forum"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Powerful new Google-like forum searching tools"}),"\n",(0,i.jsx)(n.li,{children:"Forum read/unread tracking - unread messages are highlighted on the course page, forum page, discussion listing and the discussion view"}),"\n",(0,i.jsx)(n.li,{children:"The tracking system may be disabled by teachers/users"}),"\n",(0,i.jsx)(n.li,{children:"User profiles show all posts by a user, as well as all discussions"}),"\n",(0,i.jsx)(n.li,{children:"When admins edit user messages, a notice is attached"}),"\n",(0,i.jsx)(n.li,{children:"Discussion listing shows the last user who posted to each discussion and when it was, with a direct link to that post"}),"\n",(0,i.jsx)(n.li,{children:"In group-enabled forums the discussion listing shows the group the thread applies to, with a link to the group description page."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Glossary"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New setting to enable/disable the print view of each glossary."}),"\n",(0,i.jsx)(n.li,{children:"New search system looks for words everywhere (instead of doing exact phrase match)."}),"\n",(0,i.jsx)(n.li,{children:"More information is sent to logs to be able to track activity better."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Journal"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Journal module has not changed since 1.4, and is now deprecated. The upgrade procedure will convert all your Journal activities into Online Assignments, and hide all the old Journal activities. If you don't want this to happen, then define this in your config.php: $CFG->noconvertjournals = true;"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Lesson"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Now supports timed Lessons"}),"\n",(0,i.jsx)(n.li,{children:"Can create practice Lessons (grades are not stored)"}),"\n",(0,i.jsx)(n.li,{children:"Option for students to view points earned while taking the Lesson"}),"\n",(0,i.jsx)(n.li,{children:"Allow students to review their answers before submitting the Lesson"}),"\n",(0,i.jsx)(n.li,{children:"New Slide Show Mode (only branch tables are displayed as slides)"}),"\n",(0,i.jsx)(n.li,{children:"New Left Menu (for enabled branch tables only)"}),"\n",(0,i.jsx)(n.li,{children:"Lessons can now be Password Protected"}),"\n",(0,i.jsx)(n.li,{children:"A Tree View can be used for the Lesson creation screen"}),"\n",(0,i.jsx)(n.li,{children:"Students can post their high scores"}),"\n",(0,i.jsx)(n.li,{children:"New option to save a Lesson's settings as defaults for new lessons in the same course"}),"\n",(0,i.jsx)(n.li,{children:"Can delete a student's attempts"}),"\n",(0,i.jsxs)(n.li,{children:["New page Jumps:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Previous Page"}),"\n",(0,i.jsx)(n.li,{children:"Unseen question within a branch"}),"\n",(0,i.jsx)(n.li,{children:"Random question within a branch"}),"\n",(0,i.jsx)(n.li,{children:"Unseen question within a cluster"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Added functionality to view Lesson statistics"}),"\n",(0,i.jsx)(n.li,{children:"New question type: Essay. Teachers can view each essay and write comments, assign a grade, and then email it all to the student"}),"\n",(0,i.jsx)(n.li,{children:"New question creation interface"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Quiz"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can handle adaptive questions, i.e., questions that allow the student to interact with them repeatedly within the same quiz attempt and that can change in response to student answers."}),"\n",(0,i.jsx)(n.li,{children:"Student can be allowed to try a question again immediately within the same quiz attempt until they get the answer right."}),"\n",(0,i.jsx)(n.li,{children:"There is a penalty mechanism that deducts a specified fraction of the mark for each wrong attempt at a question."}),"\n",(0,i.jsx)(n.li,{children:"Allows questions rendered and scored externally (e.g., by mathematical assessment engines) to be integrated seamlessly into Moodle quizzes via the RQP web services protocol."}),"\n",(0,i.jsx)(n.li,{children:"Is prepared for the handling of IMS QTI questions once web services for these become available."}),"\n",(0,i.jsx)(n.li,{children:"New tabbed teacher interface for previewing, editing, and reviewing quizzes."}),"\n",(0,i.jsx)(n.li,{children:'New "improved security" mode shows quiz in a separate full-screen window, with many browser features disabled'}),"\n",(0,i.jsx)(n.li,{children:"Quizzes can be presented to students in several pages. The number of questions per page is selectable by the teacher."}),"\n",(0,i.jsx)(n.li,{children:"Blocks can now be added to quiz pages (to show results table, or additional information etc)"}),"\n",(0,i.jsx)(n.li,{children:"Better and cleaner interface for question selection and management in the database. Selected questions can be added to quiz, moved to other categories or deleted en mass."}),"\n",(0,i.jsx)(n.li,{children:"Random questions are now added to the quiz question list with a dedicated button, leaving a cleaner interface at questions database without phantom placeholders"}),"\n",(0,i.jsx)(n.li,{children:"Final grade can be a fractional number, with teacher-defined decimal figures"}),"\n",(0,i.jsx)(n.li,{children:"Improved results page with user-selectable display of columns, cleaner sorting and new mark display options"}),"\n",(0,i.jsx)(n.li,{children:"Questions can be edited with one click from the improved quiz preview and question preview screens."}),"\n",(0,i.jsx)(n.li,{children:"Questions can be copied with one click, to allow question variations to be created with ease."}),"\n",(0,i.jsx)(n.li,{children:"Revamped question categories structures and editing interface."}),"\n",(0,i.jsx)(n.li,{children:"Categories now can contain nested subcategories and can be re-ordered."}),"\n",(0,i.jsx)(n.li,{children:"It is possible to select whether questions from categories, and or their subcategories are displayed on the question edit page."}),"\n",(0,i.jsx)(n.li,{children:"It is now possible to select whether to add random questions from a parent category alone, or from a parent category and its sub-categories."}),"\n",(0,i.jsx)(n.li,{children:"Quiz creators are prevented from changing the question set of quizes that have had student responses."}),"\n",(0,i.jsx)(n.li,{children:"Recognition, and rejection, of overlapping/redundant questions has been improved."}),"\n",(0,i.jsx)(n.li,{children:"The display of questions in longer quiz categories on the quiz editing page is now paginated."}),"\n",(0,i.jsx)(n.li,{children:"New export types - IMS QTI (2.0) and xhtml. Improvements & fixes to others."}),"\n",(0,i.jsx)(n.li,{children:"New import type - Hot Potato. Improvements & fixes to others."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Scorm"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The module is now fully conformant with the SCORM 1.2 standard."}),"\n",(0,i.jsx)(n.li,{children:"User result data storage and reporting was improved."}),"\n",(0,i.jsx)(n.li,{children:"AICC packages can now be imported."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Survey"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Graph formatting has been improved (labels are more readable)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Wiki"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Changes to wiki pages are now monitored and displayed in Recent Activity block"}),"\n",(0,i.jsx)(n.li,{children:"Several under the hood improvements to backup/restore and other routines that enhance the reliability of wikis"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"translations",children:"Translations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.5",children:"Notes de mise \xe0 jour de Moodle 1.5"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);