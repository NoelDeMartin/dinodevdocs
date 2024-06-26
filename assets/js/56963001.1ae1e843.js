"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[44363],{85216:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(74848),s=n(28453),t=n(78924);const l={title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},d=void 0,a={id:"development/policies/security/commandline-injection",title:"Command-line injection",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/commandline-injection.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/commandline-injection",permalink:"/moodledevdocs/general/development/policies/security/commandline-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/commandline-injection.md",tags:[{label:"Coding guidelines",permalink:"/moodledevdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/moodledevdocs/general/tags/policies"},{label:"Security",permalink:"/moodledevdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1657612297e3,sidebarPosition:6,frontMatter:{title:"Command-line injection",sidebar_position:6,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"SQL injection",permalink:"/moodledevdocs/general/development/policies/security/sql-injection"},next:{title:"Data-loss",permalink:"/moodledevdocs/general/development/policies/security/dataloss"}},r={},c=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{frontMatter:l,metadata:a}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsxs)(i.p,{children:["This page forms part of the ",(0,o.jsx)(i.a,{href:"../security",children:"Moodle security guidelines"}),"."]})}),"\n",(0,o.jsx)(i.h2,{id:"what-is-the-danger",children:"What is the danger?"}),"\n",(0,o.jsx)(i.p,{children:"This is very like SQL injection, except that it arises when we execute a command-line program rather than when we do a database query."}),"\n",(0,o.jsx)(i.h2,{id:"how-moodle-avoids-this-problem",children:"How Moodle avoids this problem"}),"\n",(0,o.jsx)(i.p,{children:"Always try to avoid using command-line tools if at all possible. Look for equivalent PHP libraries."}),"\n",(0,o.jsx)(i.p,{children:"However, when there is no other option, it is the standard approach of cleaning the input, and then escaping the values that came from the user before including them in the command-line."}),"\n",(0,o.jsx)(i.h2,{id:"what-you-need-to-do-in-your-code",children:"What you need to do in your code"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Tyy to avoid using shell commands if at all possible.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Many utilities are available as PHP libraries."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["If you can't avoid shell commands, use ",(0,o.jsx)(i.code,{children:"escapeshellcmd"})," and ",(0,o.jsx)(i.code,{children:"escapeshellarg"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"what-you-need-to-do-as-an-administrator",children:"What you need to do as an administrator"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"This is not something you can do much about."}),"\n",(0,o.jsx)(i.li,{children:"However, turn off Moodle features that use shell commands (for example, the LaTeX filter) unless you actually need them."}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"../security",children:"Security"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/moodledevdocs/general/development/policies",children:"Coding"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);