"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[14154],{60259:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(74848),t=r(28453),s=r(78924);const a={title:"Writing a new service",tags:["Web Services","Plugins","core_external","external"],sidebar_position:5},l=void 0,o={id:"apis/subsystems/external/writing-a-service",title:"Writing a new service",description:"This documentation covers the creation of a new external service for use in a web service of a fictional local plugin, local_groupmanager.",source:"@site/versioned_docs/version-4.2/apis/subsystems/external/writing-a-service.md",sourceDirName:"apis/subsystems/external",slug:"/apis/subsystems/external/writing-a-service",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/writing-a-service",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/subsystems/external/writing-a-service.md",tags:[{label:"Web Services",permalink:"/moodledevdocs/docs/4.2/tags/web-services"},{label:"Plugins",permalink:"/moodledevdocs/docs/4.2/tags/plugins"},{label:"core_external",permalink:"/moodledevdocs/docs/4.2/tags/core-external"},{label:"external",permalink:"/moodledevdocs/docs/4.2/tags/external"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,sidebarPosition:5,frontMatter:{title:"Writing a new service",tags:["Web Services","Plugins","core_external","external"],sidebar_position:5},sidebar:"docs",previous:{title:"File handling",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/files"},next:{title:"Service creation",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/advanced/custom-services"}},c={},d=[{value:"Functional specification",id:"functional-specification",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Exceptions and failures",id:"exceptions-and-failures",level:3},{value:"Technical specification",id:"technical-specification",level:2},{value:"Declare the web service function",id:"declare-the-web-service-function",level:2},{value:"Write the external function descriptions",id:"write-the-external-function-descriptions",level:2},{value:"Defining parameters",id:"defining-parameters",level:3},{value:"execute_returns()",id:"execute_returns",level:3},{value:"Required, Optional or Default value",id:"required-optional-or-default-value",level:3},{value:"Implement the external function",id:"implement-the-external-function",level:2},{value:"Parameter validation",id:"parameter-validation",level:3},{value:"Context and Capability checks",id:"context-and-capability-checks",level:3},{value:"Exceptions",id:"exceptions",level:3},{value:"Correct return values",id:"correct-return-values",level:3},{value:"Bump the plugin version",id:"bump-the-plugin-version",level:2},{value:"Deprecation",id:"deprecation",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r,InvalidExample:l,ValidExample:c}=n;return r||h("Details",!0),l||h("InvalidExample",!0),c||h("ValidExample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{frontMatter:a,metadata:o}),"\n",(0,i.jsxs)(n.p,{children:["This documentation covers the creation of a new external service for use in a web service of a fictional local plugin, ",(0,i.jsx)(n.code,{children:"local_groupmanager"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"functional-specification",children:"Functional specification"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"local_groupmanager"})," plugin has a need to create groups within a course and would like to do so using its own web service."]}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsx)(n.p,{children:"When defining a new service definition, Moodle requires that the name of the definition be in the form:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"[frankenstyle_component]_[methodname]\n"})}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Web_service_API_functions#Naming_convention",children:"naming convention"})," further dictates that the ",(0,i.jsx)(n.code,{children:"methodname"})," component be in the form:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"[methodname]  - The name of the method in the form of [verb]_[noun]\n[verb]        - Usually one of get, create, delete, update\n                A similar verb that well describes the action may also be used\n[noun]        - The object being modified\n                Usually in Plural form\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"Per the Moodle naming convention for web services the name of the function should be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"local_groupmanager_create_groups\n"})}),"\n",(0,i.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"local_groupmanager_create_groups"})," external service definition will take a list of ",(0,i.jsx)(n.em,{children:"groups"})," as its only parameters."]}),"\n",(0,i.jsx)(n.h3,{id:"outputs",children:"Outputs"}),"\n",(0,i.jsxs)(n.p,{children:["The service will return a list of the created groups, including the ",(0,i.jsx)(n.code,{children:"id"})," element of those groups."]}),"\n",(0,i.jsx)(n.h3,{id:"exceptions-and-failures",children:"Exceptions and failures"}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"any"})," group creation fails, the function will throw an exception, and no groups will be created."]}),"\n",(0,i.jsx)(n.h2,{id:"technical-specification",children:"Technical specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"the core function the external function will call"}),": ",(0,i.jsx)(n.code,{children:"groups_create_group()"})," from ",(0,i.jsx)(n.a,{href:"http://github.com/moodle/moodle/tree/master/moodle/group/lib.php",children:"/group/lib.php"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"the parameter types"}),": a list of object. This object are groups, with ",(0,i.jsx)(n.code,{children:"id"}),"/",(0,i.jsx)(n.code,{children:"name"}),"/",(0,i.jsx)(n.code,{children:"courseid"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"the returned value types"}),": a list of objects (groups) with their id."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"the user capabilities to check"}),": ",(0,i.jsx)(n.code,{children:"moodle/course:managegroups"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"declare-the-web-service-function",children:"Declare the web service function"}),"\n",(0,i.jsxs)(n.p,{children:["An external function must be declared before it can be used in your plugin.\nFunction declarations should be placed in the ",(0,i.jsx)(n.code,{children:"db/services.php"})," file of your plugin. For example in our fictitious plugin this would be located in ",(0,i.jsx)(n.code,{children:"local/groupmanager/db/services.php"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$functions = [\n    // The name of your web service function, as discussed above.\n    'local_groupmanager_create_groups' => [\n        // The name of the namespaced class that the function is located in.\n        'classname'   => 'local_groupmanager\\external\\create_groups',\n\n        // A brief, human-readable, description of the web service function.\n        'description' => 'Creates new groups.',\n\n        // Options include read, and write.\n        'type'        => 'write',\n\n        // Whether the service is available for use in AJAX calls from the web.\n        'ajax'        => true,\n\n        // An optional list of services where the function will be included.\n        'services' => [\n            // A standard Moodle install includes one default service:\n            // - MOODLE_OFFICIAL_MOBILE_SERVICE.\n            // Specifying this service means that your function will be available for\n            // use in the Moodle Mobile App.\n            MOODLE_OFFICIAL_MOBILE_SERVICE,\n        ]\n    ],\n];\n"})}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Advanced options"}),(0,i.jsx)(n.p,{children:"A number of advanced options are also available, as described below:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$functions = [\n    // The name of your web service function, as discussed above.\n    'local_groupmanager_create_groups' => [\n        // A comma-separated list of capabilities used by the function.\n        // This is advisory only and used to indicate to the administrator configuring a custom service definition.\n        'capabilities' => 'moodle/course:creategroups,moodle/course:managegroups',\n\n        // The following parameters are also available, but are no longer recommended.\n\n        // The name of the external function name.\n        // If not specified, this will default to 'execute'.\n        // 'methodname'  => 'execute',\n\n        // The file containing the class/external function.\n        // Do not use if using namespaced auto-loading classes.\n        // 'classpath'   => 'local/groupmanager/externallib.php',\n    ),\n);\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"write-the-external-function-descriptions",children:"Write the external function descriptions"}),"\n",(0,i.jsxs)(n.p,{children:["Every web service function is mapped to an external function. External function are described in the ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/functions",children:"External functions API"}),".\nEach external function is written with two other functions describing the parameters and the return values. These description functions are used by web service servers to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"validate the web service function parameters"}),"\n",(0,i.jsx)(n.li,{children:"validate the web service function returned values"}),"\n",(0,i.jsx)(n.li,{children:"build WSDL files or other protocol documents"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These two description functions are located in the class declared in ",(0,i.jsx)(n.code,{children:"local/groupmanager/db/services.php"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Thus for the web service function ",(0,i.jsx)(n.code,{children:"local_groupmanager_create_groups()"}),", we should write a class named ",(0,i.jsx)(n.code,{children:"create_groups"})," in the ",(0,i.jsx)(n.code,{children:"local_groupmanager\\external"})," namespace."]}),"\n",(0,i.jsxs)(n.p,{children:["This will be located in the file ",(0,i.jsx)(n.code,{children:"local/groupmanager/classes/external/create_groups.php"}),". The class will contain:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"execute(...)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"execute_parameters()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"execute_return()"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"defining-parameters",children:"Defining parameters"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<?php\nnamespace local_groupmanager\\external;\n\nuse external_function_parameters;\nuse external_multiple_structure;\nuse external_single_structure;\nuse external_value;\n\nclass create_groups extends \\core_external\\external_api {\n\n    /**\n     * Returns description of method parameters\n     * @return external_function_parameters\n     */\n    public static function execute_parameters() {\n        return new external_function_parameters([\n            'groups' => new external_multiple_structure(\n                new external_single_structure([\n                    'courseid' => new external_value(PARAM_INT, 'id of course'),\n                    'name' => new external_value(\n                        PARAM_TEXT,\n                        'multilang compatible name, course unique'\n                    ),\n                    'description' => new external_value(\n                        PARAM_RAW,\n                        'group description text'\n                    ),\n                    'enrolmentkey' => new external_value(\n                        PARAM_RAW,\n                        'group enrol secret phrase'\n                    ),\n                ])\n            )\n        ]);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"A web service function without parameters will have a parameter description function like that:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Returns description of method parameters\n * @return external_function_parameters\n */\npublic static function execute_parameters(): external_function_parameters {\n    return new external_function_parameters([\n        // If this function had any parameters, they would be described here.\n        // This example has no parameters, so the array is empty.\n    ]);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"A parameter can be described as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a list => ",(0,i.jsx)(n.code,{children:"external_multiple_structure"})]}),"\n",(0,i.jsxs)(n.li,{children:["an object => ",(0,i.jsx)(n.code,{children:"external_single_structure"})]}),"\n",(0,i.jsxs)(n.li,{children:["a primary type => ",(0,i.jsx)(n.code,{children:"external_value"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Our ",(0,i.jsx)(n.code,{children:"create_groups()"})," function expects one parameter named ",(0,i.jsx)(n.code,{children:"groups"}),", so we will first write:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Returns description of method parameters\n * @return external_function_parameters\n */\npublic static function execute_parameters(): external_function_parameters {\n    return new external_function_parameters([\n        'groups' => ...\n    ]);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.em,{children:"groups"})," parameter is a list of group. So we will write :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"'groups' => new external_multiple_structure(\n    ...\n)\n"})}),"\n",(0,i.jsx)(n.p,{children:"An external_multiple_structure object (list) can be constructed with:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"external_multiple_structure"})," (list)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"external_single_structure"})," (object)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"external_value"})," (primary type)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For our function it will be a ",(0,i.jsx)(n.code,{children:"external_single_structure"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"new external_single_structure([\n    'courseid' => ...,\n    'name' => ...,\n    'description' => ...,\n    'enrolmentkey' => ...,\n])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Thus we obtain :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"'groups' => new external_multiple_structure(\n    new external_single_structure([\n        'courseid' => ...,\n        'name' => ...,\n        'description' => ...,\n        'enrolmentkey' => ...,\n    ])\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each group values is a ",(0,i.jsx)(n.em,{children:"external_value"})," (primary type):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"courseid"})," is an integer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," is a string (text only, not tag)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"})," is a string (can be anything)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enrolmentkey"})," is also a string (can be anything)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We add them to the description :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"'groups' => new external_multiple_structure(\n    new external_single_structure([\n        // The second argument is a human readable description text.\n        // This text is displayed in the automatically generated documentation.\n        'courseid' => new external_value(PARAM_INT, 'id of course'),\n        'name' => new external_value(PARAM_TEXT, 'multilang compatible name, course unique'),\n        'description' => new external_value(PARAM_RAW, 'group description text'),\n        'enrolmentkey' => new external_value(PARAM_RAW, 'group enrol secret phrase'),\n    ])\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"execute_returns",children:"execute_returns()"}),"\n",(0,i.jsx)(n.p,{children:"It's similar to execute_parameters(), but instead of describing the parameters, it describes the return values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"public static function execute_returns() {\n    return new external_multiple_structure(\n        new external_single_structure([\n            'id' => new external_value(PARAM_INT, 'group record id'),\n            'courseid' => new external_value(PARAM_INT, 'id of course'),\n            'name' => new external_value(PARAM_TEXT, 'multilang compatible name, course unique'),\n            'description' => new external_value(PARAM_RAW, 'group description text'),\n            'enrolmentkey' => new external_value(PARAM_RAW, 'group enrol secret phrase'),\n        ])\n    );\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"required-optional-or-default-value",children:"Required, Optional or Default value"}),"\n",(0,i.jsxs)(n.p,{children:["A value can be ",(0,i.jsx)(n.code,{children:"VALUE_REQUIRED"}),", ",(0,i.jsx)(n.code,{children:"VALUE_OPTIONAL"}),", or ",(0,i.jsx)(n.code,{children:"VALUE_DEFAULT"}),". If not mentioned, a value is ",(0,i.jsx)(n.code,{children:"VALUE_REQUIRED"})," by default."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"'yearofstudy' => new external_value(PARAM_INT, 'year of study', VALUE_DEFAULT, 1979),\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VALUE_REQUIRED"})," - if the value is not supplied => the server throws an error message"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VALUE_OPTIONAL"})," - if the value is not supplied => the value is ignored. Note that VALUE_OPTIONAL can't be used in top level parameters, it must be used only within array/objects key definition. If you need top level Optional parameters you should use VALUE_DEFAULT instead."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VALUE_DEFAULT"})," - if the value is not supplied => the default value is used"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Because some web service protocols are strict about the number and types of arguments - it is not possible to specify an optional parameter as one of the top-most parameters for a function."}),(0,i.jsx)(l,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"public static function get_biscuit_parameters() {\n    return new external_function_parameters([\n        'chocolatechips' => new external_value(PARAM_BOOL, PARAM_REQUIRED),\n        'glutenfree' => new external_value(PARAM_BOOL, PARAM_DEFAULT, false),\n        // ERROR! top level optional parameter!!!\n        'icingsugar' => new external_value(PARAM_BOOL, VALUE_OPTIONAL),\n    ]);\n}\n"})})}),(0,i.jsx)(c,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"public static function get_biscuit_parameters() {\n    return new external_function_parameters([\n        'ifeellike' => new external_single_structure([\n                'chocolatechips' => new external_value(PARAM_BOOL, VALUE_REQUIRED),\n                'glutenfree' => new external_value(PARAM_BOOL, PARAM_DEFAULT, false),\n                // ALL GOOD!! We have nested the params in a external_single_structure.\n                'icingsugar' => new external_value(PARAM_BOOL, VALUE_OPTIONAL),\n        ]),\n    ]);\n}\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"implement-the-external-function",children:"Implement the external function"}),"\n",(0,i.jsx)(n.p,{children:"We declared our web service function and we defined the external function parameters and return values. We will now implement the external function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"    /**\n     * Create groups\n     * @param array $groups array of group description arrays (with keys groupname and courseid)\n     * @return array of newly created groups\n     */\n    public static function execute($groups) {\n        global $CFG, $DB;\n        require_once(\"$CFG->dirroot/group/lib.php\");\n\n        $params = self::validate_parameters(self::execute_parameters(), ['groups' => $groups]);\n\n        $transaction = $DB->start_delegated_transaction(); //If an exception is thrown in the below code, all DB queries in this code will be rollback.\n\n        $groups = array();\n\n        foreach ($params['groups'] as $group) {\n            $group = (object)$group;\n\n            if (trim($group->name) == '') {\n                throw new invalid_parameter_exception('Invalid group name');\n            }\n            if ($DB->get_record('groups', ['courseid' => $group->courseid, 'name' => $group->name])) {\n                throw new invalid_parameter_exception('Group with the same name already exists in the course');\n            }\n\n            // now security checks\n            $context = get_context_instance(CONTEXT_COURSE, $group->courseid);\n            self::validate_context($context);\n            require_capability('moodle/course:managegroups', $context);\n\n            // finally create the group\n            $group->id = groups_create_group($group, false);\n            $groups[] = (array) $group;\n        }\n\n        $transaction->allow_commit();\n\n        return $groups;\n    }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameter-validation",children:"Parameter validation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$params = self::validate_parameters(self::execute_parameters(), [\n    'groups' => $groups,\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.em,{children:"validate_parameters"})," function validates the external function parameters against the description. It will return an exception if some required parameters are missing, if parameters are not well-formed, and check the parameters validity. It is essential that you do this call to avoid potential hack."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," the parameters of the external function and their declaration in the description ",(0,i.jsx)(n.strong,{children:"must be the same order"}),". In this example we have only one parameter named $groups, so we don't need to worry about the order."]}),"\n",(0,i.jsx)(n.h3,{id:"context-and-capability-checks",children:"Context and Capability checks"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"// Perform security checks.\n$context = context_course::instance($group->courseid);\nself::validate_context($context);\nrequire_capability('moodle/course:managegroups', $context);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: validate_context() is required in all external functions before operating on any data belonging to a context. This function does sanity and security checks on the context that was passed to the external function - and sets up the global $PAGE and $OUTPUT for rendering return values. Do NOT use require_login(), or $PAGE->set_context() in an external function."}),"\n",(0,i.jsx)(n.h3,{id:"exceptions",children:"Exceptions"}),"\n",(0,i.jsx)(n.p,{children:"You can throw exceptions. These are automatically handled by Moodle web service servers."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"// Note: It is good practice to add detailled information in $debuginfo,\n//       and only send back a generic exception message when Moodle DEBUG mode < NORMAL.\n//       It's what we do here throwing the invalid_parameter_exception($debug) exception\nthrow new invalid_parameter_exception('Group with the same name already exists in the course');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"correct-return-values",children:"Correct return values"}),"\n",(0,i.jsx)(n.p,{children:"The return values will be validated by the Moodle web service servers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"return values contain some values not described => these values will be skipped."}),"\n",(0,i.jsx)(n.li,{children:"return values miss some required values (VALUE_REQUIRED) => the server will return an error."}),"\n",(0,i.jsxs)(n.li,{children:["return values types don't match the description (int != PARAM_ALPHA) => the server will return an error\n",(0,i.jsx)(n.strong,{children:"Note:"})," cast all your returned objects into arrays."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bump-the-plugin-version",children:"Bump the plugin version"}),"\n",(0,i.jsxs)(n.p,{children:["Edit your ",(0,i.jsx)(n.code,{children:"local/groupmanager/version.php"})," and increase the plugin version. This should trigger a Moodle upgrade and the new web service should be available in the administration (",(0,i.jsx)(n.em,{children:"Administration > Plugins > Web Services > Manage services"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"deprecation",children:"Deprecation"}),"\n",(0,i.jsxs)(n.p,{children:["External functions deprecation process is slightly different from the standard deprecation. If you are interested in deprecating any of your external functions you should ",(0,i.jsx)(n.strong,{children:"also"})," (apart from the applicable points detailed in the ",(0,i.jsx)(n.a,{href:"/general/development/policies/deprecation",children:"standard deprecation docs"}),") create a ",(0,i.jsx)(n.code,{children:"FUNCTIONNAME_is_deprecated()"})," method in your external function class. Return true if the external function is deprecated. This is an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"    /**\n     * Mark the function as deprecated.\n     * @return bool\n     */\n    public static function execute_is_deprecated() {\n        return true;\n    }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/",children:"Web services developer documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/en/Web_services",children:"Web services user documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Creating_a_web_service_client",children:"Implement a web service client"})}),"\n",(0,i.jsxs)(n.li,{children:["Code example: ",(0,i.jsx)(n.a,{href:"https://gist.github.com/timhunt/51987ad386faca61fe013904c242e9b4",children:"Adding a web service, using APIs"})," by (Tim Hunt)\nSpecification:"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/security",children:"External services security"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/description",children:"External services description"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Session_locks#Read_only_sessions_in_web_services",children:"Session locks#Read only sessions in web services"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);