"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[94351],{93753:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(74848),t=i(28453),a=i(78924);const r={title:"Roles API",tags:["Roles","Interfaces","Capabilities"]},o=void 0,l={id:"apis/subsystems/roles",title:"Roles API",description:"The Roles API is an extension of the Access API and defines a set of actions",source:"@site/docs/apis/subsystems/roles.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/roles",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/roles",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/roles.md",tags:[{label:"Roles",permalink:"/moodledevdocs/docs/4.4/tags/roles"},{label:"Interfaces",permalink:"/moodledevdocs/docs/4.4/tags/interfaces"},{label:"Capabilities",permalink:"/moodledevdocs/docs/4.4/tags/capabilities"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:16560377e5,frontMatter:{title:"Roles API",tags:["Roles","Interfaces","Capabilities"]},sidebar:"docs",previous:{title:"Questions API",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/question/"},next:{title:"Tag API",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/tag/"}},c={},d=[{value:"Definitions",id:"definitions",level:2},{value:"Roles",id:"roles",level:3},{value:"Context",id:"context",level:3},{value:"Capabilities",id:"capabilities",level:3},{value:"Capability conflicts",id:"capability-conflicts",level:3},{value:"Hardening Roles system",id:"hardening-roles-system",level:3},{value:"Risk bitmask in capabilities",id:"risk-bitmask-in-capabilities",level:4},{value:"Programming Interface",id:"programming-interface",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{frontMatter:r,metadata:l}),"\n",(0,n.jsxs)(s.p,{children:["The Roles API is an extension of the ",(0,n.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/subsystems/access",children:"Access API"})," and defines a set of actions\nthat a user is allowed to perform on certain system levels. A ",(0,n.jsx)(s.strong,{children:"capability"})," defines a single permission\n(like posting to a forum) and a ",(0,n.jsx)(s.strong,{children:"role"})," is composed of a set of permissions, for example: a user with the Teacher\nrole can add activities to a course, as well as managing course participants and grading course modules, while\na user with a Non-editing Teacher role can only manage course participants and grade them, but not manage activities."]}),"\n",(0,n.jsx)(s.h2,{id:"definitions",children:"Definitions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"role"})," is an identifier of the user's status in some context. Teacher, Student and Forum moderator are all examples of possible roles."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"capability"})," is a description of some particular Moodle feature. Capabilities belong to a component. and are assigned to roles. For example, ",(0,n.jsx)(s.code,{children:"mod/forum:replypost"})," is a capability."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"permission"})," is the level in which a capability is applied to a role. Example values include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Allow"}),"\n",(0,n.jsx)(s.li,{children:"Prevent"}),"\n",(0,n.jsx)(s.li,{children:"Prohibit"}),"\n",(0,n.jsx)(s.li,{children:"Inherit"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"context"})," is an area in Moodle. There are several context types for:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"the whole site"}),"\n",(0,n.jsx)(s.li,{children:"a user"}),"\n",(0,n.jsx)(s.li,{children:"a course category"}),"\n",(0,n.jsx)(s.li,{children:"a course"}),"\n",(0,n.jsx)(s.li,{children:"an activity"}),"\n",(0,n.jsx)(s.li,{children:"a block"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"roles",children:"Roles"}),"\n",(0,n.jsxs)(s.p,{children:["A role is defined with a list of permissions - each role definition is global defined and applies equally to all\ncontext levels, but these can be overridden in individual contexts. For example, a 'Student' role may not normally\nhave the ",(0,n.jsx)(s.code,{children:"moodle/site:accessallgroups"})," capability, but in the context of a specific forum the Teacher may grant\nthis role. Permissions control possible user actions within Moodle (for example to delete discussions, add\nactivities, and so on)"]}),"\n",(0,n.jsxs)(s.p,{children:["Roles can be applied to users in a ",(0,n.jsx)(s.strong,{children:"context"})," (for example to assign Fred as a Teacher in a particular course)"]}),"\n",(0,n.jsx)(s.h3,{id:"context",children:"Context"}),"\n",(0,n.jsx)(s.p,{children:"Here are the possible contexts, listed from the most general to the most specific."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"CONTEXT NAME"}),(0,n.jsx)(s.th,{children:"CONTEXT AREA"}),(0,n.jsx)(s.th,{children:"CONTEXT LEVEL"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_SYSTEM"})}),(0,n.jsx)(s.td,{children:"the whole site"}),(0,n.jsx)(s.td,{children:"10"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_USER"})}),(0,n.jsx)(s.td,{children:"another user"}),(0,n.jsx)(s.td,{children:"30"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_COURSECAT"})}),(0,n.jsx)(s.td,{children:"a course category"}),(0,n.jsx)(s.td,{children:"40"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_COURSE"})}),(0,n.jsx)(s.td,{children:"a course"}),(0,n.jsx)(s.td,{children:"50"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_MODULE"})}),(0,n.jsx)(s.td,{children:"an activity module"}),(0,n.jsx)(s.td,{children:"70"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CONTEXT_BLOCK"})}),(0,n.jsx)(s.td,{children:"a block"}),(0,n.jsx)(s.td,{children:"80"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"An authorized user will be able to assign an arbitrary number of roles to each user in any context."}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"https://docs.moodle.org/dev/Roles_and_modules#Context",children:"Roles and modules#Context"})," for more information."]}),"\n",(0,n.jsx)(s.h3,{id:"capabilities",children:"Capabilities"}),"\n",(0,n.jsx)(s.p,{children:"Capabilities can have the following permissions:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"CAP_INHERIT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"CAP_ALLOW"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"CAP_PREVENT"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"CAP_PROHIBIT"})}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"If no permission is defined for a capability in a role, then the permission is inherited from a context that is\nmore general than the current context. If we define different permission values for the same capability in different\ncontexts, we say that we are overriding the capability in the more specific context."})}),"\n",(0,n.jsx)(s.h3,{id:"capability-conflicts",children:"Capability conflicts"}),"\n",(0,n.jsx)(s.p,{children:"Since the capabilities in each role could be different, there can be conflicts in capabilities."}),"\n",(0,n.jsxs)(s.p,{children:["If we set a ",(0,n.jsx)(s.code,{children:"PROHIBIT"}),' on a capability, it means that the capability cannot be overridden and will ALWAYS\nhave a permission of prevent (deny). Prohibit always wins. For example, Jeff has a naughty student role that\nprohibits him from postings in any forums (for the whole site), but he\'s also assigned a facilitator role in\n"Science forum" in the course Science and Math 101. Since prohibit always wins, Jeff is unable to post\nin "Science forum".']}),"\n",(0,n.jsx)(s.p,{children:"Another example would be, if a user has a Teacher and a Student role at the same time in a given course, then\nthe following settings are possible:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"moodle/site:accessallgroups"})," capability is granted to the Teacher, but is prevented for the Student on site level"]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"moodle/site:accessallgroups"})," capability is granted to the Teacher, but is prevented for the Student in the category"]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"moodle/site:accessallgroups"})," capability is granted to the Teacher, but is prohibited for the Student in the category"]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"moodle/site:accessallgroups"})," capability is granted to the Teacher in the category, but is prevented for the Student\nin the course"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"hardening-roles-system",children:"Hardening Roles system"}),"\n",(0,n.jsx)(s.p,{children:"Hardening a role, refers to limiting the ability of a role to assign or to acquire permissions."}),"\n",(0,n.jsx)(s.p,{children:"Roles have a great freedom when assigning capabilities to students. The problem might arise when students are assigned\npermission that allows adding of content that is not cleaned before display - such as editing resources or\nadding activities. They could then use any type of XSS attack to gain full administrative access quite easily."}),"\n",(0,n.jsx)(s.p,{children:"The solution has two parts: educate admins and teachers about the risks associated with each capability and\noptionally allow central management of risks."}),"\n",(0,n.jsx)(s.h4,{id:"risk-bitmask-in-capabilities",children:"Risk bitmask in capabilities"}),"\n",(0,n.jsx)(s.p,{children:"Adds a risk bitmask field to each capability. Each bit indicates presence of different risk associated with\ngiven capability. Basic risks are"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_SPAM"})," - user can add a visible content to a site, send messages to other users"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_PERSONAL"})," - access to private personal information, for example backups with user details, non-public\ninformation in profile (hidden email)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_XSS"})," - user can submit content that is not cleaned (both HTML with active content and unprotected files)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_CONFIG"})," - user can change global configuration, actions are missing sanity checks"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_MANAGETRUST"})," - manage trust bitmasks of other users"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"RISK_DATALOSS"})," - can destroy large amounts of information that cannot easily be recovered.\nIn default configuration Guest role should have only capabilities without risks, Student roles also SPAM, Teacher roles PERSONAL and XSS too. Admins have all capabilities by default."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["When creating a new capability you might need to define risks and assign those in ",(0,n.jsx)(s.code,{children:"mod/xxx/db/access.php"}),"\nwith ",(0,n.jsx)(s.code,{children:"riskbitmask"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$capabilities = [\n    'tool/brickfield:viewcoursetools' => [\n        'riskbitmask' => RISK_PERSONAL,\n        'captype' => 'read',\n        'contextlevel' => CONTEXT_COURSE,\n        'archetypes' => [\n            'teacher' => CAP_ALLOW,\n            'editingteacher' => CAP_ALLOW,\n            'manager' => CAP_ALLOW,\n        ],\n        'clonepermissionsfrom' => 'coursereport/participation:view',\n    ],\n];\n"})}),"\n",(0,n.jsx)(s.h2,{id:"programming-interface",children:"Programming Interface"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Moodle comes with a list of predefined roles, including a Student, Teacher, Non-editing teacher, and Course\nManager role. Each of these roles are based on a ",(0,n.jsx)(s.strong,{children:"role archetype"}),", which acts as a template for roles.\nAny custom role created by the site administrator can also ",(0,n.jsx)(s.em,{children:"choose"})," to follow one of these role archetypes.\nWhen a plugin defines a new capability, it may specify how it would expect to be applied within these role archetypes,\nand these are applied to any role which follows this archetype. For example, if you create a new activity module with\nnamed ",(0,n.jsx)(s.em,{children:"mod_example"}),", with a capability ",(0,n.jsx)(s.code,{children:"mod/example:view"}),", you may specify that the ",(0,n.jsx)(s.code,{children:"teacher"}),", and ",(0,n.jsx)(s.code,{children:"editingteacher"}),"\narchetypes are granted the capability with the allow permission. Any role which is based on these archetypes will be\ngranted this capability with the 'allow' permission."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"The role archetypes do not change often, and are currently defined as:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"manager"})," - A system level role used to manage courses without being directly enrolled in them"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"coursecreator"})," - A system level role used to create new courses"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"editingteacher"})," - A course level role used to grade students as well as manage a given course"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"teacher"})," - A course level role used to grade students (but not adding/editing activities)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"student"})," - A course level role for participating in a course, completing activities, but not grading other\ncourse participants"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"guest"})," - Courses can allow non-authenticated access if desired. In general user with guest role not supposed\nto change anything like form submissions."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user"})," - This role is assigned to every authenticated user."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"frontpage"})," - All authenticated users on site home page (which actually is a course)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:"Fetching a list of the role archetypes programmatically"}),"\nIn some rare situations you may need to fetch a list of available role archetypes. You can do so using the\n",(0,n.jsx)(s.code,{children:"get_role_archetypes()"})," function, for example:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Fetching a list of role archetypes"',children:"$archetypes = get_role_archetypes();\n"})})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["When handling a role on each page you need to find the context the user is working in, using the\n",(0,n.jsx)(s.code,{children:"context::instance_by_id()"})," or ",(0,n.jsx)(s.code,{children:"context_[type]::instance($typeid)"})," function, for example:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$context = context::instance_by_id($contextid);\n"})}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)("summary",{children:"Fetching roles and users who hold a capability"}),"\nMoodle has a flexible and detailed capability system which allows administrators to define many similar roles\nfor different purposes. It is quite common to have multiple teacher-like roles but need to restrict their access\ndepending on their usage. For example in a University setting you may have a lecturer who presents the course\nmaterials, and then a number of Ph.D students who lead smaller groups of students in labs, seminars, and workshops.\nThese roles may both be considered a form of teacher, but they will have different permissions to suit their needs.\nAs a result we strongly discourage that you think in terms of which roles or users hold a capability, but rather\nwhether a specific user holds a capability."]}),(0,n.jsxs)(s.admonition,{type:"danger",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["There are some situations where you ",(0,n.jsx)(s.em,{children:"do"})," need to get a list of roles with a capability in a specific"]}),(0,n.jsxs)(s.p,{children:["context, but these are very rare. You can do so using the ",(0,n.jsx)(s.code,{children:"get_roles_with_cap_in_context()"})," function:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="Fetching a list of roles which hold a capability in the specified context"',children:"[$roleids] = get_roles_with_cap_in_context($context, 'moodle/course:manageactivities');\n"})})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Assigning user a role (for custom enrolment plugin development)"}),(0,n.jsxs)(s.p,{children:["For certain institutions' enrolment process might be different to a standard workflow. For example enrolment is\nmanaged by an external system, so you might need to develop a custom\n",(0,n.jsx)(s.a,{href:"https://moodle.org/plugins/browse.php?list=category&id=22",children:"Enrolment Plugin"}),"."]}),(0,n.jsxs)(s.admonition,{title:"In case of custom enrolment plugin development only",type:"danger",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="To get a list of roles for a user"',children:"$ras = get_user_roles($context, $user, $checkparentcontexts);\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",metastring:'title="To assign a role to a user"',children:"role_assign($roleid, $userid, $contextid, $component, $enrolmentpluginid);\n"})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Relevant discussions on ",(0,n.jsx)(s.a,{href:"https://moodle.org/",children:"moodle.org"}),":","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"http://moodle.org/mod/forum/view.php?f=941",children:"Roles and Capabilities forum"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);