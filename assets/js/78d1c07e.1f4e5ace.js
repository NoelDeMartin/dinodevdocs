"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[78154],{59339:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var s=o(74848),i=o(28453),t=o(78924);const l={title:"Forms API",tags:["API","core_form","form","core"]},d=void 0,r={id:"apis/subsystems/form/index",title:"Forms API",description:"Form are created using the Form API. The Form API supports most standard HTML elements, including checkboxes, radio buttons, text boxes, and so on, adding additional accessibility and security features to them.",source:"@site/versioned_docs/version-4.3/apis/subsystems/form/index.md",sourceDirName:"apis/subsystems/form",slug:"/apis/subsystems/form/",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/form/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/subsystems/form/index.md",tags:[{label:"API",permalink:"/moodledevdocs/docs/4.3/tags/api"},{label:"core_form",permalink:"/moodledevdocs/docs/4.3/tags/core-form"},{label:"form",permalink:"/moodledevdocs/docs/4.3/tags/form"},{label:"core",permalink:"/moodledevdocs/docs/4.3/tags/core"}],version:"4.3",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Forms API",tags:["API","core_form","form","core"]},sidebar:"docs",previous:{title:"File API internals",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/files/internals"},next:{title:"Advanced elements",permalink:"/moodledevdocs/docs/4.3/apis/subsystems/form/advanced/advanced-elements"}},a={},h=[{value:"Highlights",id:"highlights",level:2},{value:"Usage",id:"usage",level:2},{value:"Form elements",id:"form-elements",level:2},{value:"Basic form elements",id:"basic-form-elements",level:3},{value:"Advanced form elements",id:"advanced-form-elements",level:3},{value:"Custom form elements",id:"custom-form-elements",level:3},{value:"Commonly used functions",id:"commonly-used-functions",level:2},{value:"add_action_buttons()",id:"add_action_buttons",level:3},{value:"add_sticky_action_buttons()",id:"add_sticky_action_buttons",level:3},{value:"setDefault()",id:"setdefault",level:3},{value:"disabledIf()",id:"disabledif",level:3},{value:"hideIf()",id:"hideif",level:3},{value:"addRule()",id:"addrule",level:3},{value:"addHelpButton()",id:"addhelpbutton",level:3},{value:"setType()",id:"settype",level:3},{value:"disable_form_change_checker()",id:"disable_form_change_checker",level:3},{value:"filter_shown_headers()",id:"filter_shown_headers",level:3},{value:"Other features",id:"other-features",level:3},{value:"Unit testing",id:"unit-testing",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:o,Since:d}=n;return o||f("Details",!0),d||f("Since",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.A,{frontMatter:l,metadata:r}),"\n",(0,s.jsx)(n.p,{children:"Form are created using the Form API. The Form API supports most standard HTML elements, including checkboxes, radio buttons, text boxes, and so on, adding additional accessibility and security features to them."}),"\n",(0,s.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tested and optimised for use on major screen-readers like Dragon and JAWS."}),"\n",(0,s.jsx)(n.li,{children:"Table-less layout."}),"\n",(0,s.jsxs)(n.li,{children:["Processes form data securely, with ",(0,s.jsx)(n.code,{children:"required_param"}),", ",(0,s.jsx)(n.code,{children:"optional_param"}),", and session key."]}),"\n",(0,s.jsx)(n.li,{children:"Supports client-side validation."}),"\n",(0,s.jsx)(n.li,{children:"Facility to add Moodle help buttons to forms."}),"\n",(0,s.jsxs)(n.li,{children:["Support for file repository using the ",(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/files/",children:"File API"})," ."]}),"\n",(0,s.jsx)(n.li,{children:"Support for many custom Moodle specific and non-specific form elements."}),"\n",(0,s.jsxs)(n.li,{children:["Facility for ",(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/form/advanced/repeat-elements",children:"repeated elements"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Facility for form elements in advanced groups"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"The Moodle forms API separates forms into different areas:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["a form definition, which extends the ",(0,s.jsx)(n.code,{children:"moodleform"})," class; and"]}),"\n",(0,s.jsx)(n.li,{children:"uses of that form."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create a form in Moodle, you create a class that defines the form, including every form element. Your class must extend the ",(0,s.jsx)(n.code,{children:"moodleform"})," class and overrides the ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#definition.28.29",children:"definition"})," member function to describe the form elements."]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"An example of a form definition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="[path/to/plugin]/classes/form/myform.php"',children:"// moodleform is defined in formslib.php\nrequire_once(\"$CFG->libdir/formslib.php\");\n\nclass simplehtml_form extends moodleform {\n    // Add elements to form.\n    public function definition() {\n        // A reference to the form is stored in $this->form.\n        // A common convention is to store it in a variable, such as `$mform`.\n        $mform = $this->_form; // Don't forget the underscore!\n\n        // Add elements to your form.\n        $mform->addElement('text', 'email', get_string('email'));\n\n        // Set type of element.\n        $mform->setType('email', PARAM_NOTAGS);\n\n        // Default value.\n        $mform->setDefault('email', 'Please enter email');\n    }\n\n    // Custom validation should be added here.\n    function validation($data, $files) {\n        return [];\n    }\n}\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Once the form has been defined it can be instantiated elsewhere in Moodle, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="[path/to/plugin]/myform.php',children:"\n// Instantiate the myform form from within the plugin.\n$mform = new \\plugintype_pluginname\\form\\myform();\n\n// Form processing and displaying is done here.\nif ($mform->is_cancelled()) {\n    // If there is a cancel element on the form, and it was pressed,\n    // then the `is_cancelled()` function will return true.\n    // You can handle the cancel operation here.\n} else if ($fromform = $mform->get_data()) {\n    // When the form is submitted, and the data is successfully validated,\n    // the `get_data()` function will return the data posted in the form.\n} else {\n    // This branch is executed if the form is submitted but the data doesn't\n    // validate and the form should be redisplayed or on the first display of the form.\n\n    // Set anydefault data (if any).\n    $mform->set_data($toform);\n\n    // Display the form.\n    $mform->display();\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you wish to use the form within a block then you should consider using the render method, as demonstrated below:"}),"\n",(0,s.jsx)(n.p,{children:"Note that the render method does the same as the display method, except returning the HTML rather than outputting it to the browser, as with above make sure you've included the file which contains the class for your Moodle form."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"class block_yourblock extends block_base {\n    public function init(){\n        $this->title = 'Your Block';\n    }\n\n    public function get_content(){\n        $this->content = (object) [\n            'text' => '',\n        ];\n\n        $mform = new \\plugintype_pluginname\\form\\myform();\n\n        if ($mform->is_cancelled()) {\n            // If there is a cancel element on the form, and it was pressed,\n            // then the `is_cancelled()` function will return true.\n            // You can handle the cancel operation here.\n        } else if ($fromform = $mform->get_data()) {\n            // When the form is submitted, and the data is successfully validated,\n            // the `get_data()` function will return the data posted in the form.\n        } else {\n            // This branch is executed if the form is submitted but the data doesn't\n            // validate and the form should be redisplayed or on the first display of the form.\n\n            // Set anydefault data (if any).\n            $mform->set_data($toform);\n\n            // Display the form.\n            $this->content->text = $mform->render();\n        }\n\n        return $this->content;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"form-elements",children:"Form elements"}),"\n",(0,s.jsx)(n.p,{children:"Moodle provides a number of basic, and advanced, form elements. These are described in more detail below."}),"\n",(0,s.jsx)(n.h3,{id:"basic-form-elements",children:"Basic form elements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#button",children:"button"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#checkbox",children:"checkbox"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#radio",children:"radio"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#select",children:"select"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#multi-select",children:"multi-select"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#password",children:"password"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#hidden",children:"hidden"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#html",children:"html"})," - div element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#static",children:"static"})," - Display a static text."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#text",children:"text"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#textarea",children:"textarea"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#Use_Fieldsets_to_group_Form_Elements",children:"header"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"advanced-form-elements",children:"Advanced form elements"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#autocomplete",children:"Autocomplete"})," - A select box that allows you to start typing to narrow the list of options, or search for results."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#advcheckbox",children:"advcheckbox"})," - Advance checkbox"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#float",children:"float"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#passwordunmask",children:"passwordunmask"})," - A password element with option to show the password in plaintext."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#recaptcha",children:"recaptcha"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#selectyesno",children:"selectyesno"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#selectwithlink",children:"selectwithlink"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#date_selector",children:"date_selector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#date_time_selector",children:"date_time_selector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#duration",children:"duration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#editor",children:"editor"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/form/usage/files#file-picker",children:"filepicker"})," - upload single file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/form/usage/files#file-manager",children:"filemanager"})," - upload multiple files"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#tags",children:"tags"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#addGroup",children:"addGroup"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#modgrade",children:"modgrade"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#modvisible",children:"modvisible"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#choosecoursefile",children:"choosecoursefile"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#grading",children:"grading"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#questioncategory",children:"questioncategory"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"custom-form-elements",children:"Custom form elements"}),"\n",(0,s.jsx)(n.p,{children:"In addition to the standard form elements, you can register your own custom form elements, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"// Register a custom form element.\nMoodleQuickForm::registerElementType(\n    // The custom element is named `course_competency_rule`.\n    // This is the element name used in the `addElement()` function.\n    'course_competency_rule',\n\n    // This is where it's definition is defined.\n    // This does not currently support class auto-loading.\n    \"$CFG->dirroot/$CFG->admin/tool/lp/classes/course_competency_rule_form_element.php\",\n\n    // The class name of the element.\n    'tool_lp_course_competency_rule_form_element'\n);\n\n// Add an instance of the custom form element to your form.\n$mform->addElement(\n    // The name of the custome lement.\n    'course_competency_rule',\n    'competency_rule',\n    get_string('uponcoursemodulecompletion', 'tool_lp'),\n    $options\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"For a real-life example, see:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/moodle/moodle/blob/master/admin/tool/lp/classes/course_competency_rule_form_element.php",children:"Custom element definition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/moodle/moodle/blob/master/admin/tool/lp/lib.php#L157-L161",children:"Custom element usage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"commonly-used-functions",children:"Commonly used functions"}),"\n",(0,s.jsx)(n.h3,{id:"add_action_buttons",children:"add_action_buttons()"}),"\n",(0,s.jsx)(n.p,{children:"Add the standard 'action' buttons to the form - these are the standard Submit, and Cancel buttons on the form."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"public function add_action_buttons(\n    bool $cancel = true,\n    ?string $submitlabel = null\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"$cancel"})," parameter can be used to control whether a cancel button is shown."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"$submitlabel"})," parameter can be used to set the label for the submit button. The default value comes from the ",(0,s.jsx)(n.code,{children:"savechanges"})," string."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"add_action_buttons"})," function is defined on ",(0,s.jsx)(n.code,{children:"moodlform"})," class, and not a part of ",(0,s.jsx)(n.code,{children:"$this->_form"}),", for example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"    public function definition() {\n        // Add your form elements here.\n        $this->_form->addElement(...);\n\n        // When ready, add your action buttons.\n        $this->add_action_buttons();\n    }\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"add_sticky_action_buttons",children:"add_sticky_action_buttons()"}),"\n",(0,s.jsx)(d,{version:"4.3"}),"\n",(0,s.jsxs)(n.p,{children:["This method calls ",(0,s.jsx)(n.code,{children:"add_action_buttons()"})," internally and makes 'action' buttons sticky."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"public function add_sticky_action_buttons(\n    bool $cancel = true,\n    ?string $submitlabel = null\n);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setdefault",children:"setDefault()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#setDefault_2",children:"setDefault()"})," function can be used to set the default value for an element."]}),"\n",(0,s.jsx)(n.h3,{id:"disabledif",children:"disabledIf()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#disabledIf",children:"disabledIf()"})," function can be used to conditionally ",(0,s.jsx)(n.em,{children:"disable"})," a group of elements, or and individual element depending on the state of other form elements."]}),"\n",(0,s.jsx)(n.h3,{id:"hideif",children:"hideIf()"}),"\n",(0,s.jsx)(d,{version:"3.4"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#hideIf",children:"hideif()"})," function can be used to conditionally ",(0,s.jsx)(n.em,{children:"hide"})," a group of elements, or and individual element depending on the state of other form elements."]}),"\n",(0,s.jsx)(n.h3,{id:"addrule",children:"addRule()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#addRule",children:"addRule()"})," function can be used to define both client-side, and server-side validation rules. For example, this can be used to validate that a text-field is required, and has a type of email."]}),"\n",(0,s.jsx)(n.h3,{id:"addhelpbutton",children:"addHelpButton()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#addHelpButton",children:"addHelpButton()"})," function can be used to add a pop-up help button to a form element."]}),"\n",(0,s.jsx)(n.h3,{id:"settype",children:"setType()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#setType",children:"setType()"})," function can be used to specify how submitted values are cleaned. The ",(0,s.jsx)(n.code,{children:"PARAM_*"})," constants are used to specify the type of data that will be submitted."]}),"\n",(0,s.jsx)(n.h3,{id:"disable_form_change_checker",children:"disable_form_change_checker()"}),"\n",(0,s.jsx)(n.p,{children:"Normally, if a user navigate away from any form and changes have been made, a popup will be shown to the user asking them to confirm that they wish to leave the page and that they may lose data."}),"\n",(0,s.jsxs)(n.p,{children:["In some cases this is not the desired behaviour, in which case the ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#disable_form_change_checker",children:"disable_form_change_checker()"})," function can be used to disable the form change checker."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"public function definition() {\n    // Your definition goes here.\n\n    // Disable the form change checker for this form.\n    $this->_form->disable_form_change_checker();\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"filter_shown_headers",children:"filter_shown_headers()"}),"\n",(0,s.jsx)(d,{version:"4.3",issueNumber:"MDL-78288"}),"\n",(0,s.jsxs)(n.p,{children:["This method adds values to ",(0,s.jsx)(n.code,{children:"_shownonlyelements"})," array to decide whether a header should be shown or hidden.\nOnly header names would be accepted and added to ",(0,s.jsx)(n.code,{children:"_shownonlyelements"})," array.\nHeaders included in ",(0,s.jsx)(n.code,{children:"_shownonlyelements"})," will be shown expanded in the form. The rest of the headers will be hidden."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"public function filter_shown_headers(array $shownonly): void {\n    $this->_shownonlyelements = [];\n    if (empty($shownonly)) {\n        return;\n    }\n    foreach ($shownonly as $headername) {\n        $element = $this->getElement($headername);\n        if ($element->getType() == 'header') {\n            $this->_shownonlyelements[] = $headername;\n            $this->setExpanded($headername);\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Empty ",(0,s.jsx)(n.code,{children:"_shownonlyelements"})," array doesn't affect header's status or visibility."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="/course/editsection.php"',children:"$showonly = optional_param('showonly', 0, PARAM_TAGLIST);\n\n[...]\n\n$mform = $courseformat->editsection_form($PAGE->url, $customdata);\n\n$initialdata = convert_to_array($sectioninfo);\nif (!empty($CFG->enableavailability)) {\n    $initialdata['availabilityconditionsjson'] = $sectioninfo->availability;\n}\n$mform->set_data($initialdata);\nif (!empty($showonly)) {\n    $mform->filter_shown_headers(explode(',', $showonly));\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"other-features",children:"Other features"}),"\n",(0,s.jsxs)(n.p,{children:["In some cases you may want to ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#Use_Fieldsets_to_group_Form_Elements",children:"group elements"})," into collections."]}),"\n",(0,s.jsx)(n.h2,{id:"unit-testing",children:"Unit testing"}),"\n",(0,s.jsxs)(n.p,{children:["In order to test the processing of submitted form contents in unit tests, the Forms API has a ",(0,s.jsx)(n.code,{children:"mock_submit()"})," function."]}),"\n",(0,s.jsx)(n.p,{children:"This method makes the form behave as if the data supplied to it was submitted by the user via the web interface. The data still passes through all form validation, which means that `get_data() will return all of the parsed values, along with any defaults."}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Example usage"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"// Instantiate a form to submit.\n$form = new qtype_multichoice_edit_form(...);\n\n// Fetch the data and then mock the submission of that data.\n$questiondata = test_question_maker::get_question_data('multichoice', 'single');\n$form->mock_submit($questiondata);\n\n// The `get_data()` function will return the validated data, plus any defaults.\n$actualfromform = $form->get_data();\n\n// The resultant data can now be tested against the expected values.\n$expectedfromform = test_question_maker::get_question_form_data('multichoice', 'single');\n$this->assertEquals($expectedfromform, $actualfromform);\n\n// The data can also be saved and tested in the context of the API.\nsave_question($actualfromform);\n$actualquestiondata = question_load_questions(array($actualfromform->id));\n$this->assertEquals($questiondata, $actualquestiondata);\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis",children:"Core APIs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/moodledevdocs/docs/4.3/apis/subsystems/form/usage/",children:"lib/formslib.php Usage"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition",children:"lib/formslib.php Form Definition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/general/development/policies/designing-usable-forms",children:"Designing usable forms"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/Fragment",children:"Fragment"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/MForm_Modal",children:"MForm Modal"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);