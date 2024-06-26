"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[54883],{40850:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453),c=n(78924);const r={title:"Checkbox controller",tags:["core_form","core","Forms API","Advanced"]},a=void 0,l={id:"apis/subsystems/form/advanced/checkbox-controller",title:"Checkbox controller",description:"The checkbox controller allows developers to group checkboxes together and add a link or button to check, or uncheck, all of the checkboxes at once.",source:"@site/versioned_docs/version-4.3/apis/subsystems/form/advanced/checkbox-controller.md",sourceDirName:"apis/subsystems/form/advanced",slug:"/apis/subsystems/form/advanced/checkbox-controller",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/form/advanced/checkbox-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/subsystems/form/advanced/checkbox-controller.md",tags:[{label:"core_form",permalink:"/moodledevdocs/docs/4.3/tags/core-form"},{label:"core",permalink:"/moodledevdocs/docs/4.3/tags/core"},{label:"Forms API",permalink:"/moodledevdocs/docs/4.3/tags/forms-api"},{label:"Advanced",permalink:"/moodledevdocs/docs/4.3/tags/advanced"}],version:"4.3",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1697795601e3,frontMatter:{title:"Checkbox controller",tags:["core_form","core","Forms API","Advanced"]},sidebar:"docs",previous:{title:"Advanced elements",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/form/advanced/advanced-elements"},next:{title:"No submit button",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/form/advanced/no-submit-button"}},i={},d=[{value:"Checkbox groups",id:"checkbox-groups",level:2},{value:"API",id:"api",level:2},{value:"Description of functionality",id:"description-of-functionality",level:3}];function h(e){const o={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{frontMatter:r,metadata:l}),"\n",(0,t.jsx)(o.p,{children:"The checkbox controller allows developers to group checkboxes together and add a link or button to check, or uncheck, all of the checkboxes at once."}),"\n",(0,t.jsx)(o.p,{children:"You can add as many groups of checkboxes as you like, as long as they are uniquely named, where the name is an integer."}),"\n",(0,t.jsx)(o.h2,{id:"checkbox-groups",children:"Checkbox groups"}),"\n",(0,t.jsxs)(o.p,{children:["When adding checkboxes, you can add them in ",(0,t.jsx)(o.em,{children:"groups"}),". Each group of checkboxes must have a unique integer name, for example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",metastring:'title="classes/form/example_form.php"',children:"public function definition(): void {\n    // These two elements are part of group 1.\n    $mform->addElement('advcheckbox', 'test1', 'Test 1', null, ['group' => 1]);\n    $mform->addElement('advcheckbox', 'test2', 'Test 2', null, ['group' => 1]);\n\n    // Add a checkbox controller for all checkboxes in `group => 1`:\n    $this->add_checkbox_controller(1);\n\n    // These two elements are part of group 3.\n    $mform->addElement('advcheckbox', 'test3', 'Test 3', null, ['group' => 3]);\n    $mform->addElement('advcheckbox', 'test4', 'Test 4', null, ['group' => 3]);\n\n    // Add a checkbox controller for all checkboxes in `group => 3`.\n    // This example uses a different wording isntead of Select all/none by passing the second parameter:\n    $this->add_checkbox_controller(\n        3,\n        get_string(\"checkall\", \"plugintype_pluginname\")\n    );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(o.p,{children:"The checkbox controller is described by the following mform function:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"moodleform::add_checkbox_controller(\n    $groupid = null,\n    string $text = null,\n    mixed $attributes = null,\n    int $originalvalue\n): void;\n"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["int ",(0,t.jsx)(o.em,{children:"$groupid"})," This also serves as the checkbox group name. It must be a unique integer per collection of checkboxes."]}),"\n",(0,t.jsxs)(o.li,{children:["string ",(0,t.jsx)(o.em,{children:"$text"})," (optional) Link display text. Defaults to ",(0,t.jsx)(o.code,{children:"get_string('selectallornone', 'form')"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["mixed  ",(0,t.jsx)(o.em,{children:"$attributes"})," (optional) Either a typical HTML attribute string or an associative array."]}),"\n",(0,t.jsxs)(o.li,{children:["int ",(0,t.jsx)(o.em,{children:"$originalValue"})," (optional) Defaults to 0; The general original value of the checkboxes being controlled by this element."]}),"\n"]}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsxs)(o.mdxAdmonitionTitle,{children:["An explanation of ",(0,t.jsx)(o.code,{children:"$originalvalue"})]}),(0,t.jsx)(o.p,{children:"Imagine that you have 50 checkboxes in your form, which are all unchecked when the form first loads, except 5 or 6 of them."}),(0,t.jsx)(o.p,{children:"The logical choice here would be for the standard behaviour to check all of the checkboxes upon first click, then to uncheck them all upon the next click and so on."}),(0,t.jsx)(o.p,{children:"If the situation was reversed, with most of the checkboxes already checked by default, then it would make more sense to have the first action uncheck all the checkboxes."}),(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"$originalvalue"})," parameter allows you to configure the initial value and therefore the initial behaviour."]})]}),"\n",(0,t.jsx)(o.h3,{id:"description-of-functionality",children:"Description of functionality"}),"\n",(0,t.jsxs)(o.p,{children:["The first role of the ",(0,t.jsx)(o.code,{children:"add_checkbox_controller"})," method is to add a form element. Depending on whether JavaScript is supported by the browser or not, it will either output a link with onclick behaviour for instant action, or a ",(0,t.jsx)(o.code,{children:"nosubmit"})," button which will reload the page and change the state of the checkboxes, but retain the rest of the data already filled in the form by the user."]}),"\n",(0,t.jsxs)(o.p,{children:["The second role is to change the state of the checkboxes. The JavaScript version simply switches all checkboxes to checked or unchecked. The state applied when the link is first clicked depends on the ",(0,t.jsx)(o.code,{children:"$originalvalue"})," parameter as noted above. The non-JavaScript version behaves in exactly the same way, although a page reload is necessary."]})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);