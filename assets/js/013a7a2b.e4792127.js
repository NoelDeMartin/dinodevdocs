"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[31046],{34870:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var i=t(74848),n=t(28453),o=t(78924);const d={title:"Custom fields API",tags:["customfield","Custom field"]},a=void 0,l={id:"apis/core/customfields/index",title:"Custom fields API",description:"Custom fields API overview",source:"@site/versioned_docs/version-4.3/apis/core/customfields/index.md",sourceDirName:"apis/core/customfields",slug:"/apis/core/customfields/",permalink:"/moodledevdocs/docs/4.3/apis/core/customfields/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/core/customfields/index.md",tags:[{label:"customfield",permalink:"/moodledevdocs/docs/4.3/tags/customfield"},{label:"Custom field",permalink:"/moodledevdocs/docs/4.3/tags/custom-field"}],version:"4.3",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"Custom fields API",tags:["customfield","Custom field"]},sidebar:"docs",previous:{title:"Conditional activities API",permalink:"/moodledevdocs/docs/4.3/apis/core/conditionalactivities/"},next:{title:"Data manipulation API",permalink:"/moodledevdocs/docs/4.3/apis/core/dml/"}},c={},r=[{value:"Custom fields API overview",id:"custom-fields-api-overview",level:2},{value:"How to use custom fields",id:"how-to-use-custom-fields",level:2},{value:"Add custom fields to the instance edit form",id:"add-custom-fields-to-the-instance-edit-form",level:3},{value:"Retrieving instances custom fields",id:"retrieving-instances-custom-fields",level:3},{value:"Privacy API",id:"privacy-api",level:3},{value:"Custom fields plugins",id:"custom-fields-plugins",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Since:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Since",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{frontMatter:d,metadata:l}),"\n",(0,i.jsx)(t,{versions:["3.7"],issueNumber:"MDL-57898"}),"\n",(0,i.jsx)(s.h2,{id:"custom-fields-api-overview",children:"Custom fields API overview"}),"\n",(0,i.jsxs)(s.p,{children:["Custom fields API allows to configure custom fields that can be added to various contexts. Each ",(0,i.jsx)(s.strong,{children:"component"})," (or plugin) that wants to use custom fields can define several ",(0,i.jsx)(s.strong,{children:"areas"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"Example",type:"info",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"core_course"})," component defines an area ",(0,i.jsx)(s.code,{children:"course"})," that allows to add custom fields to the courses. The same component can define another area ",(0,i.jsx)(s.code,{children:"coursecat"})," that will allow to add custom fields to the course categories."]})}),"\n",(0,i.jsxs)(s.p,{children:["Inside each area, the component/plugin can decide whether to use or not to use ",(0,i.jsx)(s.strong,{children:"itemid"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"Example",type:"info",children:(0,i.jsxs)(s.p,{children:["Course custom fields are the same throughout the system and they don't use ",(0,i.jsx)(s.code,{children:"itemid"})," (it is always 0). But there could be an activity module that would want to configure different custom fields for each individual instance of module. Then this module would use the module id as the ",(0,i.jsx)(s.code,{children:"itemid"}),", as in (",(0,i.jsx)(s.a,{href:"https://github.com/marinaglancy/moodle-mod_surveybuilder",children:"example"}),"). This would allow to create modules similar to ",(0,i.jsx)(s.code,{children:"mod_data"})," and ",(0,i.jsx)(s.code,{children:"mod_feedback"})," where each instance has its own set of fields."]})}),"\n",(0,i.jsxs)(s.p,{children:["New plugin type ",(0,i.jsx)(s.code,{children:"customfield"})," was also added as part of the Custom fields API. Additional types of custom fields can be installed into ",(0,i.jsx)(s.code,{children:"/customfield/field/"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-use-custom-fields",children:"How to use custom fields"}),"\n",(0,i.jsxs)(s.p,{children:["Component/plugin that uses custom fields must define a ",(0,i.jsx)(s.strong,{children:"handler class"})," for each area and a ",(0,i.jsx)(s.strong,{children:"configuration page"}),". Handler class must be called ",(0,i.jsx)(s.code,{children:"<PLUGINNAME>/customfield/<AREA>_handler"})," and be placed in autoloaded location  ",(0,i.jsx)(s.code,{children:"<PLUGINDIR>/classes/customfield/<AREA>_handler.php"}),". This class must extend ",(0,i.jsx)(s.strong,{children:"\\core_customfield\\handler"})," . Configuration page may be located anywhere. For course custom fields configuration the admin settings page is used ",(0,i.jsx)(s.a,{href:"https://github.com/moodle/moodle/blob/master/course/customfield.php",children:"/course/customfield.php"}),". If the area uses ",(0,i.jsx)(s.code,{children:"itemid"})," this page should take ",(0,i.jsx)(s.code,{children:"itemid"})," as a parameter."]}),"\n",(0,i.jsxs)(s.p,{children:["Handler has protected constructor, to get a handler call ",(0,i.jsx)(s.code,{children:"create()"})," method. Some areas may choose to return a singleton here:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$handler = HANDLERCLASS::create($itemid);\n"})}),"\n",(0,i.jsx)(s.p,{children:"Configuration page contents will be:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$output = $PAGE->get_renderer('core_customfield');\n$outputpage = new \\core_customfield\\output\\management($handler);\necho $output->render($outputpage);\n"})}),"\n",(0,i.jsx)(s.p,{children:"Handler must implement all abstract methods (calculate configuration or instance context, check permissions to configure, view or edit) and also may choose to overwrite:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:'handler::uses_categories()\nhandler::generate_category_name()\nhandler::config_form_definition() // For example, the course_handler adds "locked" and "visibility" settings that control who can edit or view the particular field.\nhandler::setup_edit_page() // Sets page context/url/breadcrumb for the customfield/edit.php page, in some cases it must be overridden.\n'})}),"\n",(0,i.jsx)(s.h3,{id:"add-custom-fields-to-the-instance-edit-form",children:"Add custom fields to the instance edit form"}),"\n",(0,i.jsxs)(s.p,{children:["Custom fields are added to the ",(0,i.jsx)(s.strong,{children:"instances"}),". For example, course custom fields are added to the courses, so ",(0,i.jsx)(s.code,{children:"courseid"})," is the ",(0,i.jsx)(s.code,{children:"instanceid"}),". In the example of ",(0,i.jsx)(s.a,{href:"https://github.com/marinaglancy/moodle-mod_surveybuilder",children:(0,i.jsx)(s.code,{children:"mod_surveybuilder"})})," we use ",(0,i.jsx)(s.code,{children:"$USER->id"})," as the ",(0,i.jsx)(s.code,{children:"instanceid"})," (which means that in this example one user can fill the survey in one module only once). In each case of using custom fields there should be a clear concept of an ",(0,i.jsx)(s.strong,{children:"instance"}),". ",(0,i.jsx)(s.code,{children:"Instanceid"})," is required to save the data but it may be empty when we render the instance edit form (for example, the course is not yet created)."]}),"\n",(0,i.jsxs)(s.p,{children:['Developer must add custom field callbacks to the instance edit form. If the instance is "made up" (like in ',(0,i.jsx)(s.code,{children:"mod_surveybuilder"}),"), a new form has to be created with ",(0,i.jsx)(s.code,{children:"id"})," field in it that will refer to the ",(0,i.jsx)(s.code,{children:"instanceid"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The following callbacks should be used in ",(0,i.jsx)(s.code,{children:"form definition"}),", ",(0,i.jsx)(s.code,{children:"definition_after_data"}),", ",(0,i.jsx)(s.code,{children:"validation"})," and ",(0,i.jsx)(s.code,{children:"after form submission"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$handler->instance_form_definition($mform)\n$handler->instance_form_before_set_data()\n$handler->instance_form_definition_after_data()\n$handler->instance_form_validation()\n$handler->instance_form_save($data)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"instance_form_save()"})," method must be called after the form was saved as the ",(0,i.jsx)(s.code,{children:"$data"})," parameter must have the ",(0,i.jsx)(s.code,{children:"id"})," attribute."]}),"\n",(0,i.jsx)(s.p,{children:"On deletion of an instance or on deletion of the whole item call:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$handler->delete_instance()\n$handler->delete_all()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"retrieving-instances-custom-fields",children:"Retrieving instances custom fields"}),"\n",(0,i.jsx)(s.p,{children:"How custom fields are used depends entirely on the situation."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",metastring:'title="Handler methods to retrieve custom fields values for the given instance(s)"',children:"$handler->export_instance_data()\n$handler->export_instance_data_object()\n$handler->display_custom_fields_data()\n"})}),"\n",(0,i.jsx)(s.p,{children:"Additional methods for advanced usage:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$handler->get_instance_data()\n$handler->get_instances_data()\n$handler->get_instance_data_for_backup()\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Method ",(0,i.jsx)(s.code,{children:"restore_instance_data_from_backup()"})," exists in the handler class but is not implemented."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",metastring:'title="To retrieve the list of custom fields used in the given component/area/itemid"',children:"$handler->get_categories_with_fields()\n$handler->get_fields()\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The list of fields is cached in the handler and these two functions can be called multiple times."})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",metastring:'title="Example code for course custom fields. This function will return all the custom fields for a given courseid"',children:"function get_course_metadata($courseid) {\n    $handler = \\core_customfield\\handler::get_handler('core_course', 'course');\n    // This is equivalent to the line above.\n    //$handler = \\core_course\\customfield\\course_handler::create();\n    $datas = $handler->get_instance_data($courseid);\n    $metadata = [];\n    foreach ($datas as $data) {\n        if (empty($data->get_value())) {\n            continue;\n        }\n        $cat = $data->get_field()->get_category()->get('name');\n        $metadata[$data->get_field()->get('shortname')] = $cat . ': ' . $data->get_value();\n    }\n    return $metadata;\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"privacy-api",children:"Privacy API"}),"\n",(0,i.jsx)(s.p,{children:"Custom fields API does not export or delete any data because it does not know how custom fields are used, what data is considered user data and if it is considered private or shared data."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",metastring:'title="Plugins that store user information in custom fields should link subsystem in their get_metadata"',children:"$collection->link_subsystem('core_customfield', 'privacy:metadata:customfieldpurpose');\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",metastring:'title="They can use the following methods in the export/delete functions"',children:"use core_customfield\\privacy\\provider as customfield_provider;\n\ncustomfield_provider::get_customfields_data_contexts()\ncustomfield_provider::export_customfields_data()\ncustomfield_provider::delete_customfields_data()\ncustomfield_provider::delete_customfields_data_for_context()\n"})}),"\n",(0,i.jsx)(s.p,{children:"In case when custom fields configuration is considered to be user data (configuration means the definition of the fields, not the instance data), there are also couple of methods to help with privacy API implementations:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"customfield_provider::get_customfields_configuration_contexts()\ncustomfield_provider::delete_customfields_configuration()\ncustomfield_provider::delete_customfields_configuration_for_context()\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Export of configuration was not yet implemented at the time of writing this because of difficult implementation and very unclear use case. If it is needed please feel free to contribute to Moodle."})}),"\n",(0,i.jsx)(s.h2,{id:"custom-fields-plugins",children:"Custom fields plugins"}),"\n",(0,i.jsxs)(s.p,{children:["Custom fields plugin type was added to allow implement different types of custom fields (somehow similar to user profile fields plugin type). Plugins are located in ",(0,i.jsx)(s.code,{children:"/customfield/field/"})," and the full frankenstyle name of the plugins start with ",(0,i.jsx)(s.code,{children:"customfield_"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Except for common ",(0,i.jsx)(s.a,{href:"/moodledevdocs/docs/4.3/apis/commonfiles/",children:"Plugin files"})," and tests the following classes must be present in ",(0,i.jsx)(s.code,{children:"customfield"})," plugins (in respective autoloaded locations):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"namespace customfield_<PLUGINNAME>;\nclass field_controller extends \\core_customfield\\field_controller;\nclass data_controller extends \\core_customfield\\data_controller;\n\nnamespace customfield_<PLUGINNAME>\\privacy;\nclass provider implements \\core_privacy\\local\\metadata\\null_provider, \\core_customfield\\privacy\\customfield_provider;\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-64626",children:"MDL-64626"})," - Custom fields API (Moodle 3.7+) implementations and improvements"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-57898",children:"MDL-57898"})," - Add custom field types plugin and course custom fields functionality"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);