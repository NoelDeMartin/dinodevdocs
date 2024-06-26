"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27026],{9766:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=o(74848),n=o(28453),s=o(78924);const r={title:"Gitpod",tags:["tools","Gitpod"]},l=void 0,d={id:"development/tools/gitpod",title:"Gitpod",description:"Gitpod is a free, cloud-based platform with IDE integration that provides a suitable development environment directly in a browser.",source:"@site/general/development/tools/gitpod.md",sourceDirName:"development/tools",slug:"/development/tools/gitpod",permalink:"/moodledevdocs/general/development/tools/gitpod",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/gitpod.md",tags:[{label:"tools",permalink:"/moodledevdocs/general/tags/tools"},{label:"Gitpod",permalink:"/moodledevdocs/general/tags/gitpod"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:170178007e4,frontMatter:{title:"Gitpod",tags:["tools","Gitpod"]},sidebar:"coding",previous:{title:"GitHub Actions integration",permalink:"/moodledevdocs/general/development/tools/gha"},next:{title:"Moodle Development Kit",permalink:"/moodledevdocs/general/development/tools/mdk"}},a={},h=[{value:"How to use Gitpod with Moodle?",id:"how-to-use-gitpod-with-moodle",level:2},{value:"About the Gitpod workspaces",id:"about-the-gitpod-workspaces",level:2},{value:"What can be done with this integration?",id:"what-can-be-done-with-this-integration",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{frontMatter:r,metadata:d}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.gitpod.io/",children:"Gitpod"})," is a free, cloud-based platform with IDE integration that provides a suitable development environment directly in a browser."]}),"\n",(0,i.jsxs)(t.p,{children:["It has been integrated with ",(0,i.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker/",children:"moodle-docker"})," so that you can open any Moodle repository/branch in a Gitpod workspace."]}),"\n",(0,i.jsx)(t.p,{children:"When launching a workspace in Gitpod, it will automatically:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Clone the Moodle repo into the ",(0,i.jsx)(t.code,{children:"<workspace>/moodle"})," folder."]}),"\n",(0,i.jsx)(t.li,{children:"Initialise the Moodle database."}),"\n",(0,i.jsx)(t.li,{children:"Start the Moodle webserver."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["More information about the Gitpod integration with moodle-docker, like the parameters it supports, can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker/#quick-start-with-gitpod",children:"project's page"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,i.jsxs)(t.p,{children:["Gitpod is an alternative to local development and completely optional. We recommend ",(0,i.jsx)(t.a,{href:"../gettingstarted#a-quick-start-to-moodle-development",children:"setting up a local development environment"})," if you plan to contribute regularly."]})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-gitpod-with-moodle",children:"How to use Gitpod with Moodle?"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"https://www.tampermonkey.net/",children:"Tampermonkey"})," script has been created to facilitate the initiation of a Gitpod workspace from any Moodle repository/branch. When the script is installed, a button is displayed near each branch in the ",(0,i.jsx)(t.a,{href:"https://tracker.moodle.org/",children:"Moodle tracker"})," within the Moodle repository, facilitating the initiation of a Gitpod workspace. It can be used for testing any Moodle repository/branch without requiring a local environment installed."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Gitpod integration with Moodle tracker",src:o(83003).A+"",width:"760",height:"500"})}),"\n",(0,i.jsx)(t.p,{children:"To use it, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Install the ",(0,i.jsx)(t.a,{href:"https://www.tampermonkey.net/",children:"Tampermonkey extension"})," for your preferred browser."]}),"\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Dashboard"})," in the Tampermonkey extension and access the ",(0,i.jsx)(t.strong,{children:"Utilities"})," tab."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Import from URL"})," field, paste the following Gitpod script: ",(0,i.jsx)(t.a,{href:"https://gist.githubusercontent.com/sarjona/9fc728eb2d2b41a783ea03afd6a6161e/raw/gitpod.js",children:"https://gist.githubusercontent.com/sarjona/9fc728eb2d2b41a783ea03afd6a6161e/raw/gitpod.js"})]}),"\n",(0,i.jsxs)(t.li,{children:["Go to the ",(0,i.jsx)(t.a,{href:"https://tracker.moodle.org/",children:"Moodle Tracker"})," and open any issue."]}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Open in Gitpod"})," button that should appear near any of the branches in the issue."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The first time you open a workspace, you will need to register in ",(0,i.jsx)(t.a,{href:"https://www.gitpod.io/",children:"gitpod.io"})," (you can use your Github account)."]}),"\n",(0,i.jsx)(t.p,{children:"After waiting for 5-8 minutes, a Moodle site will open in your IDE (web VSCode by default) and you'll be able to start playing with it!!"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The password for the ",(0,i.jsx)(t.code,{children:"admin"})," user is ",(0,i.jsx)(t.code,{children:"test"})," ;-)"]})}),"\n",(0,i.jsx)(t.h2,{id:"about-the-gitpod-workspaces",children:"About the Gitpod workspaces"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["By default, all Gitpod workspaces become inactive after 30 minutes of no activity. They can be reopened from the ",(0,i.jsx)(t.a,{href:"https://gitpod.io/workspaces/",children:"Gitpod dashboard"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Workspaces are automatically deleted after 14 days."}),"\n",(0,i.jsxs)(t.li,{children:["You can view a list of your workspaces on the ",(0,i.jsx)(t.a,{href:"https://gitpod.io/workspaces/",children:"Gitpod dashboard"}),". From there, you can open any existing workspaces, which will be resumed with the Moodle site displayed in the IDE just as it was when it became inactive."]}),"\n",(0,i.jsx)(t.li,{children:"It's recommended to rename workspaces manually to something more meaningful (like the tracker issue)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-can-be-done-with-this-integration",children:"What can be done with this integration?"}),"\n",(0,i.jsx)(t.p,{children:"The following list is just a sample of the things that can be done with the integration of Gitpod with Moodle:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Test Moodle Tracker issues easily. Especially useful for non-developers or QA testers."}),"\n",(0,i.jsx)(t.li,{children:"Test third-party plugins."}),"\n",(0,i.jsx)(t.li,{children:"Remote development environment."}),"\n",(0,i.jsx)(t.li,{children:"Run tests (behat, PHPUnit\u2026)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/moodlehq/moodle-docker/#quick-start-with-gitpod",children:"Moodle docker"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/gitpod-samples",children:"Gitpod samples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.gitpod.io/docs/references/gitpod-yml",children:"gitpod.yml"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.gitpod.io/docs/references/gitpod-cli",children:"gitpod-cli"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.gitpod.io/docs/configure/projects/environment-variables",children:"Environment variables"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},83003:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/trackerintegration-baa834069354ce8b7a27d64d2cc70cf3.png"}}]);