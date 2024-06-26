"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[90657],{49781:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(74848),l=s(28453),t=s(78924);const r={title:"File API internals",tags:["Architecture","File API","Files","Internals"]},o=void 0,a={id:"apis/subsystems/files/internals",title:"File API internals",description:"The goals of the File API are to:",source:"@site/docs/apis/subsystems/files/internals.md",sourceDirName:"apis/subsystems/files",slug:"/apis/subsystems/files/internals",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/files/internals",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/files/internals.md",tags:[{label:"Architecture",permalink:"/moodledevdocs/docs/4.4/tags/architecture"},{label:"File API",permalink:"/moodledevdocs/docs/4.4/tags/file-api"},{label:"Files",permalink:"/moodledevdocs/docs/4.4/tags/files"},{label:"Internals",permalink:"/moodledevdocs/docs/4.4/tags/internals"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1656037432e3,frontMatter:{title:"File API internals",tags:["Architecture","File API","Files","Internals"]},sidebar:"docs",previous:{title:"File Converters",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/files/converter"},next:{title:"Forms API",permalink:"/moodledevdocs/docs/4.4/apis/subsystems/form/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"File API internals",id:"file-api-internals",level:2},{value:"File System",id:"file-system",level:3},{value:"File Storage",id:"file-storage",level:3},{value:"Files table",id:"files-table",level:3},{value:"Implementation of basic operations",id:"implementation-of-basic-operations",level:2},{value:"File serving",id:"file-serving",level:2},{value:"File related user interfaces",id:"file-related-user-interfaces",level:2},{value:"Form fields",id:"form-fields",level:3},{value:"Integration with the HTML editor",id:"integration-with-the-html-editor",level:3},{value:"Other issues",id:"other-issues",level:2},{value:"Unicode support in zip format",id:"unicode-support-in-zip-format",level:3},{value:"Client software",id:"client-software",level:4},{value:"PHP extraction",id:"php-extraction",level:4},{value:"Large file support",id:"large-file-support",level:4},{value:"Tar Alternative",id:"tar-alternative",level:4},{value:"Summary",id:"summary",level:4},{value:"Tar packer",id:"tar-packer",level:3},{value:"See also",id:"see-also",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{frontMatter:r,metadata:a}),"\n",(0,n.jsx)(i.p,{children:"The goals of the File API are to:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"allow files to be stored within Moodle, as part of the content"}),"\n",(0,n.jsx)(i.li,{children:"use a consistent and flexible approach for all file handling throughout Moodle"}),"\n",(0,n.jsx)(i.li,{children:"give components control over which users can access a file, using capabilities and other local rules"}),"\n",(0,n.jsx)(i.li,{children:"make it easy to determine which parts of Moodle use which files, to simplify operations like backup and restore"}),"\n",(0,n.jsx)(i.li,{children:"track where files originally came from"}),"\n",(0,n.jsx)(i.li,{children:"avoid redundant storage, when the same file is used twice"}),"\n",(0,n.jsx)(i.li,{children:"fully support Unicode file names, irrespective of the capabilities of the underlying file system"}),"\n",(0,n.jsx)(i.li,{children:"support alternative file systems, including cloud-based APIs"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"The File API is a set of core interfaces to allow the rest of Moodle to store, serve, and manage files. It applies to all files that are part of the Moodle site's content. It is not used for internal files, such as those in the following subdirectories:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"dataroot"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"temp"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"lang"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"cache"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"environment"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"filter"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"search"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sessions"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"upgradelogs"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"/moodledevdocs/docs/4.4/apis/subsystems/files/",children:"File API"})," documentation for information on using the File API."]}),"\n",(0,n.jsx)(i.p,{children:"The API can be subdivided into the following parts:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#file-system",children:(0,n.jsx)(i.em,{children:"File system"})})," - Low level storage of file content, without access control"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#file-storage",children:(0,n.jsx)(i.em,{children:"File storage"})})," - Storage of file metadata"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#file-serving",children:(0,n.jsx)(i.em,{children:"File serving"})})," - Handle the retrieval and serving of files from the File storage API, including:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"serving the files on request"}),"\n",(0,n.jsx)(i.li,{children:"performing appropriate access checks"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"File related user interfaces"})," - Provides the interface for uploading files, including:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Form elements allowing users to select a file using the file picker, and have it stored within Moodle."}),"\n",(0,n.jsx)(i.li,{children:"UI for users to manage their files, replacing the old course files UI"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"File browsing API"})," - Allow code to browse and optionally manipulate the file areas, including:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"find information about available files in each area"}),"\n",(0,n.jsx)(i.li,{children:"print links to files"}),"\n",(0,n.jsx)(i.li,{children:"optionally move, rename, copy, delete, and perform other user-facing operations."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"file-api-internals",children:"File API internals"}),"\n",(0,n.jsx)(i.h3,{id:"file-system",children:"File System"}),"\n",(0,n.jsxs)(i.p,{children:["The File System API allows for files to be stored in alternative underlying file systems, for example in an cloud-based API such as ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/s3",children:"Amazon S3"}),". Each file is stored and retrieved using a ",(0,n.jsx)(i.code,{children:"contenthash"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"The file content hash is calculated by taking a SHA1 hash of the content of the file. This should be unique enough so as to allow any number of files to be uploaded to the File API without any natural collisions occurring, and allows the File system to store a single copy of a file, no matter how many times that file content is used within user-generated content."}),"\n",(0,n.jsxs)(i.p,{children:["This means Moodle can not store two files with ",(0,n.jsx)(i.em,{children:"different"})," content and the ",(0,n.jsx)(i.em,{children:"same"})," SHA1 hash, luckily it is extremely unlikely that this would ever happen. Technically it is also possible to implement reliable collision tests (with some performance cost), though Moodle currently checks for this case using a simple file length check in addition to SHA1 hash."]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.p,{children:["The default file system shipped with Moodle stores all files on disk within the ",(0,n.jsx)(i.code,{children:"moodledata"})," sub-directory of ",(0,n.jsx)(i.code,{children:"$CFG->dataroot"}),"."]}),(0,n.jsxs)(i.p,{children:["Suppose a file has a content hash of ",(0,n.jsx)(i.code,{children:"081371cb102fa559e81993fddc230c79205232ce"}),", then it will be stored in on disk as ",(0,n.jsx)(i.code,{children:"moodledata/filedir/08/13/081371cb102fa559e81993fddc230c79205232ce"}),"."]})]}),"\n",(0,n.jsxs)(i.admonition,{title:"Validation of files",type:"tip",children:[(0,n.jsx)(i.p,{children:"As files in the standard disk-based file storage API are named using their SHA1 hash, there is a simple way of validating files have not become corrupted using the 'sha1sum' command available in most GNU/Linux distributions."}),(0,n.jsxs)(i.p,{children:["Where a file is correct then the filename will match the ",(0,n.jsx)(i.code,{children:"sha1sum"})," of the file. for example:"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"  $ cd /moodlepath/moodledata/filedir/1d/df/\n  $ sha1sum 1ddf5b375fcb74929cdd7efda4f47efc61414edf\n  1ddf5b375fcb74929cdd7efda4f47efc61414edf  1ddf5b375fcb74929cdd7efda4f47efc61414edf\n"})}),(0,n.jsx)(i.p,{children:"Where a file has become corrupted, these will differ:"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-console",children:"  $ cd /moodlepath/moodledata/filedir/42/32/\n  $ sha1sum 42327aac8ce5741f51f42be298fa63686fe81b7a\n  9442188152c02f65267103d78167d122c87002cd  42327aac8ce5741f51f42be298fa63686fe81b7a\n"})})]}),"\n",(0,n.jsx)(i.h3,{id:"file-storage",children:"File Storage"}),"\n",(0,n.jsxs)(i.p,{children:["The File Storage API is provided by the ",(0,n.jsx)(i.code,{children:"\\file_storage"})," class, and stores all metadata relating to a file. It interacts with the File System API and the ",(0,n.jsx)(i.code,{children:"\\stored_file"})," class to provide all low-level storage functionality."]}),"\n",(0,n.jsx)(i.h3,{id:"files-table",children:"Files table"}),"\n",(0,n.jsxs)(i.p,{children:["The File system API stores all file records in the ",(0,n.jsx)(i.code,{children:"files"})," database table. This table contains one entry for each usage of a file. Enough information is kept here so that the file can be fully identified and retrieved again if necessary."]}),"\n",(0,n.jsx)(i.p,{children:"If, for example, the same image is used in a user's profile, and a forum post, then there will be two rows in this table, one for each use of the file, and Moodle will treat the two as separate files, even though the file is only stored once on disc."}),"\n",(0,n.jsxs)(i.p,{children:["Entries with a file name of ",(0,n.jsx)(i.code,{children:"."}),"represent directories. Directory entries like this are created automatically when a file is added within them."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["The name ",(0,n.jsx)(i.code,{children:"files"})," is used in the plural form, even though it goes against the ",(0,n.jsx)(i.a,{href:"https://docs.moodle.org/dev/Database",children:"coding guidelines"})," because ",(0,n.jsx)(i.code,{children:"file"})," is a reserved word in some SQL dialects."]})}),"\n",(0,n.jsx)(i.h2,{id:"implementation-of-basic-operations",children:"Implementation of basic operations"}),"\n",(0,n.jsxs)(i.p,{children:["The low level access API is defined in the ",(0,n.jsx)(i.code,{children:"\\file_storage"})," class, which can be obtained using the ",(0,n.jsx)(i.code,{children:"get_file_storage()"})," function, for example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"$fs = get_file_storage();\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Details of common operations are documented in the ",(0,n.jsx)(i.a,{href:"/moodledevdocs/docs/4.4/apis/subsystems/files/",children:"File System API"})," documentation"]}),"\n",(0,n.jsx)(i.h2,{id:"file-serving",children:"File serving"}),"\n",(0,n.jsx)(i.p,{children:"The File serving component of the File API deals with serving files to the user. This is typically in the form of browser requests. Moodle has several main files to handle serving of files. These include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"draftfile.php"})," - the script used to serve files in a user's ",(0,n.jsx)(i.code,{children:"draft"})," file area."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"pluginfile.php"})," - the script typically used by a plugin to access content."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"tokenpluginfile.php"})," - the script typically used by a plugin to access content when a user is not logged in. This is usually in situations where a file is referred to in an e-mail or other similar scenario."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"It is the plugins responsibility to handle:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"access control"}),"\n",(0,n.jsx)(i.li,{children:"optional XSS protection - student submitted files must not be served with normal headers, we have to force download instead; ideally there should be second wwwroot for serving of untrusted files"}),"\n",(0,n.jsxs)(i.li,{children:["links to these files are constructed on the fly from the relative links stored in database (see ",(0,n.jsx)(i.a,{href:"/moodledevdocs/docs/4.4/apis/subsystems/files/#generating-a-url-to-your-files",children:"Generating a URL to your files"})," for further information)."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"important",children:(0,n.jsxs)(i.p,{children:["Each plugin should only ever use the File Storage API to access its ",(0,n.jsx)(i.strong,{children:"own files"}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"file-related-user-interfaces",children:"File related user interfaces"}),"\n",(0,n.jsx)(i.p,{children:"Files are typically selected by users and uploaded to Moodle using the File manager, and the file picker."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"file manager"})," is an interface used to view, and delete existing files, and to add new files."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.strong,{children:"file picker"})," is an interface, often accessed using the ",(0,n.jsx)(i.em,{children:"file manager"}),", to select files for upload to Moodle. The file picker makes use of ",(0,n.jsx)(i.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/repository/",children:"file repositories"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"form-fields",children:"Form fields"}),"\n",(0,n.jsxs)(i.p,{children:["Moodle defines two form field types as part of the ",(0,n.jsx)(i.code,{children:"formslib"})," integration, these are:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"filepicker"}),"; and"]}),"\n",(0,n.jsxs)(i.li,{children:["the ",(0,n.jsx)(i.code,{children:"filemanager"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"integration-with-the-html-editor",children:"Integration with the HTML editor"}),"\n",(0,n.jsx)(i.p,{children:"Each instance of an HTML editor can be told to store related files in a particular file area."}),"\n",(0,n.jsxs)(i.p,{children:["During editing, files are stored in a draft files area in the ",(0,n.jsx)(i.code,{children:"user"})," component. Then when the form is submitted they are moved into the real file area."]}),"\n",(0,n.jsx)(i.h2,{id:"other-issues",children:"Other issues"}),"\n",(0,n.jsx)(i.h3,{id:"unicode-support-in-zip-format",children:"Unicode support in zip format"}),"\n",(0,n.jsx)(i.p,{children:"Zip format is an old standard for compressing files. It was created long before Unicode existed, and Unicode support was only recently added. There are several ways used for encoding of non-ASCII characters in path names, but unfortunately it is not very standardised. Most Windows packers use DOS encoding."}),"\n",(0,n.jsx)(i.h4,{id:"client-software",children:"Client software"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Windows built-in compression - bundled with Windows, non-standard DOS encoding only"}),"\n",(0,n.jsx)(i.li,{children:"WinZip - shareware, Unicode option (since v11.2)"}),"\n",(0,n.jsx)(i.li,{children:"TotalCommander - shareware, single byte(DOS) encoding only"}),"\n",(0,n.jsx)(i.li,{children:"7-Zip - free, Unicode or DOS encoding depending on characters used in file name (since v4.58beta)"}),"\n",(0,n.jsx)(i.li,{children:"Info-ZIP - free, uses some weird character set conversions"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"php-extraction",children:"PHP extraction"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Info-ZIP binary execution - no Unicode support at all, mangles character sets in file names (depends on OS, see docs), files must be copied to temp directory before compression and after extraction"}),"\n",(0,n.jsx)(i.li,{children:"PclZip PHP library - reads single byte encoded names only, problems with random problems and higher memory usage."}),"\n",(0,n.jsx)(i.li,{children:"Zip PHP extension - kind of works in latest PHP versions"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"large-file-support",children:"Large file support"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"PHP running under 32bit operating systems does not support files >2GB. This might be a potential problem for larger backups."}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"tar-alternative",children:"Tar Alternative"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"tar with gzip compression - easy to implement in PHP + zlib extension (PclTar, Tar from PEAR or custom code)"}),"\n",(0,n.jsx)(i.li,{children:"no problem with unicode in *nix, Windows again expects DOS encoding :-("}),"\n",(0,n.jsx)(i.li,{children:"seems suitable for backup/restore - yay!"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"added zip processing class that fully hides the underlying library"}),"\n",(0,n.jsxs)(i.li,{children:['using single byte encoding "garbage in/garbage out" approach for encoding of files in zip archives; add new ',(0,n.jsx)(i.code,{children:"zipencoding"})," string into lang packs (for example ",(0,n.jsx)(i.code,{children:"cp852"})," DOS charset for Czech locale) and use it during extraction (we might support true unicode later when PHP Zip extension does that)"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"tar-packer",children:"Tar packer"}),"\n",(0,n.jsxs)(i.p,{children:["In addition to the zip packer, a tar packer is also available. This creates\narchives in a compressed tar format (similar to the file created by ",(0,n.jsx)(i.code,{children:"tar -czf example.tar.gz mycontent"}),")."]}),"\n",(0,n.jsx)(i.p,{children:"The packer is currently limited to ASCII filenames and individual files are limited to 8GB each, but unlike zip there is no limit on the total filesize. It uses the old POSIX format and is compatible with GNU tar using default options."}),"\n",(0,n.jsx)(i.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/moodledevdocs/docs/4.4/apis/plugintypes/repository/",children:"Repository API"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.moodle.org/dev/Portfolio_API",children:"Portfolio API"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.moodle.org/dev/Resource_module_file_API_migration",children:"Resource module file API migration"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://tracker.moodle.org/browse/MDL-14589",children:"MDL-14589"})," - File API Meta issue"]}),"\n"]})]})}function f(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);