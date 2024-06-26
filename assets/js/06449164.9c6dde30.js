"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9237],{32460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(74848),s=t(28453),r=t(78924);const i={title:"Utilities",tags:["Privacy","GDPR"]},a=void 0,c={id:"apis/subsystems/privacy/utils",title:"Utilities",description:"While implementing the privacy API into your plugin, there are CLI scripts that can help you to test things on the fly.",source:"@site/versioned_docs/version-4.1/apis/subsystems/privacy/utils.md",sourceDirName:"apis/subsystems/privacy",slug:"/apis/subsystems/privacy/utils",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/privacy/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.1/apis/subsystems/privacy/utils.md",tags:[{label:"Privacy",permalink:"/moodledevdocs/docs/4.1/tags/privacy"},{label:"GDPR",permalink:"/moodledevdocs/docs/4.1/tags/gdpr"}],version:"4.1",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1670648742e3,frontMatter:{title:"Utilities",tags:["Privacy","GDPR"]},sidebar:"docs",previous:{title:"FAQs",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/privacy/faq"},next:{title:"Roles API",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/roles"}},l={},p=[{value:"Test of privacy API compliance",id:"test-of-privacy-api-compliance",level:2},{value:"Test of exporting user data",id:"test-of-exporting-user-data",level:2},{value:"Test of deleting user data",id:"test-of-deleting-user-data",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{frontMatter:i,metadata:c}),"\n",(0,o.jsx)(n.p,{children:"While implementing the privacy API into your plugin, there are CLI scripts that can help you to test things on the fly."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,o.jsx)(n.p,{children:"These scripts are to assist during development. They are not intended to replace proper unit tests."})}),"\n",(0,o.jsxs)(n.p,{children:["Put these scripts into the root of your Moodle development installation and run them via command line. See ",(0,o.jsx)(n.a,{href:"/moodledevdocs/docs/4.1/apis/subsystems/privacy/",children:"Privacy API"})," for the full guide on implementing the API in your plugin."]}),"\n",(0,o.jsx)(n.h2,{id:"test-of-privacy-api-compliance",children:"Test of privacy API compliance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:'<?php\n\n// Set this if you want to run the script for one component only. Otherwise leave empty.\n$CHECK_COMPONENT = \'\';\n\ndefine(\'CLI_SCRIPT\', true);\n\nrequire_once(\'config.php\');\n\n$user = \\core_user::get_user(2);\n\n\\core\\session\\manager::init_empty_session();\n\\core\\session\\manager::set_user($user);\n\n$rc = new \\ReflectionClass(\\core_privacy\\manager::class);\n$rcm = $rc->getMethod(\'get_component_list\');\n$rcm->setAccessible(true);\n\n$manager = new \\core_privacy\\manager();\n$components = $rcm->invoke($manager);\n\n$list = (object) [\n    \'good\' => [],\n    \'bad\' => [],\n];\n\nforeach ($components as $component) {\n    if ($CHECK_COMPONENT && $component !== $CHECK_COMPONENT) {\n        continue;\n    }\n    $compliant = $manager->component_is_compliant($component);\n    if ($compliant) {\n        $list->good[] = $component;\n    } else {\n        $list->bad[] = $component;\n    }\n}\n\necho "The following plugins are not compliant:\\n";\necho "=> " . implode("\\n=> ", array_values($list->bad)) . "\\n";\n\necho "\\n";\necho "Testing the compliant plugins:\\n";\nforeach ($list->good as $component) {\n    $classname = \\core_privacy\\manager::get_provider_classname_for_component($component);\n    echo "== {$component} ($classname) ==\\n";\n    if (check_implements($component, \\core_privacy\\local\\metadata\\null_provider::class)) {\n        echo "    Claims not to store any data with reason:\\n";\n        echo "      \'" . get_string($classname::get_reason(), $component) . "\'\\n";\n    }\n    else if (check_implements($component, \\core_privacy\\local\\metadata\\provider::class)) {\n        $collection = new \\core_privacy\\local\\metadata\\collection($component);\n        $classname::get_metadata($collection);\n        $count = count($collection->get_collection());\n        echo "    Found {$count} items of metadata\\n";\n        if (empty($count)) {\n            echo "!!! No metadata found!!! This an error.\\n";\n        }\n\n        if (check_implements($component, \\core_privacy\\local\\request\\user_preference_provider::class)) {\n            $userprefdescribed = false;\n            foreach ($collection->get_collection() as $item) {\n                if ($item instanceof \\core_privacy\\local\\metadata\\types\\user_preference) {\n                    $userprefdescribed = true;\n                    echo "     ".$item->get_name()." : ".get_string($item->get_summary(), $component) . "\\n";\n                }\n            }\n            if (!$userprefdescribed) {\n                echo "!!! User preference found, but was not described in metadata\\n";\n            }\n        }\n\n        if (check_implements($component, \\core_privacy\\local\\request\\core_user_data_provider::class)) {\n            // No need to check the return type - it\'s enforced by the interface.\n            $contextlist = $classname::get_contexts_for_userid($user->id);\n            $approvedcontextlist = new \\core_privacy\\local\\request\\approved_contextlist($user, $contextlist->get_component(), $contextlist->get_contextids());\n            if (count($approvedcontextlist)) {\n                $classname::export_user_data($approvedcontextlist);\n                echo "    Successfully ran a test export\\n";\n            } else {\n                echo "    Nothing to export.\\n";\n            }\n        }\n        if (check_implements($component, \\core_privacy\\local\\request\\shared_data_provider::class)) {\n            echo "    This is a shared data provider\\n";\n        }\n    }\n}\n\necho "\\n\\n== Done ==\\n";\n\nfunction check_implements($component, $interface) {\n    $manager = new \\core_privacy\\manager();\n    $rc = new \\ReflectionClass(\\core_privacy\\manager::class);\n    $rcm = $rc->getMethod(\'component_implements\');\n    $rcm->setAccessible(true);\n\n    return $rcm->invoke($manager, $component, $interface);\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"test-of-exporting-user-data",children:"Test of exporting user data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n// This file is part of Moodle - http://moodle.org/\n//\n// Moodle is free software: you can redistribute it and/or modify\n// it under the terms of the GNU General Public License as published by\n// the Free Software Foundation, either version 3 of the License, or\n// (at your option) any later version.\n//\n// Moodle is distributed in the hope that it will be useful,\n// but WITHOUT ANY WARRANTY; without even the implied warranty of\n// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n// GNU General Public License for more details.\n//\n// You should have received a copy of the GNU General Public License\n// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\n\n/**\n * Helper utility to perform a test export.\n *\n * @copyright 2018 Andrew Nicols <andrew@nicols.co.uk>\n * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later\n */\n\ndefine('CLI_SCRIPT', true);\nrequire_once('config.php');\nrequire_once(\"$CFG->libdir/clilib.php\");\n\nlist($options, $unrecognized) = cli_get_params(\n    [\n        'username' => '',\n        'userid' => '',\n    ],\n    []\n);\n\n$user = null;\n$username = $options['username'];\n$userid = $options['userid'];\n\nif (!empty($options['username'])) {\n    $user = \\core_user::get_user_by_username($options['username']);\n} else if (!empty($options['userid'])) {\n    $user = \\core_user::get_user($options['userid']);\n}\n\nwhile (empty($user)) {\n    if (!empty($username)) {\n        echo \"Unable to find a user with username '{$username}'.\\n\";\n        echo \"Try again.\\n\";\n    } else if (!empty($userid)) {\n        echo \"Unable to find a user with userid '{$userid}'.\\n\";\n        echo \"Try again.\\n\";\n    }\n    $username = readline(\"Username: \");\n    $user = \\core_user::get_user_by_username($username);\n}\n\necho \"Processing export for \" . fullname($user) . \"\\n\";\n\n\\core\\session\\manager::init_empty_session();\n\\core\\session\\manager::set_user($user);\n\n$PAGE = new moodle_page();\n$OUTPUT = new core_renderer($PAGE, RENDERER_TARGET_GENERAL);\n\n$manager = new \\core_privacy\\manager();\n\n$approvedlist = new \\core_privacy\\local\\request\\contextlist_collection($user->id);\n\n$contextlists = $manager->get_contexts_for_userid($user->id);\nforeach ($contextlists as $contextlist) {\n    $approvedlist->add_contextlist(new \\core_privacy\\local\\request\\approved_contextlist(\n        $user,\n        $contextlist->get_component(),\n        $contextlist->get_contextids()\n    ));\n}\n\n$exportedcontent = $manager->export_user_data($approvedlist);\n$basedir = make_temp_directory('privacy');\n$exportpath = make_unique_writable_directory($basedir, true);\n$fp = get_file_packer();\n$fp->extract_to_pathname($exportedcontent, $exportpath);\n\necho \"\\n\";\necho \"== File export was uncompressed to {$exportpath}\\n\";\necho \"============================================================================\\n\";\n"})}),"\n",(0,o.jsx)(n.h2,{id:"test-of-deleting-user-data",children:"Test of deleting user data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n// This file is part of Moodle - http://moodle.org/\n//\n// Moodle is free software: you can redistribute it and/or modify\n// it under the terms of the GNU General Public License as published by\n// the Free Software Foundation, either version 3 of the License, or\n// (at your option) any later version.\n//\n// Moodle is distributed in the hope that it will be useful,\n// but WITHOUT ANY WARRANTY; without even the implied warranty of\n// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n// GNU General Public License for more details.\n//\n// You should have received a copy of the GNU General Public License\n// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\n\ndefine('CLI_SCRIPT', true);\nrequire_once('config.php');\nrequire_once(\"$CFG->libdir/clilib.php\");\n\nlist($options, $unrecognized) = cli_get_params(\n    [\n        'username' => '',\n        'userid' => '',\n    ],\n    []\n);\n\n$user = null;\n$username = $options['username'];\n$userid = $options['userid'];\n\nif (!empty($options['username'])) {\n    $user = \\core_user::get_user_by_username($options['username']);\n} else if (!empty($options['userid'])) {\n    $user = \\core_user::get_user($options['userid']);\n}\n\nwhile (empty($user)) {\n    if (!empty($username)) {\n        echo \"Unable to find a user with username '{$username}'.\\n\";\n        echo \"Try again.\\n\";\n    } else if (!empty($userid)) {\n        echo \"Unable to find a user with userid '{$userid}'.\\n\";\n        echo \"Try again.\\n\";\n    }\n    $username = readline(\"Username: \");\n    $user = \\core_user::get_user_by_username($username);\n}\n\necho \"Processing delete for \" . fullname($user) . \"\\n\";\n\n\\core\\session\\manager::init_empty_session();\n\\core\\session\\manager::set_user($user);\n\n$manager = new \\core_privacy\\manager();\n\n$approvedlist = new \\core_privacy\\local\\request\\contextlist_collection($user->id);\n\n$trace = new text_progress_trace();\n$contextlists = $manager->get_contexts_for_userid($user->id, $trace);\nforeach ($contextlists as $contextlist) {\n    $approvedlist->add_contextlist(new \\core_privacy\\local\\request\\approved_contextlist(\n        $user,\n        $contextlist->get_component(),\n        $contextlist->get_contextids()\n    ));\n}\n\n$manager->delete_data_for_user($approvedlist, $trace);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);