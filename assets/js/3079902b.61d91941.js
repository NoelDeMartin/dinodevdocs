"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[56957],{22158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),o=n(28453),a=n(78924);const s={title:"A better contribution: Comments in code",sidebar_label:"Comments in code",description:"The better contribution guide to writing comments in code",tags:["Getting started","Contributing","Best practices"]},r=void 0,d={id:"development/abc/comments",title:"A better contribution: Comments in code",description:"The better contribution guide to writing comments in code",source:"@site/general/development/abc/comments.md",sourceDirName:"development/abc",slug:"/development/abc/comments",permalink:"/moodledevdocs/general/development/abc/comments",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/abc/comments.md",tags:[{label:"Getting started",permalink:"/moodledevdocs/general/tags/getting-started"},{label:"Contributing",permalink:"/moodledevdocs/general/tags/contributing"},{label:"Best practices",permalink:"/moodledevdocs/general/tags/best-practices"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1713332374e3,frontMatter:{title:"A better contribution: Comments in code",sidebar_label:"Comments in code",description:"The better contribution guide to writing comments in code",tags:["Getting started","Contributing","Best practices"]},sidebar:"coding",previous:{title:"Making a better contribution",permalink:"/moodledevdocs/general/development/abc"},next:{title:"Developer FAQ",permalink:"/moodledevdocs/general/development/abc/faq"}},l={},c=[];function m(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{InvalidExample:n,ValidExample:r}=t;return n||p("InvalidExample",!0),r||p("ValidExample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{frontMatter:s,metadata:d}),"\n",(0,i.jsx)(t.p,{children:"Moodle coding style rules tell us to write comments for pretty much everything we create,\nand this can seem like a chore. However, there is no point creating the world's most useful\nclass if no-one can understand how to use it. So, if we have to write comments, how can we make them\nuseful?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Take a moment to imagine sitting down with another intelligent developer who does not\nyet know about the thing you are working on. What would you want to say to them?\nDistill down the essence of that into text. In the post-pandemic world, you may prefer\nto imagine a call, but the psychological trick of imagining a specific human being as\nthe audience is worth playing on yourself."}),"\n",(0,i.jsx)(t.li,{children:"Any time you find you used a word that is part of the name of the thing in the comment, be suspicious.\nThat word is probably not adding any value. (Sometimes it is unavoidable.)"}),"\n",(0,i.jsx)(t.li,{children:"Going further, if all the words in the comment just part of the name, what is the point? You can do better than that!"}),"\n",(0,i.jsx)(t.li,{children:"If in doubt, think about adding value: what is not already obvious from the name (and type)?\nThat is what really needs to be explained. For example, if something is being passed as a string,\nwhat formats will work?"}),"\n",(0,i.jsx)(t.li,{children:"An example can be worth a dozen words, as you can see in the good example below :-)"}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="This is what we don\'t want to do"',children:"/**\n * @param string $value The grade value.\n */\n"})}),(0,i.jsx)(t.p,{children:"This comment just repeats the name of the variable, but doesn't give any more detail on what you should pass. Does it, for example, expect a raw value, or a letter representation of the grade?"})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Here is a better example"',children:"/**\n * @param $component Frankenstyle component name, e.g. 'mod_forum'\n */\n"})}),(0,i.jsx)(t.p,{children:"This comment is better because it describes the format of the parameter, and gives an example."})]}),"\n",(0,i.jsx)(t.p,{children:"Similar principles apply when writing inline comments in code, to explain what is going on. The most\nvalue is added, not by writing out in English words things that are obvious from reading the code,\nbut by noting things that are not immediately obvious, but which help to understand the code. For example:"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="Another poor example"',children:"$runinsert = function (int $lastslot, array $tagstrings) use ($DB) {\n    $conditiondata = $DB->get_field('question_set_references', 'filtercondition',\n        ['itemid' => $lastslot, 'component' => 'mod_quiz', 'questionarea' => 'slot']);\n    // If there is any invalid slot data found, ignore that data.\n    if (!empty($conditiondata)) {\n        $condition = json_decode($conditiondata);\n        $condition->tags = $tagstrings;\n        $DB->set_field('question_set_references', 'filtercondition', json_encode($condition),\n                ['itemid' => $lastslot, 'component' => 'mod_quiz', 'questionarea' => 'slot']);\n    }\n};\n"})}),(0,i.jsxs)(t.p,{children:["Yes! I can see you are ignoring the data, rather than saving it, if ",(0,i.jsx)(t.code,{children:"$conditiondata"})," is empty. What I am wondering is:\nIs that the right thing to do? Isn't this a data-loss bug?"]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",metastring:'title="A better version of the previous example"',children:"$runinsert = function (int $lastslot, array $tagstrings) use ($DB) {\n    $conditiondata = $DB->get_field('question_set_references', 'filtercondition',\n        ['itemid' => $lastslot, 'component' => 'mod_quiz', 'questionarea' => 'slot']);\n    // It is possible to have junk tags left in the database, without a corresponding\n    // slot, because of an old bugs (e.g. MDL-76193). Therefore, if the slot is not found,\n    // we can safely discard these tags.\n    if (!empty($conditiondata)) {\n        $condition = json_decode($conditiondata);\n        $condition->tags = $tagstrings;\n        $DB->set_field('question_set_references', 'filtercondition', json_encode($condition),\n                ['itemid' => $lastslot, 'component' => 'mod_quiz', 'questionarea' => 'slot']);\n    }\n};\n"})}),(0,i.jsx)(t.p,{children:"This comment is better because it describes why discarding this data is the right thing to do here."})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);