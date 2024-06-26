"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[83766],{24074:(e,s,r)=>{r.d(s,{Ke:()=>d});r(96540);var i=r(72511),o=r(81090),n=r(74848);function t(e,s){const r=(0,i.kF)(e);return r&&void 0!==r[s]?(0,n.jsx)(n.Fragment,{children:r[s]}):(0,n.jsx)(n.Fragment,{children:"not yet released"})}function l(e){let{releaseName:s}=e;return t(s,"releaseDate")}function d(e){let{releaseName:s}=e;const r=s.endsWith(".0")?s.slice(0,-2):s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Release date:"," ",(0,n.jsx)(l,{releaseName:s}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("p",{children:["Here is"," ",(0,n.jsxs)(o.A,{href:`https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%22${r}%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true`,children:["the full list of fixed issues in"," ",s]}),"."]})]})}},24173:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=r(74848),o=r(28453),n=r(78924),t=r(24074);const l={title:"Moodle 4.0.11",tags:["Release notes","Moodle 4.0"],sidebar_position:11,moodleVersion:"4.0.11",description:"The release notes for Moodle 4.0.11."},d=void 0,a={id:"releases/4.0/4.0.11",title:"Moodle 4.0.11",description:"The release notes for Moodle 4.0.11.",source:"@site/general/releases/4.0/4.0.11.md",sourceDirName:"releases/4.0",slug:"/releases/4.0/4.0.11",permalink:"/moodledevdocs/general/releases/4.0/4.0.11",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/4.0/4.0.11.md",tags:[{label:"Release notes",permalink:"/moodledevdocs/general/tags/release-notes"},{label:"Moodle 4.0",permalink:"/moodledevdocs/general/tags/moodle-4-0"}],version:"current",lastUpdatedBy:"Michael Hawkins",lastUpdatedAt:1697542972e3,sidebarPosition:11,frontMatter:{title:"Moodle 4.0.11",tags:["Release notes","Moodle 4.0"],sidebar_position:11,moodleVersion:"4.0.11",description:"The release notes for Moodle 4.0.11."},sidebar:"releaseNotes",previous:{title:"Moodle 4.0.10",permalink:"/moodledevdocs/general/releases/4.0/4.0.10"},next:{title:"Moodle 4.0.12",permalink:"/moodledevdocs/general/releases/4.0/4.0.12"}},c={},h=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2}];function m(e){const s={a:"a",h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{frontMatter:l,metadata:a}),"\n","\n",(0,i.jsx)(t.Ke,{releaseName:l.moodleVersion}),"\n",(0,i.jsx)(s.h2,{id:"general-fixes-and-improvements",children:"General fixes and improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-78549",children:"MDL-78549"})," - Cloze question: Correct answer is not displayed"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-79360",children:"MDL-79360"})," - Broken nolink tag support in text filtering"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"accessibility-improvements",children:"Accessibility improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-78806",children:"MDL-78806"})," - Accessibility issue: Page title does not contain website (WCAG 2.1 - 2.4.2 Page Titled)"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"security-improvements",children:"Security improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tracker.moodle.org/browse/MDL-79017",children:"MDL-79017"})," - Semicolon or closing curly braces in reference filename break \\file_storage::unpack_reference"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"security-fixes",children:"Security fixes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451580",children:"MSA-23-0031"})," - Authenticated remote code execution risk in Lesson"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451581",children:"MSA-23-0032"})," - Authenticated remote code execution risk in IMSCP"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451582",children:"MSA-23-0033"})," - XSS risk when using CSV grade import method"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451584",children:"MSA-23-0035"})," - Duplicating a BigBlueButton activity assigns the same meeting ID"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451585",children:"MSA-23-0036"})," - Stored XSS and potential IDOR risk in Wiki comments"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451586",children:"MSA-23-0037"})," - Auto-populated H5P author name causes a potential information leak"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451587",children:"MSA-23-0038"})," - Stored XSS in quiz grading report via user ID number"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451588",children:"MSA-23-0039"})," - XSS risk when previewing data in course upload tool"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451589",children:"MSA-23-0040"})," - Make file serving endpoints revision control stricter"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451590",children:"MSA-23-0041"})," - Insufficient capability checks when updating the parent of a course category"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451591",children:"MSA-23-0042"})," - RCE due to LFI risk in some misconfigured shared hosting environments"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://moodle.org/mod/forum/discuss.php?d=451592",children:"MSA-23-0043"})," - Forum summary report shows students from other groups when in Separate Groups mode"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);