"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[15189],{46580:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=i(74848),l=i(28453),t=i(78924);const d={title:"File handling",tags:["Web Services","core_external","external","core_files"],sidebar_position:4},r=void 0,o={id:"apis/subsystems/external/files",title:"File handling",description:"Moodle provides two ways to fetch and upload files:",source:"@site/versioned_docs/version-4.2/apis/subsystems/external/files.md",sourceDirName:"apis/subsystems/external",slug:"/apis/subsystems/external/files",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/files",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.2/apis/subsystems/external/files.md",tags:[{label:"Web Services",permalink:"/moodledevdocs/docs/4.2/tags/web-services"},{label:"core_external",permalink:"/moodledevdocs/docs/4.2/tags/core-external"},{label:"external",permalink:"/moodledevdocs/docs/4.2/tags/external"},{label:"core_files",permalink:"/moodledevdocs/docs/4.2/tags/core-files"}],version:"4.2",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:168325581e4,sidebarPosition:4,frontMatter:{title:"File handling",tags:["Web Services","core_external","external","core_files"],sidebar_position:4},sidebar:"docs",previous:{title:"Security",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/security"},next:{title:"Writing a new service",permalink:"/moodledevdocs/docs/4.2/apis/subsystems/external/writing-a-service"}},a={},c=[{value:"Web service functions",id:"web-service-functions",level:2},{value:"Dedicated endpoints",id:"dedicated-endpoints",level:2},{value:"File upload",id:"file-upload",level:3},{value:"File download",id:"file-download",level:2},{value:"Returning files in Web Services",id:"returning-files-in-web-services",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{frontMatter:d,metadata:o}),"\n",(0,n.jsx)(s.p,{children:"Moodle provides two ways to fetch and upload files:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"A set of web service functions; and"}),"\n",(0,n.jsx)(s.li,{children:"A pair of dedicated endpoints."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"web-service-functions",children:"Web service functions"}),"\n",(0,n.jsx)(s.p,{children:"You can use the following functions to upload, and fetch, file content:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"core_files_get_files()"}),"; and"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"core_files_upload()"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"When using these functions, the file content is base64-encoded."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Many devices do not have enough memory to encode and decode requests containing large files. As such we recommend using the dedicated endpoints instead."})}),"\n",(0,n.jsx)(s.h2,{id:"dedicated-endpoints",children:"Dedicated endpoints"}),"\n",(0,n.jsx)(s.p,{children:"Moodle provides two dedicated endpoints which can be used, alongside the authentication token, to upload and fetch content. These are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["to upload a file: ",(0,n.jsx)(s.code,{children:"/webservice/upload.php"}),"; and"]}),"\n",(0,n.jsxs)(s.li,{children:["to fetch a file: ",(0,n.jsx)(s.code,{children:"/webservice/pluginfile.php"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"file-upload",children:"File upload"}),"\n",(0,n.jsxs)(s.p,{children:["The recommended way to upload file content from an external service is by issue a ",(0,n.jsx)(s.code,{children:"POST"})," request to the ",(0,n.jsx)(s.code,{children:"/webservice/upload.php"})," endpoint, passing in a valid web service token for authentication."]}),"\n",(0,n.jsx)(s.p,{children:"Upon successful upload, any files passed will be saved in the user's draft file area."}),"\n",(0,n.jsx)(s.p,{children:"The endpoint takes two optional arguments:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["An ",(0,n.jsx)(s.code,{children:"itemid"})," to upload the files to, defaulting to ",(0,n.jsx)(s.code,{children:"0"}),". If none is specified then a new id is generated for the current user's draft file area"]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"filepath"})," to store the file in, defaulting to ",(0,n.jsx)(s.code,{children:"/"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The endpoint will return a JSON-encoded summary of the uploaded file, including the ",(0,n.jsx)(s.code,{children:"itemid"})," that it was stored in."]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsxs)(s.p,{children:["It is typical that the ",(0,n.jsx)(s.code,{children:"itemid"})," parameter will be used when the files are uploaded singularly in separate HTTP calls and the files are required to be in the same draft file area."]}),(0,n.jsxs)(s.p,{children:["The client retrieves the ",(0,n.jsx)(s.code,{children:"itemid"})," from the first uploaded file and uses it in subsequent uploads."]}),(0,n.jsx)(s.p,{children:"This allows multiple files to be uploaded to the same draft file area."})]}),"\n",(0,n.jsx)(s.p,{children:"On every successful upload, the file/s information are returned in JSON format. If an error occurs, an error message will be sent back in JSON format too."}),"\n",(0,n.jsxs)(s.admonition,{title:"Example",type:"note",children:[(0,n.jsxs)(s.p,{children:["To upload a file, ",(0,n.jsx)(s.code,{children:"users.csv"}),", you could use curl as follows:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$ curl -X POST -F "file_1=@users.csv" https://SITENAME/webservice/upload.php?token=TOKEN \\\n| jq\n\n[\n  {\n    "component": "user",\n    "contextid": 567,\n    "userid": "123",\n    "filearea": "draft",\n    "filename": "users.csv",\n    "filepath": "/",\n    "itemid": 880413555,\n    "license": "allrightsreserved",\n    "author": "User User",\n    "source": "O:8:\\"stdClass\\":1:{s:6:\\"source\\";s:13:\\"users.csv\\";}"\n  }\n]\n'})}),(0,n.jsxs)(s.p,{children:["The returned JSON response includes the key parts of the file record, including the ",(0,n.jsx)(s.code,{children:"itemid"}),"."]})]}),"\n",(0,n.jsxs)(s.p,{children:["Once all the files are uploaded, you can call a webserivce function to process the files from the user drafts area, passing in the ",(0,n.jsx)(s.code,{children:"itemid"})," of the draft area containing the list of files for the request. The service can identify the uploads and manipulate them as necessary."]}),"\n",(0,n.jsxs)(s.p,{children:["An example of a webservice that accepts files is: ",(0,n.jsx)(s.code,{children:"mod_assign_save_submission"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:['To accept file uploads, the service must allow "files download" (',(0,n.jsx)(s.em,{children:"Administration > Plugins > Web services > Manage services > Edit service > Advanced button"}),")"]}),"\n",(0,n.jsx)(s.h2,{id:"file-download",children:"File download"}),"\n",(0,n.jsxs)(s.p,{children:["We serve the files through ",(0,n.jsx)(s.code,{children:"/webservice/pluginfile.php"}),". This script requires a web service token for authentication."]}),"\n",(0,n.jsx)(s.p,{children:'To support file downloads, the service must allow "files download".'}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"/webservice/pluginfile.php"})," endpoint has the exact same structure as ",(0,n.jsx)(s.code,{children:"/pluginfile.php"})," and ",(0,n.jsx)(s.code,{children:"/tokenpluginfile.php"}),"."]}),(0,n.jsxs)(s.p,{children:["We don't serve the files through ",(0,n.jsx)(s.code,{children:"/pluginfile.php"})," for web service clients because it requires the user's login session to work, however it is possible to use the ",(0,n.jsx)(s.code,{children:"/tokenpluginfile.php"})," endpoint with an appropriate token."]})]}),"\n",(0,n.jsx)(s.h2,{id:"returning-files-in-web-services",children:"Returning files in Web Services"}),"\n",(0,n.jsxs)(s.p,{children:["Since Moodle 3.2, you can return a complete file area list via Web Services using the static ",(0,n.jsx)(s.code,{children:"get_area_files"})," method, defined in ",(0,n.jsx)(s.code,{children:"external_util"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$forum->introfiles = external_util::get_area_files($context->id, 'mod_forum', 'intro', false, false);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also use the ",(0,n.jsx)(s.code,{children:"external_files"})," structure definition in combination with the method to return the most common file fields required by WS clients."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"public static function execute_returns(): external_multiple_structure {\n    return new external_multiple_structure(\n        new external_single_structure([\n            'id' => new external_value(PARAM_INT, 'Forum id'),\n            // ...\n            'introfiles' => new external_files('Files in the introduction text', VALUE_OPTIONAL),\n            // ...\n        ])\n    );\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/moodledevdocs/docs/4.2/apis/subsystems/external/",children:"Web services developer documentation"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docs.moodle.org/en/Web_services",children:"Web services user documentation"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);