"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[25912],{31347:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var o=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},3384:(e,n,t)=>{t.d(n,{A:()=>k});var s=t(96540),i=t(18215),o=t(55236),r=t(56347),a=t(88385),l=t(5793),c=t(47422),d=t(81038);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),v=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=t(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==s&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function k(e){const n=(0,g.A)();return(0,b.jsx)(j,{...e,children:u(e.children)},String(n))}},87125:(e,n,t)=>{t.d(n,{jp:()=>d,NG:()=>D.A,xd:()=>b,Gv:()=>j,QS:()=>g,WV:()=>w,Io:()=>T,z9:()=>f,Vh:()=>E.A,tU:()=>S.A,ZQ:()=>k});var s=t(96540),i=t(47184),o=t(81090),r=t(24269);const a=JSON.parse('{"vf":"https://moodle.academy/","DH":{"setup":{"id":29,"name":"Set up your Moodle Development Environment","summary":"Learn about the Moodle developer community and setting up a development environment","description":"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.","tags":["development","basics","setup"],"archived":false,"series":[]},"securityEssentials":{"id":53,"name":"Moodle Access and Security Essentials","summary":"A short course looking at access control and security aspects of plugins.","description":"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle\'s Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\\n\\nThis is the fourth course in the Moodle Developer Basics program.","tags":["development","basic","essentials","security","api"],"archived":false,"series":["basics"]},"outputEssentials":{"id":49,"name":"Web Output Essentials","summary":"Learn how to use Moodle\'s Page and Output APIs to display content in a local plugin.","description":"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle\'s Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.","tags":["development","basics","essentials","output","api"],"archived":false,"series":["basics"]},"architecture":{"id":51,"name":"Moodle\'s Modular Architecture and APIs","summary":"Take a deeper look at Moodle\'s architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.","description":"In this course we take a deeper look at Moodle\'s modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\\n\\nThis is the third course in the Moodle Developer Basics program.","tags":["development","api","architecture"],"archived":false,"series":["basics"]},"pluginBasics":{"id":10,"name":"Moodle Plugin Development Basics","summary":"Learn about the essential concepts in Moodle\'s module architecture.","description":"This course teaches you essential concepts related to Moodle\'s modular architecture, enabling you to develop a simple demo plugin.\\n\\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called \'Moodle Developer Basics\'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.","tags":["development","basics","essentials","api","plugins","architecture"],"archived":false,"series":["basics"]},"updatePlugin400":{"id":66,"name":"Update Plugins for Moodle 4.0","summary":"Learn about how to update your plugins to make them compatible with Moodle 4.0","description":"This course will provide an overview of the new user experience introduced in Moodle 4.0. It will cover the relevant API changes that developers need to be aware of. Learners will get hands-on practice in updating some Moodle 3.x plugins to make them compatible with Moodle 4.0.","tags":["development","plugins","updates"],"archived":false,"series":["intermediate"]}}}');var l=t(65285),c=t(74848);function d(e){const{courseName:n}=e;if(!a.DH[n])throw Error(`Unknown course ${n}`);const t=a.DH[n];return(0,c.jsxs)(i.A,{type:"info",icon:(0,c.jsx)(r.A,{fontSize:"inherit"}),title:"Learn more on Moodle Academy",children:["You can learn more about"," ",(0,c.jsx)("strong",{children:e.subject})," ","from the"," ",(0,c.jsx)(l.A,{title:t.summary,children:(0,c.jsx)(o.A,{to:`${a.vf}course/view.php?id=${t.id}`,children:t.name})})," ","course on Moodle Academy."]})}var u=t(44744),h=t(90815);function p(e){if("since"===e)return"Since";if("deprecated"===e)return"Deprecated";throw new Error(`Unknown <Since> type: '${e}'`)}function m(e,n,t){const s=function(e){return"number"==typeof e&&Number.isInteger(e)?e.toFixed(1):e}(n),i=(0,c.jsxs)("span",{children:[p(e)," ",s]}),r="since"===e?"success":"warning",a=(0,c.jsx)(u.A,{label:i,color:r,clickable:!!t},`chip-${e}${s}`);return t?(0,c.jsx)(o.A,{to:`https://tracker.moodle.org/browse/${t}`,children:a},`link-${e}${s}`):a}function f(e){const n=function(e){let{issueNumber:n=null,type:t="since",versions:s=[],version:i=null}=e;return i?m(t,i,n):s.map((e=>m(t,e,n)))}(e);return(0,c.jsx)(h.A,{direction:"row",justifyContent:"flex-end",spacing:2,children:n})}function g(e){return f({type:"deprecated",...e})}const v={"code-diff":"code-diff_EWMZ",vertical:"vertical_f6PR"};function b(e){const n=(0,s.useMemo)((()=>e.titles?.split(", ").map((e=>e.trim()))),[e.titles]),t=e.vertical??!1;return(0,c.jsxs)("div",{className:`${v["code-diff"]} ${t&&v.vertical}`,children:[(0,c.jsx)(w,{title:n?.[0]??null,children:e.children[0]}),(0,c.jsx)(k,{title:n?.[1]??null,children:e.children[1]})]})}var x=t(20053);const y={"code-example":"code-example_hC7r"};function j(e){return(0,c.jsxs)("div",{className:(0,x.A)(` alert alert--${e.type} margin-bottom--lg ${y["code-example"]} `),children:[(0,c.jsx)("span",{className:(0,x.A)(` badge badge--${e.type} margin-bottom--sm `),children:e.title}),e.children]})}function k(e){return(0,c.jsx)(j,{type:"success",title:e.title??"An example of correct behaviour",children:e.children})}function w(e){return(0,c.jsx)(j,{type:"danger",title:e.title??"An example of incorrect behaviour",children:e.children})}t(22957);var A=t(1489);function M(e){return e.map((e=>(0,c.jsx)(l.A,{title:`This property should be a ${e}`,children:(0,c.jsx)(u.A,{label:e,color:"success",variant:"outlined"})},e)))}function I(e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),e?(0,c.jsx)(l.A,{title:"This property must be specified",children:(0,c.jsx)(u.A,{label:"Required",color:"error"})}):n?(0,c.jsx)(l.A,{title:"This property is optional, but is recommended",children:(0,c.jsx)(u.A,{label:"Recommended",color:"warning"})}):(0,c.jsx)(l.A,{title:"This property is optional",children:(0,c.jsx)(u.A,{label:"Optional",color:"success",variant:"outlined"})})}function T(e){let{types:n,required:t=!1,recommended:s=!1}=e;return(0,c.jsx)(h.A,{direction:"row",justifyContent:"flex-end",spacing:2,children:(0,c.jsxs)(A.Ay,{item:!0,children:[M(n),I(t,s)]})})}var D=t(47945),E=t(31347),S=t(3384)},22957:(e,n,t)=>{t.d(n,{A:()=>u});t(96540);var s=t(44744),i=t(65285),o=t(1489),r=t(8193),a=t(28453),l=t(74848);const c=function(e,n,t){return void 0===t&&(t="info"),(0,l.jsx)(o.Ay,{item:!0,children:(0,l.jsx)(i.A,{title:n,children:(0,l.jsx)(s.A,{label:e,color:t})})},e)};function d(e){const{example:n,open:t=!1}=e;return n?(0,l.jsx)(o.Ay,{item:!0,xs:12,children:(0,l.jsx)(r.A,{summary:(0,l.jsx)("summary",{children:"View example"}),open:t,children:n})}):null}function u(e){const{filepath:n,summary:t}=e,s=function(e){let{required:n=!1,legacy:t=!1,deprecated:s=!1,refreshedDuringUpgrade:i=!1,refreshedDuringPurge:o=!1}=e;const r=[];return i&&r.push(c("Upgradable","Changes to this file or directory will be re-applied during a Moodle upgrade. If you make any changes to it, you can simply increment the version number and perform a Moodle upgrade.","info")),o&&r.push(c("Refreshed on cache purge","The contents of this file or directory are cached. To see your changes you can simply purge Moodle's caches and refresh the page.","info")),n&&r.push(c("Required","This file must be present","success")),t&&r.push(c("Legacy","Use of this file is being phased out. It is still supported for older installations but will be removed..","warning")),s&&r.push(c("Deprecated","Use of this file is deprecated and not recommended.It may still be provided for older versions of Moodle but is no longer used.","error")),r}(e),i=e.description?(0,l.jsx)(o.Ay,{item:!0,xs:12,children:e.description}):null;return(0,l.jsx)(a.x,{children:(0,l.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,l.jsx)(o.Ay,{item:!0,xs:6,children:(0,l.jsx)("h4",{children:t})}),(0,l.jsx)(o.Ay,{item:!0,xs:6,children:(0,l.jsx)(o.Ay,{container:!0,spacing:2,justifyContent:"flex-end",children:s})}),(0,l.jsx)(o.Ay,{item:!0,xs:12,children:(0,l.jsxs)("h5",{children:["File path:"," ",n]})}),i,d(e)]})})}},37005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=t(74848),i=t(28453),o=t(78924),r=t(87125);const a={title:"db/tasks.php",tags:["Plugins","Common files","Scheduled tasks"],description:"A description of the plugin scheduled task configuration file"},l=void 0,c={id:"apis/commonfiles/db-tasks.php/index",title:"db/tasks.php",description:"A description of the plugin scheduled task configuration file",source:"@site/docs/apis/commonfiles/db-tasks.php/index.md",sourceDirName:"apis/commonfiles/db-tasks.php",slug:"/apis/commonfiles/db-tasks.php/",permalink:"/moodledevdocs/docs/4.4/apis/commonfiles/db-tasks.php/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/commonfiles/db-tasks.php/index.md",tags:[{label:"Plugins",permalink:"/moodledevdocs/docs/4.4/tags/plugins"},{label:"Common files",permalink:"/moodledevdocs/docs/4.4/tags/common-files"},{label:"Scheduled tasks",permalink:"/moodledevdocs/docs/4.4/tags/scheduled-tasks"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"db/tasks.php",tags:["Plugins","Common files","Scheduled tasks"],description:"A description of the plugin scheduled task configuration file"},sidebar:"docs",previous:{title:"Common files",permalink:"/moodledevdocs/docs/4.4/apis/commonfiles/"},next:{title:"tag.php",permalink:"/moodledevdocs/docs/4.4/apis/commonfiles/tag.php/"}},d={},u=[{value:"Task configuration entries",id:"task-configuration-entries",level:2},{value:"Classname",id:"classname",level:3},{value:"Blocking",id:"blocking",level:3},{value:"Date and time fields",id:"date-and-time-fields",level:3},{value:"Examples",id:"examples",level:4},{value:"Disabled tasks",id:"disabled-tasks",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{frontMatter:a,metadata:c}),"\n","\n",(0,s.jsx)(n.p,{children:"If a plugin wants to configure scheduled task, two items are required:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a class extending the ",(0,s.jsx)(n.code,{children:"\\core\\task\\scheduled_task"})," class; and"]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.code,{children:"db/tasks.php"})," file containing its initial configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The general format of the file is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$tasks = [\n    // First task configuration.\n    [ ... ],\n\n    // Second task configuration.\n    [ ... ],\n];\n"})}),"\n",(0,s.jsx)(n.p,{children:"Each task configuration entry has a number of possible properties, described below."}),"\n",(0,s.jsx)(n.h2,{id:"task-configuration-entries",children:"Task configuration entries"}),"\n",(0,s.jsx)(n.h3,{id:"classname",children:"Classname"}),"\n",(0,s.jsx)(r.Io,{required:!0,types:["string"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"classname"})," contains the fully-qualified class name where the scheduled task is located."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$tasks = [\n    [\n        'classname' => 'mod_example\\task\\do_something',\n        // ...\n    ]\n]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"blocking",children:"Blocking"}),"\n",(0,s.jsx)(r.Io,{types:["integer"]}),"\n",(0,s.jsxs)(n.p,{children:["Tasks can be configured to block the execution of all other tasks by setting the ",(0,s.jsx)(n.code,{children:"blocking"})," property to a truthy value."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Whilst this feature is available its use is ",(0,s.jsx)(n.em,{children:"strongly"})," discouraged and ",(0,s.jsx)(n.em,{children:"will not"})," be accepted in Moodle core."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$tasks = [\n    [\n        'classname' => 'mod_example\\task\\do_something',\n        'blocking' => 1,\n        // ...\n    ],\n];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"date-and-time-fields",children:"Date and time fields"}),"\n",(0,s.jsx)(r.Io,{types:["string"]}),"\n",(0,s.jsx)(n.p,{children:"The following date and time fields are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"month"}),"\n",(0,s.jsx)(n.li,{children:"day"}),"\n",(0,s.jsx)(n.li,{children:"dayofweek"}),"\n",(0,s.jsx)(n.li,{children:"hour"}),"\n",(0,s.jsx)(n.li,{children:"month"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each of these fields accepts one, or more values, and the format for each field is described as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<fieldlist> := <range>(/<step>)(,<fieldlist>)\n<step>      := int\n<range>     := <any>|<int>|<min-max>|<random>\n<any>       := *\n<min-max>   := int-int\n<random>    := R\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Random values",type:"info",children:(0,s.jsxs)(n.p,{children:["A fixed random value can be selected by using a value of ",(0,s.jsx)(n.code,{children:"R"}),". By specifying this option, a random day or time is chosen when the task is installed or updated. The same value will be used each time the task is scheduled."]})}),"\n",(0,s.jsx)(n.p,{children:"If no value is specified then the following defaults are used:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Month: ",(0,s.jsx)(n.code,{children:"*"})," (Every month)"]}),"\n",(0,s.jsxs)(n.li,{children:["Day: ",(0,s.jsx)(n.code,{children:"*"})," (Every day)"]}),"\n",(0,s.jsxs)(n.li,{children:["Day of the week: ",(0,s.jsx)(n.code,{children:"*"})," (Every day of the week)"]}),"\n",(0,s.jsxs)(n.li,{children:["Hour: ",(0,s.jsx)(n.code,{children:"*"})," (Every hour)"]}),"\n",(0,s.jsxs)(n.li,{children:["Minute: ",(0,s.jsx)(n.code,{children:"*"})," (Every minute)"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Day and Day of the week",type:"info",children:(0,s.jsxs)(n.p,{children:["If either field is set to ",(0,s.jsx)(n.code,{children:"*"})," then use the other field, otherwise the soonest value is used."]})}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="Run at a fixed time each day, randomised during installation of the task"',children:"$tasks = [\n    [\n        'classname' => 'mod_example\\task\\do_something',\n\n        // Every month.\n        'month' => '*',\n        // Every day.\n        'day' => '*',\n\n        // A fixed random hour and minute.\n        'hour' => 'R',\n        'month' => 'R',\n    ],\n];\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="Specifying multiple times in an hour"',children:"$tasks = [\n    [\n        'classname' => 'mod_example\\task\\do_something',\n\n        // At two intervals in the hour.\n        'minute' => '5, 35',\n    ],\n];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"disabled-tasks",children:"Disabled tasks"}),"\n",(0,s.jsxs)(n.p,{children:["You can create a task that defaults to disabled by setting the field ",(0,s.jsx)(n.strong,{children:"disabled"})," to 1. Unless the administrator manually enables your task, it will not run."]}),"\n",(0,s.jsx)(n.p,{children:"This is useful if a task is only required in certain situations and shouldn't run on every server that has your plugin installed."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},24269:(e,n,t)=>{var s=t(93230);n.A=void 0;var i=s(t(42032)),o=t(74848),r=(0,i.default)((0,o.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");n.A=r},90815:(e,n,t)=>{t.d(n,{A:()=>g});var s=t(21367),i=t(9668),o=t(96540),r=t(89452),a=t(3675),l=t(39599),c=t(73272),d=t(16375),u=t(74220),h=t(74848);const p=["component","direction","spacing","divider","children"];function m(e,n){const t=o.Children.toArray(e).filter(Boolean);return t.reduce(((e,s,i)=>(e.push(s),i<t.length-1&&e.push(o.cloneElement(n,{key:`separator-${i}`})),e)),[])}const f=(0,d.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,i.A)({display:"flex",flexDirection:"column"},(0,r.NI)({theme:n},(0,r.kW)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const s=(0,a.LX)(n),i=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),o=(0,r.kW)({values:e.direction,base:i}),l=(0,r.kW)({values:e.spacing,base:i});"object"==typeof o&&Object.keys(o).forEach(((e,n,t)=>{if(!o[e]){const s=n>0?o[t[n-1]]:"column";o[e]=s}}));const d=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=t?o[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,a._W)(s,n)}};var i};t=(0,c.A)(t,(0,r.NI)({theme:n},l,d))}return t=(0,r.iZ)(n.breakpoints,t),t})),g=o.forwardRef((function(e,n){const t=(0,u.A)({props:e,name:"MuiStack"}),o=(0,l.A)(t),{component:r="div",direction:a="column",spacing:c=0,divider:d,children:g}=o,v=(0,s.A)(o,p),b={direction:a,spacing:c};return(0,h.jsx)(f,(0,i.A)({as:r,ownerState:b,ref:n},v,{children:d?m(g,d):g}))}))}}]);