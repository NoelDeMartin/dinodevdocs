"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[54859],{24576:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var i=s(74848),l=s(28453),a=s(78924);const t={title:"Plugin Upgrades",tags:["XMLDB","Plugins","API"]},o=void 0,d={id:"guides/upgrade/index",title:"Plugin Upgrades",description:"The Upgrade API is a core API which allows your plugin to manage features of its own installation, and upgrade. Every plugin includes a version which allows the Upgrade API to apply only the required changes.",source:"@site/versioned_docs/version-4.3/guides/upgrade/index.md",sourceDirName:"guides/upgrade",slug:"/guides/upgrade/",permalink:"/moodledevdocs/docs/4.3/guides/upgrade/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/guides/upgrade/index.md",tags:[{label:"XMLDB",permalink:"/moodledevdocs/docs/4.3/tags/xmldb"},{label:"Plugins",permalink:"/moodledevdocs/docs/4.3/tags/plugins"},{label:"API",permalink:"/moodledevdocs/docs/4.3/tags/api"}],version:"4.3",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Plugin Upgrades",tags:["XMLDB","Plugins","API"]},sidebar:"docs",previous:{title:"Templates",permalink:"/moodledevdocs/docs/4.3/guides/templates/"},next:{title:"API Guides",permalink:"/moodledevdocs/docs/4.3/apis"}},r={},h=[{value:"Key files",id:"key-files",level:2},{value:"version.php",id:"versionphp",level:3},{value:"db/install.xml",id:"dbinstallxml",level:3},{value:"db/upgrade.php",id:"dbupgradephp",level:3},{value:"Upgrade code restrictions",id:"upgrade-code-restrictions",level:2},{value:"Summary",id:"summary",level:2},{value:"Other things that can be in the db folder",id:"other-things-that-can-be-in-the-db-folder",level:2},{value:"Upgrade API Cheat-sheet",id:"upgrade-api-cheat-sheet",level:2},{value:"Upgrade helpers",id:"upgrade-helpers",level:3},{value:"Moodle core database upgrades within stable branches",id:"moodle-core-database-upgrades-within-stable-branches",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{InvalidExample:s,ValidExample:o}=n;return s||u("InvalidExample",!0),o||u("ValidExample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{frontMatter:t,metadata:d}),"\n",(0,i.jsxs)(n.p,{children:["The Upgrade API is a core API which allows your plugin to manage features of its own installation, and upgrade. Every plugin includes a ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/version.php/",children:"version"})," which allows the Upgrade API to apply only the required changes."]}),"\n",(0,i.jsx)(n.p,{children:"Correct use of this API allows Moodle to automatically create, and handle upgrades for, your database tables and other core features during an upgrade."}),"\n",(0,i.jsx)(n.h2,{id:"key-files",children:"Key files"}),"\n",(0,i.jsx)(n.p,{children:"This process is controlled by three primary files within your plugin, and a number of additional optional files for optional features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/version.php/",children:"version.php"}),": This records the version of the plugin code. You must increase version in version.php after any change in the ",(0,i.jsx)(n.code,{children:"/db/"})," folder, any change in JavaScript code, any new auto-loaded class, any new setting and also after any change in language pack, because a new version triggers the upgrade procedure and resets all caches."]}),"\n",(0,i.jsx)(n.li,{children:"db/install.xml: This file describes the database tables that will be created during installation. It is only used during the initial installation of the plugin."}),"\n",(0,i.jsx)(n.li,{children:"db/upgrade.php: This file is used during the upgrade process when upgrading from an older version of the plugin installed upgrades to the latest version."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"versionphp",children:"version.php"}),"\n",(0,i.jsx)(n.p,{children:"The version.php file describes the current version of the plugin, and additional features such as its maturity, any dependencies or requirements, and a release name."}),"\n",(0,i.jsxs)(n.p,{children:["See the documentation on ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/version.php/",children:"version.php"})," for further information on the features of this file."]}),"\n",(0,i.jsx)(n.h3,{id:"dbinstallxml",children:"db/install.xml"}),"\n",(0,i.jsx)(n.p,{children:"The install.xml file describes the database tables that will be created when the plugin is installed."}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["The content of the ",(0,i.jsx)(n.code,{children:"install.xml"})," file ",(0,i.jsx)(n.strong,{children:"must"})," be created and maintained using the ",(0,i.jsx)(n.a,{href:"/general/development/tools/xmldb",children:"XMLDB Editor"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"dbupgradephp",children:"db/upgrade.php"}),"\n",(0,i.jsxs)(n.p,{children:["The upgrade.php file describes the steps used to migrate the plugin from one version to a newer version. Moodle only supports the upgrade of plugins. ",(0,i.jsx)(n.strong,{children:"Plugins can not be downgraded"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["The content of the ",(0,i.jsx)(n.code,{children:"upgrade.php"})," file ",(0,i.jsx)(n.strong,{children:"must"})," be created and maintained using the ",(0,i.jsx)(n.a,{href:"/general/development/tools/xmldb",children:"XMLDB Editor"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The following example shows the structure of the upgrade.php file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="Example upgrade.php file"',children:"<?php\n\nfunction xmldb_[plugintype]_[pluginname]_upgrade($oldversion): bool {\n    global $CFG, $DB;\n\n    $dbman = $DB->get_manager(); // Loads ddl manager and xmldb classes.\n\n    if ($oldversion < 2019031200) {\n        // Perform the upgrade from version 2019031200 to the next version.\n\n        // The content of this section should be generated using the XMLDB Editor.\n    }\n\n    if ($oldversion < 2019031201) {\n        // Perform the upgrade from version 2019031201 to the next version.\n\n        // The content of this section should be generated using the XMLDB Editor.\n    }\n\n    // Everything has succeeded to here. Return true.\n    return true;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-code-restrictions",children:"Upgrade code restrictions"}),"\n",(0,i.jsx)(n.p,{children:"During an upgrade, restrictions are placed on the functions that your upgrade code may call. This is because Moodle has not been fully update and some APIs may have code in place relating to a future database or data format."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All upgrade code may use the ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/",children:"basic database API"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In a ",(0,i.jsx)(n.strong,{children:"plugin"}),", upgrade code should not call ",(0,i.jsx)(n.strong,{children:"any plugin functions"}),". For example, if your plugin has a function that changes frog settings to 'green', and you need to do this during upgrade, then you ",(0,i.jsx)(n.strong,{children:"must not"})," call this function; instead, manually update the database rows so that the frog settings become green). However, ",(0,i.jsxs)(n.strong,{children:["you ",(0,i.jsx)(n.em,{children:"may"})," call core functions"]})," rather than making core changes in database."]}),"\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.strong,{children:"core"}),", upgrade code should not even call ",(0,i.jsx)(n.strong,{children:"any core functions"}),". For example, if you need to add a calendar event, this should be done by inserting into a database table rather than calling a function to add the event. Certain functions marked with a comment such as ",(0,i.jsx)(n.code,{children:"set_config"})," and ",(0,i.jsx)(n.code,{children:"get_config"})," are excepted."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Rationale for these rules",type:"info",children:[(0,i.jsx)(n.p,{children:"During core upgrade the state is as follows:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core data: ",(0,i.jsx)(n.strong,{children:"Old"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Plugin data: ",(0,i.jsx)(n.strong,{children:"Old"}),"."]}),"\n"]}),(0,i.jsx)(n.p,{children:'Core functions expect core data to be in the Current state, so it is not safe to call them, unless the following is present in the function\'s docblock: "NOTE: this function is called from lib/db/upgrade.php".'}),(0,i.jsx)(n.p,{children:"During plugin upgrade the state is as follows:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core data: ",(0,i.jsx)(n.strong,{children:"Current"}),". (Because core upgrade runs before plugin upgrade.)"]}),"\n",(0,i.jsxs)(n.li,{children:["Plugin data: ",(0,i.jsx)(n.strong,{children:"Old"}),"."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Core functions are now safe to call because the core data is in Current state. But plugin functions, which expect data to be in the Current state, are not safe."})]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["The first time a user installs any version of your plugin, the install.xml file will be used to create all the required database tables. Therefore install.xml should always contain the definition of the up-to-date database structure. Moodle recognises this situation because there is a version.php file on disc, but there is no (",(0,i.jsx)(n.em,{children:"plugintype"}),"_",(0,i.jsx)(n.em,{children:"pluginname"}),", version) value in the config_plugins table."]}),"\n",(0,i.jsxs)(n.p,{children:["If the user already had a version of your plugin installed, and then upgrades to a newer version, Moodle will detect this because the version.php file will contain a newer version number than the (",(0,i.jsx)(n.em,{children:"plugintype"}),"_",(0,i.jsx)(n.em,{children:"pluginname"}),", version) value in the mdl_config_plugins table. In this case, Moodle will run the code in the upgrade.php file, passing in the old version number, so that the correct bits of upgrade can be run, as controlled by the if ($oldversion < XXXXXXXXXX) blocks of code."]}),"\n",(0,i.jsx)(n.p,{children:"The contents of the install.xml and upgrade.php files should be generated using the XMLDB editor."}),"\n",(0,i.jsx)(n.h2,{id:"other-things-that-can-be-in-the-db-folder",children:"Other things that can be in the db folder"}),"\n",(0,i.jsxs)(n.p,{children:["See the documentation on other ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/",children:"common files"})," that may be of use to you, in particular the following may be useful:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbinstallphp",children:"install.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbuninstallphp",children:"uninstall.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbaccessphp",children:"access.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbeventsphp",children:"events.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbmessagesphp",children:"messages.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#dbservicesphp",children:"services.php"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Subplugins#db.2Fsubplugins.json",children:"subplugins.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/#langenplugintype_pluginnamephp",children:"Language files"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-api-cheat-sheet",children:"Upgrade API Cheat-sheet"}),"\n",(0,i.jsxs)(n.p,{children:["The Upgrade API is related to ",(0,i.jsx)(n.em,{children:"a lot"})," of different files and APIs (including access, event, log, webservice, and so on) as it's the API used to install and upgrade all of those areas in the context of a specific Moodle component. The previous sections have tried to list all those dependencies when possible."]}),"\n",(0,i.jsxs)(n.p,{children:["The Upgrade API makes ",(0,i.jsx)(n.em,{children:"very intensive use"})," of other APIs, including ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/ddl",children:"DDL"}),", ",(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/",children:"DML"}),", and a range of tools in order to proceed with the required changes for the upgrade."]}),"\n",(0,i.jsx)(n.p,{children:"In addition to the relevant files located in the db folder, a number of functions can also be defined:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["xmldb_(main|",(0,i.jsx)(n.a,{href:"/general/development/policies/codingstyle/frankenstyle",children:"frankenstyle"}),")_install()"]}),": to be used in install.php files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"xmldb_(main|frankenstyle)_uninstall()"}),": to be used in uninstall.php files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"xmldb_(main|frankenstyle)_upgrade()"}),": to be used in upgrade.php files."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Some of these functions have variants depending on whether they are being called from core code, or a plugin."}),(0,i.jsxs)(n.p,{children:["When called from core, the ",(0,i.jsx)(n.code,{children:"main"})," variant should be used, otherwise the frankenstyle name of the component should be used."]}),(0,i.jsxs)(n.p,{children:["For example, if you are defining an installation behaviour in the install.php script of a block named ",(0,i.jsx)(n.code,{children:"block_example"}),", you would have an install.php similar to the following:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="blocks/example/db/install.php"',children:"<?php\n// ...\n\nfunction xmldb_block_example_install() {\n    // ...\n}\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"We highly recommend looking at existing uses of these files within plugins included with Moodle core to understand some fo the more complex examples."}),"\n",(0,i.jsx)(n.h3,{id:"upgrade-helpers",children:"Upgrade helpers"}),"\n",(0,i.jsx)(n.p,{children:"Several functions are also available to call from within the upgrade.php script:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"upgrade_set_timeout()"}),": Used to increase timeouts before performing a long-running upgrade step"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"upgrade_(main|mod|block|plugin)_savepoint()"}),": Used to mark an upgrade step as completed, and to  reset timeouts. This ensures that an upgrade step is only executed once."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"moodle-core-database-upgrades-within-stable-branches",children:"Moodle core database upgrades within stable branches"}),"\n",(0,i.jsx)(n.p,{children:"In Moodle core, one of the standard simple rules is not to make any database changes on a stable branch. You only need to read this section in the rare situations where a database change on the stable branch is unavoidable."}),"\n",(0,i.jsxs)(n.admonition,{title:"Advanced",type:"warning",children:[(0,i.jsx)(n.p,{children:"Suppose, in order to fix a bug, you need to make a database change in the Moodle 4.0 stable branch (and the master branch targetting Moodle 4.1). The root of the problem is that people may upgrade their Moodle in three different ways, which"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Upgrade from <=4.0.2 to 4.0.3 - this executes the upgrade script on the 4.0 branch."}),"\n",(0,i.jsx)(n.li,{children:"Upgrade from <=4.0.2 directly to >=4.1 - this executes the upgrade script on the master branch."}),"\n",(0,i.jsx)(n.li,{children:"Upgrade from 4.0.3 to >=4.1 - in this case, you must ensure that the upgrade on master is not executed."}),"\n"]}),(0,i.jsx)(n.p,{children:"The normal way to do this is ensure that your database upgrade is idempotent. That is, it does not matter if you do it twice. So for example, instead of doing"}),(0,i.jsx)(s,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="Creating a table without checks"',children:"$dbman->create_table($table);\n"})})}),(0,i.jsx)(n.p,{children:"you should do"}),(0,i.jsx)(o,{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="Ensure that the table does not exist before creating it"',children:"if (!$dbman->table_exists($table)) {\n    $dbman->create_table($table);\n}\n"})})}),(0,i.jsx)(n.p,{children:"You should also think about what version numbers to put in your version.php file on each branch. Above all, test carefully."})]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis",children:"Core APIs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/XMLDB_Documentation",children:"XMLDB Documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/general/development/policies",children:"Coding guidelines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/ddl",children:"DDL functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/XMLDB_defining_an_XML_structure",children:"install.xml file documentation"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);