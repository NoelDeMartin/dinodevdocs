"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[23675],{96723:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var t=o(74848),r=o(28453),a=o(78924);const i={title:"Restore API",tags:["Subsystem","API","Backup"]},l=void 0,n={id:"apis/subsystems/backup/restore",title:"Restore API",description:"The Restore API provides a way to restore your plugin's data from a backup file created in Moodle 2.0 or later. For the information on how backup files are created, see Backup API. For the information on how to support restoring data from backup files created in Moodle 1.x, see Backup conversion API.",source:"@site/versioned_docs/version-4.1/apis/subsystems/backup/restore.md",sourceDirName:"apis/subsystems/backup",slug:"/apis/subsystems/backup/restore",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/backup/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.1/apis/subsystems/backup/restore.md",tags:[{label:"Subsystem",permalink:"/moodledevdocs/docs/4.1/tags/subsystem"},{label:"API",permalink:"/moodledevdocs/docs/4.1/tags/api"},{label:"Backup",permalink:"/moodledevdocs/docs/4.1/tags/backup"}],version:"4.1",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1670648742e3,frontMatter:{title:"Restore API",tags:["Subsystem","API","Backup"]},sidebar:"docs",previous:{title:"Backup API",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/backup/"},next:{title:"Check API",permalink:"/moodledevdocs/docs/4.1/apis/subsystems/check/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"API for activity modules",id:"api-for-activity-modules",level:2},{value:"Files",id:"files",level:3},{value:"API for admin tools",id:"api-for-admin-tools",level:2},{value:"Task class",id:"task-class",level:3},{value:"See also",id:"see-also",level:2}];function p(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{frontMatter:i,metadata:n}),"\n",(0,t.jsxs)(s.p,{children:["The Restore API provides a way to restore your plugin's data from a backup file created in Moodle 2.0 or later. For the information on how backup files are created, see ",(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.1/apis/subsystems/backup/",children:"Backup API"}),". For the information on how to support restoring data from backup files created in Moodle 1.x, see ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_conversion_API",children:"Backup conversion API"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:["This page provides just a quick reference to the restore machinery in Moodle 2.0 and higher. There is a detailed documentation available at ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_2.0",children:"Backup 2.0"})," page - see especially the tutorial for plugin authors at ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Restore_2.0_for_developers",children:"Restore 2.0 for developers"})," page."]}),"\n",(0,t.jsxs)(s.p,{children:["Moodle restores data from course backups by executing so called ",(0,t.jsx)(s.em,{children:"restore plan"}),". The restore plan consists of a set of ",(0,t.jsx)(s.em,{children:"restore tasks"})," and finally each restore task consists of one or more ",(0,t.jsx)(s.em,{children:"restore steps"}),". You as the developer of a plugin will have to implement one restore task that deals with your plugin data. Most plugins have their restore tasks consisting of a single restore step - the one that parses the plugin XML file and puts the data into its tables."]}),"\n",(0,t.jsx)(s.h2,{id:"api-for-activity-modules",children:"API for activity modules"}),"\n",(0,t.jsx)(s.h3,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(s.p,{children:["The files that implement the restore support in your activity module must be located in the subdirectory ",(0,t.jsx)(s.code,{children:"backup/moodle2/"})," in your plugin's folder (yes, it's the same folder where the backup related files are located). So, if you are developing the activity module called ",(0,t.jsx)(s.em,{children:"foobar"})," then the restore files will be located in ",(0,t.jsx)(s.code,{children:"mod/foobar/backup/moodle2/"})," folder."]}),"\n",(0,t.jsxs)(s.p,{children:["The following two files are supposed to exist in that location (replace ",(0,t.jsx)(s.em,{children:"foobar"})," with the name of your module):"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"restore_foobar_activity_task.class.php"})," ",(0,t.jsx)("br",{}),"\nProvides the activity task class"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"restore_foobar_stepslib.php"})," ",(0,t.jsx)("br",{}),"\nProvides all the restore steps classes"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"(to be continued)"}),"\n",(0,t.jsx)(s.h2,{id:"api-for-admin-tools",children:"API for admin tools"}),"\n",(0,t.jsxs)(s.p,{children:["The files that implement the backup support in your plugin must be located in the subdirectory ",(0,t.jsx)(s.code,{children:"backup/moodle2/"})," in your plugin's folder. So, if you are developing ",(0,t.jsx)(s.code,{children:"tool_foobar"})," then the backup files will be located in ",(0,t.jsx)(s.code,{children:"admin/tool/foobar/backup/moodle2/"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"task-class",children:"Task class"}),"\n",(0,t.jsxs)(s.p,{children:["The file ",(0,t.jsx)(s.code,{children:"backup_tool_foobar_plugin.class.php"})," must provide a single class called ",(0,t.jsx)(s.code,{children:"restore_tool_foobar_task"})," extending ",(0,t.jsx)(s.code,{children:"restore_tool_plugin"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Here is a minimalistic task:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-php",children:"require_once($CFG->dirroot . '/backup/moodle2/restore_tool_plugin.class.php');\n\nclass restore_tool_foobar_plugin extends restore_tool_plugin {\n\n    protected function define_course_plugin_structure() {\n        $paths = array();\n        $this->step->log('Yay, restore!', backup::LOG_DEBUG);\n        return $paths;\n    }\n\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.1/apis",children:"Core APIs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"../backup",children:"Backup API"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);