"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[67062],{24266:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(74848),i=s(28453),o=s(78924);const r={title:"Penetration testing",tags:["Security","Processes","Testing"]},a=void 0,l={id:"development/process/security/penetration-testing",title:"Penetration testing",description:"This is information for people who want to performing a penetration test of their Moodle instance as well as information for pen testers.",source:"@site/general/development/process/security/penetration-testing.md",sourceDirName:"development/process/security",slug:"/development/process/security/penetration-testing",permalink:"/moodledevdocs/general/development/process/security/penetration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/security/penetration-testing.md",tags:[{label:"Security",permalink:"/moodledevdocs/general/tags/security"},{label:"Processes",permalink:"/moodledevdocs/general/tags/processes"},{label:"Testing",permalink:"/moodledevdocs/general/tags/testing"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1672583769e3,frontMatter:{title:"Penetration testing",tags:["Security","Processes","Testing"]},sidebar:"process",previous:{title:"Security",permalink:"/moodledevdocs/general/development/process/security/"},next:{title:"Moodle App Development process",permalink:"/moodledevdocs/general/development/process-moodleapp"}},d={},c=[{value:"Preparing for a penetration test",id:"preparing-for-a-penetration-test",level:2},{value:"Set debugging to normal",id:"set-debugging-to-normal",level:3},{value:"Setup the environment like production",id:"setup-the-environment-like-production",level:3},{value:"Common non-issues",id:"common-non-issues",level:2},{value:"XSS risks and capabilities",id:"xss-risks-and-capabilities",level:3},{value:"The sesskey param is a CSRF token",id:"the-sesskey-param-is-a-csrf-token",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{frontMatter:r,metadata:l}),"\n",(0,n.jsx)(t.p,{children:"This is information for people who want to performing a penetration test of their Moodle instance as well as information for pen testers."}),"\n",(0,n.jsx)(t.h2,{id:"preparing-for-a-penetration-test",children:"Preparing for a penetration test"}),"\n",(0,n.jsx)(t.h3,{id:"set-debugging-to-normal",children:"Set debugging to normal"}),"\n",(0,n.jsx)(t.p,{children:"Either turn off all debugging which can disclose stacktraces etc, or show the pen testers how this can be toggled."}),"\n",(0,n.jsx)(t.h3,{id:"setup-the-environment-like-production",children:"Setup the environment like production"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes a dedicated penetration test environment is setup and it is setup more like a dev / uat / stage environment which might have things like debugging on (see above). Generally a penetration test env should mirror a production configuration to avoid wasting pen testers time."}),"\n",(0,n.jsx)(t.h2,{id:"common-non-issues",children:"Common non-issues"}),"\n",(0,n.jsx)(t.p,{children:"There are a number of things which pen testers often flag as issues which are more just the way Moodle works and are often misunderstood."}),"\n",(0,n.jsx)(t.h3,{id:"xss-risks-and-capabilities",children:"XSS risks and capabilities"}),"\n",(0,n.jsx)(t.p,{children:"Moodle has a fine grained capabilities and roles system for providing access control to the whole system. Various capabilities inherently have an XSS risk, for instance an admin setting which allows an admin to inject arbitrary html and js into the sites header or footer. This is both known, and should be considered a feature and not a bug. So the presence of an XSS risk in itself is not a new or unknown issue."}),"\n",(0,n.jsxs)(t.p,{children:["However if a penetration test finds that actions can be taken which expose an XSS risk, ",(0,n.jsx)(t.strong,{children:"AND"})," that the test user has ",(0,n.jsx)(t.strong,{children:"NOT"})," been granted capabilities that grant them an explicit XSS risk, then there is a real issue and either the XSS risk should be closed, or it should be disclosed in the definition of that capability."]}),"\n",(0,n.jsxs)(t.p,{children:["The most trivial example would be the ability to ",(0,n.jsxs)(t.a,{href:"https://github.com/moodle/moodle/blob/master/lib/db/access.php#L58-L60",children:["edit ",(0,n.jsx)(t.code,{children:"site:config"})]})," which has the RISK_XSS:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"    'moodle/site:config' => [\n        'riskbitmask' => RISK_SPAM | RISK_PERSONAL | RISK_XSS | RISK_CONFIG | RISK_DATALOSS,\n        'captype' => 'write',\n        'contextlevel' => CONTEXT_SYSTEM,\n        'archetypes' => []\n    ]\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/en/Roles_and_permissions",children:"Roles and permissions"})," page to learn how they work."]})}),"\n",(0,n.jsx)(t.h3,{id:"the-sesskey-param-is-a-csrf-token",children:"The sesskey param is a CSRF token"}),"\n",(0,n.jsxs)(t.p,{children:["Many penetration tests highlight the use of the ",(0,n.jsx)(t.code,{children:"?sesskey=xxx"})," HTTP parameter as a security issue, claiming that it leaks the session ID. This should generally be considered a false positive as Moodle's ",(0,n.jsx)(t.code,{children:"sesskey"})," is not actually a session key, but a poorly-named CSRF token. The Moodle session ID is stored separately in a normal cookie."]}),"\n",(0,n.jsx)(t.p,{children:"Unfortunately it is not easy to rename this token at this time."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Learn more about how the sesskey works in Moodle in the ",(0,n.jsx)(t.a,{href:"/moodledevdocs/general/development/policies/security/crosssite-request-forgery#session-key",children:"Cross-site request forgery"})," page."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);