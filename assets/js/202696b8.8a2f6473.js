"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[47510],{57687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>r,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(74848),s=t(28453),i=t(78924);const a={title:"Question bank plugins",tags:["Plugins","Question","qbank"],description:"Question bank plugins allow you to extend the functionality of the Moodle Question bank.",documentationDraft:!0},l=void 0,d={id:"apis/plugintypes/qbank/index",title:"Question bank plugins",description:"Question bank plugins allow you to extend the functionality of the Moodle Question bank.",source:"@site/docs/apis/plugintypes/qbank/index.md",sourceDirName:"apis/plugintypes/qbank",slug:"/apis/plugintypes/qbank/",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/qbank/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/qbank/index.md",tags:[{label:"Plugins",permalink:"/moodledevdocs/docs/4.4/tags/plugins"},{label:"Question",permalink:"/moodledevdocs/docs/4.4/tags/question"},{label:"qbank",permalink:"/moodledevdocs/docs/4.4/tags/qbank"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Question bank plugins",tags:["Plugins","Question","qbank"],description:"Question bank plugins allow you to extend the functionality of the Moodle Question bank.",documentationDraft:!0},sidebar:"docs",previous:{title:"Forum activity sub-plugins",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/mod_forum/"},next:{title:"Question type plugins",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/qtype/"}},u={},c=[];function p(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Since:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:a,metadata:d}),"\n",(0,o.jsx)(t,{version:"4.0",issueNumber:"MDL-70329"}),"\n",(0,o.jsxs)(n.p,{children:["Question bank plugins allow you to extend the functionality of the Moodle Question bank. They just one of the plugin types used by core_question. To see how they fit in, please read ",(0,o.jsx)(n.a,{href:"../subsystems/question/",children:"this overview of the question subsystems"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Question bank plugins can extend the question bank in many ways, including:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Table columns"}),"\n",(0,o.jsx)(n.li,{children:"Action menu items"}),"\n",(0,o.jsx)(n.li,{children:"Bulk actions"}),"\n",(0,o.jsx)(n.li,{children:"Navigation node (tabs)"}),"\n",(0,o.jsx)(n.li,{children:"Question preview additions (via callback)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The place to start implementing most of these is with a class ",(0,o.jsx)(n.code,{children:"classes/plugin_features.php"})," in your plugin, that declares which features you want to add to the question bank. Until more documentation is written, looking at the examples of the plugins in Moodle core should give you a good idea what you need to do."]})]})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);