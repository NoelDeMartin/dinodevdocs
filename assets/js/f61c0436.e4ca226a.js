"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[38736],{5498:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var o=t(74848),i=t(28453),a=t(78924);const l={title:"Backup API",tags:["Subsystem","API","Backup"]},r=void 0,n={id:"apis/subsystems/backup/index",title:"Backup API",description:"The Backup API provides a way to include your plugin's in the course backup. See Restore API for the part that takes care of restoring data.",source:"@site/versioned_docs/version-4.2/apis/subsystems/backup/index.md",sourceDirName:"apis/subsystems/backup",slug:"/apis/subsystems/backup/",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/backup/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/subsystems/backup/index.md",tags:[{label:"Subsystem",permalink:"/moodledevdocs/docs/4.2/tags/subsystem"},{label:"API",permalink:"/moodledevdocs/docs/4.2/tags/api"},{label:"Backup",permalink:"/moodledevdocs/docs/4.2/tags/backup"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:168325581e4,frontMatter:{title:"Backup API",tags:["Subsystem","API","Backup"]},sidebar:"docs",previous:{title:"Availability API",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/availability/"},next:{title:"Restore API",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/backup/restore"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"API for activity modules",id:"api-for-activity-modules",level:2},{value:"Files",id:"files",level:3},{value:"Backup task class",id:"backup-task-class",level:3},{value:"Backup structure step class",id:"backup-structure-step-class",level:3},{value:"API for blocks",id:"api-for-blocks",level:2},{value:"Files",id:"files-1",level:3},{value:"Backup task class",id:"backup-task-class-1",level:3},{value:"API for admin tools",id:"api-for-admin-tools",level:2},{value:"Task class",id:"task-class",level:3},{value:"API for themes",id:"api-for-themes",level:2},{value:"API for reports",id:"api-for-reports",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{frontMatter:l,metadata:n}),"\n",(0,o.jsxs)(s.p,{children:["The Backup API provides a way to include your plugin's in the course backup. See ",(0,o.jsx)(s.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/backup/restore",children:"Restore API"})," for the part that takes care of restoring data."]}),"\n",(0,o.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(s.p,{children:["This page provides just a quick reference to the backup machinery in Moodle 2.0 and higher. There is a detailed documentation available at ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_2.0",children:"Backup 2.0"})," page - see especially the tutorial for plugin authors at ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_2.0_for_developers",children:"Backup 2.0 for developers"})," page."]}),"\n",(0,o.jsxs)(s.p,{children:["Moodle creates backups of courses or their parts by executing so called ",(0,o.jsx)(s.em,{children:"backup plan"}),". The backup plan consists of a set of ",(0,o.jsx)(s.em,{children:"backup tasks"})," and finally each backup task consists of one or more ",(0,o.jsx)(s.em,{children:"backup steps"}),". You as the developer of a plugin will have to implement one backup task that deals with your plugin data. Most plugins have their backup tasks consisting of a single backup step - the one that creates the XML file with data from your plugin's tables. Some activities may need two or more steps to finish their backup task though (for example the backup task of the Quiz module consists of three steps as it needs to write not just the Quiz setting itself but also the questions used by that particular quiz)."]}),"\n",(0,o.jsx)(s.p,{children:"There are subtle differences in how the backup code is organised in various supported plugin types (activity modules, blocks, themes, course reports)."}),"\n",(0,o.jsx)(s.h2,{id:"api-for-activity-modules",children:"API for activity modules"}),"\n",(0,o.jsx)(s.h3,{id:"files",children:"Files"}),"\n",(0,o.jsxs)(s.p,{children:["The files that implement the backup support in your activity module must be located in the subdirectory backup/moodle2/ in your plugin's folder. So, if you are developing the activity module called ",(0,o.jsx)(s.em,{children:"foobar"})," then the backup files will be located in mod/foobar/backup/moodle2/ folder."]}),"\n",(0,o.jsxs)(s.p,{children:["The following two files are supposed to exist in that location (replace ",(0,o.jsx)(s.em,{children:"foobar"})," with the name of your module):"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"backup_foobar_activity_task.class.php"})," ",(0,o.jsx)("br",{}),"\nProvides the activity task class"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"backup_foobar_stepslib.php"})," ",(0,o.jsx)("br",{}),"\nProvides all the backup steps classes"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"If your module declares its own backup setting (apart from the ones common for all activity modules provided by the core), you will also want to create the backup_foobar_settingslib.php file to provide the setting classes. However most modules do not need this feature."}),"\n",(0,o.jsx)(s.h3,{id:"backup-task-class",children:"Backup task class"}),"\n",(0,o.jsxs)(s.p,{children:["The file backup_foobar_activity_task.class.php must provide a single class called ",(0,o.jsx)(s.strong,{children:"backup_foobar_activity_task"}),". All activity tasks extend the backup_activity_task class."]}),"\n",(0,o.jsx)(s.p,{children:"There are three methods that your class must define."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"protected function define_my_settings()"})," ",(0,o.jsx)("br",{}),"\nIf your module declares own backup settings defined in the file backup_foobar_settingslib.php, add them here. Most modules just leave the method body empty."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"protected function define_my_steps()"})," ",(0,o.jsx)("br",{}),"\nThis method typically consists of one or more ",(0,o.jsx)(s.code,{children:"$this->add_step()"})," calls. This is the place where you define the task as a sequence of steps to execute."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"static public function encode_content_links($content)"})," ",(0,o.jsx)("br",{}),"\nThe current instance of the activity may be referenced from other places in the course by URLs like ",(0,o.jsx)(s.code,{children:"http://my.moodle.site/mod/foobar/view.php?id=42"})," Obviously, such URLs are not valid any more once the course is restored elsewhere. For this reason the backup file does not store the original URLs but encodes them into a transportable form. During the restore, the reverse process is applied and the encoded URLs are replaced with the new ones valid for the target site."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"backup-structure-step-class",children:"Backup structure step class"}),"\n",(0,o.jsxs)(s.p,{children:["The classes that represent the backup steps added in define_my_steps() are implemented in the file backup_foobar_stepslib.php. Most plugins define just a single step in the class called ",(0,o.jsx)(s.strong,{children:"backup_foobar_activity_structure_step"})," that extends the backup_activity_structure_step class. This class defines the structure step - that is the step where the structure of your plugin's instance data is described and linked with the data sources."]}),"\n",(0,o.jsxs)(s.p,{children:["You have to implement a single method ",(0,o.jsx)(s.code,{children:"protected function define_structure()"})," in this class class. There are three main things that the method must do."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Create a set of backup_nested_element instances that describe the required data of your plugin"}),"\n",(0,o.jsxs)(s.li,{children:["Connect these instances into a hierarchy using their ",(0,o.jsx)(s.code,{children:"add_child()"})," method"]}),"\n",(0,o.jsxs)(s.li,{children:["Set data sources for the elements, using their methods like ",(0,o.jsx)(s.code,{children:"set_source_table()"})," or ",(0,o.jsx)(s.code,{children:"set_source_sql()"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The method must return the root backup_nested_element instance processed by the ",(0,o.jsx)(s.code,{children:"prepare_activity_structure()"})," method (which just wraps your structures with a common envelope)."]}),"\n",(0,o.jsx)(s.h2,{id:"api-for-blocks",children:"API for blocks"}),"\n",(0,o.jsx)(s.h3,{id:"files-1",children:"Files"}),"\n",(0,o.jsxs)(s.p,{children:["The files that implement the backup support in your block must be located in the subdirectory backup/moodle2/ in your plugin's folder. So, if you are developing the block called ",(0,o.jsx)(s.em,{children:"foobar"})," then the backup files will be located in blocks/foobar/backup/moodle2/ folder."]}),"\n",(0,o.jsxs)(s.p,{children:["At least the file backup_foobar_block_task.class.php is supposed to exist in that location (replace ",(0,o.jsx)(s.em,{children:"foobar"})," with the name of your block)."]}),"\n",(0,o.jsx)(s.p,{children:"If your block defines its own database tables, data from which must be included in the backup, you will want to create a file backup_foobar_stepslib.php, too. Additionally, if your block declares its own backup setting, you will also want to create the backup_foobar_settingslib.php file to provide the setting classes. However most blocks do not need this feature."}),"\n",(0,o.jsx)(s.h3,{id:"backup-task-class-1",children:"Backup task class"}),"\n",(0,o.jsxs)(s.p,{children:["The file backup_foobar_block_task.class.php must provide a single class called ",(0,o.jsx)(s.strong,{children:"backup_foobar_block_task"}),". All block tasks extend the backup_block_task class."]}),"\n",(0,o.jsx)(s.p,{children:"There are five methods that your class must define."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"protected function define_my_settings()"})," ",(0,o.jsx)("br",{}),"\nIf your block declares own backup settings defined in the file backup_foobar_settingslib.php, add them here. Most blocks just leave the method body empty."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"protected function define_my_steps()"})," ",(0,o.jsx)("br",{}),"\nBlocks that do not have their own database tables usually leave this method empty. Otherwise this method consists of one or more ",(0,o.jsx)(s.code,{children:"$this->add_step()"})," calls where you define the task as a sequence of steps to execute."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"public function get_fileareas()"})," ",(0,o.jsx)("br",{}),"\nReturns the array of file area names within the block context."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"public function get_configdata_encoded_attributes()"})," ",(0,o.jsx)("br",{}),"\nInstead of using their own tables, blocks usually use the configuration tables to hold their data (see the instance_config_save() of the block class). This method returns the array of all config elements that must be processed before they are stored in the backup. This is typically used when the stored config elements holds links to embedded media. Most blocks just return empty array here."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"static public function encode_content_links($content)"})," ",(0,o.jsx)("br",{}),"\nIf the current instance of the block may be referenced from other places in the course by URLs, it must be encoded into a transportable form. Most blocks just return unmodified $content parameter."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"api-for-admin-tools",children:"API for admin tools"}),"\n",(0,o.jsxs)(s.p,{children:["The files that implement the backup support in your plugin must be located in the subdirectory ",(0,o.jsx)(s.em,{children:"backup/moodle2/"})," in your plugin's folder. So, if you are developing ",(0,o.jsx)(s.em,{children:"tool_foobar"})," then the backup files will be located in ",(0,o.jsx)(s.em,{children:"admin/tool/foobar/backup/moodle2/"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"task-class",children:"Task class"}),"\n",(0,o.jsxs)(s.p,{children:["The file  backup_tool_foobar_plugin.class.php must provide a single class called ",(0,o.jsx)(s.em,{children:"backup_tool_foobar_task"})," extending ",(0,o.jsx)(s.em,{children:"backup_tool_plugin"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Here is a minimalistic task:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-php",children:"require_once($CFG->dirroot . '/backup/moodle2/backup_tool_plugin.class.php');\n\nclass backup_tool_foobar_plugin extends backup_tool_plugin {\n\n    protected function define_course_plugin_structure() {\n        $this->step->log('Yay, backup!', backup::LOG_DEBUG);\n        return $plugin;\n    }\n\n}\n"})}),"\n",(0,o.jsx)(s.h2,{id:"api-for-themes",children:"API for themes"}),"\n",(0,o.jsxs)(s.p,{children:["See ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_2.0_theme_data",children:"Backup 2.0 theme data"})]}),"\n",(0,o.jsx)(s.h2,{id:"api-for-reports",children:"API for reports"}),"\n",(0,o.jsxs)(s.p,{children:["See ",(0,o.jsx)(s.a,{href:"https://docs.moodle.org/dev/Backup_2.0_course_report_data",children:"Backup 2.0 course report data"})]}),"\n",(0,o.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/backup/restore",children:"Restore API"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/moodledevdocs/docs/4.2/apis",children:"Core APIs"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);