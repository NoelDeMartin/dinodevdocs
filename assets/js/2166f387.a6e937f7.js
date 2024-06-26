"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[11310],{59245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(74848),l=t(28453),i=t(78924);const a={title:"Troubleshooting Moodle App Plugins Development",sidebar_label:"Troubleshooting",sidebar_position:3,tags:["Moodle App"]},r=void 0,s={id:"app/development/plugins-development-guide/troubleshooting",title:"Troubleshooting Moodle App Plugins Development",description:"Plugin changes are not picked up in the app",source:"@site/general/app/development/plugins-development-guide/troubleshooting.md",sourceDirName:"app/development/plugins-development-guide",slug:"/app/development/plugins-development-guide/troubleshooting",permalink:"/moodledevdocs/general/app/development/plugins-development-guide/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app/development/plugins-development-guide/troubleshooting.md",tags:[{label:"Moodle App",permalink:"/moodledevdocs/general/tags/moodle-app"}],version:"current",lastUpdatedBy:"Noel De Martin",lastUpdatedAt:1715004871e3,sidebarPosition:3,frontMatter:{title:"Troubleshooting Moodle App Plugins Development",sidebar_label:"Troubleshooting",sidebar_position:3,tags:["Moodle App"]},sidebar:"moodleapp",previous:{title:"API Reference",permalink:"/moodledevdocs/general/app/development/plugins-development-guide/api-reference"},next:{title:"Accessibility",permalink:"/moodledevdocs/general/app/development/accessibility"}},d={},p=[{value:"Plugin changes are not picked up in the app",id:"plugin-changes-are-not-picked-up-in-the-app",level:2},{value:"Invalid response received",id:"invalid-response-received",level:2},{value:"I can&#39;t return an object or array in <code>otherdata</code>",id:"i-cant-return-an-object-or-array-in-otherdata",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:a,metadata:s}),"\n",(0,o.jsx)(n.h2,{id:"plugin-changes-are-not-picked-up-in-the-app",children:"Plugin changes are not picked up in the app"}),"\n",(0,o.jsxs)(n.p,{children:["Remember to go through the list of tips in the ",(0,o.jsx)(n.a,{href:"/moodledevdocs/general/app/development/plugins-development-guide/#seeing-plugin-changes-in-the-app",children:"Seeing plugin changes in the app"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"invalid-response-received",children:"Invalid response received"}),"\n",(0,o.jsxs)(n.p,{children:["You might get this error when using the ",(0,o.jsx)(n.a,{href:"/moodledevdocs/general/app/development/plugins-development-guide/api-reference#core-site-plugins-call-ws",children:"core-site-plugins-call-ws"})," directive or similar."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, the app expects all Web Service calls to return an object. If your Web Service returns another type, you need to specify it using the ",(0,o.jsx)(n.code,{children:"preSets"})," attribute in the directive."]}),"\n",(0,o.jsx)(n.p,{children:"For example, if your Web Service returns a boolean you should specify it like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:"ng2",children:"<ion-button core-site-plugins-call-ws name=\"local_sample_submit\" [preSets]=\"{ typeExpected: 'boolean' }\">\n    {{ 'plugin.local_sample.submit' | translate }}\n</ion-button>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, if the Web Service returns ",(0,o.jsx)(n.code,{children:"null"})," you need to tell the app not to expect any result using ",(0,o.jsx)(n.code,{children:"preSets"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",metastring:"ng2",children:'<ion-button core-site-plugins-call-ws name="local_sample_submit" [preSets]="{ responseExpected: false }">\n    {{ \'plugin.local_sample.submit\' | translate }}\n</ion-button>\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"i-cant-return-an-object-or-array-in-otherdata",children:["I can't return an object or array in ",(0,o.jsx)(n.code,{children:"otherdata"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you try to return an object or an array in any field inside ",(0,o.jsx)(n.code,{children:"otherdata"})," in ",(0,o.jsx)(n.a,{href:"/moodledevdocs/general/app/development/plugins-development-guide/api-reference#content-responses",children:"content responses"}),", the Web Service call will fail with the following error:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Scalar type expected, array or object received\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Each field in ",(0,o.jsx)(n.code,{children:"otherdata"})," must be a string, number or boolean; it cannot be an object or array. If you need to send complex values, you can use ",(0,o.jsx)(n.code,{children:"json_encode"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"'otherdata' => ['data' => json_encode($data)],\n"})}),"\n",(0,o.jsx)(n.p,{children:"The app will parse the string and it will be available as an array or object."})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);