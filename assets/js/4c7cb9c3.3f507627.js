"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[68547],{8590:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>t,contentTitle:()=>n,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var r=i(74848),o=i(28453),l=i(78924);const d={title:"DML drivers",tags:["core_dml","DML","core","API","RDBM"]},n=void 0,a={id:"apis/core/dml/drivers",title:"DML drivers",description:"A number of native drivers are included with Moodle, including those with support for:",source:"@site/versioned_docs/version-4.3/apis/core/dml/drivers.md",sourceDirName:"apis/core/dml",slug:"/apis/core/dml/drivers",permalink:"/moodledevdocs/docs/4.3/apis/core/dml/drivers",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.3/apis/core/dml/drivers.md",tags:[{label:"core_dml",permalink:"/moodledevdocs/docs/4.3/tags/core-dml"},{label:"DML",permalink:"/moodledevdocs/docs/4.3/tags/dml"},{label:"core",permalink:"/moodledevdocs/docs/4.3/tags/core"},{label:"API",permalink:"/moodledevdocs/docs/4.3/tags/api"},{label:"RDBM",permalink:"/moodledevdocs/docs/4.3/tags/rdbm"}],version:"4.3",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1697795601e3,frontMatter:{title:"DML drivers",tags:["core_dml","DML","core","API","RDBM"]},sidebar:"docs",previous:{title:"Transactions",permalink:"/moodledevdocs/docs/4.3/apis/core/dml/delegated-transactions"},next:{title:"DML exceptions",permalink:"/moodledevdocs/docs/4.3/apis/core/dml/exceptions"}},t={},c=[{value:"Query logging",id:"query-logging",level:2},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{frontMatter:d,metadata:a}),"\n",(0,r.jsx)(s.p,{children:"A number of native drivers are included with Moodle, including those with support for:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"MySQLi"}),"\n",(0,r.jsx)(s.li,{children:"MariaDB"}),"\n",(0,r.jsx)(s.li,{children:"PostgreSQL"}),"\n",(0,r.jsx)(s.li,{children:"Oracle"}),"\n",(0,r.jsx)(s.li,{children:"Microsoft SQL Server"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"These drivers are supported using DML Database Driver layer, which has a number of discreet benefits:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"more optimised and probably faster"}),"\n",(0,r.jsx)(s.li,{children:"consume less memory"}),"\n",(0,r.jsx)(s.li,{children:"better possibility to improve logging, debugging, profiling, etc."}),"\n",(0,r.jsx)(s.li,{children:"less code, easier to fix and maintain"}),"\n",(0,r.jsx)(s.li,{children:"and more"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"query-logging",children:"Query logging"}),"\n",(0,r.jsx)(s.p,{children:"The native DML drivers support logging of database queries to database table, which can be enabled in config.php:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",metastring:'title="config.php"',children:"$CFG->dboptions = [\n    'dbpersist' => 0,\n    //'logall'   => true,\n    'logslow'  => 5,\n    'logerrors'  => true,\n];\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"logall"})," - log all queries - suitable only for developers, causes high server loads"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"logslow"})," - log queries that take longer than specified number of seconds (float values are accepted)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"logerrors"})," - log all error queries"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/",children:"DML functions"}),": Where all the functions used to handle DB data (",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Data_Manipulation_Language",children:"DML"}),") are defined."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/moodledevdocs/docs/4.3/apis/core/dml/exceptions",children:"DML exceptions"}),": New DML code is throwing exceptions instead of returning false if anything goes wrong"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);