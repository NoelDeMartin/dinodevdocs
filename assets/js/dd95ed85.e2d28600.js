"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74755],{48174:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(74848),s=t(28453),c=t(78924);const r={title:"Lock API",tags:["API","Lock"]},i=void 0,l={id:"apis/core/lock/index",title:"Lock API",description:"Locking is required whenever you need to prevent two, or more, processes accessing the same resource at the same time. The prime candidate for locking in Moodle is cron. Locking allows multiple cron processes to work on different parts of cron at the same time with no risk that they will conflict (work on the same job at the same time).",source:"@site/docs/apis/core/lock/index.md",sourceDirName:"apis/core/lock",slug:"/apis/core/lock/",permalink:"/moodledevdocs/docs/4.4/apis/core/lock/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/core/lock/index.md",tags:[{label:"API",permalink:"/moodledevdocs/docs/4.4/tags/api"},{label:"Lock",permalink:"/moodledevdocs/docs/4.4/tags/lock"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655961787e3,frontMatter:{title:"Lock API",tags:["API","Lock"]},sidebar:"docs",previous:{title:"HTML Writer API",permalink:"/moodledevdocs/docs/4.4/apis/core/htmlwriter/"},next:{title:"Message API",permalink:"/moodledevdocs/docs/4.4/apis/core/message/"}},a={},d=[{value:"When to use locking",id:"when-to-use-locking",level:2},{value:"Performance",id:"performance",level:2},{value:"Usage",id:"usage",level:2},{value:"Use a different lock type from the default",id:"use-a-different-lock-type-from-the-default",level:2},{value:"Implementing new lock types",id:"implementing-new-lock-types",level:2}];function h(e){const o={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{frontMatter:r,metadata:l}),"\n",(0,n.jsx)(o.p,{children:"Locking is required whenever you need to prevent two, or more, processes accessing the same resource at the same time. The prime candidate for locking in Moodle is cron. Locking allows multiple cron processes to work on different parts of cron at the same time with no risk that they will conflict (work on the same job at the same time)."}),"\n",(0,n.jsx)(o.h2,{id:"when-to-use-locking",children:"When to use locking"}),"\n",(0,n.jsx)(o.p,{children:"When you want to prevent multiple requests from accessing the same resource at the same time. Accessing a resource is a vague description, but it could be for example running a slow running task in the background, running different parts of cron etc."}),"\n",(0,n.jsx)(o.h2,{id:"performance",children:"Performance"}),"\n",(0,n.jsx)(o.p,{children:"Locking is not meant to be fast. Do not use it in code that will be triggered many times in a single request (for example MUC). It is meant to be always correct - even for multiple nodes in a cluster. This implies that the locks are communicated among all the nodes in the cluster, and hence it will never be super quick."}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o.p,{children:"The locking API is used by getting an instance of a lock_factory, and then using it to retrieve locks, and eventually releasing them. You are required to release all your locks, even on the event of failures."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"$timeout = 5;\n\n// A namespace for the locks. Must be prefixed with the component name to prevent conflicts.\n$locktype = 'mod_assign_download_submissions';\n\n// Resource key - needs to uniquely identify the resource that is to be locked. E.g. If you\n// want to prevent a user from running multiple course backups - include the userid in the key.\n$resource = 'user:' . $USER->id;\n\n// Get an instance of the currently configured lock_factory.\n$lockfactory = \\core\\lock\\lock_config::get_lock_factory($locktype);\n\n// Get a new lock for the resource, wait for it if needed.\nif ($lock = $lockfactory->get_lock($resource, $timeout)) {\n    // We have exclusive access to the resource, do the slow zip file generation...\n\n    if ($someerror) {\n        // Always release locks on failure.\n        $lock->release();\n        print_error('blah');\n    }\n\n    // Release the lock once finished.\n    $lock->release();\n\n} else {\n    // We did not get access to the resource in time, give up.\n    throw new moodle_exception('locktimeout');\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"use-a-different-lock-type-from-the-default",children:"Use a different lock type from the default"}),"\n",(0,n.jsx)(o.p,{children:"Change the $CFG->lock_factory setting to one of the other lock types included with core. These are all documented in config-dist.php."}),"\n",(0,n.jsx)(o.h2,{id:"implementing-new-lock-types",children:"Implementing new lock types"}),"\n",(0,n.jsx)(o.p,{children:"If you really want to do this you can. I probably wouldn't recommend it - because the core lock types should be very reliable - and the performance is not really a concern."}),"\n",(0,n.jsx)(o.p,{children:'Add a new local_XXX plugin with an autoloaded class that implements \\core\\lock\\lock_factory.\nSet the site configuration variable "lock_factory" to the full namespaced path to your class in the config.php for example'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-php",children:"$CFG->lock_factory = '\\local_redis\\lock\\redis_lock_factory';\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["See ",(0,n.jsx)(o.code,{children:"lib/tests/lock_test.php"})," for an example of unit tests which can be run on a custom lock instance to verify it for correctness (run_on_lock_factory)."]})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);