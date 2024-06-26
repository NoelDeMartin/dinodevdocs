"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[25890],{75283:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(74848),t=i(28453),r=i(78924);const a={title:"Security",tags:["Coding guidelines","Developer processes","Policies","Security"]},o=void 0,l={id:"development/policies/security/index",title:"Security",description:"This page describes how to write secure Moodle code that is not vulnerable to anything that evil people may try to throw at it.",source:"@site/general/development/policies/security/index.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/",permalink:"/moodledevdocs/general/development/policies/security/",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/index.md",tags:[{label:"Coding guidelines",permalink:"/moodledevdocs/general/tags/coding-guidelines"},{label:"Developer processes",permalink:"/moodledevdocs/general/tags/developer-processes"},{label:"Policies",permalink:"/moodledevdocs/general/tags/policies"},{label:"Security",permalink:"/moodledevdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1712757252e3,frontMatter:{title:"Security",tags:["Coding guidelines","Developer processes","Policies","Security"]},sidebar:"coding",previous:{title:"PHP versions",permalink:"/moodledevdocs/general/development/policies/php"},next:{title:"Unauthenticated access",permalink:"/moodledevdocs/general/development/policies/security/unauthenticated-access"}},c={},d=[{value:"Security of web applications",id:"security-of-web-applications",level:2},{value:"Secure web app requirements",id:"secure-web-app-requirements",level:3},{value:"Balanced security",id:"balanced-security",level:3},{value:"Moodle security design",id:"moodle-security-design",level:2},{value:"Types of users",id:"types-of-users",level:3},{value:"Administrators",id:"administrators",level:4},{value:"Teachers",id:"teachers",level:4},{value:"Students",id:"students",level:4},{value:"Guests",id:"guests",level:4},{value:"Capability risks",id:"capability-risks",level:3},{value:"Common types of security vulnerability",id:"common-types-of-security-vulnerability",level:2},{value:"Summary of the guidelines",id:"summary-of-the-guidelines",level:2},{value:"Authenticate the user",id:"authenticate-the-user",level:3},{value:"Verify course and module access",id:"verify-course-and-module-access",level:3},{value:"Check permissions",id:"check-permissions",level:3},{value:"Don&#39;t trust any input from users",id:"dont-trust-any-input-from-users",level:3},{value:"Clean and escape data before output",id:"clean-and-escape-data-before-output",level:3},{value:"Escape data before storing it in the database",id:"escape-data-before-storing-it-in-the-database",level:3},{value:"Escape data before using it in shell commands",id:"escape-data-before-using-it-in-shell-commands",level:3},{value:"Log every request",id:"log-every-request",level:3},{value:"Other good practice",id:"other-good-practice",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{frontMatter:a,metadata:l}),"\n",(0,n.jsx)(s.p,{children:"This page describes how to write secure Moodle code that is not vulnerable to anything that evil people may try to throw at it."}),"\n",(0,n.jsxs)(s.admonition,{title:"Page organisation",type:"info",children:[(0,n.jsxs)(s.p,{children:["The page is organised around the ",(0,n.jsx)(s.a,{href:"#common-types-of-security-vulnerability",children:"common types of security vulnerability"}),". For each one, it explains:"]}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"what the danger is,"}),"\n",(0,n.jsx)(s.li,{children:"how Moodle is designed to avoid the problem,"}),"\n",(0,n.jsx)(s.li,{children:"what you need to do as a Moodle developer to keep your code secure, and"}),"\n",(0,n.jsx)(s.li,{children:"what you can do as an administrator, to make your Moodle more secure."}),"\n"]}),(0,n.jsx)(s.p,{children:"The explanation of each vulnerability is on a separate page, linked to in the list below."})]}),"\n",(0,n.jsx)(s.p,{children:"This page also summarises all the key guidelines."}),"\n",(0,n.jsx)(s.h2,{id:"security-of-web-applications",children:"Security of web applications"}),"\n",(0,n.jsx)(s.h3,{id:"secure-web-app-requirements",children:"Secure web app requirements"}),"\n",(0,n.jsx)(s.p,{children:"Some companies require the maximum level of security for web applications. You can often see similar general recommendations:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"separate administration backend"}),"\n",(0,n.jsx)(s.li,{children:"no sensitive information stored in web application"}),"\n",(0,n.jsx)(s.li,{children:"communication has to be encrypted using SSL"}),"\n",(0,n.jsx)(s.li,{children:"log all user actions"}),"\n",(0,n.jsx)(s.li,{children:"server applications have to be completely separated"}),"\n",(0,n.jsx)(s.li,{children:"no files uploaded by users on server"}),"\n",(0,n.jsx)(s.li,{children:"no rich text entered by users on server (limited plain text only)"}),"\n",(0,n.jsx)(s.li,{children:"validate user identity and actions via separate channel"}),"\n",(0,n.jsx)(s.li,{children:"always keep every software up-to-date"}),"\n",(0,n.jsx)(s.li,{children:"no 3rd party browser extensions recommended"}),"\n",(0,n.jsx)(s.li,{children:"use only one web page, do not open multiple windows with different sites, close/open browser before and after using the secure app"}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Web-based banking systems"})," are the best examples of these secure web applications. Security is the top-most priority here, security incidents may cost money - either the customer, bank or insurance company, the public image of the institution may be damaged too. Limiting factors may be the cost of application development, maintenance and usability but also the cost of communication via the alternative channels."]})}),"\n",(0,n.jsx)(s.h3,{id:"balanced-security",children:"Balanced security"}),"\n",(0,n.jsx)(s.p,{children:"As you can see, many web applications today violate the security design rules. For example, web-based mail systems have to accept rich text messages with file attachments, mail messages often contain very sensitive information. In fact, the Web 2.0 idea goes directly against the security design rules, everybody is submitting content - only app designer/administrator should be adding trusted content."}),"\n",(0,n.jsx)(s.p,{children:"When designing web applications we have to find out what our users are supposed to be doing and then find some reasonable balance between features and security."}),"\n",(0,n.jsx)(s.h2,{id:"moodle-security-design",children:"Moodle security design"}),"\n",(0,n.jsx)(s.p,{children:"The security of web application depends on the intended use and features available for each type of user."}),"\n",(0,n.jsx)(s.h3,{id:"types-of-users",children:"Types of users"}),"\n",(0,n.jsx)(s.h4,{id:"administrators",children:"Administrators"}),"\n",(0,n.jsx)(s.p,{children:"Administrators have following privileges:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Change all settings"}),"\n",(0,n.jsx)(s.li,{children:"Create courses"}),"\n",(0,n.jsx)(s.li,{children:"Access all courses"}),"\n",(0,n.jsx)(s.li,{children:"Modify language packs"}),"\n",(0,n.jsx)(s.li,{children:"Modify all users"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Indirectly administrators are allowed to execute shell and PHP code. Moodle administrators may be partially restricted by hardcoding settings in config.php.\nLow level server administrators can not be restricted because they can read content of PHP files and may modify them."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"All administrators have to be fully trusted."})}),"\n",(0,n.jsx)(s.h4,{id:"teachers",children:"Teachers"}),"\n",(0,n.jsx)(s.p,{children:"Teachers are usually creating course content, enrolling students and teaching. They usually need following privileges:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Upload files and submit html texts"}),"\n",(0,n.jsx)(s.li,{children:"Create and manage activities"}),"\n",(0,n.jsx)(s.li,{children:"Access student grades and other personal information"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Uploading of files with JavaScript, flash and other scripted is often considered to be a security risk. Unfortunately we can not remove these risks from teacher roles because even basic SCORM packages consist of HTML and JavaScript which needs to use user session."}),"\n",(0,n.jsx)(s.p,{children:"Browser trusts everything coming from one server, it does not know anything about our courses or origin of data. Once the file is uploaded to server it becomes part of the server application. It is not possible to differentiate between wanted and unwanted code stored on the server."}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"All teachers with risky capabilities have to be trusted, it is not possible to give teacher access to students. In theory teachers may use XSS attacks to gain administrator access."}),(0,n.jsx)(s.p,{children:"Technically it would be possible to create a system where teachers can not attack other users but it would prevent all JavaScript, Flash, SCORM, Java, HTML forms, SVG, etc."})]}),"\n",(0,n.jsx)(s.h4,{id:"students",children:"Students"}),"\n",(0,n.jsx)(s.p,{children:"Students are participating in courses, they are not trusted. Students need following privileges:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Post formatted text with inline images and attachments"}),"\n",(0,n.jsx)(s.li,{children:"Upload binary documents"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Uploaded files must not be opened directly in browser from the same server. Instead the files need to be served from different domain, or server has to force download of all files to local hard drive before opening them."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"All student submitted text has to be sanitised before printing the text on any page, this prevent XSS attacks on other users but at the same time prevents Flash, JavaScript, SVG and all other HTML scripting. Moodle uses HTML Purifier library for this purpose."})}),"\n",(0,n.jsx)(s.h4,{id:"guests",children:"Guests"}),"\n",(0,n.jsx)(s.p,{children:"For security reasons unregistered users can not be allowed to upload any files or submit any text that is stored in database. Guests could try to spam other users, exploit problems in HTML cleaning routines, abuse other vulnerabilities or try social engineering based attacks."}),"\n",(0,n.jsx)(s.p,{children:"Sites with enabled user sign-up via email have to take extra care in order to prevent spamming and other types of attacks."}),"\n",(0,n.jsx)(s.h3,{id:"capability-risks",children:"Capability risks"}),"\n",(0,n.jsx)(s.p,{children:"Moodle is very flexible system, administrators may define multiple roles. Each role is a set of capabilities defined at system level, roles may be modified via overrides at lower context levels. Risks are part of description of each capability, administrators have to make sure only trusted users get potentially dangerous capabilities."}),"\n",(0,n.jsx)(s.h2,{id:"common-types-of-security-vulnerability",children:"Common types of security vulnerability"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/unauthenticated-access",children:"Unauthenticated access"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/unauthorised-access",children:"Unauthorised access"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/crosssite-request-forgery",children:"Cross-site request forgery (XSRF)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/crosssite-scripting",children:"Cross-site scripting (XSS)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/sql-injection",children:"SQL injection"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/commandline-injection",children:"Command-line injection"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/dataloss",children:"Data-loss"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/info-leakage",children:"Confidential information leakage"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/configinfo-leakage",children:"Configuration information leakage"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/session-fixation",children:"Session fixation"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/dos",children:"Denial of service (DOS)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/bruteforcing-login",children:"Brute-forcing login"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/insecure-config",children:"Insecure configuration management"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/bufferoverruns",children:"Buffer overruns and other platform weaknesses"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"./security/socialengineering",children:"Social engineering"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"summary-of-the-guidelines",children:"Summary of the guidelines"}),"\n",(0,n.jsx)(s.h3,{id:"authenticate-the-user",children:"Authenticate the user"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["With very few exceptions, every script should call ",(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/access#require_login",children:(0,n.jsx)(s.code,{children:"require_login"})})," or ",(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/access#require_course_login",children:(0,n.jsx)(s.code,{children:"require_course_login"})})," as near the start as possible."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"verify-course-and-module-access",children:"Verify course and module access"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["All course areas have to be protected by ",(0,n.jsx)(s.code,{children:"require_login"})," or ",(0,n.jsx)(s.code,{children:"require_course_login"})," with correct ",(0,n.jsx)(s.code,{children:"$course"})," parameter."]}),"\n",(0,n.jsxs)(s.li,{children:["All module areas have to be protected by ",(0,n.jsx)(s.code,{children:"require_login"})," or ",(0,n.jsx)(s.code,{children:"require_course_login"})," with correct ",(0,n.jsx)(s.code,{children:"$course"})," and ",(0,n.jsx)(s.code,{children:"$cm"})," parameter"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"check-permissions",children:"Check permissions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Before allowing the user to see anything or do anything, call to ",(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/access#has_capability",children:(0,n.jsx)(s.code,{children:"has_capability"})})," or ",(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/access#require_capability",children:(0,n.jsx)(s.code,{children:"require_capability"})}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Capabilities should be annotated with the appropriate ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/roles#risk-bitmask-in-capabilities",children:"risks"})}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["If appropriate, restrict what people can see according to ",(0,n.jsx)(s.strong,{children:"groups"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"dont-trust-any-input-from-users",children:"Don't trust any input from users"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/form",children:"moodleforms"})})," whenever possible, with an appropriate ",(0,n.jsx)(s.code,{children:"setType"})," method call for each field."]}),"\n",(0,n.jsxs)(s.li,{children:["Before performing actions, use ",(0,n.jsx)(s.code,{children:"data_submitted() && confirm_sesskey()"})," to check sesskey and that you are handling a POST request."]}),"\n",(0,n.jsx)(s.li,{children:"Before destroying large amounts of data, add a confirmation step."}),"\n",(0,n.jsxs)(s.li,{children:["If not using a moodleform, clean input using ",(0,n.jsx)(s.code,{children:"optional_param"})," or ",(0,n.jsx)(s.code,{children:"required_param"})," with an appropriate ",(0,n.jsx)(s.code,{children:"PARAM_..."})," type.\n** Do not access ",(0,n.jsx)(s.code,{children:"$_GET"}),", ",(0,n.jsx)(s.code,{children:"$_POST"})," or ",(0,n.jsx)(s.code,{children:"$_REQUEST"})," directly.\n** Group optional_param and required_param calls together at the top of the script, to make them easy to find."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Similarly, clean data from other external resources like RSS feeds before use."}),"\n",(0,n.jsx)(s.h3,{id:"clean-and-escape-data-before-output",children:"Clean and escape data before output"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"s"})," or ",(0,n.jsx)(s.code,{children:"p"})," to output plain text content."]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"format_string"})," to output content with minimal HTML like multi-lang spans (for example, course and activity names)."]}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.code,{children:"format_text"})," to output all other content.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Only use ",(0,n.jsx)(s.code,{children:"$options->noclean"})," if it requires a capability with ",(0,n.jsx)(s.code,{children:"RISK_XSS"})," to input that content (for example web page resources)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Data destined for JavaScript should be escaped using ",(0,n.jsx)(s.code,{children:"$PAGE->requires->data_for_js"})," (Moodle 2.0 onwards) or ",(0,n.jsx)(s.code,{children:"addslashes_js"})," (Moodle 1.9)."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"More info",type:"info",children:(0,n.jsxs)(s.p,{children:["We recommend that you follow the ",(0,n.jsx)(s.a,{href:"/docs/4.4/apis/subsystems/output#output-functions",children:"Output functions"})," to get a better understanding of how dynamic data should be sent from Moodle to the browser."]})}),"\n",(0,n.jsx)(s.h3,{id:"escape-data-before-storing-it-in-the-database",children:"Escape data before storing it in the database"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.a,{href:"/moodledevdocs/general/development/tools/xmldb",children:"XMLDB"})," library. This takes care of most escaping issues for you."]}),"\n",(0,n.jsxs)(s.li,{children:["When you must use custom SQL code, ",(0,n.jsx)(s.strong,{children:"use place-holders"})," to insert values into the queries.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Before Moodle 2.0, you had to build SQL by concatenating strings. Take particular care, especially with quoting values, to avoid SQL injection vulnerabilities."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"addslashes"})," method should no longer be use anywhere in Moodle 2.0 onwards."]}),"\n",(0,n.jsx)(s.li,{children:"Variables must be passed to database queries through bound parameters."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"escape-data-before-using-it-in-shell-commands",children:"Escape data before using it in shell commands"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Avoid shell commands if at all possible.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Look to see if there is a PHP library instead."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["If you can't avoid shell commands, use ",(0,n.jsx)(s.code,{children:"escapeshellcmd"})," and ",(0,n.jsx)(s.code,{children:"escapeshellarg"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"log-every-request",children:"Log every request"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Every script should log an ",(0,n.jsx)(s.a,{href:"https://docs.moodle.org/dev/Events_API",children:"event"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"other-good-practice",children:"Other good practice"}),"\n",(0,n.jsx)(s.p,{children:"... that helps with security:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Structure your code nicely, minimising the use of global variables. This makes the flow of data, and hence security, easier to verify."}),"\n",(0,n.jsxs)(s.li,{children:["Initialise objects (for instance, ",(0,n.jsx)(s.code,{children:"$x = new stdClass;"}),") and arrays (",(0,n.jsx)(s.code,{children:"$x = array()"}),") before you first use them."]}),"\n",(0,n.jsx)(s.li,{children:"Test every input field with tricky input to ensure that it is escaped and un-escaped the right number of times everywhere, and that Unicode characters are not corrupted. One standard test you can use is:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"< > & &lt; &gt; &amp; ' \\' \u7881 \\ \\\\\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"../process#security-issues",children:"Security issue process"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/moodledevdocs/general/development/policies",children:"Coding"})}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.a,{href:"http://cwe.mitre.org/top25/",children:"2010 CWE/SANS Top 25 Most Dangerous Programming Errors"})," - this is a generic list of common security mistakes, produced by a group of security experts. The above Moodle-specific guidelines cover most of these general points."]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.owasp.org/index.php/PHP_Security_Cheat_Sheet",children:"PHP Security Cheat Sheet"})}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.owasp.org/index.php/Main_Page",children:"The Open Web Application Security Project (OWASP)"})," - Large collection of documentation and code samples about preventing security issues while using web technologies."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);