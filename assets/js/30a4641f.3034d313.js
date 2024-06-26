"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[28262],{23443:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=i(74848),t=i(28453),s=i(78924);const a={title:"Module visibility and display",tags:["API","Module","Activity","mod"]},c=void 0,d={id:"apis/plugintypes/mod/visibility",title:"Module visibility and display",description:"Summary",source:"@site/versioned_docs/version-4.3/apis/plugintypes/mod/visibility.md",sourceDirName:"apis/plugintypes/mod",slug:"/apis/plugintypes/mod/visibility",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/mod/visibility",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/plugintypes/mod/visibility.md",tags:[{label:"API",permalink:"/moodledevdocs/docs/4.3/tags/api"},{label:"Module",permalink:"/moodledevdocs/docs/4.3/tags/module"},{label:"Activity",permalink:"/moodledevdocs/docs/4.3/tags/activity"},{label:"mod",permalink:"/moodledevdocs/docs/4.3/tags/mod"}],version:"4.3",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1697795601e3,frontMatter:{title:"Module visibility and display",tags:["API","Module","Activity","mod"]},sidebar:"docs",previous:{title:"Activity chooser",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/mod/activitymodule"},next:{title:"Book activity sub-plugins",permalink:"/moodledevdocs/docs/4.3/apis/plugintypes/mod_book/"}},r={},l=[{value:"Summary",id:"summary",level:2},{value:"Backward compatibility",id:"backward-compatibility",level:2},{value:"Removing your link",id:"removing-your-link",level:2},{value:"Customising module display, in cache",id:"customising-module-display-in-cache",level:2},{value:"Customising module display, for current user",id:"customising-module-display-for-current-user",level:2},{value:"Customising module display, for current user, on course page only",id:"customising-module-display-for-current-user-on-course-page-only",level:2},{value:"get_fast_modinfo data",id:"get_fast_modinfo-data",level:2},{value:"More documentation",id:"more-documentation",level:2}];function h(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{frontMatter:a,metadata:d}),"\n",(0,n.jsx)(o.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(o.p,{children:"A new API allows you to customise how your module displays on the main course page:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"You can display custom HTML below the link to your module."}),"\n",(0,n.jsx)(o.li,{children:"If your module does not have a link (like Label, where it is only for display on the main page) then you can remove the link from the main page and from all navigation etc."}),"\n",(0,n.jsx)(o.li,{children:"You can display HTML next to the link to your module that indicates dynamic information (like Forum, where it displays information about unread messages)."}),"\n",(0,n.jsx)(o.li,{children:"You can display additional icons next to the other module editing icons when the user is editing the page."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"In addition, existing things you could already do (like change the icon on the main page) are still available when using the new API."}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"get_fast_modinfo"})," function now returns specific classes which are documented and which you can use to obtain new information about modules."]}),"\n",(0,n.jsx)(o.h2,{id:"backward-compatibility",children:"Backward compatibility"}),"\n",(0,n.jsx)(o.p,{children:"All modules and code written for Moodle 2.0 should continue to behave in exactly the same manner. There is no need to change existing modules for this API unless you want to use the new features."}),"\n",(0,n.jsx)(o.h2,{id:"removing-your-link",children:"Removing your link"}),"\n",(0,n.jsxs)(o.p,{children:["If your module should not appear in navigation and in other lists of modules to visit or get information for, like Label, the easiest way to remove that link is to return true for ",(0,n.jsx)(o.code,{children:"FEATURE_NO_VIEW_LINK"})," in your module's ",(0,n.jsx)(o.code,{children:"_supports"})," function."]}),"\n",(0,n.jsx)(o.h2,{id:"customising-module-display-in-cache",children:"Customising module display, in cache"}),"\n",(0,n.jsxs)(o.p,{children:["The first place you can customise your module display is in the existing ",(0,n.jsx)(o.code,{children:"_get_coursemodule_info"})," API function. This function obtains information about the module which will be stored in the course cache (the ",(0,n.jsx)(o.code,{children:"modinfo"})," field of the course table)."]}),"\n",(0,n.jsx)(o.p,{children:"The course cache is only updated when somebody edits a module, so it can't be used for dynamic information - but it's okay if it takes a few database queries to calculate the data because it will be cached for future use."}),"\n",(0,n.jsxs)(o.p,{children:["The function should return a value of class ",(0,n.jsx)(o.code,{children:"cached_cm_info"}),". For example:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"function mod_frog_get_coursemodule_info($cm) {\n    $info = new cached_cm_info();\n    $info->content = '<p>This will display below the module.</p>';\n    return $info;\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"You can change several properties which are documented in that class definition. If you don't change a property, its value remains default."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"name"})," - name of activity (text of the link on course page)."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"icon"}),", ",(0,n.jsx)(o.code,{children:"iconcomponent"})," - name and component name of icon to display by the link."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"content"})," - extra HTML content to display below the module link on course page (not shown in navigation etc)."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"customdata"})," - arbitrary extra PHP data to store in modinfo cache; useful if, for performance reasons, your module needs to store data that should be accessible very quickly from other parts of the course. Warning: Do not store complex objects here because when they are serialized (together with all other data) they may contain \\0 byte and it causes fatal error on Postgres."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"extraclasses"})," - extra CSS class or classes that will be added to the activity on the main page, so that you can alter the styling."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"onclick"})," - already-escaped HTML that will be inserted as the value of the onclick attribute."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"If you don't need the information to be cached (it can be retrieved very quickly without making any database queries) then you might consider using one of the functions below instead, in order to avoid unnecessarily increasing the size of the course cache. Although the headings mention the current user, you can of course use those functions in a way that doesn't depend on the current user."}),"\n",(0,n.jsxs)(o.p,{children:["Don't use renderers in this function (see ",(0,n.jsx)(o.a,{href:"https://tracker.moodle.org/browse/MDL-41074",children:"MDL-41074"}),"). If you have data you would like to render onto the course page, put it into the custom data property and render it in the MODNAME_cm_info_view() function (see below). For an example, see mod_folder."]}),"\n",(0,n.jsx)(o.h2,{id:"customising-module-display-for-current-user",children:"Customising module display, for current user"}),"\n",(0,n.jsx)(o.p,{children:"You can customise module display dynamically (when the page loads). For example you might want to alter it based on the permissions of the current user."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"function mod_frog_cm_info_dynamic(cm_info $cm) {\n    $context = get_context_instance(CONTEXT_MODULE, $cm->id);\n    if (!has_capability('some/capability', $context)) {\n        $cm->set_user_visible(false);\n    }\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"This code can affect the navigation, and whether users are permitted to access the module (as above). It runs on all pages within the course, so it's very important that you do not put slow code in this function: it should not make any database queries."}),"\n",(0,n.jsxs)(o.p,{children:["In addition to the ",(0,n.jsx)(o.code,{children:"set_user_visible"})," function shown, you can also set many other things such as additional editing icons which will appear if editing mode is enabled. See the cm_info class documentation for more information."]}),"\n",(0,n.jsxs)(o.p,{children:["Most things are set using functions (as above; another example would be ",(0,n.jsx)(o.code,{children:"set_content"})," which sets the same content data as mentioned in the previous section) while other things can be set directly using public variables."]}),"\n",(0,n.jsx)(o.h2,{id:"customising-module-display-for-current-user-on-course-page-only",children:"Customising module display, for current user, on course page only"}),"\n",(0,n.jsx)(o.p,{children:"Sometimes you need to display custom information for the current user that appears only on the course view page. For example, the forum module displays unread information on the view page. This information doesn't show on other pages (it isn't included in the navigation, for instance)."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"function mod_frog_cm_info_view(cm_info $cm) {\n    $cm->set_after_link('Last tadpole: 22:17');\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"Because this function only runs when looking at the course page:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"It is OK to do tasks which may require some database queries (such as checking for unread forum messages), although obviously this should be kept to a minimum. In particular, care should be taken so that if there are 20 instances of the activity on the course page, it doesn't make 20 separate queries to obtain the information."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Inside this function you cannot set options which affect the appearance or access to the activity on other pages; for example, you cannot turn off the ",(0,n.jsx)(o.code,{children:"uservisible"})," flag as shown in the previous example. This is because these options are required on other pages (e.g. to display navigation) so it does not make sense to set them only for the course page. If you try, you'll get a ",(0,n.jsx)(o.code,{children:"coding_exception"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"get_fast_modinfo-data",children:"get_fast_modinfo data"}),"\n",(0,n.jsxs)(o.p,{children:["The function ",(0,n.jsx)(o.code,{children:"get_fast_modinfo"})," now returns an object of class course_modinfo, which itself contains cm_info objects about each activity. (These are entirely backward-compatible with the previous return value.)"]}),"\n",(0,n.jsx)(o.p,{children:"In addition to the old methods for obtaining data from $modinfo, there are some new functions. For example, here is how to get a single cm_info from $modinfo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"$modinfo = get_fast_modinfo($course);\n$cm = $modinfo->get_cm($cmid);\n"})}),"\n",(0,n.jsx)(o.p,{children:"The cm_info objects contain additional information that is not present in the course_modules database row, such as the module's name, and the icon and associated content mentioned above. In order to distinguish these from the plain database objects, you can specify the cm_info class in a function definition:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"function my_clever_function(cm_info $cm) {\n    if (!$cm->uservisible) {\n        // The module is not visible or available to current user,\n        // so do something clever instead.\n    }\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["By specifying cm_info in the parameter list, you'll cause PHP to give an error if anyone tries to call that function with a $cm object that just came from the database row, instead of from ",(0,n.jsx)(o.code,{children:"get_fast_modinfo"}),". (It is good practice to always get $cm from get_fast_modinfo, but there might be exceptions.)"]}),"\n",(0,n.jsxs)(o.p,{children:["Of course, this is only necessary if your function relies on a feature that is specific to cm_info, such as the ",(0,n.jsx)(o.code,{children:"uservisible"})," field above. If your function only uses fields which are present in the database row, then there's no need to require cm_info."]}),"\n",(0,n.jsx)(o.h2,{id:"more-documentation",children:"More documentation"}),"\n",(0,n.jsxs)(o.p,{children:["All three classes for this API are in the core file ",(0,n.jsx)(o.code,{children:"lib/modinfolib.php"})," and contain complete PHPdoc information for all fields and functions."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"http://phpdocs.moodle.org/HEAD/core/lib/course_modinfo.html",children:[(0,n.jsx)(o.code,{children:"course_modinfo"})," PHPdocs"]})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"http://phpdocs.moodle.org/HEAD/core/lib/cm_info.html",children:[(0,n.jsx)(o.code,{children:"cminfo"})," PHPdocs"]})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsxs)(o.a,{href:"http://phpdocs.moodle.org/HEAD/core/lib/cached_cm_info.html",children:[(0,n.jsx)(o.code,{children:"cached_cm_info"})," PHPdocs"]})}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);