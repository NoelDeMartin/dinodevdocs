"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[21206],{22473:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=i(74848),o=i(28453),s=i(78924);const l={title:"Component Communication",description:"The Moodle Coding Style guidelines",tags:["Policies","Coding guidelines"]},a=void 0,c={id:"development/policies/component-communication/index",title:"Component Communication",description:"The Moodle Coding Style guidelines",source:"@site/general/development/policies/component-communication/index.md",sourceDirName:"development/policies/component-communication",slug:"/development/policies/component-communication/",permalink:"/moodledevdocs/general/development/policies/component-communication/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/component-communication/index.md",tags:[{label:"Policies",permalink:"/moodledevdocs/general/tags/policies"},{label:"Coding guidelines",permalink:"/moodledevdocs/general/tags/coding-guidelines"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Component Communication",description:"The Moodle Coding Style guidelines",tags:["Policies","Coding guidelines"]},sidebar:"coding",previous:{title:"Moodle App Coding style",permalink:"/moodledevdocs/general/development/policies/codingstyle-moodleapp"},next:{title:"Deprecation",permalink:"/moodledevdocs/general/development/policies/deprecation/"}},r={},d=[{value:"Components",id:"components",level:2},{value:"Core",id:"core",level:3},{value:"Subsystems",id:"subsystems",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Plugin Types",id:"plugin-types",level:3},{value:"Sub-plugins",id:"sub-plugins",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Communication Channels",id:"communication-channels",level:2},{value:"General rules for inter-component communications",id:"general-rules-for-inter-component-communications",level:2},{value:"Direct php function calls",id:"direct-php-function-calls",level:3},{value:"External functions",id:"external-functions",level:3},{value:"JavaScript Modules (AMD)",id:"javascript-modules-amd",level:3},{value:"get_string",id:"get_string",level:3},{value:"Templates (Mustache)",id:"templates-mustache",level:3},{value:"Event observers",id:"event-observers",level:3},{value:"Callback methods (component_callback, get_plugins_with_function\u2026)",id:"callback-methods-component_callback-get_plugins_with_function",level:3},{value:"FAQ",id:"faq",level:2},{value:"Ideal plugin design",id:"ideal-plugin-design",level:2},{value:"Low Level API",id:"low-level-api",level:3},{value:"Component API",id:"component-api",level:3},{value:"External API",id:"external-api",level:3},{value:"Webservice API",id:"webservice-api",level:3},{value:"Editing images in this doc page",id:"editing-images-in-this-doc-page",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Since:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{frontMatter:l,metadata:c}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Components in Moodle",src:i(96839).A+"",width:"601",height:"410"})}),"\n",(0,t.jsxs)(n.p,{children:["Moodle is code is split into different sections called ",(0,t.jsx)(n.code,{children:"components"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"core",children:"Core"}),"\n",(0,t.jsxs)(n.p,{children:["The core libraries provide the base functionality that all other parts of moodle rely on. The component for core libraries is just referred to as ",(0,t.jsx)(n.code,{children:"core"}),". Core code is not optional and cannot be safely removed without breaking Moodle. This means that it is always available and can be safely called from anywhere. Core code sits directly in the ",(0,t.jsx)(n.code,{children:"/lib/"})," folder, or in the ",(0,t.jsx)(n.code,{children:"/lib/classes/"})," folder for autoloaded core classes."]}),"\n",(0,t.jsx)(n.h3,{id:"subsystems",children:"Subsystems"}),"\n",(0,t.jsx)(n.p,{children:"Subsystems are groups of related functions and classes that are part of core, but are logically grouped together. Often they are tied to a particular feature in Moodle, and sometimes can be disabled/enabled via a single config setting - but the code is never removed. It is safe to call core subsystems from anywhere in Moodle - but the functions may return an error to indicate that a feature has been disabled. Each core subsystem has a defined location where its code is grouped together. As of Moodle 3.1 there are 66 subsystems in core and the comprehensive list can be found here:"}),"\n",(0,t.jsx)(n.p,{children:"core_component::get_core_subsystems()"}),"\n",(0,t.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsxs)(n.p,{children:["Plugins are optional components in Moodle that extend its functionality. M in Moodle stands for ",(0,t.jsx)(n.code,{children:"Modular"})," and most of the code in Moodle belongs to plugins. There are many different types of plugins, and each plugin type supports a different way to extend core functionality. Information on the available plugins types in Moodle can be found here:"]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-types",children:"Plugin Types"}),"\n",(0,t.jsxs)(n.p,{children:["Vanilla Moodle package contains over 370 plugins. Additional plugins can be downloaded from the Plugins directory, or installed manually - and all plugins in Moodle are considered ",(0,t.jsx)(n.code,{children:"optional"}),", even the ones included in vanilla package. This means that you can never assume a particular plugin will always exist on every Moodle site."]}),"\n",(0,t.jsx)(n.h3,{id:"sub-plugins",children:"Sub-plugins"}),"\n",(0,t.jsx)(n.p,{children:"Some plugin types in Moodle support sub-plugins. This means that they can use other plugins to extend their own functionality. The only plugin types in Moodle that allow this are activity modules, editors, administration tools and local plugins. A sub-plugin can assume that its parent plugin is installed and does exist in Moodle - and can call its code directly, but it cannot assume anything about any other plugin or sub-plugin in Moodle."}),"\n",(0,t.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Some plugins in Moodle depend on other plugins. An example of a dependency relationship is a plugin that ",(0,t.jsx)(n.code,{children:"hosts"})," sub-plugins - each of the sub-plugins depends on the parent. Another example is where the dependency is explicitly defined in the version.php of the plugin."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Component dependencies",src:i(7794).A+"",width:"601",height:"410"})}),"\n",(0,t.jsx)(n.h2,{id:"communication-channels",children:"Communication Channels"}),"\n",(0,t.jsx)(n.p,{children:"There are different ways to call code in Moodle. Most of them are listed here and described in detail later on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Direct php function calls"}),"\n",(0,t.jsx)(n.li,{children:"External functions"}),"\n",(0,t.jsx)(n.li,{children:"JavaScript Modules (AMD)"}),"\n",(0,t.jsx)(n.li,{children:"Templates"}),"\n",(0,t.jsx)(n.li,{children:"get_string calls"}),"\n",(0,t.jsx)(n.li,{children:"Event observers"}),"\n",(0,t.jsx)(n.li,{children:"Component callbacks"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general-rules-for-inter-component-communications",children:"General rules for inter-component communications"}),"\n",(0,t.jsx)(n.p,{children:"Because all plugins are optional, we can never rely on a plugin being installed in Moodle, unless there is a dependency relationship between the current component and the plugin. Core components and subsystems are always installed.\nThis means there are some strict rules about which types of communication are allowed in Moodle."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is always allowed to communicate with a ",(0,t.jsx)(n.code,{children:"required"})," component. This includes core and all its subsystems."]}),"\n",(0,t.jsx)(n.li,{children:"Any component is allowed to communicate with itself."}),"\n",(0,t.jsxs)(n.li,{children:["It is allowed to communicate with another component if the calling component ",(0,t.jsx)(n.code,{children:"depends"})," on the other component (see description of dependencies above)."]}),"\n",(0,t.jsx)(n.li,{children:"Not shown in the diagram - but the same rules apply to sub-plugins. They can communicate with their parent and any plugin that they explicitly (version.php) depend on."}),"\n",(0,t.jsx)(n.li,{children:"All other inter-component communications are forbidden."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Allowed communication",src:i(75946).A+"",width:"601",height:"491"})}),"\n",(0,t.jsx)(n.h3,{id:"direct-php-function-calls",children:"Direct php function calls"}),"\n",(0,t.jsx)(n.p,{children:"This is the simplest type of communication - you know the name of a function so you just call it. Sometimes the name of the function is generated from the component name to allow different plugins to implement the same function with a different prefix or namespace."}),"\n",(0,t.jsx)(n.h3,{id:"external-functions",children:"External functions"}),"\n",(0,t.jsx)(n.p,{children:"External functions are functions defined in Moodle using the External API. These are functions suitable to call from webservices, or call directly from other parts of Moodle. Each external function follows a similar pattern:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parse and validate arguments"}),"\n",(0,t.jsx)(n.li,{children:"Perform security checks and setup the theme and language (from the context)"}),"\n",(0,t.jsx)(n.li,{children:"Call an internal API"}),"\n",(0,t.jsx)(n.li,{children:"Return and validate the response"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Calling external functions from another component in Moodle is no different to calling the php functions directly. This is allowed and encouraged."}),"\n",(0,t.jsxs)(n.p,{children:["One thing to think about when calling external functions from php though is that they are designed to be able to be called from a webservice, and so they will re-do all of the security checks and setup of the page theme and language that you have probably already done in your php page. To make sure this doesn't cause side-effects (like changing the theme halfway through a page), always use the wrapper in ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api::call_external_function()"})," instead of calling the external function directly."]}),"\n",(0,t.jsx)(n.p,{children:"Additional rules for calling external functions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Always use the ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api::call_external_function()"})," wrapper when calling from php."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(a,{version:"4.2",issueNumber:"MDL-76583"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"external_api"})," class was renamed in Moodle 4.2 and can now be found under ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api"}),"."]}),(0,t.jsxs)(n.p,{children:["Please note that if you are writing a non-core plugin which is available in older versions of Moodle, then you should continue to use the ",(0,t.jsx)(n.code,{children:"external_api"})," class which will be maintained for backwards compatibility until Moodle 4.6"]})]}),"\n",(0,t.jsx)(n.h3,{id:"javascript-modules-amd",children:"JavaScript Modules (AMD)"}),"\n",(0,t.jsx)(n.p,{children:"It is possible through the JavaScript loader to load an AMD module from any component and call its functions. This is a form of inter-component communication and must obey the strict rules for which components AMD modules can be loaded from."}),"\n",(0,t.jsx)(n.h3,{id:"get_string",children:"get_string"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to fetch strings from any component in Moodle. This is a form of inter-component communication and and must obey the strict rules for which components strings can be fetched from."}),"\n",(0,t.jsx)(n.h3,{id:"templates-mustache",children:"Templates (Mustache)"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to fetch templates from any component in Moodle. This is a form of inter-component communication and and must obey the strict rules for which components templates can be fetched from."}),"\n",(0,t.jsx)(n.h3,{id:"event-observers",children:"Event observers"}),"\n",(0,t.jsxs)(n.p,{children:["Any action in Moodle can trigger one or more ",(0,t.jsx)(n.code,{children:"events"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In Moodle it is possible to register observers for events. An observer is notified when an event happens and receives the data related to that event. An observer can only act on the information in the event. It cannot modify the data for the event or prevent the action from occurring. The component containing the observer is communicating with the component that declared the event class. The normal rules for inter-component communication apply."}),"\n",(0,t.jsx)(n.p,{children:"In addition - event observers are a form of execution at a distance. It would be extremely difficult to read and maintain code heavily relying on event observers (especially if the observers perform actions that trigger more events)."}),"\n",(0,t.jsx)(n.p,{children:"Additional rules for event observers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Events are not allowed to be observed by core or a core subsystem (there are some currently wrong observers in core that should be removed)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"callback-methods-component_callback-get_plugins_with_function",children:"Callback methods (component_callback, get_plugins_with_function\u2026)"}),"\n",(0,t.jsxs)(n.p,{children:["The most common way (but not the only way) to implement a callback is using the ",(0,t.jsx)(n.code,{children:"component_callback()"})," function. This function works by looping over the installed plugins and calling a function from each plugin based on appending the component name to the supplied function name. It then expects the function to be defined either in the plugins lib.php file, or in an autoloaded location (but not in a class!)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.moodle.org/dev/Callbacks",children:"List of callbacks in Moodle"})}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: So how does plugin X call a function from plugin Y if they don't depend on each other?"})}),"\n",(0,t.jsx)(n.p,{children:"A: By communicating through a core API."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: What? Really?"})}),"\n",(0,t.jsxs)(n.p,{children:["A: Anytime one plugin wants to communicate to one other specific plugin - it's better to create a core API and channel all communication through that API. For example ",(0,t.jsx)(n.code,{children:"assignment online text"})," uses the ",(0,t.jsx)(n.code,{children:"Editor API"})," to add a rich text field to the form. It does not directly add an instance of ",(0,t.jsx)(n.code,{children:"Atto"})," to the form. This allows either plugin to be replaced by a different, (hopefully better) plugin without changing the API or the other plugin. Remember, any plugin in Moodle is optional and may be removed in the future."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: How do I know if there is an API I can already use?"})}),"\n",(0,t.jsxs)(n.p,{children:["A: Existing callbacks are listed ",(0,t.jsx)(n.a,{href:"https://docs.moodle.org/dev/Callbacks",children:"here"}),", major core APIs are listed ",(0,t.jsx)(n.a,{href:"/docs/4.4/apis",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can I change the data provided to a component_callback and maintain backwards compatibility."})}),"\n",(0,t.jsx)(n.p,{children:"A: No it is not possible. You must implement a second callback with a new name."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can I control the order in which plugins callbacks are executed?"})}),"\n",(0,t.jsx)(n.p,{children:"A: No it is not possible."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can I find all the plugins implementing a callback?"})}),"\n",(0,t.jsxs)(n.p,{children:["A: You can grep the code or create a test script that executes ",(0,t.jsx)(n.code,{children:"get_plugins_with_function()"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: How can I ensure the name for my new callback is unique?"})}),"\n",(0,t.jsxs)(n.p,{children:["A: Check ",(0,t.jsx)(n.a,{href:"https://docs.moodle.org/dev/Callbacks",children:"list of existing callbacks"}),". Consider prefixing with the component name the callback is defined in - but existing code does not do this much."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Will my callback function be called even if my plugin is disabled?"})}),"\n",(0,t.jsx)(n.p,{children:"A: Yes - you must manually check if your own plugin is disabled before responding to a component callback."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: I looked, there is no existing API I can use. How do I get a new one added to core?"})}),"\n",(0,t.jsx)(n.p,{children:"A: Create a tracker issue, post a patch (with unit tests) and explain your use case."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: When should I create a callback and when should I use event observers?"})}),"\n",(0,t.jsx)(n.p,{children:"A: Event observers should not be added to facilitate plugin communication. They are about notifying the system that a real event occurred. Use an event observer only if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There is a real event occurring at the point you need to execute some additional code."}),"\n",(0,t.jsx)(n.li,{children:"You are not cheating the inter-component communication rules."}),"\n",(0,t.jsx)(n.li,{children:"You do not need to modify any of the data related to the event."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise add a new callback and execute for each plugin implementing it, using ",(0,t.jsx)(n.code,{children:"get_plugins_with_function()"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can I use one of the broadcast functions to provide a callback to some plugin types, but not all of them?"})}),"\n",(0,t.jsx)(n.p,{children:"A: It is better to allow all plugin types. Previously assumptions have been made about which plugins should be able to respond to an API and they have almost always turned out wrong."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can create an API with callbacks that supports multiple stages?"})}),"\n",(0,t.jsx)(n.p,{children:"A: Not easily. You must create a separate callback for each stage and hope that consumers of your API create the correct function for each stage. An alternative is to create a callback that is expected to be returned an instance of an abstract class which defines your API."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Global functions are bad. Can I implement a callback in a class instead?"})}),"\n",(0,t.jsx)(n.p,{children:"A: No. Sorry."}),"\n",(0,t.jsx)(n.h2,{id:"ideal-plugin-design",children:"Ideal plugin design"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ideal plugin design",src:i(7028).A+"",width:"601",height:"479"})}),"\n",(0,t.jsx)(n.p,{children:"When building a new plugin for Moodle - it is good to think about how to best structure the code so that we separate our code into layers of functionality. This way we can provide a secure and comprehensive API that can be called from inside, or outside of our component, or from web-services (like the Mobile App or AJAX)."}),"\n",(0,t.jsx)(n.h3,{id:"low-level-api",children:"Low Level API"}),"\n",(0,t.jsx)(n.p,{children:"In this model, the DB tables are accessed through a low level API that knows about all the types, relationships and validation rules for the data in the tables. No permission checking is done at this level for performance and complexity reasons."}),"\n",(0,t.jsx)(n.h3,{id:"component-api",children:"Component API"}),"\n",(0,t.jsx)(n.p,{children:"The component API defines all the things this plugin can do. Every function in the API should perform permission checks and validation on the parameters and return types and be covered by unit tests. This is the useful API that can be used by pages in your plugin, or called directly by another component in Moodle (only if it depends on this plugin)."}),"\n",(0,t.jsx)(n.h3,{id:"external-api",children:"External API"}),"\n",(0,t.jsxs)(n.p,{children:["The external API is a single class that wraps each function in the Component API. By exposing all the functions in the Component API we allow people to build new interfaces and apps that we have never even thought about without requiring changes to our plugin. Covering each external function with a unit test ensures that all our parameters and return types are correctly specified. Note: External API functions can be called directly from other dependant plugins or sub-plugins in Moodle - but you must use the ",(0,t.jsx)(n.code,{children:"\\core_external\\external_api::call_external_function"})," to do so or you will introduce problems with theme, language and context."]}),"\n",(0,t.jsx)(n.h3,{id:"webservice-api",children:"Webservice API"}),"\n",(0,t.jsx)(n.p,{children:"This is not really an API, it is just a listing of all the functions in the external API in our plugins db/services.php file. This allows all these functions to be called from AJAX or webservices clients like the Mobile App."}),"\n",(0,t.jsx)(n.h2,{id:"editing-images-in-this-doc-page",children:"Editing images in this doc page"}),"\n",(0,t.jsxs)(n.p,{children:["This page was created from a google doc. To edit the images in this page - re-export them from the original document here: ",(0,t.jsx)(n.a,{href:"https://docs.google.com/document/d/1Z-vRWztT05bsb9b5KbBpLRP26oa3KTx3thB52_BW5VY/edit#heading=h.ardt51j6brj1",children:"https://docs.google.com/document/d/1Z-vRWztT05bsb9b5KbBpLRP26oa3KTx3thB52_BW5VY/edit#heading=h.ardt51j6brj1"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},75946:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/allowedcommunication-a18a08cc8737b318a5f1d88374255639.png"},7794:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/componentdependencies-07e6506c3efe608b3b05a31467e4ab22.png"},96839:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/componentsinmoodle-1b1a260c55a95a2636ffa703bfd9f450.png"},7028:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/idealplugindesign-7f188504c3df902b91a2afdb01ae30d4.png"}}]);