"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[22954],{12750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(74848),o=n(28453),i=n(78924);const a={title:"Acceptance testing for the Moodle App",sidebar_label:"Acceptance testing",sidebar_position:2,tags:["Quality Assurance","Testing","Behaviour testing","Behat","Moodle App"]},r=void 0,l={id:"app/development/testing/acceptance-testing",title:"Acceptance testing for the Moodle App",description:"In order to run tests that carry out automated functionality testing for the Moodle App, you can write Acceptance tests. This can be useful if you want to test plugins that are compatible with the app, or you're contributing to the app core. Behat tests for the app work the same way as tests for Moodle core, but they are not run as part of a normal Behat execution and there are some differences that we'll go through in this page.",source:"@site/general/app/development/testing/acceptance-testing.md",sourceDirName:"app/development/testing",slug:"/app/development/testing/acceptance-testing",permalink:"/moodledevdocs/general/app/development/testing/acceptance-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app/development/testing/acceptance-testing.md",tags:[{label:"Quality Assurance",permalink:"/moodledevdocs/general/tags/quality-assurance"},{label:"Testing",permalink:"/moodledevdocs/general/tags/testing"},{label:"Behaviour testing",permalink:"/moodledevdocs/general/tags/behaviour-testing"},{label:"Behat",permalink:"/moodledevdocs/general/tags/behat"},{label:"Moodle App",permalink:"/moodledevdocs/general/tags/moodle-app"}],version:"current",lastUpdatedBy:"Noel De Martin",lastUpdatedAt:171938779e4,sidebarPosition:2,frontMatter:{title:"Acceptance testing for the Moodle App",sidebar_label:"Acceptance testing",sidebar_position:2,tags:["Quality Assurance","Testing","Behaviour testing","Behat","Moodle App"]},sidebar:"moodleapp",previous:{title:"Unit testing",permalink:"/moodledevdocs/general/app/development/testing/unit-testing"},next:{title:"Continuous Integration",permalink:"/moodledevdocs/general/app/development/testing/continuous-integration"}},h={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuring the Moodle site",id:"configuring-the-moodle-site",level:3},{value:"Configuring the Moodle App",id:"configuring-the-moodle-app",level:3},{value:"Configuring Behat",id:"configuring-behat",level:3},{value:"Running Behat",id:"running-behat",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Test structure",id:"test-structure",level:3},{value:"Start the app",id:"start-the-app",level:3},{value:"Log in to the app",id:"log-in-to-the-app",level:3},{value:"Standard steps",id:"standard-steps",level:3},{value:"Actions",id:"actions",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Leaving the app",id:"leaving-the-app",level:3},{value:"A complete example",id:"a-complete-example",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Testing against multiple app versions",id:"testing-against-multiple-app-versions",level:3},{value:"Debugging tests",id:"debugging-tests",level:3},{value:"Writing custom steps",id:"writing-custom-steps",level:3},{value:"Testing graphical regressions",id:"testing-graphical-regressions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"General advice",id:"general-advice",level:3},{value:"Unable to load app version from https://localhost:8100/assets/env.json",id:"unable-to-load-app-version-from-httpslocalhost8100assetsenvjson",level:3},{value:"The plugins required by this course could not be loaded correctly...",id:"the-plugins-required-by-this-course-could-not-be-loaded-correctly",level:3},{value:"Fatal error: Maximum execution time of 30 seconds exceeded in...",id:"fatal-error-maximum-execution-time-of-30-seconds-exceeded-in",level:3},{value:"Test fails because of the browser language",id:"test-fails-because-of-the-browser-language",level:3},{value:"Application build gets killed without any error information",id:"application-build-gets-killed-without-any-error-information",level:3},{value:"MacOS: running moodle-docker commands show grep usage options and do nothing else",id:"macos-running-moodle-docker-commands-show-grep-usage-options-and-do-nothing-else",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{frontMatter:a,metadata:l}),"\n",(0,s.jsxs)(t.p,{children:["In order to run tests that carry out automated functionality testing for the Moodle App, you can write ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/development/tools/behat/",children:"Acceptance tests"}),". This can be useful if you want to test plugins that are compatible with the app, or you're contributing to the app core. Behat tests for the app work the same way as tests for Moodle core, but they are not run as part of a normal Behat execution and there are some differences that we'll go through in this page."]}),"\n",(0,s.jsxs)(t.p,{children:["A key point is that these tests are run using the Moodle Behat infrastructure, and don't depend only on the app codebase. Therefore, you will need a Moodle development setup as described in ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/development/gettingstarted",children:"Setting up development environment"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The main advantages of this approach are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It is easy for third-party plugin authors to create tests for app features in exactly the same way that they create tests for website features."}),"\n",(0,s.jsx)(t.li,{children:"Where institutions run tests automatically, it should be relatively easy to include some app tests within the existing approach."}),"\n",(0,s.jsx)(t.li,{children:"This system does not require any mobile device hardware and should work on all common platforms."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"In order to run tests for the app, you will need to run both a Moodle site and the Moodle App."}),"\n",(0,s.jsxs)(t.p,{children:["You need to install the ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-local_moodleappbehat/",children:(0,s.jsx)(t.code,{children:"local_moodleappbehat"})})," plugin, using the version that corresponds with the version of the Moodle App that you're testing on. If you have tests for an older version, you can read ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/app/upgrading/acceptance-tests-upgrade-guide",children:"How to upgrade tests from an older version"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We recommend that you use ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker#use-containers-for-running-behat-tests-for-the-mobile-app",children:"moodle-docker"}),", because it's configured to run mobile tests and you can skip reading this entire section. You won't even need to clone the app repository."]}),"\n",(0,s.jsx)(t.p,{children:"Nevertheless, if you still have to run the projects in your local machine, you can read the following instructions."}),"\n",(0,s.jsx)(t.h3,{id:"configuring-the-moodle-site",children:"Configuring the Moodle site"}),"\n",(0,s.jsxs)(t.p,{children:["You can learn how to run a Moodle site locally in ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/development/gettingstarted",children:"Setting up development environment"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Remember to install the ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-local_moodleappbehat/",children:(0,s.jsx)(t.code,{children:"local_moodleappbehat"})})," plugin with the same version that you're using for the mobile app."]}),"\n",(0,s.jsx)(t.h3,{id:"configuring-the-moodle-app",children:"Configuring the Moodle App"}),"\n",(0,s.jsxs)(t.p,{children:["If you are going to modify the application code, you can learn how to run it locally in ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/app/development/setup/",children:"Setting up your development environment for the Moodle App"}),". You only need to run the application in a browser, so you can skip the instructions for Android/iOS. Make sure to launch the application on the testing environment, running ",(0,s.jsx)(t.code,{children:"npm run serve:test"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you only intend to run the app with the goal of executing Behat tests, you can use ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/app/development/setup/docker-images",children:"the Docker images for the Mobile App"}),". Again, make sure that you're running them on the testing environment using the ",(0,s.jsx)(t.code,{children:"-test"})," suffix."]}),"\n",(0,s.jsx)(t.p,{children:"However you set up the environment, if you change the version of the app you'll need to re-run the Behat init command so that your Moodle site knows about it."}),"\n",(0,s.jsx)(t.h3,{id:"configuring-behat",children:"Configuring Behat"}),"\n",(0,s.jsxs)(t.p,{children:["In order to enable app testing, you need to add the following configuration to your site's ",(0,s.jsx)(t.code,{children:"config.php"})," file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"$CFG->behat_ionic_wwwroot = 'https://localhost:8100';\n"})}),"\n",(0,s.jsx)(t.p,{children:"The url you use here must be reachable by your Moodle site, and the application needs to be served at this url when running tests and also when you initialise the Behat environment."}),"\n",(0,s.jsxs)(t.p,{children:["The Moodle App ",(0,s.jsx)(t.a,{href:"../setup/app-in-browser",children:"only works in Chromium-based browsers"}),", so mobile tests will be ignored if you are using any other browser. You can learn how to configure the browser used in your tests in the ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/development/tools/behat/running",children:"Running acceptance test"})," page."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, the app must run in a secure context and will issue local certificates during development. This aren't usually trusted by browsers out of the box, so you'll need to disable some security capabilities to make it work:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"$CFG->behat_profiles = [\n    'default' => [\n        'browser' => 'chrome', // Make sure it's version 102 or newer.\n        'wd_host' => 'http://localhost:4444/wd/hub',\n        'capabilities' => [\n            'extra_capabilities' => [\n                'chromeOptions' => [\n                    'args' => [\n                        '--ignore-certificate-errors',\n                        '--allow-running-insecure-content',\n                    ],\n                ],\n            ],\n        ],\n    ],\n];\n"})}),"\n",(0,s.jsxs)(t.p,{children:['If everything is configured properly, you should see "Configured app tests for version X.X.X" after running ',(0,s.jsx)(t.code,{children:"admin/tool/behat/cli/init.php"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"running-behat",children:"Running Behat"}),"\n",(0,s.jsxs)(t.p,{children:["To run mobile tests in Behat, simply launch Behat in the usual way. The app tests all have the ",(0,s.jsx)(t.code,{children:"@app"})," tag, so if you want to run all the mobile tests you can use ",(0,s.jsx)(t.code,{children:"--tags=@app"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It is OK to combine mobile and web tests in the same run."}),"\n",(0,s.jsxs)(t.p,{children:["If you're writing core tests or modifying the app's custom steps, you can run one of the following commands to generate the ",(0,s.jsx)(t.code,{children:"local_moodleappbehat"})," plugin automatically."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"# Generate local_moodleappbehat once.\nnpx gulp behat\n\n# Regenerate local_moodleappbehat when a test or behat file changes.\nnpx gulp watch-behat\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker",children:"moodle-docker"}),", this should guess your plugins path automatically. If you haven't or prefer to use another location, you can always set the ",(0,s.jsx)(t.code,{children:"MOODLE_APP_BEHAT_PLUGIN_PATH"})," env variable."]}),"\n",(0,s.jsx)(t.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,s.jsxs)(t.p,{children:["This page assumes you already know all about ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/development/tools/behat/writing",children:"Writing acceptance tests"})," in general."]}),"\n",(0,s.jsx)(t.h3,{id:"test-structure",children:"Test structure"}),"\n",(0,s.jsxs)(t.p,{children:["Mobile app test scenarios should be marked ",(0,s.jsx)(t.code,{children:"@app"})," and ",(0,s.jsx)(t.code,{children:"@javascript"})," in addition to any other tags."]}),"\n",(0,s.jsx)(t.p,{children:"You are writing a normal Behat test and this is likely to require background steps, such as creating courses, users, groups, etc."}),"\n",(0,s.jsx)(t.h3,{id:"start-the-app",children:"Start the app"}),"\n",(0,s.jsx)(t.p,{children:"When you want to get started testing the application, you can use the following step to launch the application:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"Given I enter the app\n"})}),"\n",(0,s.jsx)(t.p,{children:"This will:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Set up all the Moodle server settings to allow the Moodle App to connect."}),"\n",(0,s.jsx)(t.li,{children:"Restart the browser, this is needed to ensure that it doesn't use data from previous runs."}),"\n",(0,s.jsx)(t.li,{children:"Set the browser to a suitable phone size (you can change it with other steps if you want a tablet or a different size)."}),"\n",(0,s.jsx)(t.li,{children:"Open the app in the test browser."}),"\n",(0,s.jsx)(t.li,{children:"Inject the necessary JavaScript code to support Behat testing."}),"\n",(0,s.jsx)(t.li,{children:"Skip the onboarding and enter the site url in the initial screens of the app, if necessary."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After this step completes, if it is the first time you ran the app inside this scenario, you will be at the login screen. If you logged in earlier, you will be at the start page."}),"\n",(0,s.jsx)(t.p,{children:"You can also use this step if you are already using the app and it will restart it."}),"\n",(0,s.jsx)(t.h3,{id:"log-in-to-the-app",children:"Log in to the app"}),"\n",(0,s.jsx)(t.p,{children:"To log in, you can use the following step:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I log in as "student"\n'})}),"\n",(0,s.jsx)(t.p,{children:"This is the same step that's used to log into standard Moodle, and it works in the app as well. You should have created the user in background steps, and it will log in using the text as both username and password."}),"\n",(0,s.jsx)(t.p,{children:"You will then be left at the start page."}),"\n",(0,s.jsx)(t.h3,{id:"standard-steps",children:"Standard steps"}),"\n",(0,s.jsxs)(t.p,{children:["Technically, you can use any standard Behat action in the app. However, most of them will probably not work as you expect because the app runs on a different environment. It is still a website, but it's built using ",(0,s.jsx)(t.a,{href:"https://ionicframework.com/docs/",children:"Ionic Framework"}),"."]}),"\n",(0,s.jsx)(t.p,{children:'One important problem is that the app has a complex DOM, and previous pages that are "back" from your current page may still be present in the DOM. Which means that any steps that just look for the first matching element in the DOM are likely to look for elements on a page you\'re not even on.'}),"\n",(0,s.jsxs)(t.p,{children:["Another issue is that Ionic relies heavily on ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",children:"the Shadow DOM"}),", and most steps in standard Moodle are not prepared to handle that."]}),"\n",(0,s.jsx)(t.p,{children:'For these and other reasons, there are some steps that have been implemented specifically for the app. You can distinguish them from others because most of them end with "in the app".'}),"\n",(0,s.jsx)(t.p,{children:"Having said that, here's a list of steps that work and you can use reliably."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any step you normally need to set up information in Moodle \u2014 For example, creating courses, users, etc."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'I change viewport size to "{width}x{height}"'})," \u2014 You can use this step to simulate switching between portrait and landscape formats."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"I pause"})," \u2014 This step works and it is very useful to debug your scenario."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I press "Course 1" in the app\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This will click an element found using accessibility rules, so it could be visible text, content inside ",(0,s.jsx)(t.code,{children:"aria-label"}),", content described by ",(0,s.jsx)(t.code,{children:"ara-labelledby"}),", etc. It should work for links, buttons and other clickable elements."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I press "Course 1" near "Unique text" in the app\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use this step to narrow matches if the text you're providing is duplicated throughout the page."}),"\n",(0,s.jsx)(t.p,{children:'The second value, "Unique text" in this example, should be unique on the page. Otherwise, you may have issues finding the element that you seek. The system will press the element matching your text that is nearest to the one found using the unique text.'}),"\n",(0,s.jsx)(t.p,{children:"Nearest is defined in terms of the DOM rather than pixel position; it is based on the number of steps you would have to take up the tree from the candidate element before you get to a shared ancestor with the unique text."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I select "Item 1" in the app\nWhen I select "Item 1" near "Unique text" in the app\nWhen I unselect "Item 1" in the app\nWhen I unselect "Item 1" near "Unique text" in the app\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use these steps to select or unselect radio buttons, check boxes, and such."}),"\n",(0,s.jsxs)(t.p,{children:["You could use the previous ",(0,s.jsx)(t.code,{children:"I press"})," step as well, but in some cases you will notice that it doesn't work as you expect. This is due to some internal quirks of how Ionic renders these components, so prefer using this specific steps where possible."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I set the field "field name" to "text value" in the app\nWhen I set the field "field name" near "Unique text" to "text value" in the app\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This sets a text field with the given value. The same rules will apply to find the input element as for clicking, so using the input name will not suffice. This is in order to encourage accessibility best practices. The only difference with the previous step is that this only matches fillable elements such as ",(0,s.jsx)(t.code,{children:"<input>"}),", ",(0,s.jsx)(t.code,{children:"<textarea>"})," and elements with ",(0,s.jsx)(t.code,{children:'contenteditable="true"'}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"When I press the back button in the app\nWhen I press the more menu button in the app\nWhen I press the page menu button in the app\nWhen I press the user menu button in the app\n"})}),"\n",(0,s.jsx)(t.p,{children:"These steps will press, respectively:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"back button"})," \u2014 This is the left pointing arrow at top left of the app."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"more menu"})," button \u2014 This is the icon with at bottom right of the app."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"page menu"})," button, if present \u2014 This is the icon with the three dots at top right of the app."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"user menu"})," button, if present \u2014 This is the avatar button at top right of the app present on navigation level 1."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"When I switch to the browser tab opened by the app\nWhen I close the browser tab opened by the app\n"})}),"\n",(0,s.jsx)(t.p,{children:"These two steps are necessary if you want to test the transition between the app and a browser."}),"\n",(0,s.jsx)(t.p,{children:'For example, after pressing "Open in browser" you can use the first step above, and you will be able to use normal Moodle Behat steps to work in the browser tab. Once you\'re finished, you can use the second step to go back to the app.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'When I upload "stub1.txt" to "File" ".action-sheet-button" in the app\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This step can be used to set files on a file input in the app. The stub file should be placed in a ",(0,s.jsx)(t.code,{children:"fixtures/"})," folder at the same level than the ",(0,s.jsx)(t.code,{children:".feature"})," file."]}),"\n",(0,s.jsx)(t.h3,{id:"assertions",children:"Assertions"}),"\n",(0,s.jsx)(t.p,{children:"Like actions, there are some Behat assertions that are specific to the app."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'Then I should find "Course 1" in the app\nThen I should find "Course 1" near "Unique text" in the app\nThen I should not find "Course 1" in the app\nThen I should not find "Course 1" near "Unique text" in the app\n'})}),"\n",(0,s.jsx)(t.p,{children:"These steps can be used to assert that the specified text exists somewhere in the app."}),"\n",(0,s.jsxs)(t.p,{children:["Notice that the standard ",(0,s.jsx)(t.code,{children:"I should see"})," step may not work in the app because of the Shadow DOM. This step will also search using accessibility rules, so text within ",(0,s.jsx)(t.code,{children:"aria-label"})," or described with ",(0,s.jsx)(t.code,{children:"aria-labelledby"})," will work as well."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'Then the header should be "Course 1" in the app\n'})}),"\n",(0,s.jsx)(t.p,{children:"This checks the text of the current page header. It must be an exact match for the specified text."}),"\n",(0,s.jsxs)(t.p,{children:["You could have used the ",(0,s.jsx)(t.code,{children:"I should find"})," step described previously, but this allows you to specifically check the header as opposed to anything in the page."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'Then "Item 1" should be selected in the app\nThen "Item 1" near "Unique text" should be selected in the app\nThen "Item 1" should not be selected in the app\nThen "Item 1" near "Unique text" should not be selected in the app\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can use these steps to assert whether radio buttons, check boxes, and such are selected or not."}),"\n",(0,s.jsx)(t.h3,{id:"leaving-the-app",children:"Leaving the app"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to leave the app and go back to Moodle within a scenario, simply use a Moodle step that goes to a page. For example, use ",(0,s.jsx)(t.code,{children:"I am on site homepage"})," or ",(0,s.jsx)(t.code,{children:'I am on "Course 1" course homepage'}),"."]}),"\n",(0,s.jsx)(t.p,{children:"You only need to do this if you want to carry out actions within Moodle after using the app, within the scenario. At the end of your scenario, there is no need to explicitly leave the app; Moodle will automatically start the next scenario on the Moodle start page as usual."}),"\n",(0,s.jsx)(t.h3,{id:"a-complete-example",children:"A complete example"}),"\n",(0,s.jsx)(t.p,{children:"This example is a complete feature file that loads the app, opens a course, and asserts that the app is showing the course page:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'@app @javascript\nFeature: Test app (demo)\n  In order to test something in the app\n  As a developer\n  I need for this test script to run the app\n\n  Background:\n    Given the following "courses" exist:\n      | fullname | shortname |\n      | Course 1 | C1        |\n    And the following "users" exist:\n      | username |\n      | student  |\n    And the following "course enrolments" exist:\n      | user     | course | role    |\n      | student  | C1     | student |\n\n  Scenario: Try going into the course\n    When I enter the app\n    And I log in as "student"\n    And I press "Course 1" near "Course overview" in the app\n    Then the header should be "Course 1" in the app\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can find more complex examples looking at the ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodleapp/blob/latest/src/core/features/login/tests/behat/signup.feature",children:"tests for the app core"})," (search for files ending with ",(0,s.jsx)(t.code,{children:"*.feature"}),")."]}),"\n",(0,s.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(t.p,{children:"Using this approach, there are some limitations you should be aware of:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Lack of native functionality \u2014 Fundamentally, it is not possible to test behaviour specific to native devices because tests are run in a browser."}),"\n",(0,s.jsxs)(t.li,{children:["Missing functionality \u2014 There are some known limitations and unsupported features, for example there is currently no obvious way to attach files. Some of these are possible, but they haven't been implemented yet. If something is missing for your use-case, you can submit feature requests in ",(0,s.jsx)(t.a,{href:"https://tracker.moodle.org/browse/MOBILE",children:"the tracker"})," using the ",(0,s.jsx)(t.code,{children:"Behat"})," component."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsx)(t.h3,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsx)(t.p,{children:"Behat tests can relate to particular versions of the mobile app. For these situations, there are two types of tags you can add to your scenario or feature:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"@app_from{version}"})," \u2014 These will be included in every app matching the specified version and newer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"@app_upto{version}"})," \u2014 These will be included in every app matching the specified version and older."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can use two-digit or three-digit version numbers. For example, you could use ",(0,s.jsx)(t.code,{children:"@app_from4.0"})," or ",(0,s.jsx)(t.code,{children:"@app_upto3.9.5"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind that these tags will only take effect after using the ",(0,s.jsx)(t.code,{children:"I enter the app"})," step, so it won't be effective for skipping steps in your Background blocks. If you need to skip these as well, you can do it using the following step:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:'  Background:\n    Given the Moodle site is compatible with this feature\n    And the following "courses" exist:\n'})}),"\n",(0,s.jsx)(t.p,{children:"Also, after changing the app version used for testing, make sure you re-run Behat init. It is the initialisation process that stores which version of the app you're using."}),"\n",(0,s.jsx)(t.h3,{id:"testing-against-multiple-app-versions",children:"Testing against multiple app versions"}),"\n",(0,s.jsx)(t.p,{children:"If you need to run tests against multiple versions of the app, you can do it in two ways:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Update the code in the app workspace by checking out a different version."}),"\n",(0,s.jsxs)(t.li,{children:["Maintain multiple copies of the mobile app workspace and switch between them by changing ",(0,s.jsx)(t.code,{children:"config.php"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In both cases, you'll need to re-run the Behat init command and run the tests again."}),"\n",(0,s.jsx)(t.p,{children:"Unfortunately, the only way to run this in parallel is to have separate Moodle installations with their own configurations."}),"\n",(0,s.jsx)(t.h3,{id:"debugging-tests",children:"Debugging tests"}),"\n",(0,s.jsxs)(t.p,{children:["If you pause a test (for example, using the ",(0,s.jsx)(t.code,{children:'I wait "2000" seconds'})," step) and open the developer tools, you can debug the application like you would during development. You can learn how to do that in ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/app/development/setup/app-in-browser",children:"Using the Moodle App in a browser"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, you can see log information in the console about which Behat steps have been carried out so far, and whether Behat is waiting for anything. Here is an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"VM649:391 BEHAT: 17:45:15.477 Action - Set field Username to: student2\nVM649:391 BEHAT: 17:45:15.480 PENDING+: DELAY,dom-mutation\nVM649:391 BEHAT: 17:45:15.982 PENDING-: DELAY\nVM649:391 BEHAT: 17:45:16.28 PENDING-:\nVM649:391 BEHAT: 17:45:16.98 Action - Set field Password to: student2\nVM649:391 BEHAT: 17:45:16.106 PENDING+: DELAY,dom-mutation\nVM649:391 BEHAT: 17:45:16.607 PENDING-: DELAY\nVM649:391 BEHAT: 17:45:16.653 PENDING-:\n"})}),"\n",(0,s.jsxs)(t.p,{children:["While the test is paused, you can also carry out some of the app Behat steps manually by typing commands into the console, which is convenient if you're not quite sure what command would work. You can find which commands are available in the ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodleapp/tree/latest/src/testing/services/behat-runtime.ts",children:"behat-runtime.ts"})," file."]}),"\n",(0,s.jsx)(t.p,{children:"Here are some examples:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// I set the field \"Password\" to \"student2\" in the app\nbehat.setField('Password', 'student2');\n\n// I press \"Log in\" near \"Forgotten\" in the app\nbehat.press('Log in', 'Forgotten');\n\n// I press the back button in the app\nbehat.pressStandard('back');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.code,{children:"moodle-docker"}),", remember that you can interact with the browser ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker#using-vnc-to-view-behat-tests",children:"using VNC"}),". With a VNC client you can view in real-time what behat is doing in the browser."]}),"\n",(0,s.jsx)(t.h3,{id:"writing-custom-steps",children:"Writing custom steps"}),"\n",(0,s.jsx)(t.p,{children:"If you find something missing to test your code, you can always implement custom steps."}),"\n",(0,s.jsxs)(t.p,{children:["If you're writing a plugin, you can include a new class under ",(0,s.jsx)(t.code,{children:"tests/behat/behat\\_{yourpluginname}.php"}),". If you're working on application code, you can always update ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodleapp/blob/latest/local_moodleappbehat/tests/behat/behat_app.php",children:"behat_app.php"})," as well."]}),"\n",(0,s.jsxs)(t.p,{children:["You can learn more about writing custom steps in the ",(0,s.jsx)(t.a,{href:"https://docs.moodle.org/dev/Writing_new_acceptance_test_step_definitions",children:"Writing new acceptance test step definitions"})," page, and if you want to see how the steps that are specific to the app work, you should look into ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodleapp/blob/latest/local_moodleappbehat/tests/behat/behat_app.php",children:"behat_app.php"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodleapp/tree/latest/src/testing/services/behat-runtime.ts",children:"behat-runtime.ts"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"testing-graphical-regressions",children:"Testing graphical regressions"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to test against graphical regressions, you can use the ",(0,s.jsx)(t.a,{href:"https://github.com/NoelDeMartin/moodle-local_behatsnapshots/",children:"local_behatsnapshots"})," plugin. It allows you to store UI snapshots in your repository and check against them every time Behat tests are run:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"Given I enter the app\nThen the UI should match the snapshot\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Learn more about it in the ",(0,s.jsx)(t.a,{href:"https://github.com/NoelDeMartin/moodle-local_behatsnapshots/#behat-snapshots-plugin",children:"plugin documentation"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.h3,{id:"general-advice",children:"General advice"}),"\n",(0,s.jsx)(t.p,{children:"If you are stuck with an error and you can't find a way to continue, here's a list of things you can do:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure you added ",(0,s.jsx)(t.code,{children:'$CFG->behat_ionic_wwwroot = "https://localhost:8100";'})," (or equivalent) to your ",(0,s.jsx)(t.code,{children:"config.php"})," file, and that url is reachable from the host where your Moodle site is running."]}),"\n",(0,s.jsxs)(t.li,{children:["Remember when you need to re-run ",(0,s.jsx)(t.code,{children:"admin/tool/behat/cli/init.php"}),', and make sure that you see "Configured app tests for version X.X.X". When in doubt, just run it again; it may fix your problem.']}),"\n",(0,s.jsxs)(t.li,{children:["It is possible that your tests break if you're using an unstable version of the app. Try to use stable versions using the ",(0,s.jsx)(t.code,{children:"latest"})," branch if you're working with the source code or tagged releases if you're using Docker."]}),"\n",(0,s.jsxs)(t.li,{children:["Mobile Behat tests don't work well with XDebug, so if you're using it, turn it off in ",(0,s.jsx)(t.code,{children:"php.ini"})," while running the tests. Also, remember to restart Apache if necessary."]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"unable-to-load-app-version-from-httpslocalhost8100assetsenvjson",children:["Unable to load app version from ",(0,s.jsx)(t.a,{href:"https://localhost:8100/assets/env.json",children:"https://localhost:8100/assets/env.json"})]}),"\n",(0,s.jsx)(t.p,{children:"This message appears when the Moodle site is not able to reach the app. Make sure that the url is available from the host you're running the Behat commands from. Also make sure that the app is actually running at the specified url."}),"\n",(0,s.jsx)(t.h3,{id:"the-plugins-required-by-this-course-could-not-be-loaded-correctly",children:"The plugins required by this course could not be loaded correctly..."}),"\n",(0,s.jsx)(t.p,{children:"This means either some activity on the course is not adapted to support the moodle app or there is a timeout in the request to your behat site."}),"\n",(0,s.jsxs)(t.p,{children:["To clear the timeout message, open the app in your ",(0,s.jsx)(t.a,{href:"/moodledevdocs/general/app/development/setup/app-in-browser",children:"development browser"}),", open the Inspector, open the Application tab, select Clear storage, press Clear site data, close Inspector, close the tab with mobile site, re-open mobile site in new tab and log in. Then in a separate tab, log in to your behat site (you can find the url in ",(0,s.jsx)(t.code,{children:"$CFG->behat_wwwroot"})," within your ",(0,s.jsx)(t.code,{children:"config.php"})," file) and make sure you can get into the course without seeing the error."]}),"\n",(0,s.jsx)(t.h3,{id:"fatal-error-maximum-execution-time-of-30-seconds-exceeded-in",children:"Fatal error: Maximum execution time of 30 seconds exceeded in..."}),"\n",(0,s.jsxs)(t.p,{children:["This means that your local site has not been updated/visited since an upgrade. Just go to your local behat site (you can find the url in ",(0,s.jsx)(t.code,{children:"$CFG->behat_wwwroot"})," within your ",(0,s.jsx)(t.code,{children:"config.php"})," file), log in as admin and run notifications, then visit a course. Do this step often to avoid timeouts!"]}),"\n",(0,s.jsx)(t.h3,{id:"test-fails-because-of-the-browser-language",children:"Test fails because of the browser language"}),"\n",(0,s.jsx)(t.p,{children:"If your operating system is in a different language than English, the tests may fail."}),"\n",(0,s.jsx)(t.p,{children:"Chrome does not have an easy way to force the browser language to English, so the best way to solve the issue is forcing the app default language to English."}),"\n",(0,s.jsxs)(t.p,{children:["To do so, just set the ",(0,s.jsx)(t.code,{children:"forcedefaultlanguage"})," attribute to ",(0,s.jsx)(t.code,{children:'"en"'})," in your ",(0,s.jsx)(t.code,{children:"moodle.config.json"})," file in the app."]}),"\n",(0,s.jsx)(t.h3,{id:"application-build-gets-killed-without-any-error-information",children:"Application build gets killed without any error information"}),"\n",(0,s.jsxs)(t.p,{children:["In some situations, it is possible that you see ",(0,s.jsx)(t.code,{children:"Killed"})," in the console and a command suddenly stops without any further information. In these situations, make sure to check the ",(0,s.jsx)(t.a,{href:"#general-advice",children:"General advice"})," section, but it is possible that your computer is running out of memory."]}),"\n",(0,s.jsx)(t.p,{children:"If you are running the scripts inside of a Docker container, make sure that Docker is allocated enough memory. If you are using Docker desktop (for example, on a Mac), you can inspect these settings under Preferences > Resources > Advanced > Memory."}),"\n",(0,s.jsx)(t.h3,{id:"macos-running-moodle-docker-commands-show-grep-usage-options-and-do-nothing-else",children:"MacOS: running moodle-docker commands show grep usage options and do nothing else"}),"\n",(0,s.jsxs)(t.p,{children:["This is ",(0,s.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker/issues/188",children:"a known issue"})," in moodle-docker for Mac. The workaround for now is just to explicitly initialize the ",(0,s.jsx)(t.code,{children:"MOODLE_DOCKER_APP_RUNTIME"})," variable in your local environment."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);