"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[71657],{33596:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(74848),t=s(28453),a=s(78924);const r={title:"AJAX",tags:["Javascript","AJAX"]},o=void 0,d={id:"guides/javascript/ajax/index",title:"AJAX",description:"The preferred way to write new ajax interactions in Moodle is to use the JavaScript module core/ajax which directly calls web service functions built using the Moodle Web Service API.",source:"@site/versioned_docs/version-4.1/guides/javascript/ajax/index.md",sourceDirName:"guides/javascript/ajax",slug:"/guides/javascript/ajax/",permalink:"/moodledevdocs/docs/4.1/guides/javascript/ajax/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.1/guides/javascript/ajax/index.md",tags:[{label:"Javascript",permalink:"/moodledevdocs/docs/4.1/tags/javascript"},{label:"AJAX",permalink:"/moodledevdocs/docs/4.1/tags/ajax"}],version:"4.1",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1670648742e3,frontMatter:{title:"AJAX",tags:["Javascript","AJAX"]},sidebar:"docs",previous:{title:"JavaScript",permalink:"/moodledevdocs/docs/4.1/guides/javascript/"},next:{title:"jQuery",permalink:"/moodledevdocs/docs/4.1/guides/javascript/jquery/"}},c={},l=[{value:"Common design patterns",id:"common-design-patterns",level:3},{value:"Chained calls",id:"chained-calls",level:3},{value:"Key considerations",id:"key-considerations",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{frontMatter:r,metadata:d}),"\n",(0,i.jsxs)(n.p,{children:["The preferred way to write new ajax interactions in Moodle is to use the JavaScript module ",(0,i.jsx)(n.code,{children:"core/ajax"})," which directly calls web service functions built using the Moodle Web Service API."]}),"\n",(0,i.jsx)(n.p,{children:"Some benefits of this system are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"No new ajax scripts need auditing for security vulnerabilities"}),"\n",(0,i.jsx)(n.li,{children:"Multiple requests can be chained in a single http request"}),"\n",(0,i.jsx)(n.li,{children:"Strict type checking for all parameters and return types"}),"\n",(0,i.jsx)(n.li,{children:"New webservice functions benefit Ajax interfaces and web service clients"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The steps required to create an ajax interaction are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Write or find an existing web service function to handle the ajax interaction: See ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/_Web_services_",children:"Web services"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mark the service as available for ajax. To do this, you can define ",(0,i.jsx)(n.code,{children:"'ajax' => true"})," in the function's definition, in ",(0,i.jsx)(n.code,{children:"db/services.php"}),". Only functions that are marked for AJAX using this mechanism will be available to the ajax script."]}),"\n",(0,i.jsx)(n.li,{children:"Call the web service from JavaScript in response to a user action."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"common-design-patterns",children:"Common design patterns"}),"\n",(0,i.jsxs)(n.p,{children:["In modern JavaScript in Moodle, it is common to place all code which uses the ",(0,i.jsx)(n.code,{children:"core/ajax"})," module into a single ",(0,i.jsx)(n.code,{children:"repository.js"})," file, for example the following fictitious example may be placed into a new repository module for the Assignment plugin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="mod/assign/amd/src/repository.js"',children:"import {call as fetchMany} from 'core/ajax';\n\nexport const submitGradingForm = (\n    assignmentid,\n    userid,\n    data,\n) => fetchMany([{\n    methodname: 'mod_assign_submit_grading_form',\n    args: {\n        assignmentid,\n        userid,\n        jsonformdata: JSON.stringify(data),\n    },\n}])[0];\n"})}),"\n",(0,i.jsx)(n.p,{children:"It may then be called in code as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="mod/assign/amd/src/example.js"',children:"import {submitGradingForm} from './repository';\n\nexport const doSomething = async() => {\n    // ...\n    const assignmentId = getAssigmentId();\n    const getUserId = getUserId();\n    const data = getData();\n\n    const response = await submitGradingForm(assignmentId, userId, data);\n    window.console.log(response);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Placing all AJAX interactions into a single module has a number of benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"it becomes easier to refactor code in the future"}),"\n",(0,i.jsx)(n.li,{children:"it is easier to identify which calls may be chained"}),"\n",(0,i.jsx)(n.li,{children:"it is easier to find places which call web services to aid in debugging and development"}),"\n",(0,i.jsx)(n.li,{children:"each individual web service call can has a meaningful response"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"chained-calls",children:"Chained calls"}),"\n",(0,i.jsx)(n.p,{children:"It is also possible to make multiple web service calls from a single transaction, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="mod/assign/amd/src/example.js"',children:"import {call as fetchMany} from 'core/ajax';\n\nconst getGradingFormRequest = (assignmentid, userid, data) => ({\n    methodname: 'mod_assign_submit_grading_form',\n    args: {\n        assignmentid,\n        userid,\n        jsonformdata: JSON.stringify(data),\n    },\n});\n\nconst getNextGraderRequest = (assignmentid, userid) => ({\n    methodname: 'mod_assign_get_grading_form',\n    args: {\n        assignmentid,\n        userid,\n    },\n});\n\nexport const submitGradingFormAndFetchNext = (\n    assignmentId,\n    currentUserId,\n    currentUserData,\n    nextUserId\n) => {\n    const responses = fetchMany([\n        getGradingFormRequest(assignmentId, usecurrentUserIdrId, currentUserData),\n        getNextGraderRequest(assignmentId, nextUserId),\n    ]);\n\n    return {\n        submittedGradingForm: responses[0],\n        nextGradingForm: responses[1],\n    };\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above example may then be called more meaningfully as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="mod/assign/example.js"',children:"import {submitGradingFormAndFetchNext} from './repository';\n\nexport const doSomething = async() => {\n    // ...\n    const assignmentId = getAssigmentId();\n    const getUserId = getUserId();\n    const data = getData();\n\n    const {\n        submittedGradingForm,\n        nextGradingForm,\n    } = submitGradingFormAndFetchNext(assignmentId, userId, data, getNextuserId);\n    window.console.log(await submittedGradingForm);\n    window.console.log(await nextGradingForm);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"key-considerations",children:"Key considerations"}),"\n",(0,i.jsxs)(n.p,{children:["To update parts of the UI in response to Ajax changes, consider using ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/_Templates_",children:"Templates"})]}),"\n",(0,i.jsx)(n.p,{children:"Important considerations when using webservices with ajax calls:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Any call to ",(0,i.jsx)(n.code,{children:"$PAGE->get_renderer()"})," requires the correct theme be set. If this is done in a webservice - it is likely that the theme needs to be a parameter to the webservice."]}),"\n",(0,i.jsxs)(n.li,{children:["Text returned from a webservice must be properly filtered. This means it must go through ",(0,i.jsx)(n.code,{children:"external_format_text"})," or ",(0,i.jsx)(n.code,{children:"external_format_string"})," (since 3.0 - see ",(0,i.jsx)(n.a,{href:"https://tracker.moodle.org/browse/MDL-51213",children:"MDL-51213"}),") with the correct context."]}),"\n",(0,i.jsx)(n.li,{children:"The correct context for 2 is the most specific context relating to the thing being output - for example, for a user's profile description the context is the user context."}),"\n",(0,i.jsxs)(n.li,{children:["After adding any dynamic content to a page, Moodle's filters need to be notified via ",(0,i.jsx)(n.code,{children:"M.core.event.FILTER_CONTENT_UPDATED"})]}),"\n",(0,i.jsxs)(n.li,{children:["After adding or changing any webservice definition in ",(0,i.jsx)(n.code,{children:"db/services.php"})," - you must bump the version number for either the plugin or Moodle and run the upgrade. This will install the webservice in the DB tables so it can be found by ajax."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In some very rare cases - you can mark webservices as safe to call without a session. These should only be used for webservices that return 100% public information and do not consume many resources. A current example is ",(0,i.jsx)(n.code,{children:"core_get_string"}),". To mark a webservice as safe to call without a session you need to do 2 things."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"'loginrequired' => false"})," to the service definition in ",(0,i.jsx)(n.code,{children:"db/services.php"})]}),"\n",(0,i.jsxs)(n.li,{children:["Pass ",(0,i.jsx)(n.code,{children:"false"}),' as the 3rd argument to the ajax "call" method when calling the webservice.\nThe benefit to marking these safe webservice is that (a) they can be called from the login page before we have a session and (b) they will perform faster because they will bypass Moodle\'s session code when responding to the webservice call.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.1/guides/templates/",children:"Templates"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/moodledevdocs/docs/4.1/guides/javascript/modules",children:"JavaScript Modules"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);