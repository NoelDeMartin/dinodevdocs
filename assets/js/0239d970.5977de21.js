"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[17557],{20466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=n(74848),s=n(28453),i=n(78924);const a={title:"Combobox searching",tags:["Javascript","AJAX","Searching","Navigation","UI","UX","Frontend"]},r=void 0,l={id:"guides/javascript/comboboxsearch/index",title:"Combobox searching",description:"A combobox search component has been added to the core Moodle system. This component provides an additional layer of search functionality, allowing users to easily navigate and filter search results. The combobox search component is designed to be reusable and can be integrated into various areas of the Moodle platform.",source:"@site/docs/guides/javascript/comboboxsearch/index.md",sourceDirName:"guides/javascript/comboboxsearch",slug:"/guides/javascript/comboboxsearch/",permalink:"/moodledevdocs/docs/4.4/guides/javascript/comboboxsearch/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/javascript/comboboxsearch/index.md",tags:[{label:"Javascript",permalink:"/moodledevdocs/docs/4.4/tags/javascript"},{label:"AJAX",permalink:"/moodledevdocs/docs/4.4/tags/ajax"},{label:"Searching",permalink:"/moodledevdocs/docs/4.4/tags/searching"},{label:"Navigation",permalink:"/moodledevdocs/docs/4.4/tags/navigation"},{label:"UI",permalink:"/moodledevdocs/docs/4.4/tags/ui"},{label:"UX",permalink:"/moodledevdocs/docs/4.4/tags/ux"},{label:"Frontend",permalink:"/moodledevdocs/docs/4.4/tags/frontend"}],version:"current",lastUpdatedBy:"Mathew May",lastUpdatedAt:1713356299e3,frontMatter:{title:"Combobox searching",tags:["Javascript","AJAX","Searching","Navigation","UI","UX","Frontend"]},sidebar:"docs",previous:{title:"AJAX",permalink:"/moodledevdocs/docs/4.4/guides/javascript/ajax/"},next:{title:"Example usages",permalink:"/moodledevdocs/docs/4.4/guides/javascript/comboboxsearch/examples"}},d={},h=[{value:"Benefits",id:"benefits",level:2},{value:"Structure of the component",id:"structure-of-the-component",level:2},{value:"Extending the search_combobox",id:"extending-the-search_combobox",level:3},{value:"Instantiate a Component",id:"instantiate-a-component",level:3},{value:"Initialize a component from a mustache template",id:"initialize-a-component-from-a-mustache-template",level:3},{value:"search_combobox helpers",id:"search_combobox-helpers",level:3},{value:"getDataset()",id:"getdataset",level:4},{value:"getDatasetSize()",id:"getdatasetsize",level:4},{value:"getMatchedResults()",id:"getmatchedresults",level:4},{value:"setMatchedResults()",id:"setmatchedresults",level:4},{value:"getSearchTerm()",id:"getsearchterm",level:4},{value:"getPreppedSearchTerm()",id:"getpreppedsearchterm",level:4},{value:"setSearchTerms()",id:"setsearchterms",level:4},{value:"getHTMLElements()",id:"gethtmlelements",level:4},{value:"closeSearch()",id:"closesearch",level:4},{value:"searchResultsVisible()",id:"searchresultsvisible",level:4},{value:"toggleDropdown()",id:"toggledropdown",level:4},{value:"updateNodes()",id:"updatenodes",level:4},{value:"registerClickHandlers()",id:"registerclickhandlers",level:4},{value:"registerKeyHandlers()",id:"registerkeyhandlers",level:4},{value:"registerInputHandlers()",id:"registerinputhandlers",level:4},{value:"filterrenderpipe()",id:"filterrenderpipe",level:4},{value:"renderAndShow()",id:"renderandshow",level:4},{value:"keyUpDown()",id:"keyupdown",level:4},{value:"clickHandler()",id:"clickhandler",level:4},{value:"keyHandler()",id:"keyhandler",level:4},{value:"selectNode()",id:"selectnode",level:4},{value:"moveToFirstNode()",id:"movetofirstnode",level:4},{value:"moveToLastNode()",id:"movetolastnode",level:4},{value:"moveToNode()",id:"movetonode",level:4},{value:"Required functions to implement",id:"required-functions-to-implement",level:3},{value:"fetchDataset()",id:"fetchdataset",level:4},{value:"filterDataset(dataset)",id:"filterdatasetdataset",level:4},{value:"filterMatchDataset()",id:"filtermatchdataset",level:4},{value:"renderDropdown()",id:"renderdropdown",level:4},{value:"componentSelector()",id:"componentselector",level:4},{value:"dropdownSelector()",id:"dropdownselector",level:4},{value:"triggerSelector()",id:"triggerselector",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:n,Since:r,TabItem:d,Tabs:h}=t;return n||p("Details",!0),r||p("Since",!0),d||p("TabItem",!0),h||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{frontMatter:a,metadata:l}),"\n",(0,o.jsx)(r,{versions:["4.3"],issueNumber:"MDL-77991"}),"\n",(0,o.jsx)(t.p,{children:"A combobox search component has been added to the core Moodle system. This component provides an additional layer of search functionality, allowing users to easily navigate and filter search results. The combobox search component is designed to be reusable and can be integrated into various areas of the Moodle platform."}),"\n",(0,o.jsx)(t.p,{children:"To implement the combobox search component, follow these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Add the necessary HTML structure for the dropdown in your template file"}),"\n",(0,o.jsx)(t.li,{children:"Initialize the component via PHP"}),"\n",(0,o.jsx)(t.li,{children:"Initialize the component using JavaScript"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"benefits",children:"Benefits"}),"\n",(0,o.jsx)(t.p,{children:"By moving the tertiary search dropdown component to the core, the Moodle development team aimed to achieve the following benefits:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Improved consistency: Using a single, core component for the search dropdown ensures that the look and feel of this UI element remains consistent across different parts of Moodle."}),"\n",(0,o.jsx)(t.li,{children:"Improved code maintainability: Having the component in the core makes it easier for the development team to manage the codebase and ensure that any updates to the component are applied consistently across the entire application."}),"\n",(0,o.jsx)(t.li,{children:"Reduced code duplication: By making the component available to all Moodle modules, there is no need to duplicate the code in different parts of the application."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"structure-of-the-component",children:"Structure of the component"}),"\n",(0,o.jsx)(t.h3,{id:"extending-the-search_combobox",children:"Extending the search_combobox"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to get started quickly, you can extend the ",(0,o.jsx)(t.code,{children:"search_combobox"})," class. This class provides a lot of the boilerplate code that you would otherwise need to write yourself. You'll also need to implement the functions that throw errors if undefined however as we need some information from you about what and how you are searching."]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"View example"}),(0,o.jsx)("div",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="path/to/plugin/amd/src/yourcomponent.js"',children:"import search_combobox from 'core/comboboxsearch/search_combobox';\n\nexport default class extends search_combobox {\n    (...)\n}\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"instantiate-a-component",children:"Instantiate a Component"}),"\n",(0,o.jsx)(t.p,{children:"If you'll be using JS for other functionality, you can do the following:"}),"\n",(0,o.jsxs)(h,{children:[(0,o.jsx)(d,{value:"init-js-module",label:"AMD module",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="path/to/plugin/amd/src/main.js"',children:"import YourComponent from 'YOUR_PLUGIN/yourcomponent;\n\n(...)\n\nexport const init = () => {\n    return new YourComponent({});\n};\n\n"})})}),(0,o.jsx)(d,{value:"init-php-module",label:"PHP code",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="path/to/plugin/index.php"',children:"$PAGE->requires->js_call_amd('YOUR_PLUGIN/main', 'init');\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"initialize-a-component-from-a-mustache-template",children:"Initialize a component from a mustache template"}),"\n",(0,o.jsxs)(t.p,{children:['Components are easy to embed in mustache files. To do so your class must have a static "init" method that could be called inside the ',(0,o.jsx)(t.code,{children:"{{#js}}"}),"."]}),"\n",(0,o.jsxs)(h,{children:[(0,o.jsx)(d,{value:"component-view",label:"Component class",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="path/to/plugin/amd/src/childcomponent.js"',children:"import YourComponent from 'YOUR_PLUGIN/yourcomponent;\n\nexport default class extends YourComponent {\n\n    constructor() {\n        super();\n    }\n\n    static init() {\n        return new this();\n    }\n}\n\n"})})}),(0,o.jsxs)(d,{value:"mustache-view",label:"Mustache file",children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-handlebars",metastring:'title="path/to/plugin/templates/yourthing/childcomponent.mustache"',children:"{{#js}}\n    require(['YOUR_PLUGIN/local/yourthing/childcomponent'], function(component) {\n        component.init();\n    });\n{{/js}}\n"})}),(0,o.jsxs)(t.admonition,{title:"Generating unique id attributes",type:"tip",children:[(0,o.jsxs)(t.p,{children:["You can use the ",(0,o.jsx)(t.code,{children:"{{uniqid}}"})," Mustache helper within your code to help you generate a unique id for your HTML attributes and target them in your React component."]}),(0,o.jsxs)(t.p,{children:["Please note that the ",(0,o.jsx)(t.code,{children:"{{uniqid}}"})," helper generates a single value each time it is rendered, and you will need to combine it with other data to create a truly unique value. In this example the name of the plugin, and a static element ",(0,o.jsx)(t.code,{children:"id"})," is used to generate a unique value."]})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"search_combobox-helpers",children:"search_combobox helpers"}),"\n",(0,o.jsx)(t.p,{children:"The search_combobox class offers some helpers to standardize the components' code and make them more maintainable."}),"\n",(0,o.jsx)(t.h4,{id:"getdataset",children:"getDataset()"}),"\n",(0,o.jsxs)(t.p,{children:["Calls the implemented ",(0,o.jsx)(t.code,{children:"fetchDataset"})," method and returns the dataset."]}),"\n",(0,o.jsx)(t.h4,{id:"getdatasetsize",children:"getDatasetSize()"}),"\n",(0,o.jsxs)(t.p,{children:["Returns the size of the dataset without having to call ",(0,o.jsx)(t.code,{children:"getDataset"})," first."]}),"\n",(0,o.jsx)(t.h4,{id:"getmatchedresults",children:"getMatchedResults()"}),"\n",(0,o.jsx)(t.p,{children:"Once a result set has been filtered, this method returns the matched results based on the users search input."}),"\n",(0,o.jsx)(t.h4,{id:"setmatchedresults",children:"setMatchedResults()"}),"\n",(0,o.jsx)(t.p,{children:"By default, returns the dataset but can be overridden to show how exactly a result set matched upon the data."}),"\n",(0,o.jsx)(t.h4,{id:"getsearchterm",children:"getSearchTerm()"}),"\n",(0,o.jsx)(t.p,{children:"Provide the current search term that the user entered without manually accessing the DOM."}),"\n",(0,o.jsx)(t.h4,{id:"getpreppedsearchterm",children:"getPreppedSearchTerm()"}),"\n",(0,o.jsx)(t.p,{children:"Return the parsed (lowercase) search term."}),"\n",(0,o.jsx)(t.h4,{id:"setsearchterms",children:"setSearchTerms()"}),"\n",(0,o.jsx)(t.p,{children:"When a user changes the value of the input, after we debounce, we update the search term in memory."}),"\n",(0,o.jsx)(t.h4,{id:"gethtmlelements",children:"getHTMLElements()"}),"\n",(0,o.jsx)(t.p,{children:"Update and return some of the typical HTML elements that are used in the component."}),"\n",(0,o.jsx)(t.h4,{id:"closesearch",children:"closeSearch()"}),"\n",(0,o.jsx)(t.p,{children:"Close the associated dropdown manually since we control the dropdown rather than purely relying on Bootstrap.\nWe can optionally clear the users' search term."}),"\n",(0,o.jsx)(t.h4,{id:"searchresultsvisible",children:"searchResultsVisible()"}),"\n",(0,o.jsx)(t.p,{children:"Shorthand for confirming if the search results are currently visible."}),"\n",(0,o.jsx)(t.h4,{id:"toggledropdown",children:"toggleDropdown()"}),"\n",(0,o.jsx)(t.p,{children:"Manually open and close the dropdown rather than purely relying on Bootstrap."}),"\n",(0,o.jsx)(t.h4,{id:"updatenodes",children:"updateNodes()"}),"\n",(0,o.jsx)(t.p,{children:"Ensure that nodes that are susceptible to change are up-to-date when we need them."}),"\n",(0,o.jsx)(t.h4,{id:"registerclickhandlers",children:"registerClickHandlers()"}),"\n",(0,o.jsx)(t.p,{children:"Handle our base case of click handlers i.e. opening and closing the dropdown. This can be further extended in callers for any special handling."}),"\n",(0,o.jsx)(t.h4,{id:"registerkeyhandlers",children:"registerKeyHandlers()"}),"\n",(0,o.jsx)(t.p,{children:"Handle our base case of keyboard handlers i.e. opening and closing the dropdown, accessibility handling. This can be further extended in callers for any special handling."}),"\n",(0,o.jsx)(t.h4,{id:"registerinputhandlers",children:"registerInputHandlers()"}),"\n",(0,o.jsx)(t.p,{children:"Register the text input handlers for the search input and debounce the input so that we don't need to fire a bunch of calls as the user is still typing."}),"\n",(0,o.jsx)(t.h4,{id:"filterrenderpipe",children:"filterrenderpipe()"}),"\n",(0,o.jsx)(t.p,{children:"Combine the filter and render methods into a single method to be called by the input handlers as a QoL shorthand call."}),"\n",(0,o.jsx)(t.h4,{id:"renderandshow",children:"renderAndShow()"}),"\n",(0,o.jsx)(t.p,{children:"Given we need to update the display, ensure we have the latest dataset and render it."}),"\n",(0,o.jsx)(t.h4,{id:"keyupdown",children:"keyUpDown()"}),"\n",(0,o.jsx)(t.p,{children:"Given the user is navigating the dropdown with the keyboard, handle the common up and down arrow key cases."}),"\n",(0,o.jsx)(t.h4,{id:"clickhandler",children:"clickHandler()"}),"\n",(0,o.jsxs)(t.p,{children:["Used within ",(0,o.jsx)(t.a,{href:"#registerClickHandlers()",children:"registerClickHandlers"})," to handle the common click cases like selecting results, closing the dropdown, etc."]}),"\n",(0,o.jsx)(t.h4,{id:"keyhandler",children:"keyHandler()"}),"\n",(0,o.jsxs)(t.p,{children:["Used within ",(0,o.jsx)(t.a,{href:"#registerKeyHandlers()",children:"registerKeyHandlers"})," to handle the common keyboard cases like navigating nodes, closing the dropdown, etc."]}),"\n",(0,o.jsx)(t.h4,{id:"selectnode",children:"selectNode()"}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"#keyUpDown()",children:"keyUpDown"})," and other similar functions, this function will select the node that the user has navigated to."]}),"\n",(0,o.jsx)(t.h4,{id:"movetofirstnode",children:"moveToFirstNode()"}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"#keyUpDown()",children:"keyUpDown"})," and other similar functions, this function will move the user to the first node in the dropdown."]}),"\n",(0,o.jsx)(t.h4,{id:"movetolastnode",children:"moveToLastNode()"}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"#keyUpDown()",children:"keyUpDown"})," and other similar functions, this function will move the user to the last node in the dropdown."]}),"\n",(0,o.jsx)(t.h4,{id:"movetonode",children:"moveToNode()"}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"#keyUpDown()",children:"keyUpDown"})," and other similar functions, this function will move the user to the node that is passed in."]}),"\n",(0,o.jsx)(t.h3,{id:"required-functions-to-implement",children:"Required functions to implement"}),"\n",(0,o.jsx)(t.p,{children:"We bootstrap a lot of the functionality within the component but there are some functions that you will need to implement yourself.\nThis is because we don't know what your data looks like, how you want to filter it, etc."}),"\n",(0,o.jsx)(t.h4,{id:"fetchdataset",children:"fetchDataset()"}),"\n",(0,o.jsx)(t.p,{children:"Implementors should return a dataset that will be used to filter and render the results, this can be provided as a promise or a synchronous call."}),"\n",(0,o.jsx)(t.h4,{id:"filterdatasetdataset",children:"filterDataset(dataset)"}),"\n",(0,o.jsx)(t.p,{children:"Implementors should return a filtered dataset based on the search term that the user has entered, this is entirely up to your as long as you set the results."}),"\n",(0,o.jsx)(t.h4,{id:"filtermatchdataset",children:"filterMatchDataset()"}),"\n",(0,o.jsx)(t.p,{children:"This can either just return the base dataset or you can use it to mutate the dataset to show how the results matched the search term i.e. adding links and whatnot."}),"\n",(0,o.jsx)(t.h4,{id:"renderdropdown",children:"renderDropdown()"}),"\n",(0,o.jsx)(t.p,{children:"Where and how do you want the data to be rendered? This is entirely up to you."}),"\n",(0,o.jsx)(t.h4,{id:"componentselector",children:"componentSelector()"}),"\n",(0,o.jsx)(t.p,{children:"We need to know where to find the component in the DOM, this is the selector that will be used to find the component."}),"\n",(0,o.jsx)(t.h4,{id:"dropdownselector",children:"dropdownSelector()"}),"\n",(0,o.jsx)(t.p,{children:"We need to know where to find the dropdown in the DOM, this is the selector that will be used to find the dropdown."}),"\n",(0,o.jsx)(t.h4,{id:"triggerselector",children:"triggerSelector()"}),"\n",(0,o.jsx)(t.p,{children:"We need to know where to find the trigger in the DOM, this is the selector that will be used to find the trigger."}),"\n",(0,o.jsxs)(t.p,{children:["For example usages view the ",(0,o.jsx)(t.a,{href:"comboboxsearch/examples",children:"examples"})," page."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);