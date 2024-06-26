"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99239],{73838:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=d(74848),t=d(28453),i=d(78924);const l={title:"Data definition API",tags:["DB","XMLDB","API","core_dml","ddl","core"]},s=void 0,o={id:"apis/core/dml/ddl",title:"Data definition API",description:"In this page you'll access to the available functions under Moodle to be able to handle DB structures (tables, fields, indexes...).",source:"@site/versioned_docs/version-4.2/apis/core/dml/ddl.md",sourceDirName:"apis/core/dml",slug:"/apis/core/dml/ddl",permalink:"/moodledevdocs/docs/4.2/apis/core/dml/ddl",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/core/dml/ddl.md",tags:[{label:"DB",permalink:"/moodledevdocs/docs/4.2/tags/db"},{label:"XMLDB",permalink:"/moodledevdocs/docs/4.2/tags/xmldb"},{label:"API",permalink:"/moodledevdocs/docs/4.2/tags/api"},{label:"core_dml",permalink:"/moodledevdocs/docs/4.2/tags/core-dml"},{label:"ddl",permalink:"/moodledevdocs/docs/4.2/tags/ddl"},{label:"core",permalink:"/moodledevdocs/docs/4.2/tags/core"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Data definition API",tags:["DB","XMLDB","API","core_dml","ddl","core"]},sidebar:"docs",previous:{title:"Database schema",permalink:"/moodledevdocs/docs/4.2/apis/core/dml/database-schema"},next:{title:"Transactions",permalink:"/moodledevdocs/docs/4.2/apis/core/dml/delegated-transactions"}},r={},c=[{value:"Main info",id:"main-info",level:2},{value:"The functions",id:"the-functions",level:2},{value:"Handling tables",id:"handling-tables",level:3},{value:"Handling fields",id:"handling-fields",level:3},{value:"Handling indexes",id:"handling-indexes",level:3},{value:"Some considerations",id:"some-considerations",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Since:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{frontMatter:l,metadata:o}),"\n",(0,a.jsx)(d,{version:"2.0"}),"\n",(0,a.jsx)(n.p,{children:"In this page you'll access to the available functions under Moodle to be able to handle DB structures (tables, fields, indexes...)."}),"\n",(0,a.jsxs)(n.p,{children:["The objective is to have a well-defined group of functions able to handle all the DB structure (DDL statements) using one neutral description, being able to execute the correct SQL statements required by each RDBMS. All these functions are used ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.moodle.org/dev/Installing_and_upgrading_plugin_database_tables",children:"exclusively by the installation and upgrade processes"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["In this page you'll see a complete list of such functions, with some explanations, tricks and examples of their use. If you are interested, it's also highly recommendable to take a look to the ",(0,a.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/core/dml/ddl",children:"DML functions page"})," where everything about how to handle DB data (select, insert, update, delete i.e. DML statements) is defined."]}),"\n",(0,a.jsx)(n.p,{children:"Of course, feel free to clarify, complete and add more info to all this documentation. It will be welcome, absolutely!"}),"\n",(0,a.jsx)(n.h2,{id:"main-info",children:"Main info"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All the function calls in this page are public methods of the ",(0,a.jsx)(n.strong,{children:"database manager"}),', accessible from the $DB global object. You will need to "import" it within the upgrade function of your ',(0,a.jsx)(n.strong,{children:"upgrade.php"})," main function using the ",(0,a.jsx)(n.code,{children:"global"})," keyword, for example:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"function xmldb_xxxx_upgrade {\n    global $DB;\n\n    // Load the DDL manager and xmldb API.\n    $dbman = $DB->get_manager();\n\n    // Your upgrade code goes here\n}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All of the ",(0,a.jsx)(n.code,{children:"$table"}),", ",(0,a.jsx)(n.code,{children:"$field"}),", and ",(0,a.jsx)(n.code,{children:"$index"})," parameters are XMLDB objects. Don't forget to read carefully the complete documentation about ",(0,a.jsx)(n.a,{href:"https://docs.moodle.org/dev/XMLDB_creating_new_DDL_functions",children:"creating new DDL functions"})," before playing with these functions. Everything is explained there, with one general example and some really useful tricks to improve the use of all the functions detailed below."]}),"\n",(0,a.jsxs)(n.li,{children:["If you want real examples of the usage of these functions we recommend examining the various core ",(0,a.jsx)(n.strong,{children:"upgrade.php"})," scripts."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Always use the ",(0,a.jsx)(n.a,{href:"/general/development/tools/xmldb",children:"XMLDB Editor"})," to modify your tables. It is capable of generating the PHP code required to make your definition changes."]})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["The use of these functions is ",(0,a.jsx)(n.strong,{children:"restricted"})," to the upgrade processes and it should not be used in any other parts of Moodle."]})}),"\n",(0,a.jsx)(n.h2,{id:"the-functions",children:"The functions"}),"\n",(0,a.jsx)(n.h3,{id:"handling-tables",children:"Handling tables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// Detect if a table exists.\n$dbman->table_exists($table)\n\n// Create a table.\n$dbman->create_table($table, $continue = true, $feedback = true)\n\n// Drop a table.\n$dbman->drop_table($table, $continue = true, $feedback = true)\n\n// Rename a table.\n$dbman->rename_table($table, $newname, $continue = true, $feedback = true)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"handling-fields",children:"Handling fields"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// Detect if a field exists.\n$dbman->field_exists($table, $field)\n\n// Create a field.\n$dbman->add_field($table, $field, $continue = true, $feedback = true)\n\n// Drop a field.\n$dbman->drop_field($table, $field, $continue = true, $feedback = true)\n\n// Change the type of a field.\n$dbman->change_field_type($table, $field, $continue = true, $feedback = true)\n\n// Change the precision of a field.\n$dbman->change_field_precision($table, $field, $continue = true, $feedback = true)\n\n// Change the signed/unsigned status of a field.\n$dbman->change_field_unsigned($table, $field, $continue = true, $feedback = true)\n\n// Make a field nullable or not.\n$dbman->change_field_notnull($table, $field, $continue = true, $feedback = true)\n\n// Change the default value of a field.\n$dbman->change_field_default($table, $field, $continue = true, $feedback = true)\n\n// Rename a field.\n$dbman->rename_field($table, $field, $newname, $continue = true, $feedback = true)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"handling-indexes",children:"Handling indexes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// Detect if an index exists.\n$dbman->index_exists($table, $index)\n\n// Return the name of an index in DB.\n$dbman->find_index_name($table, $index)\n\n// Add an index.\n$dbman->add_index($table, $index, $continue = true, $feedback = true)\n\n// Drop an index.\n$dbman->drop_index($table, $index, $continue = true, $feedback = true)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"some-considerations",children:"Some considerations"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"$table"}),", ",(0,a.jsx)(n.code,{children:"$field"}),", and ",(0,a.jsx)(n.code,{children:"$index"})," parameters are, always, XMLDB objects."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"$newtablename"}),", and ",(0,a.jsx)(n.code,{children:"$newfieldname"})," parameters are, always, simple strings."]}),"\n",(0,a.jsxs)(n.li,{children:["All the ",(0,a.jsx)(n.code,{children:"*_exists()"})," functions always return a boolean value."]}),"\n",(0,a.jsx)(n.li,{children:"If any issue is encountered during execution of these functions, an Exception will be thrown and the upgrade process will stop."}),"\n",(0,a.jsxs)(n.li,{children:["Always use the ",(0,a.jsx)(n.a,{href:"/general/development/tools/xmldb",children:"XMLDB Editor"})," to generate the PHP code automatically."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis",children:"Core APIs"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.moodle.org/dev/XMLDB_Documentation",children:"XMLDB Documentation"}),": Main page of the whole XMLDB documentation, where all the process is defined and all the related information resides."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.moodle.org/dev/XMLDB_Defining_one_XML_structure",children:"XMLDB Defining one XML structure"}),": Where you will know a bit more about the underlying XML structure used to define the DB objects, that is used continuously by the functions described in this page."]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.moodle.org/dev/Installing_and_upgrading_plugin_database_tables",children:"Installing and upgrading plugin DB tables"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/moodledevdocs/docs/4.2/apis/core/dml/",children:"DML functions"}),": Where all the functions used to handle DB data (",(0,a.jsx)(n.a,{href:"https://docs.moodle.org/wikipedia/Data_Manipulation_Language",children:"DML"}),") are defined."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);