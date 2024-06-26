"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[30774],{3258:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(74848),r=s(28453),i=s(78924);const o={title:"Function Definitions",tags:["Web Services","API","core_external","external"],sidebar_position:2},a=void 0,l={id:"apis/subsystems/external/functions",title:"Function Definitions",description:"An External function definition is the class, and collection of functions, used to define:",source:"@site/versioned_docs/version-4.2/apis/subsystems/external/functions.md",sourceDirName:"apis/subsystems/external",slug:"/apis/subsystems/external/functions",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/functions",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/subsystems/external/functions.md",tags:[{label:"Web Services",permalink:"/moodledevdocs/docs/4.2/tags/web-services"},{label:"API",permalink:"/moodledevdocs/docs/4.2/tags/api"},{label:"core_external",permalink:"/moodledevdocs/docs/4.2/tags/core-external"},{label:"external",permalink:"/moodledevdocs/docs/4.2/tags/external"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,sidebarPosition:2,frontMatter:{title:"Function Definitions",tags:["Web Services","API","core_external","external"],sidebar_position:2},sidebar:"docs",previous:{title:"Function Declarations",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/description"},next:{title:"Security",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/security"}},c={},d=[{value:"An example definition",id:"an-example-definition",level:3},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Since:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{frontMatter:o,metadata:l}),"\n",(0,t.jsxs)(n.p,{children:["An External function ",(0,t.jsx)(n.em,{children:"definition"})," is the class, and collection of functions, used to define:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"any parameters that the function expects to take, including any types"}),"\n",(0,t.jsx)(n.li,{children:"what the function will return, including any types"}),"\n",(0,t.jsx)(n.li,{children:"whether the function has been deprecated, or not"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It also includes the code that will actually be executed by the function."}),"\n",(0,t.jsxs)(n.p,{children:["The function definition should be located within the ",(0,t.jsx)(n.code,{children:"external"})," namespace of a component."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Example",type:"info",children:[(0,t.jsxs)(n.p,{children:["For a component named ",(0,t.jsx)(n.code,{children:"local_groupmanager"})," located in ",(0,t.jsx)(n.code,{children:"local/groupmanager"})," which is responsible for creating groups on request, you may have:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a Web service function named: ",(0,t.jsx)(n.code,{children:"local_groupmanager_create_groups"})]}),"\n",(0,t.jsxs)(n.li,{children:["defined in a class named ",(0,t.jsx)(n.code,{children:"local_groupmanager\\external\\create_groups"})]}),"\n",(0,t.jsxs)(n.li,{children:["which is located ",(0,t.jsx)(n.code,{children:"local/groupmanager/classes/external/create_groups.php"})]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"A service definition:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," extend the ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," declare an ",(0,t.jsx)(n.code,{children:"execute_parameters"})," function to describe the expected parameters of the function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," declare an ",(0,t.jsx)(n.code,{children:"execute"})," function which is called with the functions and performs the expected actions"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," declare an ",(0,t.jsx)(n.code,{children:"execute_returns"})," function to describe the values returned by the function"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"may"})," declare an ",(0,t.jsx)(n.code,{children:"execute_is_deprecated"})," function to declare a function as deprecated"]}),"\n"]}),"\n",(0,t.jsx)(s,{version:"4.2",issueNumber:"MDL-76583"}),"\n",(0,t.jsxs)(n.admonition,{title:"Writing plugins supporting Multiple Moodle versions",type:"caution",children:[(0,t.jsx)(n.p,{children:"The External API subsystem was restructured in Moodle 4.2 and moved from classes within a manually-required file, to autoloaded and namespaced classes."}),(0,t.jsx)(n.p,{children:"If you are developing a plugin whose codebase is used or tested in multiple Moodle versions, including older versions of Moodle, then you:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," ",(0,t.jsx)(n.code,{children:"require_once"})," the ",(0,t.jsx)(n.code,{children:"lib/externallib.php"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"must"})," extend the ",(0,t.jsx)(n.code,{children:"external_api"})," class instead of ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api"})]}),"\n"]}),(0,t.jsx)(n.p,{children:"This will allow your plugin to continue working without deprecation notices or failures."}),(0,t.jsx)(n.p,{children:"Please note that deprecation notices will be added to this pathway from Moodle 4.6 onwards."})]}),"\n",(0,t.jsx)(n.h3,{id:"an-example-definition",children:"An example definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="local/groupmanager/classes/external/create_groups.php"',children:"<?php\n\nnamespace local_groupmanager\\external;\n\nuse external_function_parameters;\nuse external_multiple_structure;\nuse external_single_structure;\nuse external_value;\n\nclass create_groups extends \\core_external\\external_api {\n    public static function execute_parameters(): external_function_parameters {\n        return new external_function_parameters([\n            'groups' => new external_multiple_structure(\n                new external_single_structure([\n                    'courseid'  => new external_value(PARAM_INT, 'The course to create the group for'),\n                    'idnumber'    => new external_value(\n                        PARAM_RAW,\n                        'An arbitrary ID code number perhaps from the institution',\n                        VALUE_DEFAULT,\n                        null\n                    ),\n                    'name' => new external_value(\n                        PARAM_RAW,\n                        'The name of the group'\n                    ),\n                    'description' => new external_value(\n                        PARAM_TEXT,\n                        'A description',\n                        VALUE_OPTIONAL\n                    ),\n                ]),\n                'A list of groups to create'\n            ),\n        ]);\n    }\n\n    public static function execute(array $groups): array {\n        // Validate all of the parameters.\n        [\n            'groups' => $groups,\n        ] = self::validate_parameters(self::execute_parameters(), [\n            'groups' => $groups,\n        ]);\n\n        // Perform security checks, for example:\n        $coursecontext = \\context_course::instance($courseid);\n        self::validate_context($coursecontext);\n        require_capability('moodle/course:creategroups', $coursecontext);\n\n        // Create the group using existing Moodle APIs.\n        $createdgroups = \\local_groupmanager\\util::create_groups($groups);\n\n        // Return a value as described in the returns function.\n        return [\n            'groups' => $createdgroups,\n        ];\n    }\n\n    public static function execute_returns(): external_single_structure {\n        return new external_single_structure(\n            'groups' => new external_multiple_structure([\n                'id' => new external_value(PARAM_INT, 'Id of the created user'),\n                'name' => new external_value(PARAM_RAW, 'The name of the group'),\n            ])\n        );\n    }\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Available parameter types are defined in ",(0,t.jsx)(n.code,{children:"lib/moodlelib.php"})," and are used by the ",(0,t.jsx)(n.code,{children:"validate_parameters()"})," function and during return value checking to ensure that the service is called and working as defined."]})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis",children:"Core APIs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/writing-a-service",children:"Web services API"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);