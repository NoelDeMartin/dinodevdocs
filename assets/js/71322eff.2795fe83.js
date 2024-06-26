"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[73875],{22957:(e,n,r)=>{r.d(n,{A:()=>d});r(96540);var t=r(44744),i=r(65285),s=r(1489),o=r(8193),l=r(28453),a=r(74848);const c=function(e,n,r){return void 0===r&&(r="info"),(0,a.jsx)(s.Ay,{item:!0,children:(0,a.jsx)(i.A,{title:n,children:(0,a.jsx)(t.A,{label:e,color:r})})},e)};function p(e){const{example:n,open:r=!1}=e;return n?(0,a.jsx)(s.Ay,{item:!0,xs:12,children:(0,a.jsx)(o.A,{summary:(0,a.jsx)("summary",{children:"View example"}),open:r,children:n})}):null}function d(e){const{filepath:n,summary:r}=e,t=function(e){let{required:n=!1,legacy:r=!1,deprecated:t=!1,refreshedDuringUpgrade:i=!1,refreshedDuringPurge:s=!1}=e;const o=[];return i&&o.push(c("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),s&&o.push(c("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),n&&o.push(c("Required","This file must be present","success")),r&&o.push(c("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),t&&o.push(c("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),o}(e),i=e.description?(0,a.jsx)(s.Ay,{item:!0,xs:12,children:e.description}):null;return(0,a.jsx)(l.x,{children:(0,a.jsxs)(s.Ay,{container:!0,spacing:2,children:[(0,a.jsx)(s.Ay,{item:!0,xs:6,children:(0,a.jsx)("h4",{children:r})}),(0,a.jsx)(s.Ay,{item:!0,xs:6,children:(0,a.jsx)(s.Ay,{container:!0,spacing:2,justifyContent:"flex-end",children:t})}),(0,a.jsx)(s.Ay,{item:!0,xs:12,children:(0,a.jsxs)("h5",{children:["File path:"," ",n]})}),i,p(e)]})})}},37019:(e,n,r)=>{r.d(n,{rI:()=>d});r(96540);var t=r(47945);const i=JSON.parse('{"plugintypes":{"antivirus":"lib/antivirus","availability":"availability/condition","qtype":"question/type","mod":"mod","auth":"auth","calendartype":"calendar/type","communication":"communication/provider","customfield":"customfield/field","enrol":"enrol","message":"message/output","block":"blocks","media":"media/player","filter":"filter","editor":"lib/editor","format":"course/format","dataformat":"dataformat","profilefield":"user/profile/field","report":"report","coursereport":"course/report","gradeexport":"grade/export","gradeimport":"grade/import","gradereport":"grade/report","gradingform":"grade/grading/form","mlbackend":"lib/mlbackend","mnetservice":"mnet/service","webservice":"webservice","repository":"repository","portfolio":"portfolio","search":"search/engine","qbank":"question/bank","qbehaviour":"question/behaviour","qformat":"question/format","plagiarism":"plagiarism","tool":"admin/tool","cachestore":"cache/stores","cachelock":"cache/locks","fileconverter":"files/converter","contenttype":"contentbank/contenttype","theme":"theme","local":"local","h5plib":"h5p/h5plib","paygw":"payment/gateway"},"subsystems":{"access":null,"admin":"admin","adminpresets":"admin/presets","analytics":"analytics","antivirus":"lib/antivirus","auth":"auth","availability":"availability","backup":"backup/util/ui","badges":"badges","block":"blocks","blog":"blog","bulkusers":null,"cache":"cache","calendar":"calendar","cohort":"cohort","comment":"comment","communication":"communication","competency":"competency","completion":"completion","contentbank":"contentbank","countries":null,"course":"course","courseformat":"course/format","currencies":null,"customfield":"customfield","dbtransfer":null,"debug":null,"editor":"lib/editor","edufields":null,"enrol":"enrol","error":null,"external":"lib/external","favourites":"favourites","filepicker":null,"fileconverter":"files/converter","files":"files","filters":"filter","form":"lib/form","grades":"grade","grading":"grade/grading","group":"group","help":null,"hub":null,"h5p":"h5p","imscc":null,"install":null,"iso6392":null,"langconfig":null,"license":null,"mathslib":null,"media":"media","message":"message","mimetypes":null,"mnet":"mnet","my":"my","notes":"notes","pagetype":null,"payment":"payment","pix":null,"plagiarism":"plagiarism","plugin":null,"portfolio":"portfolio","privacy":"privacy","question":"question","rating":"rating","reportbuilder":"reportbuilder","repository":"repository","rss":"rss","role":"admin/roles","search":"search","table":"lib/table","tag":"tag","timezones":null,"user":"user","userkey":"lib/userkey","webservice":"webservice","xapi":"lib/xapi"}}');var s=r(74848);const o=e=>n=>{let{plugintype:r="plugintype",pluginname:t="pluginname",filepath:i=null}=n,s=(e=>n=>e.plugintypes[n]?e.plugintypes[n]:`[path/to/${n}]`)(e)(r);return s+=t?`/${t}`:"/[pluginname]",`${s}${i}`},l=o(i),a=(l(i),e=>{if(!e.showFileHeader)return"";switch(e?.filetype){case"xml":return"";case"js":case"javascript":return(e=>{let{plugintype:n="plugintype",pluginname:r="pluginname",examplePurpose:t,modulename:i}=e;if(!t)throw Error("Purpose must be specified");if(!i)throw Error("AMD Module name must be specified");return["/**",` * ${t} for the ${n}_${r} plugin.`," *",` * @module   ${n}_${r}/${i}`," * @copyright Year, You Name <your@email.address>"," * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," */",""].join("\n")})(e);case"yui":return(e=>{let{plugintype:n="plugintype",pluginname:r="pluginname",examplePurpose:t,modulename:i}=e;if(!t)throw Error("Purpose must be specified");if(!i)throw Error("YUI Module name must be specified");return["/*",` * @package   ${n}_${r}`," * @copyright Year, You Name <your@email.address>"," * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," */","","/**",` * @module moodle-${n}_${r}-${i}`," */",""].join("\n")})(e);default:return(e=>{let{plugintype:n="plugintype",pluginname:r="pluginname",examplePurpose:t}=e;if(!t)throw Error("Purpose must be specified");return["/**",` * ${t} for the ${n}_${r} plugin.`," *",` * @package   ${n}_${r}`," * @copyright Year, You Name <your@email.address>"," * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," */",""].join("\n")})(e)}}),c=e=>e.showLicense?(e.filetype,"// This file is part of Moodle - http://moodle.org/\n//\n// Moodle is free software: you can redistribute it and/or modify\n// it under the terms of the GNU General Public License as published by\n// the Free Software Foundation, either version 3 of the License, or\n// (at your option) any later version.\n//\n// Moodle is distributed in the hope that it will be useful,\n// but WITHOUT ANY WARRANTY; without even the implied warranty of\n// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n// GNU General Public License for more details.\n//\n// You should have received a copy of the GNU General Public License\n// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\n"):"",p=e=>{let{filetype:n="php"}=e;switch(n){case"js":case"javascript":return"javascript";case"xml":return"xml";case"php":case null:return"php";default:return n}},d=(u=i,(e,n)=>{const r={plugintype:"plugintype",showLicense:!0,showFileHeader:!0,filepath:e.exampleFilepath??e.filepath,...e},i=o(u),l=function(e,n){void 0===n&&(n=null);const r=[c(e),a(e),e.example?e.example:n||null].filter((e=>e)).map((e=>e.trim())).join("\n\n");return[(e=>{let{filetype:n="php"}=e;switch(n){case"js":case"javascript":case"xml":return null;default:return"<?php"}})(e),r].filter((e=>e)).join("\n")}(r,n);return(0,s.jsx)(t.A,{title:i(r),language:p(r),children:l})});var u},40733:(e,n,r)=>{r.d(n,{ul:()=>c});var t=r(96540),i=r(22957),s=r(28453),o=r(37019),l=r(74848);const a=e=>"boolean"!=typeof e&&e?"string"==typeof e||t.isValidElement(e)?(0,l.jsx)(s.x,{children:e}):(0,l.jsx)(s.x,{children:(0,l.jsx)(e,{})}):null,c=e=>{const n=(e=>({filetype:"php",examplePurpose:e.summary,...e}))({examplePurpose:e?.summary??null,...e});return n.description=((e,n)=>{let{description:r=null,extraDescription:t=null,children:i=null}=e;if(i){const e=a(i);return(0,l.jsx)(s.x,{children:e})}if(r){const e=a(r);return(0,l.jsx)(s.x,{children:e})}const o=a(n),c=a(t);return o?(0,l.jsxs)(s.x,{children:[o,c]}):null})(n,n?.defaultDescription??null),(n?.example||n?.defaultExample)&&(n.example=(0,o.rI)(n,n?.defaultExample??null)),(0,i.A)(n)}},61471:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var t=r(74848),i=r(28453),s=r(78924),o=(r(96540),r(40733));function l(e){const n={code:"code",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"classes/converter.php"})," class must be defined in the correct namespace for your plugin, and must implement the ",(0,t.jsx)(n.code,{children:"\\core_files\\converter_interface"})," interface."]}),"\n",(0,t.jsx)(n.p,{children:"It is responsible for converting files"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const c=e=>(0,t.jsx)(o.ul,{defaultDescription:a,defaultExample:"\nnamespace fileconverter_myexample;\n\nclass converter implements core_filesconverter_interface {\n    // ...\n}\n",examplePurpose:"File conversion implementation",filepath:"/classes/converter.php",summary:"File conversion implementation",...e}),p={title:"File Converters",tags:["File","core_file","file_converter","API","PDF","Conversion","Document"]},d=void 0,u={id:"apis/plugintypes/fileconverter/index",title:"File Converters",description:"File converters are an important tool to support other plugins with file conversion supported between a wide range of file formats. File converters are accessed using the File conversion API and are typically consumed by other plugins rather than by the user directly.",source:"@site/versioned_docs/version-4.3/apis/plugintypes/fileconverter/index.md",sourceDirName:"apis/plugintypes/fileconverter",slug:"/apis/plugintypes/fileconverter/",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/fileconverter/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/plugintypes/fileconverter/index.md",tags:[{label:"File",permalink:"/moodledevdocs/docs/4.3/tags/file"},{label:"core_file",permalink:"/moodledevdocs/docs/4.3/tags/core-file"},{label:"file_converter",permalink:"/moodledevdocs/docs/4.3/tags/file-converter"},{label:"API",permalink:"/moodledevdocs/docs/4.3/tags/api"},{label:"PDF",permalink:"/moodledevdocs/docs/4.3/tags/pdf"},{label:"Conversion",permalink:"/moodledevdocs/docs/4.3/tags/conversion"},{label:"Document",permalink:"/moodledevdocs/docs/4.3/tags/document"}],version:"4.3",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1697795601e3,frontMatter:{title:"File Converters",tags:["File","core_file","file_converter","API","PDF","Conversion","Document"]},sidebar:"docs",previous:{title:"Enrolment plugins",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/enrol/"},next:{title:"Filter plugins",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/filter/"}},h={},m=[{value:"File structure",id:"file-structure",level:2},{value:"Converter class",id:"converter-class",level:3},{value:"are_requirements_met()",id:"are_requirements_met",level:4},{value:"start_document_conversion() and poll_conversion_status()",id:"start_document_conversion-and-poll_conversion_status",level:4},{value:"supports()",id:"supports",level:4},{value:"get_supported_conversion()",id:"get_supported_conversion",level:4},{value:"See also",id:"see-also",level:2}];function f(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{frontMatter:p,metadata:u}),"\n",(0,t.jsxs)(n.p,{children:["File converters are an important tool to support other plugins with file conversion supported between a wide range of file formats. File converters are accessed using the ",(0,t.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/files/converter",children:"File conversion API"})," and are typically consumed by other plugins rather than by the user directly."]}),"\n",(0,t.jsx)(n.h2,{id:"file-structure",children:"File structure"}),"\n",(0,t.jsxs)(n.p,{children:["File converter plugins are located in the ",(0,t.jsx)(n.code,{children:"/file/converter"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["Each plugin is in a separate subdirectory and consists of a number of ",(0,t.jsx)(n.em,{children:"mandatory files"})," and any other files the developer is going to use."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:["View an example directory layout for the ",(0,t.jsx)(n.code,{children:"fileconverter_unoconv"})," plugin."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"files/converter/unoconv\n\u251c\u2500\u2500 classes\n\u2502\xa0\xa0 \u251c\u2500\u2500 converter.php\n\u2502\xa0\xa0 \u2514\u2500\u2500 privacy\n\u2502\xa0\xa0     \u2514\u2500\u2500 provider.php\n\u251c\u2500\u2500 lang\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500 fileconverter_unoconv.php\n\u251c\u2500\u2500 settings.php\n\u2514\u2500\u2500 version.php\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Some of the important files for the fileconverter plugintype are described below. See the ",(0,t.jsx)(n.a,{href:"../commonfiles",children:"common plugin files"})," documentation for details of other files which may be useful in your plugin."]}),"\n",(0,t.jsx)(n.h3,{id:"converter-class",children:"Converter class"}),"\n","\n",(0,t.jsx)(c,{pluginname:"example",required:!0}),"\n",(0,t.jsx)(n.h4,{id:"are_requirements_met",children:"are_requirements_met()"}),"\n",(0,t.jsx)(n.p,{children:"This function informs the File Converter API whether the system requirements of the plugin are met. That is whether appropriate API keys are present, and the API might be available."}),"\n",(0,t.jsx)(n.p,{children:"It should be lightweight to call and cache where required."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Example implementation"',children:"public static function are_requirements_met() {\n    return extension_loaded('my_php_extension');\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"start_document_conversion-and-poll_conversion_status",children:"start_document_conversion() and poll_conversion_status()"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"start_document_conversion()"})," function starts a conversion, whilst ",(0,t.jsx)(n.code,{children:"poll_conversion_status"})," should poll for any status update. The following apply:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If any failures occur, it should set the conversion status to ",(0,t.jsx)(n.code,{children:"\\core_files\\conversion::STATUS_FAILED"})," and immediately return.  There is no need to update the ",(0,t.jsx)(n.code,{children:"$conversion"})," record in this situation."]}),"\n",(0,t.jsxs)(n.li,{children:["When the conversion process starts, the status should be set to ",(0,t.jsx)(n.code,{children:"\\core_files\\conversion::STATUS_IN_PROGRESS"})," and the record ",(0,t.jsx)(n.strong,{children:"must"})," be updated. This ensures that, should the process take a long time, the current status is accurately reflected."]}),"\n",(0,t.jsxs)(n.li,{children:["Upon successful completion, the status should be updated to ",(0,t.jsx)(n.code,{children:"\\core_files\\conversion::STATUS_COMPLETE"})," and the newly created ",(0,t.jsx)(n.code,{children:"\\stored_file"})," should be stored against the conversion using either the ",(0,t.jsx)(n.code,{children:"store_destfile_from_string"})," or ",(0,t.jsx)(n.code,{children:"store_destfile_from_path"})," function as appropriate."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"supports",children:"supports()"}),"\n",(0,t.jsx)(n.p,{children:"This function allows the plugin to answer whether it supports conversion between two formats. It is typically only used internally by the File Conversion subsystem."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Example implementation"',children:"class converter implements \\core_files\\converter_interface {\n    // ...\n    public static function supports($from, $to) {\n        // This plugin supports conversion from doc and docx to pdf only.\n        if ($from !== 'doc' && $from !== 'docx') {\n            return false;\n        }\n\n        return $to === 'pdf';\n    }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="Example usage"',children:"if (\\fileconverter_example::supports('jpg', 'pdf')) {\n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"get_supported_conversion",children:"get_supported_conversion()"}),"\n",(0,t.jsx)(n.p,{children:"This function is used purely for information purposes to display possible conversions to an administrator."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using the ",(0,t.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/files/converter",children:"File Converter API"})]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}}}]);