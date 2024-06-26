"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[17341],{94380:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=s(74848),i=s(28453),r=s(78924);const o={title:"QA testing",sidebar_label:"Quality Assurance (QA)",description:"All the information related to the Qualify Assurance tests during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},l=void 0,d={id:"development/process/testing/qa",title:"QA testing",description:"All the information related to the Qualify Assurance tests during the Moodle development.",source:"@site/general/development/process/testing/qa.md",sourceDirName:"development/process/testing",slug:"/development/process/testing/qa",permalink:"/moodledevdocs/general/development/process/testing/qa",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/testing/qa.md",tags:[{label:"Processes",permalink:"/moodledevdocs/general/tags/processes"},{label:"Core development",permalink:"/moodledevdocs/general/tags/core-development"},{label:"Testing",permalink:"/moodledevdocs/general/tags/testing"},{label:"Quality assurance",permalink:"/moodledevdocs/general/tags/quality-assurance"}],version:"current",lastUpdatedBy:"Simey Lameze",lastUpdatedAt:1713756324e3,frontMatter:{title:"QA testing",sidebar_label:"Quality Assurance (QA)",description:"All the information related to the Qualify Assurance tests during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},sidebar:"process",previous:{title:"Integrated issues",permalink:"/moodledevdocs/general/development/process/testing/integrated-issues"},next:{title:"Testing in the app",permalink:"/moodledevdocs/general/development/process/testing/testing-lms-app"}},a={},h=[{value:"Getting involved",id:"getting-involved",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Any questions?",id:"any-questions",level:2},{value:"Moodle QA Testing Site",id:"moodle-qa-testing-site",level:2},{value:"Failed tests",id:"failed-tests",level:2},{value:"Resetting tests",id:"resetting-tests",level:2},{value:"Fixing existing bugs",id:"fixing-existing-bugs",level:2},{value:"Testing tips",id:"testing-tips",level:2},{value:"New QA tests required",id:"new-qa-tests-required",level:2},{value:"New features, and improvements",id:"new-features-and-improvements",level:3},{value:"Updating tests",id:"updating-tests",level:2},{value:"Writing new tests",id:"writing-new-tests",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Previous QA cycles",id:"previous-qa-cycles",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{frontMatter:o,metadata:d}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Quality Assurance"})," tests look at the functionality of Moodle from a user's point of view."]}),"\n",(0,n.jsx)(t.p,{children:"Real users systematically try each feature in Moodle and ensure that it works in the current version of the Moodle code. These tests are repeated in a series of cycles, around 4 - 6 weeks before each major release, once all major features have landed."}),"\n",(0,n.jsx)(t.h2,{id:"getting-involved",children:"Getting involved"}),"\n",(0,n.jsxs)(t.p,{children:["Would you like to help with QA testing? If so, please make sure you have created an account in the ",(0,n.jsx)(t.a,{href:"/moodledevdocs/general/development/tracker",children:"Moodle tracker"})," and you're subscribed to the ",(0,n.jsx)(t.a,{href:"https://moodle.org/mod/forum/view.php?id=56",children:"Testing and QA forum"})," in order to receive QA testing news updates."]}),"\n",(0,n.jsx)(t.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11454",children:"Moodle QA testing dashboard"})," and choose a test from the list of current QA cycle open issues. When viewing a test, if you wish, you can click the 'Assign to me' link on the right, so that nobody else chooses the same test to run. (If you then find you are unable to run the test, you can click the Assign button and set the assignee as 'Unassigned'.) Please note:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Only assign an issue to yourself which no one else is testing (Assignee = Unassigned)."}),"\n",(0,n.jsx)(t.li,{children:"Only assign one issue at a time unless you plan to test a number of related issues within the next 24 hours. In other words, don't assign several issues to yourself then do nothing for several days. ;-)"}),"\n",(0,n.jsxs)(t.li,{children:["The label ",(0,n.jsx)(t.code,{children:"test_server_required"})," indicates issues that can't be tested on the QA testing site. The label ",(0,n.jsx)(t.code,{children:"credentials_required"})," indicates that credentials such as an OAuth 2 service client ID and secret are required."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Using either the ",(0,n.jsx)(t.a,{href:"https://qa.moodledemo.net/",children:"Moodle QA Testing Site"})," or your own test site running the latest Moodle 4.2dev (available from Git on the integration/master branch git://git.moodle.org/integration.git) with ",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/dev/debugging",children:"debugging"})," set to developer, perform each of the steps listed in the test."]}),"\n",(0,n.jsxs)(t.li,{children:["Please ",(0,n.jsx)(t.em,{children:"attach screenshots of the steps where you verify or check something"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"If it makes sense, please test using the currently supported themes, Boost and Classic."}),"\n",(0,n.jsxs)(t.li,{children:["Choose an appropriate workflow action:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Pass"}),' - Test runs perfectly. Add comment such as feedback about a new feature, browsers used for testing (if applicable; example: "This test passes on Q&A site with Teacher role using Boost theme"), or simply "This test passes - yippee!"']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Fail"})," - Something doesn't work, or you obtain debugging messages. Add comment describing the step that doesn't work. If in doubt whether to pass a test, give it a fail and add a comment describing your doubts."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Obsolete"})," - Test is no longer relevant in the current Moodle version. Add comment explaining why."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Out of date tests",type:"info",children:(0,n.jsx)(t.p,{children:"If you notice that the test description is out-of-date, add a comment mentioning that it needs updating. Alternatively, if you'd like to help with updating the test yourself, see below."})}),"\n",(0,n.jsx)(t.h2,{id:"any-questions",children:"Any questions?"}),"\n",(0,n.jsx)(t.p,{children:"If there is anything you are unsure of, such as whether to mark a test as failed, or you have any other questions, please ask in one of the following places:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Moodle QA Matrix chat room - Come and join us as in the ",(0,n.jsxs)(t.a,{href:"https://matrix.to/#/#qa:moodle.com",children:["#qa",":moodle",".com"]})," room on Matrix."]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["This chat was previously hosted on Telegram. All message history has been migrated to Matrix, and our Matrix Bot keeps the two rooms in sync. If you'd prefer to stay with Telegram during the migration process, you can do so by joining the ",(0,n.jsx)(t.a,{href:"https://t.me/moodleqa",children:"#moodleqa"})," channel. To join the room for the first time, please use the ",(0,n.jsx)(t.a,{href:"https://t.me/+cXneE_ZeZ_A4ODRk",children:"Moodle QA Telegram invite link"})]}),(0,n.jsxs)(s,{children:[(0,n.jsxs)("summary",{children:["The Telegram ",(0,n.jsx)("em",{children:"Matrix bot"})," user"]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.p,{children:["If you are using Telegram to access the Moodle QA chat, you will notice the ",(0,n.jsx)(t.em,{children:"Matrix bot"})," posts on behalf of many users."]}),(0,n.jsxs)(t.p,{children:["Telegram prevents the bot from posting as another user, so all messages will come from ",(0,n.jsx)(t.em,{children:"Matrix bot"})," with the name of the actual sender as part of the message."]})]})]}),(0,n.jsx)(t.p,{children:"At this time we still support taking part in the discussion in either channel."})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://moodle.org/mod/forum/view.php?id=56",children:"Testing and QA forum"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"moodle-qa-testing-site",children:"Moodle QA Testing Site"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://qa.moodledemo.net/",children:"Moodle QA Testing Site"})," is updated daily at around 13:00 UTC with the latest bug fixes to enable you to re-run QA tests."]}),"\n",(0,n.jsx)(t.p,{children:"Credentials for Teacher and student accounts are provided on the login page."}),"\n",(0,n.jsxs)(t.admonition,{title:"E-mail on the QA site",type:"info",children:[(0,n.jsxs)(t.p,{children:["No e-mail will be sent from the QA server. Tests involving e-mail ",(0,n.jsx)(t.strong,{children:"cannot"})," be performed on the Moodle QA Testing Site."]}),(0,n.jsx)(t.p,{children:"If you perform any test which tries to send e-mail, a debugging message will be displayed."})]}),"\n",(0,n.jsx)(t.admonition,{title:"Admin access",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you require admin access to the Moodle QA Testing Site for running certain tests, please ask in the ",(0,n.jsx)(t.a,{href:"https://t.me/moodleqa",children:"Moodle QA Telegram chat room"})," or the ",(0,n.jsx)(t.a,{href:"https://moodle.org/mod/forum/view.php?id=56",children:"Testing and QA forum"})," for someone to send you the account credentials via private message."]})}),"\n",(0,n.jsx)(t.h2,{id:"failed-tests",children:"Failed tests"}),"\n",(0,n.jsx)(t.p,{children:"So you ran a test and it failed? Congratulations on finding a bug! Please do the following."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click the ",(0,n.jsx)(t.code,{children:"Fail"})," button at the top of the page."]}),"\n",(0,n.jsx)(t.li,{children:"Add a comment to the QA test stating that there was a problem and that you will report it as a Moodle bug."}),"\n",(0,n.jsxs)(t.li,{children:["Note the MDLQA number; it will be something like ",(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-448",children:"MDLQA-448"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Try searching for whether the bug has been reported previously, and if not create a new issue for it (as described in ",(0,n.jsx)(t.a,{href:"/moodledevdocs/general/development/tracker",children:"Tracker introduction"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"In the new Moodle (MDL) issue select 'Link' from the 'More actions' dropdown menu.\nLinking to the QA issue in the tracker"}),"\n",(0,n.jsx)(t.li,{children:"Link to the QA test by selecting 'blocks' as the link type, entering the MDLQA number that you noted earlier, and optionally adding a comment.\nAdding details for a link to the QA issue"}),"\n",(0,n.jsxs)(t.li,{children:["Give the issue the label ",(0,n.jsx)(t.code,{children:"mdlqa"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"(Optional) Add yourself as a watcher to the MDL issue so that you receive email notification when the issue is fixed."}),"\n",(0,n.jsx)(t.li,{children:"When the MDL issue is fixed, hopefully within a day or two, the QA test can be reset and can then be run again."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resetting-tests",children:"Resetting tests"}),"\n",(0,n.jsxs)(t.admonition,{title:"Note for integrators",type:"info",children:[(0,n.jsx)(t.p,{children:"After integrating a fix:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Reset"})," the MDLQA test, adding a comment."]}),"\n",(0,n.jsxs)(t.li,{children:["Remove the ",(0,n.jsx)(t.code,{children:"mdlqa"})," label from the MDL issue."]}),"\n",(0,n.jsx)(t.li,{children:'If the issue doesn\'t have testing instructions, pass it with message "Will be tested by MDLQA-XXXX".'}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:"The tester will then receive email notification that the bug is fixed and will hopefully decide to run the test again soon."}),"\n",(0,n.jsx)(t.h2,{id:"fixing-existing-bugs",children:"Fixing existing bugs"}),"\n",(0,n.jsx)(t.p,{children:"At the beginning of the QA cycle, all bugs identified (both new and existing) are investigated promptly and hopefully fixed."}),"\n",(0,n.jsx)(t.p,{children:"When we are close to the scheduled release date (1-2 weeks prior), developers must focus on fixing new bugs (which affect the upcoming release version) only."}),"\n",(0,n.jsxs)(t.p,{children:["Thus, at this point in the QA cycle, any bugs which also affect existing versions of Moodle are labelled ",(0,n.jsx)(t.code,{children:"qa_identified"})," (and the label ",(0,n.jsx)(t.code,{children:"mdlqa"})," removed) for investigation after the release."]}),"\n",(0,n.jsx)(t.h2,{id:"testing-tips",children:"Testing tips"}),"\n",(0,n.jsx)(t.p,{children:"When entering text into a form, try things like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"&"})," (ampersand), ",(0,n.jsx)(t.code,{children:">"})," (greater than) or ",(0,n.jsx)(t.code,{children:"<"})," (less than)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"0"})," (the single digit 0)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'"})," (single quote)"]}),"\n",(0,n.jsx)(t.li,{children:"special characters"}),"\n",(0,n.jsx)(t.li,{children:"very long strings"}),"\n",(0,n.jsx)(t.li,{children:"different languages, such as a RTL language"}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{title:"For example:",type:"tip",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"x < 1 && x > 0\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Fergal.O'Brien@example.com\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"caf\xe9\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\u56f2\u7881\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"new-qa-tests-required",children:"New QA tests required"}),"\n",(0,n.jsxs)(t.admonition,{title:"Note for developers",type:"info",children:[(0,n.jsx)(t.p,{children:"If an issue fix cannot be covered by automated tests,"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the label ",(0,n.jsx)(t.code,{children:"qa_test_required"})," to the issue."]}),"\n",(0,n.jsx)(t.li,{children:"Add a comment explaining why it can't be covered by automated tests and suggesting which steps of the testing instructions should be included in a QA test e.g. steps 6-10 or all steps."}),"\n"]})]}),"\n",(0,n.jsxs)(t.p,{children:["QA tests will then be written and included in the next QA cycle. For issues with long testing instructions, several QA tests will be written to cover the issue. If appropriate, activities etc. will be set up on the ",(0,n.jsx)(t.a,{href:"https://qa.moodledemo.net/",children:"Moodle QA Testing Site"})," to enable the issue to be easily tested in future."]}),"\n",(0,n.jsx)(t.h3,{id:"new-features-and-improvements",children:"New features, and improvements"}),"\n",(0,n.jsx)(t.p,{children:"Where a new features or improvements would benefit from exploratory testing, you should:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the label ",(0,n.jsx)(t.code,{children:"qa_test_required"})," to the issue."]}),"\n",(0,n.jsx)(t.li,{children:"Add a comment mentioning that exploratory testing is required."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When the next QA cycle is prepared, any issue with the ",(0,n.jsx)(t.code,{children:"qa_test_required"})," label will be reviewed and appropriate ",(0,n.jsx)(t.strong,{children:"exploratory QA tests"})," written, before the label is then removed."]})}),"\n",(0,n.jsx)(t.h2,{id:"updating-tests",children:"Updating tests"}),"\n",(0,n.jsx)(t.p,{children:"QA tests may become out-of-date due to User Interface changes, feature changes, and new features. If you would like to help with updating tests, you'll need to be a member of the test writers group in the Tracker."}),"\n",(0,n.jsx)(t.p,{children:"To update a QA test original:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Search for the test in ",(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-1",children:"MDLQA-1"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Edit the test description."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If a test in the current QA cycle is marked as failed because it is out-of-date, the description should be updated (as well as the test original) before resetting the test. If the test in the current QA cycle is marked as passed, then only the test original needs to be updated."})}),"\n",(0,n.jsx)(t.h2,{id:"writing-new-tests",children:"Writing new tests"}),"\n",(0,n.jsx)(t.p,{children:"Would you like to help with writing new QA tests? To write new QA tests you will need to be a member of the test writers group in the Tracker."}),"\n",(0,n.jsx)(t.p,{children:"QA tests are needed for any features which can't be tested with automated testing, such as connecting to an external system, drag and drop functionality or a CLI script. Also if it requires a person to detect if something is 'correct' vs. present/absent on the page."}),"\n",(0,n.jsx)(t.p,{children:"In addition, new features can benefit from exploratory testing by community volunteers."}),"\n",(0,n.jsx)(t.p,{children:"To create a new QA test:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["If appropriate, do a quick search of ",(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-1",children:"MDLQA-1"})," to check if there is an existing test which can be updated."]}),"\n",(0,n.jsxs)(t.li,{children:["If not, in ",(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-1",children:"MDLQA-1"})," from the More menu select 'Create sub-task'."]}),"\n",(0,n.jsx)(t.li,{children:"Enter a summary such as 'A teacher can ...'."}),"\n",(0,n.jsx)(t.li,{children:"Select 'Original' as affected version and select appropriate components."}),"\n",(0,n.jsxs)(t.li,{children:["In the description field add the test steps (usually between 3 and 10), similar to the issue's ",(0,n.jsx)(t.a,{href:"./guide",children:"testing instructions"}),", starting with 'Log in as a teacher...' or similar. It's a good idea to try doing the steps yourself as you write the test."]}),"\n",(0,n.jsx)(t.li,{children:"Start some steps with 'Verify that ...' or similar."}),"\n",(0,n.jsx)(t.li,{children:"Click the Create button."}),"\n",(0,n.jsx)(t.li,{children:"Go to the MDL issue and create a 'has a QA test' link to the new QA test, adding a comment \"This feature is now covered by the QA test MDLQA....\"."}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Add the label ",(0,n.jsx)(t.code,{children:"new"})]}),"\n",(0,n.jsxs)(t.li,{children:["For tests which can't be run on the QA testing site, such as ones where you need to check an email, label ",(0,n.jsx)(t.code,{children:"test_server_required"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["For OAuth 2 tests and any other tests which require a client ID or secret to be entered, label ",(0,n.jsx)(t.code,{children:"credentials_required"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"For issues which specifically mention in the testing instructions to test in different browsers, use the phrase:"}),"\n"]}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Test in as many browsers as possible and mention in a comment which ones you've used."}),"\n"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For an exploratory test, begin the test description with:"}),"\n"]}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"This is an exploratory test of a new feature or improvement, so please feel free to try anything you like and not just the test steps!"}),"\n"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For a test requiring admin access which can be run on the QA site, add:"}),"\n"]}),(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This test requires admin access. If you would like to use the [QA testing site|",(0,n.jsx)(t.a,{href:"https://qa.moodledemo.net/",children:"https://qa.moodledemo.net/"}),"]"," for running it, please see the [QA testing guide|",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/dev/QA_testing",children:"https://docs.moodle.org/dev/QA_testing"}),"]"," for details of how to request admin access. Begin just after the hourly reset to give yourself plenty of time to complete the test!"]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,n.jsx)(t.p,{children:"Feedback on all aspects of our QA testing process is welcome."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you have any questions or comments, please post in the ",(0,n.jsx)(t.a,{href:"https://moodle.org/mod/forum/view.php?id=56",children:"Testing and QA forum"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"previous-qa-cycles",children:"Previous QA cycles"}),"\n",(0,n.jsx)(t.p,{children:"Comments on tests from previous QA cycles:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-150",children:"Moodle 2.0 QA Cycle 1"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-328",children:"Moodle 2.0 QA Cycle 2"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-540",children:"Moodle 2.0.2 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-944",children:"Moodle 2.1 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-1190",children:"Moodle 2.2 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-1814",children:"Moodle 2.3 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-4602",children:"Moodle 2.4 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-5267",children:"Moodle 2.5 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-5740",children:"Moodle 2.6 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-6693",children:"Moodle 2.7 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-7170",children:"Moodle 2.8 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-7660",children:"Moodle 2.9 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-8205",children:"Moodle 3.0 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-9267",children:"Moodle 3.1 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-9827",children:"Moodle 3.2 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-10403",children:"Moodle 3.3 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-10999",children:"Moodle 3.4 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-11698",children:"Moodle 3.5 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-12282",children:"Moodle 3.6 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-12911",children:"Moodle 3.7 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-13517",children:"Moodle 3.8 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-14131",children:"Moodle 3.9 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-14813",children:"Moodle 3.10 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-15457",children:"Moodle 3.11 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-16122",children:"Moodle 4.0 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-16759",children:"Moodle 4.1 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-17385",children:"Moodle 4.2 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-17933",children:"Moodle 4.3 QA"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MDLQA-18443",children:"Moodle 4.4 QA"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11454",children:"QA testing dashboard"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/moodledevdocs/general/community/credits/testing",children:"Testing credits"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://moodle.org/mod/forum/discuss.php?d=351302",children:"Useful tips for QA testing"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);