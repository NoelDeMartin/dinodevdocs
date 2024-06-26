"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99875],{23683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var l=s(74848),r=s(28453),i=s(78924);const t={title:"Enrolment API",tags:["Enrolment","Library"]},o=void 0,d={id:"apis/subsystems/enrol",title:"Enrolment API",description:"The enrolment API gives access to the enrolment methods and also to enrolment plugins instances.",source:"@site/versioned_docs/version-4.2/apis/subsystems/enrol.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/enrol",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/enrol",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/subsystems/enrol.md",tags:[{label:"Enrolment",permalink:"/moodledevdocs/docs/4.2/tags/enrolment"},{label:"Library",permalink:"/moodledevdocs/docs/4.2/tags/library"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:168325581e4,frontMatter:{title:"Enrolment API",tags:["Enrolment","Library"]},sidebar:"docs",previous:{title:"Editor API",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/editor/"},next:{title:"External Services",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/"}},a={},c=[{value:"Difference between user enrolment and role assignment",id:"difference-between-user-enrolment-and-role-assignment",level:2},{value:"What is enrolment?",id:"what-is-enrolment",level:3},{value:"Unenrolment",id:"unenrolment",level:3},{value:"Enrolment status",id:"enrolment-status",level:3},{value:"Activity participation",id:"activity-participation",level:3},{value:"API functions",id:"api-functions",level:2},{value:"is_enrolled()",id:"is_enrolled",level:3},{value:"get_enrolled_users()",id:"get_enrolled_users",level:3},{value:"count_enrolled_users()",id:"count_enrolled_users",level:3},{value:"get_enrolled_sql()",id:"get_enrolled_sql",level:3},{value:"enrol_get_plugin(): enrol_plugin",id:"enrol_get_plugin-enrol_plugin",level:3},{value:"Enrolment plugin methods",id:"enrolment-plugin-methods",level:2},{value:"$enrol_plugin-&gt;enrol_user()",id:"enrol_plugin-enrol_user",level:3},{value:"$enrol_plugin-&gt;unenrol_user()",id:"enrol_plugin-unenrol_user",level:3},{value:"$enrol_plugin-&gt;update_user_enrol()",id:"enrol_plugin-update_user_enrol",level:3},{value:"$enrol_plugin-&gt;add_default_instance()",id:"enrol_plugin-add_default_instance",level:3},{value:"$enrol_plugin-&gt;delete_instance()",id:"enrol_plugin-delete_instance",level:3},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{frontMatter:t,metadata:d}),"\n",(0,l.jsxs)(n.p,{children:["The enrolment API gives access to the enrolment methods and also to ",(0,l.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/plugintypes/enrol/",children:"enrolment plugins"})," instances."]}),"\n",(0,l.jsx)(n.h2,{id:"difference-between-user-enrolment-and-role-assignment",children:"Difference between user enrolment and role assignment"}),"\n",(0,l.jsxs)(n.p,{children:["Users enrolled in a course have at least one record in ",(0,l.jsx)(n.code,{children:"user_enrolments"})," table. This table has the relation between courses and users ",(0,l.jsx)(n.strong,{children:"through an enrolment plugin instance"}),". However, ",(0,l.jsx)(n.code,{children:"user_enrolments"})," does not contain information about the user role in the course, only information about:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Enrolment plugin instance"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Enrolment status"})," (active or suspended)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Enrolment Start and end dates"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The specific role assignments are related to the context, not only to course (as activities and other pages can use its own). The specific roles of a user are stored in the ",(0,l.jsx)(n.code,{children:"role_assignments"})," table. This table stores:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.strong,{children:"user role id"})," in the ",(0,l.jsx)(n.strong,{children:"context"})]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.strong,{children:"component item"})," that assigned the role. In the case of a regular course, the ",(0,l.jsx)(n.em,{children:"component"})," is the name of the enrolment plugin and the ",(0,l.jsx)(n.em,{children:"item id"})," is the specific plugin instance."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"what-is-enrolment",children:"What is enrolment?"}),"\n",(0,l.jsx)(n.p,{children:"Enrolled users may fully participate in a course. Active user enrolment allows user to enter course. Only enrolled users may be group members. Grades are stored only for enrolled users."}),"\n",(0,l.jsx)(n.h3,{id:"unenrolment",children:"Unenrolment"}),"\n",(0,l.jsx)(n.p,{children:"Unenrolment is irreversible operation that purges user participation information. Full unenrolment is suitable only if you do not need to preserve all course participation information including user grades."}),"\n",(0,l.jsx)(n.h3,{id:"enrolment-status",children:"Enrolment status"}),"\n",(0,l.jsxs)(n.p,{children:["Instead of full unenrolment it is usually better to only ",(0,l.jsx)(n.em,{children:"suspend"})," user enrolment. If there are other ways to enter the course (such guest access) it is recommended to remove user roles at the same time."]}),"\n",(0,l.jsx)(n.p,{children:"Enrolments have two states defined by two constants:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ENROL_USER_ACTIVE"})," the enrolment is active"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ENROL_USER_SUSPENDED"})," the enrolment is suspended"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"activity-participation",children:"Activity participation"}),"\n",(0,l.jsx)(n.p,{children:"Activity developers decide the enrolment related behaviour of module."}),"\n",(0,l.jsx)(n.p,{children:"There are some general guidelines:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Only users with active enrolments should receive notifications."}),"\n",(0,l.jsx)(n.li,{children:"Activities should display enrolled users with some capability as participants."}),"\n",(0,l.jsx)(n.li,{children:"By default only users with active enrolments should be displayed in reports."}),"\n",(0,l.jsx)(n.li,{children:"There should be option to display all enrolled users including suspended enrolments."}),"\n",(0,l.jsx)(n.li,{children:"For performance reasons invisible participation data should be purged on unenrolment."}),"\n",(0,l.jsx)(n.li,{children:"Contributions visible by other participants should be kept after unenrolment (such as forum posts)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"api-functions",children:"API functions"}),"\n",(0,l.jsx)(n.h3,{id:"is_enrolled",children:"is_enrolled()"}),"\n",(0,l.jsx)(n.p,{children:"Use this method to determine if a user is enrolled into a course. This method returns true for students and teachers, but false for administrators and other managers."}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["User enrolments can be either active or suspended, suspended users can not enter the course (unless there is some kind of guest access allowed or have ",(0,l.jsx)(n.code,{children:"moodle/course:view"})," capability) and are usually hidden in the UI."]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"function is_enrolled(\n    context $context,\n    stdClass $user = null,\n    string $withcapability = '',\n    bool $onlyactive = false\n)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Good example is choice module where we have one slot for each participant, people that are not enrolled are not allowed to vote ",(0,l.jsx)(n.code,{children:"is_enrolled($context, $USER, 'mod/choice:choose')"}),". Another example is assignment where users need to be enrolled and have capability to submit assignments ",(0,l.jsx)(n.code,{children:"is_enrolled($this->context, $USER, 'mod/assignment:submit')"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"get_enrolled_users",children:"get_enrolled_users()"}),"\n",(0,l.jsx)(n.p,{children:"Returns the list of enrolled users. This method allows to filter the result by capability, pagination or state."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"function get_enrolled_users(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    string $userfields = 'u.*',\n    ?string $orderby = null,\n    int $limitfrom = 0,\n    int $limitnum = 0,\n    bool $onlyactive = false\n)\n"})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"View example"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(n.p,{children:"Get all users who are able to submit an assignment:"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$submissioncandidates = get_enrolled_users($modcontext, 'mod/assignment:submit');\n"})})]})]}),"\n",(0,l.jsx)(n.h3,{id:"count_enrolled_users",children:"count_enrolled_users()"}),"\n",(0,l.jsxs)(n.p,{children:["This method is used to get the total count of enrolments of a context. As ",(0,l.jsx)(n.code,{children:"get_enrolled_users"})," this methods allow several filters like capability, group id or counting only active enrollments."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"function count_enrolled_users(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    bool $onlyactive = false\n)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"get_enrolled_sql",children:"get_enrolled_sql()"}),"\n",(0,l.jsxs)(n.p,{children:["SQL ",(0,l.jsx)(n.code,{children:"select from get_enrolled_sql()"})," is often used for performance reasons as it can be used in joins to get specific information for enrolled users only."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"function get_enrolled_sql(\n    context $context,\n    string $withcapability = '',\n    int $groupid = 0,\n    bool $onlyactive = false,\n    bool $onlysuspended,\n    int $enrolid = 0\n)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enrol_get_plugin-enrol_plugin",children:"enrol_get_plugin(): enrol_plugin"}),"\n",(0,l.jsx)(n.p,{children:"Returns the enrolment plugin base class with the given name."}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"View example"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$instance = $DB->get_record('enrol', ['courseid' => $course->id, 'enrol' => 'manual'])\n$enrolplugin = enrol_get_plugin($instance->enrol);\n$enrolplugin->enrol_user($instance, $user->id, $role->id, $timestart, $timeend);\n"})}),(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"As can be seen in the example, to use the plugin enrol_user and unenrol_user methods you need to get the instance record of the plugin first."})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"enrolment-plugin-methods",children:"Enrolment plugin methods"}),"\n",(0,l.jsxs)(n.p,{children:["Once you use ",(0,l.jsx)(n.code,{children:"enrol_get_plugin"})," function to get the enrolment plugin instance, you can use that class to modify the enrolments."]}),"\n",(0,l.jsx)(n.h3,{id:"enrol_plugin-enrol_user",children:"$enrol_plugin->enrol_user()"}),"\n",(0,l.jsx)(n.p,{children:"Using this method you can enrol a user into a course."}),"\n",(0,l.jsx)(n.p,{children:"The method takes the following parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enrol plugin instance record"}),"\n",(0,l.jsx)(n.li,{children:"User id"}),"\n",(0,l.jsx)(n.li,{children:"Role id"}),"\n",(0,l.jsx)(n.li,{children:"Optional enrolment start and end timestamps"}),"\n",(0,l.jsx)(n.li,{children:"Optional enrolment status (ENROL_USER_ACTIVE or ENROL_USER_SUSPENDED)"}),"\n",(0,l.jsx)(n.li,{children:"If the enrol must try to recover the previous user enrolment grades (if any)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$enrolplugin->enrol_user($instance, $user->id, $role->id, $timestart, $timeend, ENROL_USER_ACTIVE);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enrol_plugin-unenrol_user",children:"$enrol_plugin->unenrol_user()"}),"\n",(0,l.jsx)(n.p,{children:"Unenrol a user from a course enrolment method."}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"Other enrolment methods can define other roles to the same user."})}),"\n",(0,l.jsx)(n.p,{children:"The method takes the following parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enrol plugin instance record"}),"\n",(0,l.jsx)(n.li,{children:"User id"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$enrolplugin->unenrol_user($instance, $user->id);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enrol_plugin-update_user_enrol",children:"$enrol_plugin->update_user_enrol()"}),"\n",(0,l.jsxs)(n.p,{children:["Updates a user enrolment ",(0,l.jsx)(n.strong,{children:"status"})," and the ",(0,l.jsx)(n.strong,{children:"start or end dates"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"The method takes the following parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enrol plugin instance record"}),"\n",(0,l.jsx)(n.li,{children:"User id"}),"\n",(0,l.jsx)(n.li,{children:"Optional enrolment start and end timestamps"}),"\n",(0,l.jsx)(n.li,{children:"Optional enrolment status (ENROL_USER_ACTIVE or ENROL_USER_SUSPENDED)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$enrolplugin->update_user_enrol($instance, $user->id, $timestart, $timeend, ENROL_USER_SUSPENDED);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enrol_plugin-add_default_instance",children:"$enrol_plugin->add_default_instance()"}),"\n",(0,l.jsxs)(n.p,{children:["Add a new enrolment instance to a specific course an returns the instance id. This method will create a new instance record in the ",(0,l.jsx)(n.code,{children:"enrol"})," table with the default values."]}),"\n",(0,l.jsx)(n.p,{children:"The method takes the following parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Course id"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$enrolplugin->add_default_instance($course->id);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"enrol_plugin-delete_instance",children:"$enrol_plugin->delete_instance()"}),"\n",(0,l.jsx)(n.p,{children:"Remove an enrolment instance form a course and invalidate all related user enrolments."}),"\n",(0,l.jsx)(n.p,{children:"The method takes the following parameters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enrol plugin instance record"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$enrolplugin->delete_instance($instance);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/plugintypes/enrol/",children:"Enrolment plugins"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}}}]);