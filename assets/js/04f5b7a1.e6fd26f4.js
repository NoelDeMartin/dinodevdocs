"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[73903],{20360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),a=n(28453),i=n(78924);const r={title:"Security",tags:["Web Services","core_external","external","API"],sidebar_position:3},o=void 0,c={id:"apis/subsystems/external/security",title:"Security",description:"Before operating on any data in an external function, you must ensure that the user:",source:"@site/versioned_docs/version-4.1/apis/subsystems/external/security.md",sourceDirName:"apis/subsystems/external",slug:"/apis/subsystems/external/security",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/external/security",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.1/apis/subsystems/external/security.md",tags:[{label:"Web Services",permalink:"/moodledevdocs/docs/4.1/tags/web-services"},{label:"core_external",permalink:"/moodledevdocs/docs/4.1/tags/core-external"},{label:"external",permalink:"/moodledevdocs/docs/4.1/tags/external"},{label:"API",permalink:"/moodledevdocs/docs/4.1/tags/api"}],version:"4.1",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1671689267e3,sidebarPosition:3,frontMatter:{title:"Security",tags:["Web Services","core_external","external","API"],sidebar_position:3},sidebar:"docs",previous:{title:"Function Definitions",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/external/functions"},next:{title:"File handling",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/external/files"}},l={},d=[{value:"Validating function parameters",id:"validating-function-parameters",level:2},{value:"Validating access to the Moodle context",id:"validating-access-to-the-moodle-context",level:2},{value:"Ensuring that a user has the appropriate rights",id:"ensuring-that-a-user-has-the-appropriate-rights",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{frontMatter:r,metadata:c}),"\n",(0,s.jsx)(t.p,{children:"Before operating on any data in an external function, you must ensure that the user:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"has access to context that the data is located in"}),"\n",(0,s.jsx)(t.li,{children:"has permission to perform the relevant action"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"validating-function-parameters",children:"Validating function parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Before working with any data provided by a user you ",(0,s.jsx)(t.strong,{children:"must"})," validate the parameters against the definitions you have defined."]}),"\n",(0,s.jsxs)(t.p,{children:["To do so you should call the ",(0,s.jsx)(t.code,{children:"validate_parameters()"})," function, passing in the reference to your ",(0,s.jsx)(t.code,{children:"execute_parameters()"})," function, and the complete list of parameters for the function. The function will return the validated and cleaned parameters."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"validate_parameters()"})," function is defined on the ",(0,s.jsx)(t.code,{children:"external_api"})," class, and can be called as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="local/groupmanager/classes/external/create_groups.php"',children:"public static function execute(array $groups): array {\n    [\n        'groups' => $groups,\n    ] = self::validate_parameters(self::execute_parameters(), [\n        'groups' => $groups,\n    ]);\n    // ...\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"validating-access-to-the-moodle-context",children:"Validating access to the Moodle context"}),"\n",(0,s.jsxs)(t.p,{children:["Whenever fetching or updating any data within Moodle using an External function definition, you ",(0,s.jsx)(t.strong,{children:"must"})," validate the context that the data exists within."]}),"\n",(0,s.jsxs)(t.p,{children:["To do so you should call the ",(0,s.jsx)(t.code,{children:"validate_context()"})," function, passing the ",(0,s.jsx)(t.em,{children:"most specific"})," context for the data."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you are working with data belonging to a specific activity, you should use the ",(0,s.jsx)(t.em,{children:"activity"})," context. If you are working with data belonging to a course, you should use the ",(0,s.jsx)(t.em,{children:"course"})," context."]}),"\n",(0,s.jsx)(t.p,{children:"If your function operates on multiple contexts (like a list of courses), you must validate each context right before generating any response data related to that context."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"validate_context()"})," function is defined on the ",(0,s.jsx)(t.code,{children:"external_api"})," class, and can be called as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="local/groupmanager/classes/external/create_groups.php"',children:"public static function execute(array $groups): array {\n    // ...\n    foreach ($groups as $group) {\n        $coursecontext = \\context_course::instance($group['courseid']);\n        self::validate_context($coursecontext);\n        // ...\n    }\n}\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"validate_context()"})," function will also configure the correct theme, language, and filters required to render content for the current user."]})}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"You should not:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["use the ",(0,s.jsx)(t.code,{children:"require_login"})," function from an external function - this function is reserved for php scripts returning a web page."]}),"\n",(0,s.jsxs)(t.li,{children:["call ",(0,s.jsx)(t.code,{children:"$PAGE->set_context()"})," manually - this will generate warning notices."]}),"\n"]}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"validate_context()"})," function is the only correct way to write external functions."]})]}),"\n",(0,s.jsx)(t.h2,{id:"ensuring-that-a-user-has-the-appropriate-rights",children:"Ensuring that a user has the appropriate rights"}),"\n",(0,s.jsx)(t.p,{children:"Once you have confirmed that the provided data is of the correct type, and configured Moodle for the specific context, you should also ensure that all capabilities are checked correctly."}),"\n",(0,s.jsx)(t.p,{children:"You can use the standard capability functions, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"has_capability()"})," - to check that a user has a single capability"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"has_any_capability()"})," - to check that a user has any capability in a set"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"has_all_capability()"})," - to check that a user has all capabilities in a set"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"require_capability()"})," - to require a single capability"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"require_all_capabilities()"})," - to require that a user has all capabilities in a set"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);