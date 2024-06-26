"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[70541],{46097:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=d(74848),r=d(28453),i=d(78924);const n={title:"Plugin types",tags:["Plugins","core","API"]},o=void 0,l={id:"apis/plugintypes/index",title:"Plugin types",description:"Moodle is a powerful, and very extensible, Learning Management System. One of its core tenets is its extensibility, and this is primarily achieved through the development of plugins.",source:"@site/docs/apis/plugintypes/index.md",sourceDirName:"apis/plugintypes",slug:"/apis/plugintypes/",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/index.md",tags:[{label:"Plugins",permalink:"/moodledevdocs/docs/4.4/tags/plugins"},{label:"core",permalink:"/moodledevdocs/docs/4.4/tags/core"},{label:"API",permalink:"/moodledevdocs/docs/4.4/tags/api"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1695133723e3,frontMatter:{title:"Plugin types",tags:["Plugins","core","API"]},sidebar:"docs",previous:{title:"User-related APIs",permalink:"/moodledevdocs/docs/4.4/apis/core/user/"},next:{title:"Antivirus plugins",permalink:"/moodledevdocs/docs/4.4/apis/plugintypes/antivirus/"}},c={},h=[{value:"Things you can find in all plugins",id:"things-you-can-find-in-all-plugins",level:2},{value:"Naming conventions",id:"naming-conventions",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:d}=s;return d||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{frontMatter:n,metadata:l}),"\n",(0,t.jsx)(s.p,{children:"Moodle is a powerful, and very extensible, Learning Management System. One of its core tenets is its extensibility, and this is primarily achieved through the development of plugins."}),"\n",(0,t.jsx)(s.p,{children:"A wider range of plugin types are available and these should be selected depending on your needs."}),"\n",(0,t.jsx)(s.h2,{id:"things-you-can-find-in-all-plugins",children:"Things you can find in all plugins"}),"\n",(0,t.jsxs)(s.p,{children:["Although there are many different types of plugin, there are some things that work the same way in all plugin types. Please see the ",(0,t.jsx)(s.a,{href:"./commonfiles",children:"Plugin files"})," documentation that describes common files which are found in many plugin types."]}),"\n",(0,t.jsx)(s.h2,{id:"naming-conventions",children:"Naming conventions"}),"\n",(0,t.jsx)(s.p,{children:"Plugins typically have at least two names:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The friendly name, shown to users, and"}),"\n",(0,t.jsx)(s.li,{children:"A machine name used internally."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The machine name must meet the following rules:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"It must start with a lowercase latin letter"}),"\n",(0,t.jsx)(s.li,{children:"It may contain only lowercase latin letters, numbers, and underscores"}),"\n",(0,t.jsx)(s.li,{children:"It must end with a lowercase latin letter, or a number"}),"\n",(0,t.jsxs)(s.li,{children:["The hyphen, and minus character ",(0,t.jsx)(s.code,{children:"-"})," are not allowed"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If a plugin does not meet these requirements then it will be silently ignored."}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["Plugin name validation takes place in ",(0,t.jsx)(s.code,{children:"core_component::is_valid_plugin_name()"})," and the following regular expression is used:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"/^[a-z](?:[a-z0-9_](?!__))*[](a-z0-9)+$/\n"})})]}),"\n",(0,t.jsx)(s.admonition,{title:"Activity module exception",type:"danger",children:(0,t.jsx)(s.p,{children:"The underscore character is not supported in activity modules for legacy reasons."})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Plugin type"}),(0,t.jsxs)(s.th,{children:["Component name (",(0,t.jsx)(s.a,{href:"/general/development/policies/codingstyle/frankenstyle",children:"Frankenstyle"}),")"]}),(0,t.jsx)(s.th,{children:"Moodle path"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Moodle versions"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mod/",children:"Activity modules"})}),(0,t.jsx)(s.td,{children:"mod"}),(0,t.jsx)(s.td,{children:"/mod"}),(0,t.jsx)(s.td,{children:"Activity modules are essential types of plugins in Moodle as they provide activities in courses. For example: Forum, Quiz and Assignment."}),(0,t.jsx)(s.td,{children:"1.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/antivirus/",children:"Antivirus plugins"})}),(0,t.jsx)(s.td,{children:"antivirus"}),(0,t.jsx)(s.td,{children:"/lib/antivirus"}),(0,t.jsx)(s.td,{children:"Antivirus scanner plugins provide functionality for virus scanning user uploaded files using third-party virus scanning tools in Moodle. For example: ClamAV."}),(0,t.jsx)(s.td,{children:"3.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/assign/submission",children:"Assignment submission plugins"})}),(0,t.jsx)(s.td,{children:"assignsubmission"}),(0,t.jsx)(s.td,{children:"/mod/assign/submission"}),(0,t.jsx)(s.td,{children:"Different forms of assignment submissions"}),(0,t.jsx)(s.td,{children:"2.3+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/assign/feedback",children:"Assignment feedback plugins"})}),(0,t.jsx)(s.td,{children:"assignfeedback"}),(0,t.jsx)(s.td,{children:"/mod/assign/feedback"}),(0,t.jsx)(s.td,{children:"Different forms of assignment feedbacks"}),(0,t.jsx)(s.td,{children:"2.3+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mod_book/",children:"Book tools"})}),(0,t.jsx)(s.td,{children:"booktool"}),(0,t.jsx)(s.td,{children:"/mod/book/tool"}),(0,t.jsx)(s.td,{children:"Small information-displays or tools that can be moved around pages"}),(0,t.jsx)(s.td,{children:"2.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/customfield/",children:"Custom fields"})}),(0,t.jsx)(s.td,{children:"customfield"}),(0,t.jsx)(s.td,{children:"/customfield/field"}),(0,t.jsx)(s.td,{children:"Custom field types, used in Custom course fields"}),(0,t.jsx)(s.td,{children:"3.7+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mod_data/fields",children:"Database fields"})}),(0,t.jsx)(s.td,{children:"datafield"}),(0,t.jsx)(s.td,{children:"/mod/data/field"}),(0,t.jsx)(s.td,{children:"Different types of data that may be added to the Database activity module"}),(0,t.jsx)(s.td,{children:"1.6+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mod_data/presets",children:"Database presets"})}),(0,t.jsx)(s.td,{children:"datapreset"}),(0,t.jsx)(s.td,{children:"/mod/data/preset"}),(0,t.jsx)(s.td,{children:"Pre-defined templates for the Database activity module"}),(0,t.jsx)(s.td,{children:"1.6+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/External_tool_source",children:"LTI sources"})}),(0,t.jsx)(s.td,{children:"ltisource"}),(0,t.jsx)(s.td,{children:"/mod/lti/source"}),(0,t.jsxs)(s.td,{children:["LTI providers can be added to external tools easily through the external tools interface see ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/en/External_tool",children:"Documentation on External Tools"}),". This type of plugin is specific to LTI providers that need a plugin that can register custom handlers to process LTI messages"]}),(0,t.jsx)(s.td,{children:"2.7+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/fileconverter/",children:"File Converters"})}),(0,t.jsx)(s.td,{children:"fileconverter"}),(0,t.jsx)(s.td,{children:"/files/converter"}),(0,t.jsx)(s.td,{children:"Allow conversion between different types of user-submitted file. For example from .doc to PDF."}),(0,t.jsx)(s.td,{children:"3.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/LTI_services",children:"LTI services"})}),(0,t.jsx)(s.td,{children:"ltiservice"}),(0,t.jsx)(s.td,{children:"/mod/lti/service"}),(0,t.jsx)(s.td,{children:"Allows the implementation of LTI services as described by the IMS LTI specification"}),(0,t.jsx)(s.td,{children:"2.8+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mlbackend/",children:"Machine learning backends"})}),(0,t.jsx)(s.td,{children:"mlbackend"}),(0,t.jsx)(s.td,{children:"/lib/mlbackend"}),(0,t.jsx)(s.td,{children:"Prediction processors for analytics API"}),(0,t.jsx)(s.td,{children:"3.4+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/mod_forum/",children:"Forum reports"})}),(0,t.jsx)(s.td,{children:"forumreport"}),(0,t.jsx)(s.td,{children:"/mod/forum/report"}),(0,t.jsx)(s.td,{children:"Display various reports in the forum activity"}),(0,t.jsx)(s.td,{children:"3.8+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Quiz_reports",children:"Quiz reports"})}),(0,t.jsx)(s.td,{children:"quiz"}),(0,t.jsx)(s.td,{children:"/mod/quiz/report"}),(0,t.jsx)(s.td,{children:"Display and analyse the results of quizzes, or just plug miscellaneous behaviour into the quiz module"}),(0,t.jsx)(s.td,{children:"1.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Quiz_access_rules",children:"Quiz access rules"})}),(0,t.jsx)(s.td,{children:"quizaccess"}),(0,t.jsx)(s.td,{children:"/mod/quiz/accessrule"}),(0,t.jsx)(s.td,{children:"Add conditions to when or where quizzes can be attempted, for example only from some IP addresses, or student must enter a password first"}),(0,t.jsx)(s.td,{children:"2.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/SCORM_reports",children:"SCORM reports"})}),(0,t.jsx)(s.td,{children:"scormreport"}),(0,t.jsx)(s.td,{children:"/mod/scorm/report"}),(0,t.jsx)(s.td,{children:"Analysis of SCORM attempts"}),(0,t.jsx)(s.td,{children:"2.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop_grading_strategies",children:"Workshop grading strategies"})}),(0,t.jsx)(s.td,{children:"workshopform"}),(0,t.jsx)(s.td,{children:"/mod/workshop/form"}),(0,t.jsxs)(s.td,{children:["Define the type of the grading form and implement the calculation of the grade for submission in the ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop",children:"Workshop"})," module"]}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop_allocation_methods",children:"Workshop allocation methods"})}),(0,t.jsx)(s.td,{children:"workshopallocation"}),(0,t.jsx)(s.td,{children:"/mod/workshop/allocation"}),(0,t.jsxs)(s.td,{children:["Define ways how submissions are assigned for assessment in the ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop",children:"Workshop"})," module"]}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop_evaluation_methods",children:"Workshop evaluation methods"})}),(0,t.jsx)(s.td,{children:"workshopeval"}),(0,t.jsx)(s.td,{children:"/mod/workshop/eval"}),(0,t.jsxs)(s.td,{children:["Implement the calculation of the grade for assessment (grading grade) in the ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Workshop",children:"Workshop"})," module"]}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/blocks/",children:"Blocks"})}),(0,t.jsx)(s.td,{children:"block"}),(0,t.jsx)(s.td,{children:"/blocks"}),(0,t.jsx)(s.td,{children:"Small information-displays or tools that can be moved around pages"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Question_types",children:"Question types"})}),(0,t.jsx)(s.td,{children:"qtype"}),(0,t.jsx)(s.td,{children:"/question/type"}),(0,t.jsx)(s.td,{children:"Different types of question (for example multiple-choice, drag-and-drop) that can be used in quizzes and other activities"}),(0,t.jsx)(s.td,{children:"1.6+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Question_behaviours",children:"Question behaviours"})}),(0,t.jsx)(s.td,{children:"qbehaviour"}),(0,t.jsx)(s.td,{children:"/question/behaviour"}),(0,t.jsx)(s.td,{children:"Control how student interact with questions during an attempt"}),(0,t.jsx)(s.td,{children:"2.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Question_formats",children:"Question import/export formats"})}),(0,t.jsx)(s.td,{children:"qformat"}),(0,t.jsx)(s.td,{children:"/question/format"}),(0,t.jsx)(s.td,{children:"Import and export question definitions to/from the question bank"}),(0,t.jsx)(s.td,{children:"1.6+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/filter/",children:"Text filters"})}),(0,t.jsx)(s.td,{children:"filter"}),(0,t.jsx)(s.td,{children:"/filter"}),(0,t.jsx)(s.td,{children:"Automatically convert, highlight, and transmogrify text posted into Moodle."}),(0,t.jsx)(s.td,{children:"1.4+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Editors",children:"Editors"})}),(0,t.jsx)(s.td,{children:"editor"}),(0,t.jsx)(s.td,{children:"/lib/editor"}),(0,t.jsx)(s.td,{children:"Alternative text editors for editing content"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/atto/",children:"Atto editor plugins"})}),(0,t.jsx)(s.td,{children:"atto"}),(0,t.jsx)(s.td,{children:"/lib/editor/atto/plugins"}),(0,t.jsx)(s.td,{children:"Extra functionality for the Atto text editor"}),(0,t.jsx)(s.td,{children:"2.7+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/tiny/legacy",children:"TinyMCE editor plugins"})}),(0,t.jsx)(s.td,{children:"tinymce"}),(0,t.jsx)(s.td,{children:"/lib/editor/tinymce/plugins"}),(0,t.jsx)(s.td,{children:"Extra functionality for the TinyMCE text editor."}),(0,t.jsx)(s.td,{children:"2.4+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/enrol/",children:"Enrolment plugins"})}),(0,t.jsx)(s.td,{children:"enrol"}),(0,t.jsx)(s.td,{children:"/enrol"}),(0,t.jsx)(s.td,{children:"Ways to control who is enrolled in courses"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Authentication_plugins",children:"Authentication plugins"})}),(0,t.jsx)(s.td,{children:"auth"}),(0,t.jsx)(s.td,{children:"/auth"}),(0,t.jsx)(s.td,{children:"Allows connection to external sources of authentication"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/general/projects/api/admin-tools",children:"Admin tools"})}),(0,t.jsx)(s.td,{children:"tool"}),(0,t.jsx)(s.td,{children:"/admin/tool"}),(0,t.jsx)(s.td,{children:"Provides utility scripts useful for various site administration and maintenance tasks"}),(0,t.jsx)(s.td,{children:"2.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/logstore/",children:"Log stores"})}),(0,t.jsx)(s.td,{children:"logstore"}),(0,t.jsx)(s.td,{children:"/admin/tool/log/store"}),(0,t.jsx)(s.td,{children:"Event logs storage back-ends"}),(0,t.jsx)(s.td,{children:"2.7+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/availability/",children:"Availability conditions"})}),(0,t.jsx)(s.td,{children:"availability"}),(0,t.jsx)(s.td,{children:"/availability/condition"}),(0,t.jsx)(s.td,{children:"Conditions to restrict user access to activities and sections."}),(0,t.jsx)(s.td,{children:"2.7+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Calendar_types",children:"Calendar types"})}),(0,t.jsx)(s.td,{children:"calendartype"}),(0,t.jsx)(s.td,{children:"/calendar/type"}),(0,t.jsx)(s.td,{children:"Defines how dates are displayed throughout Moodle"}),(0,t.jsx)(s.td,{children:"2.6+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Messaging_consumers",children:"Messaging consumers"})}),(0,t.jsx)(s.td,{children:"message"}),(0,t.jsx)(s.td,{children:"/message/output"}),(0,t.jsx)(s.td,{children:"Represent various targets where messages and notifications can be sent to (email, sms, jabber, ...)"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/format/",children:"Course formats"})}),(0,t.jsx)(s.td,{children:"format"}),(0,t.jsx)(s.td,{children:"/course/format"}),(0,t.jsx)(s.td,{children:"Different ways of laying out the activities and blocks in a course"}),(0,t.jsx)(s.td,{children:"1.3+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Data_formats",children:"Data formats"})}),(0,t.jsx)(s.td,{children:"dataformat"}),(0,t.jsx)(s.td,{children:"/dataformat"}),(0,t.jsx)(s.td,{children:"Formats for data exporting and downloading"}),(0,t.jsx)(s.td,{children:"3.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/User_profile_fields",children:"User profile fields"})}),(0,t.jsx)(s.td,{children:"profilefield"}),(0,t.jsx)(s.td,{children:"/user/profile/field"}),(0,t.jsx)(s.td,{children:"Add new types of data to user profiles"}),(0,t.jsx)(s.td,{children:"1.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Reports",children:"Reports"})}),(0,t.jsx)(s.td,{children:"report"}),(0,t.jsx)(s.td,{children:"/report"}),(0,t.jsx)(s.td,{children:"Provides useful views of data in a Moodle site for admins and teachers"}),(0,t.jsx)(s.td,{children:"2.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Course_reports",children:"Course reports"})}),(0,t.jsx)(s.td,{children:"coursereport"}),(0,t.jsx)(s.td,{children:"/course/report"}),(0,t.jsx)(s.td,{children:"Reports of activity within the course"}),(0,t.jsxs)(s.td,{children:["Up to 2.1 (for 2.2+ see ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Reports",children:"Reports"}),")"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Gradebook_export",children:"Gradebook export"})}),(0,t.jsx)(s.td,{children:"gradeexport"}),(0,t.jsx)(s.td,{children:"/grade/export"}),(0,t.jsx)(s.td,{children:"Export grades in various formats"}),(0,t.jsx)(s.td,{children:"1.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Gradebook_import",children:"Gradebook import"})}),(0,t.jsx)(s.td,{children:"gradeimport"}),(0,t.jsx)(s.td,{children:"/grade/import"}),(0,t.jsx)(s.td,{children:"Import grades in various formats"}),(0,t.jsx)(s.td,{children:"1.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Gradebook_reports",children:"Gradebook reports"})}),(0,t.jsx)(s.td,{children:"gradereport"}),(0,t.jsx)(s.td,{children:"/grade/report"}),(0,t.jsx)(s.td,{children:"Display/edit grades in various layouts and reports"}),(0,t.jsx)(s.td,{children:"1.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Grading_methods",children:"Advanced grading methods"})}),(0,t.jsx)(s.td,{children:"gradingform"}),(0,t.jsx)(s.td,{children:"/grade/grading/form"}),(0,t.jsx)(s.td,{children:"Interfaces for actually performing grading in activity modules (for example Rubrics)"}),(0,t.jsx)(s.td,{children:"2.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/MNet_services",children:"MNet services"})}),(0,t.jsx)(s.td,{children:"mnetservice"}),(0,t.jsx)(s.td,{children:"/mnet/service"}),(0,t.jsxs)(s.td,{children:["Allows to implement remote services for the ",(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/MNet",children:"MNet"})," environment (deprecated, use web services instead)"]}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Webservice_protocols",children:"Webservice protocols"})}),(0,t.jsx)(s.td,{children:"webservice"}),(0,t.jsx)(s.td,{children:"/webservice"}),(0,t.jsx)(s.td,{children:"Define new protocols for web service communication (such as SOAP, XML-RPC, JSON, REST ...)"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/repository/",children:"Repository plugins"})}),(0,t.jsx)(s.td,{children:"repository"}),(0,t.jsx)(s.td,{children:"/repository"}),(0,t.jsx)(s.td,{children:"Connect to external sources of files to use in Moodle"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Portfolio_plugins",children:"Portfolio plugins"})}),(0,t.jsx)(s.td,{children:"portfolio"}),(0,t.jsx)(s.td,{children:"/portfolio"}),(0,t.jsx)(s.td,{children:"Connect external portfolio services as destinations for users to store Moodle content"}),(0,t.jsx)(s.td,{children:"1.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Search_engines",children:"Search engines"})}),(0,t.jsx)(s.td,{children:"search"}),(0,t.jsx)(s.td,{children:"/search/engine"}),(0,t.jsx)(s.td,{children:"Search engine backends to index Moodle's contents."}),(0,t.jsx)(s.td,{children:"3.1+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Media_players",children:"Media players"})}),(0,t.jsx)(s.td,{children:"media"}),(0,t.jsx)(s.td,{children:"/media/player"}),(0,t.jsx)(s.td,{children:"Pluggable media players"}),(0,t.jsx)(s.td,{children:"3.2+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Plagiarism_plugins",children:"Plagiarism plugins"})}),(0,t.jsx)(s.td,{children:"plagiarism"}),(0,t.jsx)(s.td,{children:"/plagiarism"}),(0,t.jsx)(s.td,{children:"Define external services to process submitted files and content"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Cache_store",children:"Cache store"})}),(0,t.jsx)(s.td,{children:"cachestore"}),(0,t.jsx)(s.td,{children:"/cache/stores"}),(0,t.jsx)(s.td,{children:"Cache storage back-ends."}),(0,t.jsx)(s.td,{children:"2.4+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Cache_locks",children:"Cache locks"})}),(0,t.jsx)(s.td,{children:"cachelock"}),(0,t.jsx)(s.td,{children:"/cache/locks"}),(0,t.jsx)(s.td,{children:"Cache lock implementations."}),(0,t.jsx)(s.td,{children:"2.4+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Themes",children:"Themes"})}),(0,t.jsx)(s.td,{children:"theme"}),(0,t.jsx)(s.td,{children:"/theme"}),(0,t.jsx)(s.td,{children:"Change the look of Moodle by changing the the HTML and the CSS."}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/local/",children:"Local plugins"})}),(0,t.jsx)(s.td,{children:"local"}),(0,t.jsx)(s.td,{children:"/local"}),(0,t.jsx)(s.td,{children:"Generic plugins for local customisations"}),(0,t.jsx)(s.td,{children:"2.0+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Content_bank_content_types",children:"Content bank content types"})}),(0,t.jsx)(s.td,{children:"contenttype"}),(0,t.jsx)(s.td,{children:"/contentbank/contenttype"}),(0,t.jsx)(s.td,{children:"Content types to upload, create or edit in the content bank and use all over the Moodle site"}),(0,t.jsx)(s.td,{children:"3.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/H5P_libraries",children:"H5P libraries"})}),(0,t.jsx)(s.td,{children:"h5plib"}),(0,t.jsx)(s.td,{children:"/h5p/h5plib"}),(0,t.jsx)(s.td,{children:"Plugin type for the particular versions of the H5P integration library."}),(0,t.jsx)(s.td,{children:"3.9+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/qbank/",children:"Question bank plugins"})}),(0,t.jsx)(s.td,{children:"qbank"}),(0,t.jsx)(s.td,{children:"/question/bank"}),(0,t.jsx)(s.td,{children:"Plugin type for extending question bank functionality."}),(0,t.jsx)(s.td,{children:"4.0+"})]})]})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:" Obtaining the list of plugin types known to your Moodle "}),(0,t.jsx)(s.p,{children:"You can get an exact list of valid plugin types for your Moodle version using the following example:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-php",metastring:'title="/plugintypes.php"',children:"<?php\ndefine('CLI_SCRIPT', true);\nrequire('config.php');\n\n$pluginman = core_plugin_manager::instance();\n\nforeach ($pluginman->get_plugin_types() as $type => $dir) {\n    $dir = substr($dir, strlen($CFG->dirroot));\n    printf(\n        \"%-20s %-50s %s\" . PHP_EOL,\n        $type,\n        $pluginman->plugintype_name_plural($type),\n        $dir)\n    ;\n}\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Guidelines_for_contributed_code",children:"Guidelines for contributing code"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/moodledevdocs/docs/4.4/apis",children:"Core APIs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/general/development/policies/codingstyle/frankenstyle",children:"Frankenstyle"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"http://moodle.org/plugins",children:"Moodle Plugins directory"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.moodle.org/dev/Tutorial",children:"Tutorial"})," to help you learn how to write plugins for Moodle from start to finish, while showing you how to navigate the most important developer documentation along the way."]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);