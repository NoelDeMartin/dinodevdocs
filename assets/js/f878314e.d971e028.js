"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20845],{47261:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var i=s(74848),n=s(28453),o=s(78924);const a={title:"Question type plugins",tags:["Plugins","Question","qtype"],description:"Question type plugins implement the different types of question that the core Question subsystem can handle."},l=void 0,d={id:"apis/plugintypes/qtype/index",title:"Question type plugins",description:"Question type plugins implement the different types of question that the core Question subsystem can handle.",source:"@site/docs/apis/plugintypes/qtype/index.md",sourceDirName:"apis/plugintypes/qtype",slug:"/apis/plugintypes/qtype/",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/qtype/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/qtype/index.md",tags:[{label:"Plugins",permalink:"/moodledevdocs/docs/4.4/tags/plugins"},{label:"Question",permalink:"/moodledevdocs/docs/4.4/tags/question"},{label:"qtype",permalink:"/moodledevdocs/docs/4.4/tags/qtype"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1712759719e3,frontMatter:{title:"Question type plugins",tags:["Plugins","Question","qtype"],description:"Question type plugins implement the different types of question that the core Question subsystem can handle."},sidebar:"docs",previous:{title:"Question bank plugins",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/qbank/"},next:{title:"Defaults for new questions",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/qtype/newquestiondefaults"}},r={},p=[];function c(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{frontMatter:a,metadata:d}),"\n",(0,i.jsxs)(t.p,{children:["Question types are one of the plugins used by the question subsystem. To see how they fit in, please read ",(0,i.jsx)(t.a,{href:"../subsystems/question/",children:"this overview of the question subsystems"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Question types have to do many things:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"edit_..._form.php"})," - Provide an editing form so that teachers can create and edit questions of this type."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"questiontypes.php"})," - Define a class to handle loading and saving data from this form."]}),"\n",(0,i.jsx)(t.li,{children:"... and related methods providing metadata about this question types."}),"\n",(0,i.jsx)(t.li,{children:"... and import and export in any Question formats that the type wants to support."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"question.php"})," - this class represents one instance of this question type, while it is being attempted by a user. It must do many things"]}),"\n",(0,i.jsx)(t.li,{children:"... Start a new attempt (e.g. in a multiple choice question, this is where we randomly shuffle the choices)."}),"\n",(0,i.jsx)(t.li,{children:"... or if we are continuing an existing attempt, re-initialise the question to the same state, using the data from the DB."}),"\n",(0,i.jsx)(t.li,{children:"... Tell the question engine what data this question type is expecting to be submitted."}),"\n",(0,i.jsx)(t.li,{children:"... Analyse those submitted responses: e.g. has it changed? is it complete."}),"\n",(0,i.jsx)(t.li,{children:"... Automatically grade the response to give a 'fraction' (mark between 0 and 1) and a state (correct / partially correct / incorrect)."}),"\n",(0,i.jsx)(t.li,{children:"... check access to files for the file API."}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"renderer.php"})," - to display the key bits of this question types for the ",(0,i.jsx)(t.code,{children:"core_question_renderer"})," to combine into the overall question display."]}),"\n",(0,i.jsx)(t.li,{children:"Implements Backup and restore, and all the other standard parts of a Moodle plugin like DB tables."}),"\n",(0,i.jsxs)(t.li,{children:["Track ",(0,i.jsx)(t.a,{href:"./qtype/newquestiondefaults",children:"users preferences for the settings used for newly created questions"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);