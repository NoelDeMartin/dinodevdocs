"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[32269],{44247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=t(74848),s=t(28453),o=t(78924);const l={title:"PHPUnit",tags:["Quality Assurance","Testing","Unit testing","PHPUnit"]},r=void 0,d={id:"development/tools/phpunit",title:"PHPUnit",description:"PHPUnit by Sebastian Bergmann is an advanced unit testing framework for PHP. It is installed as Composer dependency and is not part of Moodle installation. To run PHPUnit tests, you have to manually install it on your development computer or test server.",source:"@site/general/development/tools/phpunit.md",sourceDirName:"development/tools",slug:"/development/tools/phpunit",permalink:"/moodledevdocs/general/development/tools/phpunit",draft:!1,unlisted:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/phpunit.md",tags:[{label:"Quality Assurance",permalink:"/moodledevdocs/general/tags/quality-assurance"},{label:"Testing",permalink:"/moodledevdocs/general/tags/testing"},{label:"Unit testing",permalink:"/moodledevdocs/general/tags/unit-testing"},{label:"PHPUnit",permalink:"/moodledevdocs/general/tags/php-unit"}],version:"current",lastUpdatedBy:"Eloy Lafuente (stronk7)",lastUpdatedAt:17113649e5,frontMatter:{title:"PHPUnit",tags:["Quality Assurance","Testing","Unit testing","PHPUnit"]},sidebar:"coding",previous:{title:"PHP CodeSniffer",permalink:"/moodledevdocs/general/development/tools/phpcs"},next:{title:"XMLDB editor",permalink:"/moodledevdocs/general/development/tools/xmldb"}},a={},c=[{value:"Installation of PHPUnit via Composer",id:"installation-of-phpunit-via-composer",level:2},{value:"PHPUnit versions",id:"phpunit-versions",level:2},{value:"Initialisation of test environment",id:"initialisation-of-test-environment",level:2},{value:"LDAP",id:"ldap",level:3},{value:"Test execution",id:"test-execution",level:2},{value:"How to run only some tests",id:"how-to-run-only-some-tests",level:3},{value:"Running a single test quickly (PHPUnit 9)",id:"running-a-single-test-quickly-phpunit-9",level:4},{value:"Using the @group annotation",id:"using-the-group-annotation",level:4},{value:"Using multiple phpunit.xml files",id:"using-multiple-phpunitxml-files",level:4},{value:"External test resources",id:"external-test-resources",level:2},{value:"Writing new tests",id:"writing-new-tests",level:2},{value:"PHPUnit support in IDEs",id:"phpunit-support-in-ides",level:2},{value:"Common Unit Test Problems",id:"common-unit-test-problems",level:2},{value:"Command line tips",id:"command-line-tips",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{frontMatter:l,metadata:d}),"\n",(0,i.jsx)(n.p,{children:"PHPUnit by Sebastian Bergmann is an advanced unit testing framework for PHP. It is installed as Composer dependency and is not part of Moodle installation. To run PHPUnit tests, you have to manually install it on your development computer or test server."}),"\n",(0,i.jsx)(n.p,{children:"Read the excellent guide at"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://phpunit.de/documentation.html",children:"PHPUnit Manual"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation-of-phpunit-via-composer",children:"Installation of PHPUnit via Composer"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install Composer\nInstructions for installing composer on all platforms are here: ",(0,i.jsx)(n.a,{href:"https://getcomposer.org/download/",children:"https://getcomposer.org/download/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Install the ",(0,i.jsx)(n.code,{children:"composer.phar"})," file to your moodle folder."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Execute Composer installer"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /your/moodle/dirroot\nphp composer.phar install\n"})}),"\n",(0,i.jsx)(n.p,{children:"If that gives you connection problems try"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"php composer.phar install --prefer-source\n"})}),"\n",(0,i.jsx)(n.p,{children:"Troubleshooting:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On Windows if you are behind a proxy you will need to setup an environment variable called ",(0,i.jsx)(n.code,{children:"HTTP_PROXY"})," with a value detailing your HTTP Proxy address and port before composer will correctly download files."]}),"\n",(0,i.jsxs)(n.li,{children:["You may be prompted for github credentials when installing composer dependencies.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is used to generate an personal access token to avoid being rate limited by github."}),"\n",(0,i.jsxs)(n.li,{children:["If you have Two Factor Authentication enabled on your github account, or do not wish to supply your own credentials you will need to generate a token manually:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://github.com/settings/applications",children:"https://github.com/settings/applications"})," and request personal access token"]}),"\n",(0,i.jsxs)(n.li,{children:["Copy this token and add it to your ",(0,i.jsx)(n.a,{href:"https://gist.github.com/andrewnicols/c5377ed25a9df1006ce1",children:"~/.composer/config.json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["( See ",(0,i.jsx)(n.a,{href:"https://github.com/composer/composer/issues/2280",children:"composer issue #2280"})," for further details of this bug.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Detailed instructions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://getcomposer.org/doc/00-intro.md",children:"Composer documentation"}),"\nDetailed instructions:"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/PHPUnit_installation_in_Windows",children:"PHPUnit installation in Windows"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/PHPUnit_installation_in_OS_X",children:"PHPUnit installation in OS X"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"phpunit-versions",children:"PHPUnit versions"}),"\n",(0,i.jsx)(n.p,{children:"The following table shows what PHPUnit version is installed in which Moodle version when using the default composer setup."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Moodle version"}),(0,i.jsx)(n.th,{children:"PHPUnit version"}),(0,i.jsx)(n.th,{children:"Links"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 4.4"}),(0,i.jsx)(n.td,{children:"PHPUnit 9.6"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://docs.phpunit.de/en/9.6/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.11 - 4.3"}),(0,i.jsx)(n.td,{children:"PHPUnit 9.5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://docs.phpunit.de/en/9.6/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.10"}),(0,i.jsx)(n.td,{children:"PHPUnit 8.5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://docs.phpunit.de/en/8.5/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.7 - 3.9"}),(0,i.jsx)(n.td,{children:"PHPUnit 7.5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://docs.phpunit.de/en/7.5/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.4 - 3.6"}),(0,i.jsx)(n.td,{children:"PHPUnit 6.5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://phpunit.de/manual/6.5/en/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.2 - 3.3"}),(0,i.jsx)(n.td,{children:"PHPUnit 5.5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://phpunit.de/manual/5.5/en/",children:"Documentation"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Moodle 3.1"}),(0,i.jsx)(n.td,{children:"PHPUnit 4.8.27"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://phpunit.de/manual/4.8/en/",children:"Documentation 4.8"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"initialisation-of-test-environment",children:"Initialisation of test environment"}),"\n",(0,i.jsx)(n.p,{children:"Our PHPUnit integration requires a dedicated database and data root folder. First, add a new data root directory and prefix into your config.php, you can find examples in config-dist.php."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:" $CFG->phpunit_prefix = 'phpu_';\n $CFG->phpunit_dataroot = '/home/example/phpu_moodledata';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Some PHPUnit tests require a live internet connection. If your system does not have a direct connection to the Internet, you also need to specify your proxy in ",(0,i.jsx)(n.code,{children:"config.php"})," - even though you normally specify it by using the admin settings user interface. (If you do not use a proxy, you can skip this step.) Check the settings on the relevant admin settings page, or from the ",(0,i.jsx)(n.code,{children:"mdl_config"})," table in your database, if you are unsure of the correct values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:" // Normal proxy settings\n $CFG->proxyhost = 'wwwcache.example.org';\n $CFG->proxyport = 80;\n $CFG->proxytype = 'HTTP';\n $CFG->proxybypass = 'localhost, 127.0.0.1, .example.org';\n // Omit the next lines if your proxy doesn't need a username/password:\n $CFG->proxyuser = 'systemusername';\n $CFG->proxypassword = 'systempassword';\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also provide specific database settings for unit testing (if these are not provided, the standard database settings will be used):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$CFG->phpunit_dbtype    = 'pgsql';      // 'pgsql', 'mariadb', 'mysqli', 'mssql', 'sqlsrv' or 'oci'\n$CFG->phpunit_dblibrary = 'native';     // 'native' only at the moment\n$CFG->phpunit_dbhost    = '127.0.0.1';  // eg 'localhost' or 'db.isp.com' or IP\n$CFG->phpunit_dbname    = 'mytestdb';     // database name, eg moodle\n$CFG->phpunit_dbuser    = 'postgres';   // your database username\n$CFG->phpunit_dbpass    = 'some_password';   // your database password\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then you need to initialise the test environment using following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" cd /home/example/moodle\n php admin/tool/phpunit/cli/init.php\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command has to be repeated after any upgrade, plugin (un)installation or if you have added tests to a plugin you are developing:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," make sure that your php cli executable (or the one you want to use) is correctly on your path as the individual init scripts will call it repeatedly. Also, ensure en_AU locale is installed on your server."]}),"\n",(0,i.jsx)(n.h3,{id:"ldap",children:"LDAP"}),"\n",(0,i.jsx)(n.p,{children:'If you want to run LDAP unit tests you must have a working, configured LDAP environment on your test server. There must be a basic LDAP tree structure in place or tests will fail with "Search: No such object". Build an LDAP tree structure in a new shell prompt:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ldapadd -H ldap://127.0.0.1 -D "cn=admin,dc=yourcomputer,dc=local" -W\ndn:dc=yourcomputer,dc=local\nobjectClass:dcObject\nobjectClass:organizationalUnit\ndc:yourcomputer\nou:YOURCOMPUTER\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"config.php"})," tell Moodle where to look for your test LDAP environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"// Constants for auth/ldap tests.\ndefine('TEST_AUTH_LDAP_HOST_URL', 'ldap://127.0.0.1');\ndefine('TEST_AUTH_LDAP_BIND_DN', 'cn=admin,dc=yourcomputer,dc=local');\ndefine('TEST_AUTH_LDAP_BIND_PW', '*');\ndefine('TEST_AUTH_LDAP_DOMAIN', 'dc=yourcomputer,dc=local');\n\n// Constants for enrol/ldap tests.\ndefine('TEST_ENROL_LDAP_HOST_URL', 'ldap://127.0.0.1');\ndefine('TEST_ENROL_LDAP_BIND_DN', 'cn=admin,dc=yourcomputer,dc=local');\ndefine('TEST_ENROL_LDAP_BIND_PW', '*');\ndefine('TEST_ENROL_LDAP_DOMAIN', 'dc=yourcomputer,dc=local');\n\n// Constants for lib/ldap tests.\ndefine('TEST_LDAPLIB_HOST_URL', 'ldap://127.0.0.1');\ndefine('TEST_LDAPLIB_BIND_DN', 'cn=admin,dc=yourcomputer,dc=local');\ndefine('TEST_LDAPLIB_BIND_PW', '*');\ndefine('TEST_LDAPLIB_DOMAIN', 'dc=yourcomputer,dc=local');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"test-execution",children:"Test execution"}),"\n",(0,i.jsxs)(n.p,{children:["To execute all test suites from main configuration file execute the ",(0,i.jsx)(n.code,{children:"vendor/bin/phpunit"})," script from your ",(0,i.jsx)(n.code,{children:"$CFG->dirroot"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" cd /home/example/moodle\n vendor/bin/phpunit\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The rest of examples uses ",(0,i.jsx)(n.code,{children:"phpunit"}),", please substitute it with ",(0,i.jsx)(n.code,{children:"vendor/bin/phpunit"})," or create a shortcut in your ",(0,i.jsx)(n.code,{children:"$CFG->dirroot"}),".\nIn IDEs, you may need to specify the path to the PHPUnit configuration file. Use the absolute path to ",(0,i.jsx)(n.code,{children:"phpunit.xml"})," from your ",(0,i.jsx)(n.code,{children:"$CFG->dirroot"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-run-only-some-tests",children:"How to run only some tests"}),"\n",(0,i.jsx)(n.h4,{id:"running-a-single-test-quickly-phpunit-9",children:"Running a single test quickly (PHPUnit 9)"}),"\n",(0,i.jsx)(n.p,{children:"The fastest way to run a single test in PHPUnit 9.5 and higher (Moodle 3.11 and higher) is to use the filter argument:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit --filter tool_dataprivacy_metadata_registry_testcase\n"})}),"\n",(0,i.jsx)(n.p,{children:"To run all tests provided by the single component, use suite and the name it has in the phpunit.xml file. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit --testsuite workshopform_accumulative_testsuite\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively if you have config files built for each component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit -c mod/workshop/form/accumulative/\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also run a single test by using test file path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit my/tests/filename.php\n"})}),"\n",(0,i.jsx)(n.p,{children:"so, run this command in the CLI to see a real test in action:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit cohort/tests/lib_test.php\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also run a single test method inside a class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit --filter test_function_name path/to/file.php\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," You should be careful because it may be possible to run tests this way which are not included in the normal run if, for example, the file is not placed in the correct location. If you use this method, do at least one full test run (or --group run, as below) to ensure the test can be found."]}),"\n",(0,i.jsx)(n.p,{children:"Filters can also be applied to capture a group of similar tests across all testsuites:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit --filter test_flag_user\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is also possible to run all tests in a component (subsystem or plugin) by using the testsuite option:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"vendor/bin/phpunit --testsuite mod_forum_testsuite\nvendor/bin/phpunit --testsuite core_privacy_testsuite\nvendor/bin/phpunit --testsuite core_privacy_testsuite --filter test_component_is_compliant\n"})}),"\n",(0,i.jsx)(n.h4,{id:"using-the-group-annotation",children:"Using the @group annotation"}),"\n",(0,i.jsx)(n.p,{children:"If you add annotations like"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"namespace qtype_stack;\n/**\n * Unit tests for {@link stack_cas_keyval} @ qtype/stack/tests/cas_keyval_test.php.\n * @group qtype_stack\n */\nclass cas_keyval_test extends \\basic_testcase {\n"})}),"\n",(0,i.jsx)(n.p,{children:"to all the classes in your plugin, then you can run just the tests for your plugin by doing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" phpunit --group qtype_stack\n"})}),"\n",(0,i.jsx)(n.p,{children:"Therefore, it is suggested that you annotate all your tests with the Frankenstyle name of your plugin."}),"\n",(0,i.jsx)(n.h4,{id:"using-multiple-phpunitxml-files",children:"Using multiple phpunit.xml files"}),"\n",(0,i.jsxs)(n.p,{children:["It's easy to create alternative ",(0,i.jsx)(n.code,{children:"phpunit.xml"})," files defining which tests must be run together. For reference, take a look to the default ",(0,i.jsx)(n.code,{children:"phpunit.xml"})," available in your base directory once the testing environment has been initialised. After creating the custom file you will be able to run those tests with"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" vendor/bin/phpunit -c path/to/your/alternative/phpunit/file.xml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Also, for commodity, you can use this command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" php admin/tool/phpunit/cli/util.php --buildcomponentconfigs\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It will, automatically, create one valid ",(0,i.jsx)(n.code,{children:"phpunit.xml"})," file within each component (plugin or subsystem) and other important directories, so later you will be able to execute tests like"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" vendor/bin/phpunit -c mod/forum[](/phpunit.xml)  // Note that it's not needed to specify the name of the file (if it is 'phpunit.xml').\n vendor/bin/phpunit -c question\n vendor/bin/phpunit -c question/type/calculated\n vendor/bin/phpunit -c backup\n vendor/bin/phpunit -c lib/dml\n"})}),"\n",(0,i.jsx)(n.p,{children:"or, also"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" cd directory/with/phpunit.xml\n phpunit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"external-test-resources",children:"External test resources"}),"\n",(0,i.jsxs)(n.p,{children:["By default Moodle phpunit tests contact ",(0,i.jsx)(n.a,{href:"http://download.moodle.org",children:"http://download.moodle.org"})," server when testing curl related functionality. Optionally you may checkout a local copy of the test scripts and access it instead:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["clone ",(0,i.jsx)(n.a,{href:"https://github.com/moodlehq/moodle-exttests",children:"https://github.com/moodlehq/moodle-exttests"})," to web directory"]}),"\n",(0,i.jsx)(n.li,{children:"add to your config.php or modify phpunit.xml file"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"define('TEST_EXTERNAL_FILES_HTTP_URL', 'http://localhost/moodle-exttests');\n"})}),"\n",(0,i.jsx)(n.h2,{id:"writing-new-tests",children:"Writing new tests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["read ",(0,i.jsx)(n.a,{href:"https://docs.phpunit.de/en/9.6/",children:"official PHPUnit online documentation"})]}),"\n",(0,i.jsxs)(n.li,{children:["see ",(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Writing_PHPUnit_tests",children:"Writing PHPUnit tests"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"phpunit-support-in-ides",children:"PHPUnit support in IDEs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Setting_up_PhpStorm",children:"Setting up PhpStorm"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-unit-test-problems",children:"Common Unit Test Problems"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/dev/Common_unit_test_problems",children:"Common unit test problems"})}),"\n",(0,i.jsx)(n.h2,{id:"command-line-tips",children:"Command line tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display each test name before running it (useful e.g. if it crashes before the end and you want to know which test it was running at that point)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"vendor/bin/phpunit --debug\n"})}),"\n",(0,i.jsx)(n.p,{children:"(you will probably want to redirect this to a file as it gets very long)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.moodle.org/ja/PHPUnit",children:"PHPUnit"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);