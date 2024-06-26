"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99621],{51656:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=r(74848),t=r(28453),n=r(78924);const i={title:"Development process",description:"A summary of the various development processes used in Moodle development.",tags:["Processes","Quality Assurance","Core development","Git"]},a=void 0,l={id:"development/process",title:"Development process",description:"A summary of the various development processes used in Moodle development.",source:"@site/general/development/process.md",sourceDirName:"development",slug:"/development/process",permalink:"/moodledevdocs/general/development/process",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process.md",tags:[{label:"Processes",permalink:"/moodledevdocs/general/tags/processes"},{label:"Quality Assurance",permalink:"/moodledevdocs/general/tags/quality-assurance"},{label:"Core development",permalink:"/moodledevdocs/general/tags/core-development"},{label:"Git",permalink:"/moodledevdocs/general/tags/git"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Development process",description:"A summary of the various development processes used in Moodle development.",tags:["Processes","Quality Assurance","Core development","Git"]},sidebar:"process",next:{title:"Triage",permalink:"/moodledevdocs/general/development/process/triage"}},d={},h=[{value:"Integration workflow in the tracker",id:"integration-workflow-in-the-tracker",level:2},{value:"Roles",id:"roles",level:2},{value:"Users",id:"users",level:3},{value:"Developers",id:"developers",level:3},{value:"CiBoT",id:"cibot",level:3},{value:"Component leads",id:"component-leads",level:3},{value:"Component leads reviewers",id:"component-leads-reviewers",level:3},{value:"Integrators",id:"integrators",level:3},{value:"Testers",id:"testers",level:3},{value:"Production maintainers",id:"production-maintainers",level:3},{value:"Stable maintenance cycles",id:"stable-maintenance-cycles",level:2},{value:"Minor release (point release) timing",id:"minor-release-point-release-timing",level:3},{value:"Issue triage",id:"issue-triage",level:3},{value:"Scrum",id:"scrum",level:3},{value:"Major release cycles",id:"major-release-cycles",level:2},{value:"Define roadmap",id:"define-roadmap",level:3},{value:"Planning and development",id:"planning-and-development",level:3},{value:"Testing",id:"testing",level:3},{value:"Sprints",id:"sprints",level:3},{value:"Events during cycle",id:"events-during-cycle",level:3},{value:"New feature development",id:"new-feature-development",level:2},{value:"Specification",id:"specification",level:3},{value:"Community consultation",id:"community-consultation",level:3},{value:"Develop the code using Git",id:"develop-the-code-using-git",level:3},{value:"Submit your code for peer review",id:"submit-your-code-for-peer-review",level:3},{value:"Peer review",id:"peer-review",level:3},{value:"Submit the code for integration",id:"submit-the-code-for-integration",level:3},{value:"Fixing a bug",id:"fixing-a-bug",level:2},{value:"Make sure there is a tracker issue",id:"make-sure-there-is-a-tracker-issue",level:3},{value:"Decide which branches the fix is required on",id:"decide-which-branches-the-fix-is-required-on",level:3},{value:"Develop your change using git",id:"develop-your-change-using-git",level:3},{value:"Submit your code for peer review",id:"submit-your-code-for-peer-review-1",level:3},{value:"Peer review",id:"peer-review-1",level:3},{value:"Submit your code for integration",id:"submit-your-code-for-integration",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"How to remove a branch from Github",id:"how-to-remove-a-branch-from-github",level:3},{value:"Policy issues",id:"policy-issues",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Since:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{frontMatter:i,metadata:l}),"\n",(0,o.jsx)(s.p,{children:"This document summarises the various development processes used in developing Moodle. There are four main processes that overlap."}),"\n",(0,o.jsx)(s.h2,{id:"integration-workflow-in-the-tracker",children:"Integration workflow in the tracker"}),"\n",(0,o.jsx)(s.p,{children:"The Moodle tracker keeps track of the status of all bug fixes and new features."}),"\n",(0,o.jsx)(s.p,{children:"We use a workflow that ensures that new code receives multiple reviews by different people before it is included into the core Moodle code."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"A summary of the Moodle Development Process flow",src:r(85137).A+"",width:"1797",height:"712"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["The ",(0,o.jsx)(s.a,{href:"#issue-triage",children:"triaging"})," is done by the Component leads."]}),"\n",(0,o.jsxs)(s.li,{children:["Anybody can participate in the issue ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/",children:"development"}),", by creating a patch for ",(0,o.jsx)(s.a,{href:"#fixing-a-bug",children:"a bug"}),", ",(0,o.jsx)(s.a,{href:"#new-feature-development",children:"an improvement"})," or ",(0,o.jsx)(s.a,{href:"#security-issues",children:"a security issue"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Anybody can also ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/peer-review/",children:"peer review"})," code developed by other developers."]}),"\n",(0,o.jsxs)(s.li,{children:["There is a dedicated team in Moodle HQ in charge of the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/integration/",children:"integration review"}),", to ensure consistent quality across the codebase."]}),"\n",(0,o.jsxs)(s.li,{children:["Every time an issue is integrated, the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/testing/",children:"testing"})," instructions are run by a dedicated team of testers."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"roles",children:"Roles"}),"\n",(0,o.jsx)(s.p,{children:"A number of roles make this work:"}),"\n",(0,o.jsx)(s.h3,{id:"users",children:"Users"}),"\n",(0,o.jsx)(s.p,{children:"Users report bugs and make feature requests directly in the tracker, by creating new issues with a summary and a description."}),"\n",(0,o.jsx)(s.h3,{id:"developers",children:"Developers"}),"\n",(0,o.jsxs)(s.p,{children:["Developers work on the issues in the tracker to specify solutions and write code that implements these solutions. They will often ask other developers to ",(0,o.jsx)(s.em,{children:"peer review"})," their code in the early stages to avoid problems later on."]}),"\n",(0,o.jsxs)(s.p,{children:["While many of the developers work for Moodle.com, a large number are part of the global development community around Moodle. If you're interested in becoming a recognised developer, see ",(0,o.jsx)(s.a,{href:"./tracker/guide#tracker-groups-and-permissions",children:"Tracker groups and permissions"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"cibot",children:"CiBoT"}),"\n",(0,o.jsxs)(s.p,{children:["CiBoT is not a person but a bot who monitors the tracker and performs the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/tools/cibot",children:"Automated code review"})," when issue is submitted for Peer review or when developer added ",(0,o.jsx)(s.code,{children:"cime"})," label."]}),"\n",(0,o.jsx)(s.h3,{id:"component-leads",children:"Component leads"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/projects/MDL?selectedItem=com.atlassian.jira.jira-projects-plugin:components-page",children:"Component leads"})," are developers with some responsibility for particular components (plugins or modules) in Moodle. They have authority to decide that a particular fix is suitable and complete enough to be considered for integration in Moodle core and should be called upon to complete peer reviews for code in their components. Note that, apart from that, every component also has some ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Component_Leads",children:"HQ Component leads"})," that will specifically work on associated issues, triaging, monitoring, reviewing, fixing them."]}),"\n",(0,o.jsx)(s.h3,{id:"component-leads-reviewers",children:"Component leads reviewers"}),"\n",(0,o.jsx)(s.p,{children:"Component Lead Reviewers are Component Leads who have the added responsibility of performing a second and final review of a selection of issues within their component.\nAfter reviewing the code, it is sent to the integration team to be pulled without further review."}),"\n",(0,o.jsx)(s.h3,{id:"integrators",children:"Integrators"}),"\n",(0,o.jsx)(s.p,{children:'From Monday to Thursday, the integration team (a small team of senior developers employed by Moodle HQ) conducts a code-level review of all issues in the integration queue. This is often called the "pull" process. If the fix is judged appropriate they will integrate the code into our git integration repository for further testing and it gets added to the testing queue.'}),"\n",(0,o.jsx)(s.p,{children:"If they find problems they reject the issue and send it back to the developer for further work."}),"\n",(0,o.jsx)(s.h3,{id:"testers",children:"Testers"}),"\n",(0,o.jsx)(s.p,{children:"During each week the testers look at all the issues in the testing queue, trying each fix and feature to make sure that it does actually fix the problem it was supposed to, and that there are no regressions in the web version and the Moodle mobile app."}),"\n",(0,o.jsx)(s.p,{children:"If they find problems they reject the issue and integrators may remove it from the integration repository and push it back to the developer for further work."}),"\n",(0,o.jsxs)(s.p,{children:["See ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/testing/integrated-issues",children:"Testing of integrated issues"})," for more details."]}),"\n",(0,o.jsx)(s.h3,{id:"production-maintainers",children:"Production maintainers"}),"\n",(0,o.jsx)(s.p,{children:"On Thursday each week, production maintainers merge all the issues that passed testing into the git production repository, and it becomes available for use on production systems via git and download packages."}),"\n",(0,o.jsx)(s.h2,{id:"stable-maintenance-cycles",children:"Stable maintenance cycles"}),"\n",(0,o.jsx)(s.p,{children:"Moodle releases regular updates of the stable version of the software to fix bugs and other issues. Releases like 2.2.1, 2.2.2, 2.2.3 etc only include fixes based on the latest major release (2.2) and never any significant new features or database changes."}),"\n",(0,o.jsxs)(s.p,{children:["At Moodle HQ there are teams of developers using the ",(0,o.jsx)(s.a,{href:"http://www.scrum.org/",children:"Scrum framework"})," to work on these issues (as well as new features for ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/#Major_release_cycles",children:"major releases"}),")."]}),"\n",(0,o.jsx)(s.h3,{id:"minor-release-point-release-timing",children:"Minor release (point release) timing"}),"\n",(0,o.jsxs)(s.p,{children:["After ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/#Major_release_cycles",children:"major releases"})," there will be minor releases."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"x.x.1 will occur approximately two months after each major release (eg. 4.x)."}),"\n",(0,o.jsxs)(s.li,{children:["There will then be another point release every two months after that.\nSee the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/releases#general-release-calendar",children:"General release calendar"})," for details."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"issue-triage",children:"Issue triage"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"./process/triage",children:"Issue triage"})," involves evaluating new issues, making sure that they are recorded correctly. One of the most important jobs triagers do is to identify issues that should be fixed in the stable branch. These are set with a priority ranging from ",(0,o.jsx)(s.em,{children:"Trivial"})," up to ",(0,o.jsx)(s.em,{children:"Blocker"})," and other features are checked."]}),"\n",(0,o.jsx)(s.p,{children:"At Moodle HQ there are currently teams working on stable issues (mostly bugs reported by users) and improvements and new features (Partners, Moodle Association, user suggestions and Martin Dougiamas)."}),"\n",(0,o.jsx)(s.h3,{id:"scrum",children:"Scrum"}),"\n",(0,o.jsxs)(s.p,{children:["At Moodle HQ, every three weeks, the stable team takes a number of the most urgent issues from the backlog to work on during a period known as a ",(0,o.jsx)(s.em,{children:"sprint"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"At the start of a sprint there is a period of planning and estimation. All issues on the backlog are given a relative rank that is based on issue features including priority, security, Partner interest, patches and votes. Issues are given a relative size in Story Points and these points are summed to allow the teams to determine how many issues they can work on in the sprint."}),"\n",(0,o.jsxs)(s.p,{children:["During the sprint, the team meets daily to discuss solutions and progress, as well as to organise testing and peer reviews of code. The team has a ",(0,o.jsx)(s.em,{children:"Scrum master"})," to help everyone stay organised, to \"unblock\" any barriers to progress and to protect the team from distracting influences (mostly people attempting to add to the developers' workloads) during the sprint. The teams' work is documented publicly in the tracker."]}),"\n",(0,o.jsx)(s.p,{children:"Whenever a solution for an issue is finished, it is submitted to the standard integration workflow process described above."}),"\n",(0,o.jsx)(s.h2,{id:"major-release-cycles",children:"Major release cycles"}),"\n",(0,o.jsx)(s.p,{children:"Moodle release versions are in the format x.y.z where the x.y is a major release, and the z is a minor release."}),"\n",(0,o.jsx)(a,{version:"2.0"}),"\n",(0,o.jsx)(s.p,{children:"Since Moodle 2.0, we have a policy of release major versions (for example 4.0, 4.1) every six months in May and November."}),"\n",(0,o.jsx)(a,{version:"4.2"}),"\n",(0,o.jsx)(s.p,{children:"Since Moodle 4.2, Moodle major versions (for example 4.2, 4.3, 4.4, etc.) are released every six months in April and October."}),"\n",(0,o.jsx)(s.p,{children:"Releases are in weeks 17, and 43 of the year."}),"\n",(0,o.jsxs)(s.p,{children:["There will be a point release every two months following a major release. See the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/releases#general-release-calendar",children:"General release calendar"})," for more details."]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"Each release can be different, but generally the cycles work as follows."})}),"\n",(0,o.jsx)(s.h3,{id:"define-roadmap",children:"Define roadmap"}),"\n",(0,o.jsx)(s.p,{children:"The roadmap is prioritised based on user research, stakeholder inputs, community wishes, third-party developments and important issues within the existing code."}),"\n",(0,o.jsx)(s.p,{children:"Sometimes new features might be based on earlier features, sometimes they may be something developed by a third party that needs to be evaluated and sometimes it might be something completely new."}),"\n",(0,o.jsx)(s.h3,{id:"planning-and-development",children:"Planning and development"}),"\n",(0,o.jsx)(s.p,{children:"The product teams together with UX, employed at Moodle HQ, work on specifications of major new features throughout the cycle, specifying projects ahead of development time."}),"\n",(0,o.jsxs)(s.p,{children:["The process of ",(0,o.jsx)(s.a,{href:"#new-feature-development",children:"new feature development"})," is described below. When specifications are in place, new code is developed during sprints, where designs and implementation are iterated as required, and goes through the standard weekly integration workflow described above."]}),"\n",(0,o.jsx)(s.h3,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(s.p,{children:["During development, as new code is integrated, automated testing conducted at the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/tools/phpunit",children:"code"})," and ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/tools/behat/",children:"interface"})," levels, to make sure there are no regressions caused by new features."]}),"\n",(0,o.jsxs)(s.p,{children:["In the last month before the release, a feature freeze is called (no new features can be added) and volunteer testers from the Moodle community perform manual ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/testing/qa",children:"QA testing"})," of Moodle features. The current set of functional tests is listed in ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDLQA-1",children:"MDLQA-1"}),". The list of tests is extended as new features are added, though we're also trying to reduce the number as more automated ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/tools/behat/",children:"acceptance tests"})," are developed."]}),"\n",(0,o.jsxs)(s.p,{children:["There is also a set of tests for manually testing any major theme changes - ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDLQA-11592",children:"MDLQA-11592"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["For more details, see ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/testing/",children:"Testing"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"sprints",children:"Sprints"}),"\n",(0,o.jsx)(s.p,{children:"At Moodle HQ, development takes place in sprints. The sprints are two or three-week periods during which developers to focus on a fixed list of issues. For example, sprints can be arranged within each release cycle as shown in the diagram below."}),"\n",(0,o.jsx)(s.h3,{id:"events-during-cycle",children:"Events during cycle"}),"\n",(0,o.jsx)(s.p,{children:"During each cycle there are a periods and events that occur between and around sprints."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"The Development sprint calendar",src:r(69053).A+"",width:"1501",height:"502"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Planning and bug fixing"})," ",(0,o.jsx)("br",{}),"\nA period during which the Roadmap is explored, specs are written and prototypes are created. Regressions in the recent release are fixed as they arise."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"End sync period"})," ",(0,o.jsx)("br",{}),"\nDuring the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/integration/#on-sync-period",children:"on-sync period"}),", the recent release and master versions are kept synchronised. No new code is added during this period, which ensures regressions are fixed rapidly. This also allows for planning and provides relief for developers after a release."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Personal projects"})," ",(0,o.jsx)("br",{}),"\nAffecting full-time HQ developers only, this period allows for individual creations to be explored and provides a break from sprints."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Code freeze"})," ",(0,o.jsx)("br",{}),"\nA point after which no new code (only fixes to existing code) is accepted until beyond the release. This stabilisation allows for ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/testing/qa",children:"QA testing"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"QA, bug fixing, continuous integration"})," ",(0,o.jsx)("br",{}),"\nA period after the code freeze where quality assurance testing takes place. No new code is added, which means developers are able to respond rapidly to bugs found. Integration becomes ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/integration/#during-continuous-integrationfreezeqa-period",children:"continuous"}),", meaning that failed QA tests can be re-run within days rather than having to wait for the weekly release."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Release candidate"})," ",(0,o.jsx)("br",{}),"\nA point prior to the full release where a candidate is made public for wider testing."]}),"\n",(0,o.jsx)(s.h2,{id:"new-feature-development",children:"New feature development"}),"\n",(0,o.jsx)(s.p,{children:"Major new features in Moodle usually should go through the following process."}),"\n",(0,o.jsx)(s.h3,{id:"specification",children:"Specification"}),"\n",(0,o.jsx)(s.p,{children:"The User Experience (UX) team members create detailed wireframes and features and goals for the new feature, based on iterative user research, design sprints, user testing and co-design as part of the product team."}),"\n",(0,o.jsx)(s.p,{children:"For bigger features there should be a clear overall vision for the outcomes that are to achieved. During implementation design may continue to iterate based on new findings."}),"\n",(0,o.jsx)(s.p,{children:"Developers create a detailed spec (here in the developer docs) outlining their goals for the development and their design for meeting those goals."}),"\n",(0,o.jsx)(s.p,{children:"Developers should also create an issue in the tracker (linking to your docs) to keep track of the project status."}),"\n",(0,o.jsx)(s.h3,{id:"community-consultation",children:"Community consultation"}),"\n",(0,o.jsxs)(s.p,{children:["Get the community involved in looking at the spec to see if it meets their needs and to get further feedback. Please post in the ",(0,o.jsx)(s.a,{href:"http://moodle.org/mod/forum/view.php?id=8052",children:"Future major features forum"})," on moodle.org. You could also blog/tweet about it etc."]}),"\n",(0,o.jsx)(s.p,{children:"Community developers proposing a new feature will want to talk with HQ core developers to make sure the ideas make sense, and possibly get some review on database design, architecture and so on."}),"\n",(0,o.jsx)(s.h3,{id:"develop-the-code-using-git",children:"Develop the code using Git"}),"\n",(0,o.jsx)(s.p,{children:"Develop your code on an open Git repository, like github.com. That enables people to see your code and to help you as it develops. Testers and early adopters also have the opportunity to try it early in the process and give you more valuable feedback."}),"\n",(0,o.jsxs)(s.p,{children:["Coverage with automated tests (",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/PHPUnit",children:"PHPUnit"})," or ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Behat",children:"Behat integration"}),") is mandatory for new features."]}),"\n",(0,o.jsxs)(s.p,{children:["It is essential that your code follows the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/policies",children:"Moodle Coding Guide"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"submit-your-code-for-peer-review",children:"Submit your code for peer review"}),"\n",(0,o.jsxs)(s.p,{children:["Click on ",(0,o.jsx)(s.em,{children:"Request peer review"})," button in the tracker."]}),"\n",(0,o.jsx)(s.p,{children:"You need to fill in the information about your public git repository and which branches the fixes are on. Make sure you are listed as Assignee."}),"\n",(0,o.jsxs)(s.p,{children:["This would be a good time to fill in the testing instructions (read the ",(0,o.jsx)(s.a,{href:"./process/testing/guide",children:"instructions guide"}),") for how to verify your fix is correct. You may also wish to add a comment in the bug."]}),"\n",(0,o.jsx)(s.p,{children:"Component leads should put issues, which affect code in their components, up for peer review to allow interested parties to provide feedback. However, if it is not reviewed in a week, a component lead may send the issue to integration. If integrators consider that the issue has not been given proper chance for peer review (for example is extremely large or complex) it can be decided to move the issue back in the process."}),"\n",(0,o.jsx)(s.p,{children:"All other developers, including people who are component leads but working outside their component, should have their issues peer reviewed before they are sent to integration."}),"\n",(0,o.jsx)(s.h3,{id:"peer-review",children:"Peer review"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/HQ_component_leads",children:"HQ component leads"})," should peer-review the change. If there is no component lead for an affected component, any other recognised developer may complete the peer review. The peer reviewer will either give you comments on the code and if it needs more work."]}),"\n",(0,o.jsxs)(s.p,{children:["Process and the list of things to check are described in ",(0,o.jsx)(s.a,{href:"process/peer-review",children:"Peer reviewing"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"submit-the-code-for-integration",children:"Submit the code for integration"}),"\n",(0,o.jsx)(s.p,{children:"The developer is responsible for acting on the feedback from the peer reviewer. If changes have been made and the developer is satisfied that this has accommodated the feedback from the peer reviewer, then the developer can submit the issue for integration. If there have been significant changes after the peer review, or if the peer reviewer has raised concerns about the approach taken, then the developer should offer the issue up for peer review again, most often to the same peer reviewer, but not necessarily."}),"\n",(0,o.jsxs)(s.p,{children:["Submitting an issue to integration is much the same as for any Moodle code. In some cases the Component Lead may perform a Component Lead Review instead of the integration team. See ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/integration/",children:"Integration Review"})," and the information about the integration workflow above."]}),"\n",(0,o.jsx)(s.h2,{id:"fixing-a-bug",children:"Fixing a bug"}),"\n",(0,o.jsxs)(s.p,{children:["Bug fixes, and minor features or enhancements should go through the following process. (The only exception is English language string typo fixes or suggested improvements, which may be contributed to the ",(0,o.jsx)(s.code,{children:"en_fix"})," language pack on the ",(0,o.jsx)(s.a,{href:"http://lang.moodle.org/",children:"Moodle translation site"}),".)"]}),"\n",(0,o.jsx)(s.h3,{id:"make-sure-there-is-a-tracker-issue",children:"Make sure there is a tracker issue"}),"\n",(0,o.jsxs)(s.p,{children:["Every change must have an issue in the tracker. If you are fixing a bug, there is probably one there already, but if not, create one. ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/tracker/tips/",children:"Tips for searching tracker"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"decide-which-branches-the-fix-is-required-on",children:"Decide which branches the fix is required on"}),"\n",(0,o.jsx)(s.p,{children:"Bugs should normally be fixed on all the supported stable branches that are affected. New features should just go into master, but sometimes minor enhancements are made on the most recent stable branch."}),"\n",(0,o.jsx)(s.h3,{id:"develop-your-change-using-git",children:"Develop your change using git"}),"\n",(0,o.jsxs)(s.p,{children:["Develop your fix and push the change to an open git repository, for example on github.com. See also ",(0,o.jsx)(s.a,{href:"/docs/4.4/guides/git/",children:"Git for developers"})]}),"\n",(0,o.jsxs)(s.p,{children:["It is essential that your code follows the ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/policies",children:"Moodle Coding Guide"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["You will need to push one commit for each branch the fix needs to be applied to. Often people use branch names like ",(0,o.jsx)(s.code,{children:"MDL-12345-31_brief_name"})," so it is clear what each branch is. ",(0,o.jsx)(s.a,{href:"http://kernel.org/pub/software/scm/git/docs/git-cherry-pick.html",children:"git cherry-pick"})," can help with replicating the fix onto different branches."]}),"\n",(0,o.jsxs)(s.p,{children:["Consider setting up ",(0,o.jsx)(s.a,{href:"https://moodledev.io/general/development/tools/gha",children:"GitHub Actions integration"})," with your repository so tests will be automatically run for you whenever you push work on your fix."]}),"\n",(0,o.jsx)(s.h3,{id:"submit-your-code-for-peer-review-1",children:"Submit your code for peer review"}),"\n",(0,o.jsx)(s.p,{children:"Once your fix is done, it should be submitted for a peer review."}),"\n",(0,o.jsx)(s.p,{children:"The following information is necessary for this:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Information about your public git repository","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"repository URL"}),"\n",(0,o.jsx)(s.li,{children:"branch name(s)"}),"\n",(0,o.jsx)(s.li,{children:"diff URL"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"./process/testing/guide",children:"Testing instructions"})," for how to verify your fix is correct.\nIf you have never contributed to Moodle and don't see a button ",(0,o.jsx)(s.em,{children:"Request peer review"}),", just comment on the issue with the above information. The component lead or another user with sufficient privileges will then send the issue up for peer review for you."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["After your first fix is integrated you will be added to developers group and will be able to send issues for peer review yourself. In this case make sure you are listed as Assignee and click on ",(0,o.jsx)(s.em,{children:"Request peer review"})," button in the tracker."]}),"\n",(0,o.jsxs)(s.p,{children:["If you've set up ",(0,o.jsx)(s.a,{href:"https://moodledev.io/general/development/tools/gha",children:"GitHub Actions integration"}),", the issue will automatically show the GHA build status for the branch(es) you've submitted for peer review."]}),"\n",(0,o.jsx)(s.h3,{id:"peer-review-1",children:"Peer review"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/HQ_component_leads",children:"HQ component leads"})," should peer-review the change. If there is no component lead for an affected component, any other recognised developer may complete the peer review. The peer reviewer will either give you comments on the code and if it needs more work."]}),"\n",(0,o.jsxs)(s.p,{children:["Process and the list of things to check are described in ",(0,o.jsx)(s.a,{href:"process/peer-review",children:"Peer reviewing"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"submit-your-code-for-integration",children:"Submit your code for integration"}),"\n",(0,o.jsxs)(s.p,{children:["It will then be reviewed the following week by one of the integration team and either integrated or rejected. Once integrated, the fix will be tested, and then included in the next weekly release. For details see ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/integration/",children:"Integration Review"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"security-issues",children:"Security issues"}),"\n",(0,o.jsxs)(s.p,{children:["Issues identified as ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/policies/security/",children:"security issues"})," are resolved in a slightly different way, in order to achieve responsible disclosure as described in ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/security/",children:"Moodle security procedures"}),"."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:['Security issues should be labelled as "Minor" or "Serious" in order control visibility of the issue.',"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'An issue reported with a security level of "Could be a security issue" should be evaluated as soon as possible and either set as "Minor" or "Serious" or the security level should be set to "None".'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["Solutions to security issues should not:","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["be made available in public repositories.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["If a developer has shared a solution as Git branches via Github, they should be asked to provide the solutions as ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/How_to_create_a_patch",children:"stand-alone patches"})," attached to the issue and to ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/#How_to_remove_a_branch_from_Github",children:"remove the solution from Github"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["contain details about the security problem in the commit message.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Instead use generic terms like, "improve", "better handling of"'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["The solution will not be integrated until the week before a ",(0,o.jsx)(s.a,{href:"#stable-maintenance-cycles",children:"minor release"})," following the normal ",(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/process/release/",children:"Release process"}),". In short, the issue will be incorporated into the integration version, rebased, tested and made ready for release as a normal issue would, but not until as late as possible."]}),"\n",(0,o.jsx)(s.li,{children:"Details of security issues will be shared with registered admins with the minor release."}),"\n",(0,o.jsx)(s.li,{children:"Details of security issues will not be publicly announced until one week after a minor release to allow admins to update.\nNote that not all the labelled (minor) security issues are always handled following the procedure above. It's possible that, after discussion, it's decided a given issue is not a real Moodle security problem (say external disclosures/potential attacks using Moodle as vector, not as target, discussions revealing some private details). Those issues will be processed as normal issues, generating the needed user documentation if necessary and will be part of the habitual weekly releases."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"how-to-remove-a-branch-from-github",children:"How to remove a branch from Github"}),"\n",(0,o.jsx)(s.p,{children:"To remove a branch from Github, you can use the following command."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"git push github :remote_branch\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Where ",(0,o.jsx)(s.code,{children:"remote_branch"})," is the name of your remote branch, for example ",(0,o.jsx)(s.code,{children:"wip-mdl-1234"}),".\nThis effectively replaces the remote branch with nothing, removing the remote branch, but leaving the branch intact in your local Git repository. Please note that its likely that your commit will still exist on github due to the nature of git, so its best to avoid doing this in the first place."]}),"\n",(0,o.jsx)(s.h2,{id:"policy-issues",children:"Policy issues"}),"\n",(0,o.jsx)(s.p,{children:"Occasionally within Moodle we run into policy issues where a high-level decision needs to be made about how things are to be done."}),"\n",(0,o.jsx)(s.p,{children:"In these cases the process is as follows:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Create an issue in the tracker with a ",(0,o.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL/component/12733",children:"Policy component"})," and put ",(0,o.jsx)(s.code,{children:"POLICY:"})," as a prefix on the summary."]}),"\n",(0,o.jsx)(s.li,{children:"In the description describe the problem clearly as well as all the options. If it's long then make a page here in Moodle Dev Docs and link to it."}),"\n",(0,o.jsx)(s.li,{children:"Do not use this issue for code. If there are issues that depend on this policy decision, then add tracker links to them as dependencies."}),"\n",(0,o.jsx)(s.li,{children:"Feel free to encourage people to come and talk about the policy to support various points of view. The more evidence we have (from everyone in the community) the better.\nSome time has been scheduled in the weekly Moodle HQ meeting to look at Policy issues and try to make decisions on them. We discuss all the evidence and try to achieve a high amount of consensus. Deadlocked issues can be resolved by a decision from Martin Dougiamas (this is rarely needed)."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Decisions will be posted on the issue and that issue will be closed, allowing any dependent issues to continue to integration (or not). Decisions are final and bribes hardly ever work."}),"\n",(0,o.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(60917).A+"",children:"Detailed workflow"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"./process/release",children:"Release process"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/moodledevdocs/general/development/policies/deprecation/",children:"Deprecation"})}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"http://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11350",children:"Integration dashboard"}),"\nWalks-though of the process for contributors:"]}),"\n",(0,o.jsxs)(s.li,{children:["By Dan Poltawski, Integrator: ",(0,o.jsx)(s.a,{href:"http://www.slideshare.net/poltawski/how-to-guarantee-your-change-is-integrated-to-moodle-core",children:"http://www.slideshare.net/poltawski/how-to-guarantee-your-change-is-integrated-to-moodle-core"}),", ",(0,o.jsx)(s.a,{href:"https://www.youtube.com/watch?v=836WtnM2YpM",children:"https://www.youtube.com/watch?v=836WtnM2YpM"})]}),"\n",(0,o.jsxs)(s.li,{children:["By Tim Hunt, contributor: ",(0,o.jsx)(s.a,{href:"http://tjhunt.blogspot.co.uk/2012/03/fixing-bug-in-moodle-core-mechanics.html",children:"http://tjhunt.blogspot.co.uk/2012/03/fixing-bug-in-moodle-core-mechanics.html"})," and ",(0,o.jsx)(s.a,{href:"https://www.youtube.com/watch?v=gPPA3h7OGQU",children:"https://www.youtube.com/watch?v=gPPA3h7OGQU"})," and ",(0,o.jsx)(s.a,{href:"https://youtu.be/Hu8ne0NCRAg?t=11659",children:"https://youtu.be/Hu8ne0NCRAg?t=11659"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},60917:(e,s,r)=>{r.d(s,{A:()=>o});const o=r.p+"assets/files/workflow-d2aa970195d7c87fd3291004672acdee.jpg"},85137:(e,s,r)=>{r.d(s,{A:()=>o});const o=r.p+"assets/images/simplified_workflow-160aa5f70779322072e357167956c80e.png"},69053:(e,s,r)=>{r.d(s,{A:()=>o});const o=r.p+"assets/images/sprintcalendar-7d42782e6376ee60a2113271beb3a810.png"}}]);