"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[21548],{41632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),a=t(28453),o=t(78924);const s={title:"Calendar API",tags:[]},r=void 0,d={id:"apis/core/calendar/index",title:"Calendar API",description:"This page documents the Calendar API as it is in Moodle 3.3 and later. For the API in older versions of Moodle, see Calendar API old.",source:"@site/versioned_docs/version-4.1/apis/core/calendar/index.md",sourceDirName:"apis/core/calendar",slug:"/apis/core/calendar/",permalink:"/moodledevdocs/docs/4.1/apis/core/calendar/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.1/apis/core/calendar/index.md",tags:[],version:"4.1",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1670648742e3,frontMatter:{title:"Calendar API",tags:[]},sidebar:"docs",previous:{title:"Activity completion API",permalink:"/moodledevdocs/docs/4.1/apis/core/activitycompletion/"},next:{title:"Conditional activities API",permalink:"/moodledevdocs/docs/4.1/apis/core/conditionalactivities/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating an event",id:"creating-an-event",level:2},{value:"Updating an event",id:"updating-an-event",level:2},{value:"Deleting an event",id:"deleting-an-event",level:2},{value:"Event priority",id:"event-priority",level:2},{value:"Action events",id:"action-events",level:2},{value:"The callbacks",id:"the-callbacks",level:3},{value:"mod_xyz_core_calendar_is_event_visible()",id:"mod_xyz_core_calendar_is_event_visible",level:4},{value:"mod_xyz_core_calendar_provide_event_action()",id:"mod_xyz_core_calendar_provide_event_action",level:4},{value:"mod_xyz_core_calendar_event_action_shows_item_count()",id:"mod_xyz_core_calendar_event_action_shows_item_count",level:4},{value:"Refreshing calendar events of activity modules",id:"refreshing-calendar-events-of-activity-modules",level:2},{value:"calendar_get_legacy_events()",id:"calendar_get_legacy_events",level:2},{value:"Changes to Behat",id:"changes-to-behat",level:2},{value:"Drag &amp; drop",id:"drag--drop",level:2},{value:"Dragging action events",id:"dragging-action-events",level:3},{value:"<code>core_calendar_event_timestart_updated</code> (required)",id:"core_calendar_event_timestart_updated-required",level:4},{value:"<code>core_calendar_get_valid_event_timestart_range</code>",id:"core_calendar_get_valid_event_timestart_range",level:4},{value:"Component events",id:"component-events",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{frontMatter:s,metadata:d}),"\n",(0,i.jsxs)(n.p,{children:["This page documents the Calendar API as it is in Moodle 3.3 and later. For the API in older versions of Moodle, see ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Calendar_API_old",children:"Calendar API old"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Calendar API allows you to add, modify and delete events in the calendar for user, groups, courses and the site. As of 3.3 it also allows you to provide actions for these events so that they are then displayed on block_myoverview, which by default is shown on users' dashboard."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The Moodle ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/en/Calendar",children:"Calendar"})," collects and displays calendar events to users. These events are generated by other plugins, like activities, to let the user know of an important date. For example, when an assignment opens for submission."]}),"\n",(0,i.jsx)(n.p,{children:"The block_myoverview plugin displays calendar events that have an action associated with them. For example, an activity may have a due date specified, in which case it will create a calendar action event so that the event will display on the dashboard for the user, as well as the calendar. In order to provide the action associated for this event you have to define a callback in your plugin which is detailed below."}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-event",children:"Creating an event"}),"\n",(0,i.jsxs)(n.p,{children:["Creating a new calendar event. The optional parameter ",(0,i.jsx)(n.code,{children:"$checkcapability"})," is used to check user's capability to add events. By default the ",(0,i.jsx)(n.code,{children:"$checkcapability"})," parameter is set to true. You should set it to false if you have already checked that the user has the capabilities required for the event to be created, for example when an activity is creating an event based on a deadline."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"require_once($CFG->dirroot.'/calendar/lib.php');\n\n$event = new stdClass();\n$event->eventtype = SCORM_EVENT_TYPE_OPEN; // Constant defined somewhere in your code - this can be any string value you want. It is a way to identify the event.\n$event->type = CALENDAR_EVENT_TYPE_STANDARD; // This is used for events we only want to display on the calendar, and are not needed on the block_myoverview.\n$event->name = get_string('calendarstart', 'scorm', $scorm->name);\n$event->description = format_module_intro('scorm', $scorm, $cmid, false);\n$event->format = FORMAT_HTML;\n$event->courseid = $scorm->course;\n$event->groupid = 0;\n$event->userid = 0;\n$event->modulename = 'scorm';\n$event->instance = $scorm->id;\n$event->timestart = $scorm->timeopen;\n$event->visible = instance_is_visible('scorm', $scorm);\n$event->timeduration = 0;\n\ncalendar_event::create($event);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"updating-an-event",children:"Updating an event"}),"\n",(0,i.jsxs)(n.p,{children:["You can update an existing event in database by providing at least the event id. If the event is a part of a chain of repeated events, the rest of series event will also be updated (depending on the value of property ",(0,i.jsx)(n.code,{children:"repeateditall"}),"). This function could also be used to insert new event to database, if the given event does not exist yet. The optional parameter ",(0,i.jsx)(n.code,{children:"$checkcapability"})," is used to check user's capability to edit/add events. By default the ",(0,i.jsx)(n.code,{children:"$checkcapability"})," parameter is set to true. You should set it to false if you have already checked that the user has the capabilities required for the event to be updated, for example when an activity is updating an event based on a change to it's settings."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$eventid = required_param('id', PARAM_INT);\n$event = calendar_event::load($eventid);\n\n$data = $mform->get_data();\n$event->update($data);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deleting-an-event",children:"Deleting an event"}),"\n",(0,i.jsxs)(n.p,{children:["You can delete an existing event from the database. The optional parameter ",(0,i.jsx)(n.code,{children:"$deleterepeated"})," is used as an indicator to remove the rest of repeated events. The default value for ",(0,i.jsx)(n.code,{children:"$deleterepeated"})," is true. Deleting an event will also delete all associated files related to the event's editor context."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$eventid = required_param('id', PARAM_INT);\n$event = calendar_event::load($eventid);\n$event->delete($repeats);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"event-priority",children:"Event priority"}),"\n",(0,i.jsx)(n.p,{children:"There might be cases that an activity event will have user and/or group overrides. Therefore we need a way to show only the relevant event on the user's calendar. This is where the 'priority' field comes in."}),"\n",(0,i.jsx)(n.p,{children:"The event priority is set to the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NULL for non-override events."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$event->priority = null;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"0 for user override events."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$event->priority = CALENDAR_EVENT_USER_OVERRIDE_PRIORITY;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A positive integer for group events."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For integer and non-null event priorities, the lower the value, the higher the priority is. Meaning, user overrides always have a higher priority than group overrides. Group override priorities are currently being determined in two ways in core activities:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the assignment module, the event priorities for group overrides are being determined from the ",(0,i.jsx)(n.code,{children:"sortorder"})," column in the 'assign_overrides' table."]}),"\n",(0,i.jsxs)(n.li,{children:["In the lesson and quiz modules, the event priorities for group overrides are being calculated using the functions ",(0,i.jsx)(n.code,{children:"lesson_get_group_override_priorities($lessonid)"})," and ",(0,i.jsx)(n.code,{children:"quiz_get_group_override_priorities($quizid)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Should you ever decide to sort out group override priorities by implementing ",(0,i.jsx)(n.code,{children:"*_get_group_override_priorities()"}),", the recommended return structure would be something like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"[\n    'youreventtype1' => $prioritiesforeventtype1,\n    ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"where '$prioritiesforeventtype1' is an associative array that has the timestamp of the group override event as key and the calculated priority as value. For more details, please see the implementation for the lesson module below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Calculates the priorities of timeopen and timeclose values for group overrides for a lesson.\n *\n * @param int $lessonid The lesson ID.\n * @return array|null Array of group override priorities for open and close times. Null if there are no group overrides.\n */\nfunction lesson_get_group_override_priorities($lessonid) {\n    global $DB;\n\n    // Fetch group overrides.\n    $where = 'lessonid = :lessonid AND groupid IS NOT NULL';\n    $params = ['lessonid' => $lessonid];\n    $overrides = $DB->get_records_select('lesson_overrides', $where, $params, '', 'id, groupid, available, deadline');\n    if (!$overrides) {\n        return null;\n    }\n\n    $grouptimeopen = [];\n    $grouptimeclose = [];\n    foreach ($overrides as $override) {\n        if ($override->available !== null && !in_array($override->available, $grouptimeopen)) {\n            $grouptimeopen[] = $override->available;\n        }\n        if ($override->deadline !== null && !in_array($override->deadline, $grouptimeclose)) {\n            $grouptimeclose[] = $override->deadline;\n        }\n    }\n\n    // Sort open times in ascending manner. The earlier open time gets higher priority.\n    sort($grouptimeopen);\n    // Set priorities.\n    $opengrouppriorities = [];\n    $openpriority = 1;\n    foreach ($grouptimeopen as $timeopen) {\n        $opengrouppriorities[$timeopen] = $openpriority++;\n    }\n\n    // Sort close times in descending manner. The later close time gets higher priority.\n    rsort($grouptimeclose);\n    // Set priorities.\n    $closegrouppriorities = [];\n    $closepriority = 1;\n    foreach ($grouptimeclose as $timeclose) {\n        $closegrouppriorities[$timeclose] = $closepriority++;\n    }\n\n    return [\n        'open' => $opengrouppriorities,\n        'close' => $closegrouppriorities\n    ];\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"action-events",children:"Action events"}),"\n",(0,i.jsx)(n.p,{children:"Action events are calendar events that can be actioned. E.g. A student submitting an assignment by a certain date. These events are displayed on the block_myoverview which by default is on users' dashboard. Creating these is the same as creating a normal calendar event except instead of using CALENDAR_EVENT_TYPE_STANDARD as your calendar event type, you use CALENDAR_EVENT_TYPE_ACTION. The events are also sorted on the dashboard by the value specified in the 'timesort' field (unixtime) for the event."}),"\n",(0,i.jsxs)(n.p,{children:["Example of the changes to the above code would be to change the ",(0,i.jsx)(n.code,{children:"type"})," and to specify the ",(0,i.jsx)(n.code,{children:"timesort"})," value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$event->type = CALENDAR_EVENT_TYPE_ACTION;\n$event->timesort = $scorm->timeclose;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"my overview sam student.png",src:t(16381).A+"",width:"1317",height:"652"})}),"\n",(0,i.jsx)(n.h3,{id:"the-callbacks",children:"The callbacks"}),"\n",(0,i.jsx)(n.p,{children:"There are 3 callbacks your module can implement that are used to control when and how your action is shown to the user."}),"\n",(0,i.jsx)(n.h4,{id:"mod_xyz_core_calendar_is_event_visible",children:"mod_xyz_core_calendar_is_event_visible()"}),"\n",(0,i.jsx)(n.p,{children:"This callback determines if an event should be visible throughout the site. For example, the assignment module creates a grading event for teachers. We do not want this event being visible to users who can not perform this action (eg. students), so we return false for those users. If you do not implement this function then the event will always be visible."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Is the event visible?\n *\n * This is used to determine global visibility of an event in all places throughout Moodle. For example,\n * the ASSIGN_EVENT_TYPE_GRADINGDUE event will not be shown to students on their calendar, and\n * ASSIGN_EVENT_TYPE_DUE events will not be shown to teachers.\n *\n * @param calendar_event $event\n * @return bool Returns true if the event is visible to the current user, false otherwise.\n */\nfunction mod_assign_core_calendar_is_event_visible(calendar_event $event) {\n    global $CFG, $USER;\n\n    require_once($CFG->dirroot . '/mod/assign/locallib.php');\n\n    $cm = get_fast_modinfo($event->courseid)->instances['assign'][$event->instance];\n    $context = context_module::instance($cm->id);\n\n    $assign = new assign($context, $cm, null);\n\n    if ($event->eventtype == ASSIGN_EVENT_TYPE_GRADINGDUE) {\n        return $assign->can_grade();\n    } else {\n        return !$assign->can_grade() && $assign->can_view_submission($USER->id);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"mod_xyz_core_calendar_provide_event_action",children:"mod_xyz_core_calendar_provide_event_action()"}),"\n",(0,i.jsx)(n.p,{children:"This function takes a calendar event and provides the action associated with it, or null if there is none in which case the event will not be shown in block_myoverview (but will still be shown in the calendar block). This is used by the block_myoverview plugin. If you do not implement this function then the events created by your plugin will not be shown on the block."}),"\n",(0,i.jsx)(n.p,{children:"Eg."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"function mod_scorm_core_calendar_provide_event_action(calendar_event $event,\n        \\core_calendar\\action_factory $factory) {\n    global $CFG;\n\n    require_once($CFG->dirroot . '/mod/scorm/locallib.php');\n\n    $cm = get_fast_modinfo($event->courseid)->instances['scorm'][$event->instance];\n\n    if (!empty($cm->customdata['timeclose']) && $cm->customdata['timeclose'] < time()) {\n        // The scorm has closed so the user can no longer submit anything.\n        return null;\n    }\n\n    // Restore scorm object from cached values in $cm, we only need id, timeclose and timeopen.\n    $customdata = $cm->customdata ?: [];\n    $customdata['id'] = $cm->instance;\n    $scorm = (object)($customdata + ['timeclose' => 0, 'timeopen' => 0]);\n\n    // Check that the SCORM activity is open.\n    list($actionable, $warnings) = scorm_get_availability_status($scorm);\n\n    return $factory->create_instance(\n        get_string('enter', 'scorm'),\n        new \\moodle_url('/mod/scorm/view.php', array('id' => $cm->id)),\n        1,\n        $actionable\n    );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The variables to pass to ",(0,i.jsx)(n.code,{children:"create_instance()"})," are -"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string $name"})," The name of the event, for example ",(0,i.jsx)(n.code,{children:"get_string('dosomething', 'mod_xyz')"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\\moodle_url $url"})," The URL the user visits in order to perform this action."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int $itemcount"})," This represents the number of items that require action (eg. Need to write 3 forum posts). If this is 0 then the event is not displayed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bool $actionable"})," This determines if the event is currently able to be acted on. Eg. the activity may not currently be open due to date restrictions so the event is shown to the user to let them know that there is an upcoming event but the url will not be active."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"mod_xyz_core_calendar_event_action_shows_item_count",children:"mod_xyz_core_calendar_event_action_shows_item_count()"}),"\n",(0,i.jsxs)(n.p,{children:["This function determines if a given event should display the number of items to action on block_myoverview. For example, if the event type is ",(0,i.jsx)(n.code,{children:"ASSIGN_EVENT_TYPE_GRADINGDUE"})," then we only display the item count if there are one or more assignments to grade. If you do not implement this function then the item count is always hidden. This is usually fine as the majority of events only have an item count of '1' (eg. Submitting an assignment) and there is no need display the item count."]}),"\n",(0,i.jsx)(n.p,{children:"Eg."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Callback function that determines whether an action event should be showing its item count\n * based on the event type and the item count.\n *\n * @param calendar_event $event The calendar event.\n * @param int $itemcount The item count associated with the action event.\n * @return bool\n */\nfunction mod_assign_core_calendar_event_action_shows_item_count(calendar_event $event, $itemcount = 0) {\n    // List of event types where the action event's item count should be shown.\n    $eventtypesshowingitemcount = [\n        ASSIGN_EVENT_TYPE_GRADINGDUE\n    ];\n    // For mod_assign, item count should be shown if the event type is 'gradingdue' and there is one or more item count.\n    return in_array($event->eventtype, $eventtypesshowingitemcount) && $itemcount > 0;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"refreshing-calendar-events-of-activity-modules",children:"Refreshing calendar events of activity modules"}),"\n",(0,i.jsx)(n.p,{children:"A new ad-hoc task  'refresh_mod_calendar_events_task' has been created. This task basically loops through all of the activity modules that implement the '*_refresh_events()' hook."}),"\n",(0,i.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"// Create the instance.\n$refreshtask = new refresh_mod_calendar_events_task();\n\n// Add custom data.\n$customdata = [\n    'plugins' => ['assign', 'lesson', 'quiz'] // Optional. If not specified, it will refresh the events of all of the activity modules.\n];\n$refreshtask->set_custom_data($customdata);\n\n// Queue it.\n\\core\\task\\manager::queue_adhoc_task($refreshtask);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"calendar_get_legacy_events",children:"calendar_get_legacy_events()"}),"\n",(0,i.jsx)(n.p,{children:"This functions accepts the same inputs as 'calendar_get_events()' but is now utilising the new Moodle Calendar API system. It respects overrides and will also add the action properties, whenever appropriate."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Note that this function will not work as expected if you pass a list of user ids as the current user session is internally used to determine which events should be visible. More info in ",(0,i.jsx)(n.a,{href:"https://tracker.moodle.org/browse/%5BMDL-60340",children:"https://tracker.moodle.org/browse/[MDL-60340"}),"](",(0,i.jsx)(n.a,{href:"https://tracker.moodle.org/browse/MDL-60340",children:"https://tracker.moodle.org/browse/MDL-60340"}),")"]})}),"\n",(0,i.jsx)(n.h2,{id:"changes-to-behat",children:"Changes to Behat"}),"\n",(0,i.jsx)(n.p,{children:'The "And I follow "Course1"" Behat step won\'t work from the Dashboard anymore and has been replaced with "And I am on "Course 1" course homepage" where \'Course 1\' is the fullname of the course.'}),"\n",(0,i.jsx)(n.h2,{id:"drag--drop",children:"Drag & drop"}),"\n",(0,i.jsx)(n.p,{children:"The calendar supports dragging and dropping events within the calendar in order to change the start day for the event. Each type of calendar event can be dragged by a user with sufficient permissions to edit the event."}),"\n",(0,i.jsx)(n.h3,{id:"dragging-action-events",children:"Dragging action events"}),"\n",(0,i.jsx)(n.p,{children:"When an action event is dragged the corresponding property will also be updated in the activity instance that generated the event. For example, dragging the assignment due date event will result in the assignment activity's due date to be changed."}),"\n",(0,i.jsxs)(n.p,{children:["In order to drag an action event the logged in user must have the ",(0,i.jsx)(n.code,{children:"moodle/course:manageactivities"})," capability in the activity that generated the event."]}),"\n",(0,i.jsx)(n.p,{children:"For an action event to be draggable the activity that generated it will need to have implemented at least one (but ideally both) callback to handle updating itself after the calendar event is dragged."}),"\n",(0,i.jsxs)(n.h4,{id:"core_calendar_event_timestart_updated-required",children:[(0,i.jsx)(n.code,{children:"core_calendar_event_timestart_updated"})," (required)"]}),"\n",(0,i.jsx)(n.p,{children:"This callback is required to be implemented by any activity that wishes to have it's action events draggable in the calendar."}),"\n",(0,i.jsx)(n.p,{children:"This callback handles updating the activity instance based on the changed action event. The callback will receive the updated calendar event and the corresponding activity instance."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"function mod_feedback_core_calendar_event_timestart_updated(\\calendar_event $event, \\stdClass $feedback) {\n    global $CFG, $DB;\n\n    if (empty($event->instance) || $event->modulename != 'feedback') {\n        return;\n    }\n\n    if ($event->instance != $feedback->id) {\n        return;\n    }\n\n    if (!in_array($event->eventtype, [FEEDBACK_EVENT_TYPE_OPEN, FEEDBACK_EVENT_TYPE_CLOSE])) {\n        return;\n    }\n\n    $courseid = $event->courseid;\n    $modulename = $event->modulename;\n    $instanceid = $event->instance;\n    $modified = false;\n\n    $coursemodule = get_fast_modinfo($courseid)->instances[$modulename][$instanceid];\n    $context = context_module::instance($coursemodule->id);\n\n    // The user does not have the capability to modify this activity.\n    if (!has_capability('moodle/course:manageactivities', $context)) {\n        return;\n    }\n\n    if ($event->eventtype == FEEDBACK_EVENT_TYPE_OPEN) {\n        // If the event is for the feedback activity opening then we should\n        // set the start time of the feedback activity to be the new start\n        // time of the event.\n        if ($feedback->timeopen != $event->timestart) {\n            $feedback->timeopen = $event->timestart;\n            $feedback->timemodified = time();\n            $modified = true;\n        }\n    } else if ($event->eventtype == FEEDBACK_EVENT_TYPE_CLOSE) {\n        // If the event is for the feedback activity closing then we should\n        // set the end time of the feedback activity to be the new start\n        // time of the event.\n        if ($feedback->timeclose != $event->timestart) {\n            $feedback->timeclose = $event->timestart;\n            $modified = true;\n        }\n    }\n\n    if ($modified) {\n        $feedback->timemodified = time();\n        $DB->update_record('feedback', $feedback);\n        $event = \\core\\event\\course_module_updated::create_from_cm($coursemodule, $context);\n        $event->trigger();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"core_calendar_get_valid_event_timestart_range",children:(0,i.jsx)(n.code,{children:"core_calendar_get_valid_event_timestart_range"})}),"\n",(0,i.jsxs)(n.p,{children:["This callback should calculate the minimum and maximum allowed ",(0,i.jsx)(n.code,{children:"timestart"})," property for the given calendar event. This will typically be based on the properties of the activity instance, for example the ",(0,i.jsx)(n.code,{children:"timeopen"})," and ",(0,i.jsx)(n.code,{children:"timeclose"})," properties of the activity could form the minimum and maximum bounds, respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["These values will be used to provide a visual indicator to the user in the calendar UI for which days are valid for the event to be dragged to. It will also be used to validate that the calendar event is being updated to a valid ",(0,i.jsx)(n.code,{children:"timestart"})," value."]}),"\n",(0,i.jsx)(n.p,{children:"The callback should return an array with two values, the first value representing the minimum cutoff and the second the maximum."}),"\n",(0,i.jsx)(n.p,{children:"The callback can return an array for each of the minimum and maximum cutoffs, if it has them. The array should contain the timestamp of the cutoff and an error message to be displayed to the user if they attempt to drag an event to a day that violates the limit. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"[\n     [1505704373, 'The due date must be after the sbumission start date'], // Minimum cutoff.\n     [1506741172, 'The due date must be before the cutoff date'] // Maximum cutoff.\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the calendar event has no limits then it should return null in for either/both of the min and max cutoff values to indicate that it isn't limited. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"[null, null] // No limits.\n[null, [1510625037, \u201cThis is the maximum cutoff\u201d]] // No minimum cutoff.\n[[1510625037, \u201cThis is the minimum cutoff\u201d], null] // No maximum cutoff.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the calendar event has no valid ",(0,i.jsx)(n.code,{children:"timestart"})," values then the callback should return ",(0,i.jsx)(n.code,{children:"false"}),". This is used to prevent the drag-and-drop of override events in activities that support them (that is Assign, Quiz)."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"function mod_feedback_core_calendar_get_valid_event_timestart_range(\\calendar_event $event, \\stdClass $instance) {\n    $mindate = null;\n    $maxdate = null;\n\n    if ($event->eventtype == FEEDBACK_EVENT_TYPE_OPEN) {\n        // The start time of the open event can't be equal to or after the\n        // close time of the choice activity.\n        if (!empty($instance->timeclose)) {\n            $maxdate = [\n                $instance->timeclose,\n                get_string('openafterclose', 'feedback')\n            ];\n        }\n    } else if ($event->eventtype == FEEDBACK_EVENT_TYPE_CLOSE) {\n        // The start time of the close event can't be equal to or earlier than the\n        // open time of the choice activity.\n        if (!empty($instance->timeopen)) {\n            $mindate = [\n                $instance->timeopen,\n                get_string('closebeforeopen', 'feedback')\n            ];\n        }\n    }\n\n    return [$mindate, $maxdate];\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"component-events",children:"Component events"}),"\n",(0,i.jsx)(n.p,{children:"Starting from Moodle 3.9 plugins other than activity modules can create calendar events, too.  These can be site-level, course category-level, course-level or user events. Events can be standard or action events."}),"\n",(0,i.jsx)(n.p,{children:"Example of creating an event:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$event->component = 'tool_yourtool';\n$event->modulename = '';\n$event->eventtype = 'myeventtype';\n$event->instance = $instanceid; // Whatever instance you want.\n$event->type = CALENDAR_EVENT_TYPE_STANDARD; // Or: $event->type = CALENDAR_EVENT_TYPE_ACTION;\n// ... Other properties, see section \"Create event\" above.\n\n// For site events:\n$event->courseid = SITEID;\n$event->categoryid = 0;\n\n// For category events:\n$event->categoryid = $categoryid;\n$event->courseid = 0;\n\n// For course events:\n$event->courseid = $courseid;\n$event->categoryid = 0;\n\n// For user events:\n$event->courseid = 0;\n$event->categoryid = 0;\n$event->userid = $userid;\n"})}),"\n",(0,i.jsx)(n.p,{children:'If this is an action event, see the "Action events" section above for supported callbacks. Note that currently category-level action events are not displayed on the timeline (but they will be displayed in the calendar). Timeline only displays the site-wide events, user events and events in the courses where user is enrolled.'}),"\n",(0,i.jsx)(n.p,{children:"Events created by the plugins can not be edited or deleted by users in the calendar. Drag&drop is currently not supported for component events."}),"\n",(0,i.jsxs)(n.p,{children:["To change the icon of the event, add the file ",(0,i.jsx)(n.code,{children:"pix/myeventtype.svg"})," to your plugin. You can add font-awesome mapping in ",(0,i.jsx)(n.code,{children:"<pluginname>_get_fontawesome_icon_map()"})," callback."]}),"\n",(0,i.jsx)(n.p,{children:"To change the alt text for the icon add to the language file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$string['myeventtype'] = 'My event type';\n"})})]})}function v(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},16381:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/my_overview_sam_student-2b7f5c8544802255355d6bb89e2362fb.png"}}]);