"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),s=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(r,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],d={title:"Activity modules",toc_max_heading_level:4,tags:["API","Plugin-type","Activity","Module"]},r=void 0,s={unversionedId:"apis/plugintypes/mod",id:"apis/plugintypes/mod",title:"Activity modules",description:"Introduction",source:"@site/docs/apis/plugintypes/mod.md",sourceDirName:"apis/plugintypes",slug:"/apis/plugintypes/mod",permalink:"/devdocs/docs/apis/plugintypes/mod",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/mod.md",tags:[{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"Plugin-type",permalink:"/devdocs/docs/tags/plugin-type"},{label:"Activity",permalink:"/devdocs/docs/tags/activity"},{label:"Module",permalink:"/devdocs/docs/tags/module"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1650368045,formattedLastUpdatedAt:"19/04/2022",frontMatter:{title:"Activity modules",toc_max_heading_level:4,tags:["API","Plugin-type","Activity","Module"]},sidebar:"docs",previous:{title:"Access API",permalink:"/devdocs/docs/apis/access"},next:{title:"Moodle Development Kit",permalink:"/devdocs/docs/tools/mdk"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Folder layout",id:"folder-layout",level:2},{value:"Standard Files and their Functions",id:"standard-files-and-their-functions",level:2},{value:"Backup Folder",id:"backup-folder",level:3},{value:"DB Folder",id:"db-folder",level:3},{value:"<code>access.php</code> - Capability defaults",id:"accessphp---capability-defaults",level:4},{value:"Suggested defaults for the <code>mod/[modname]:addinstance</code> capability",id:"suggested-defaults-for-the-modmodnameaddinstance-capability",level:5},{value:"Suggested defaults for the <code>mod/[modname]:view</code> capability",id:"suggested-defaults-for-the-modmodnameview-capability",level:5},{value:"<code>events.php</code> - Event observers",id:"eventsphp---event-observers",level:4},{value:"<code>install.xml</code> - Database installation",id:"installxml---database-installation",level:4},{value:"<code>upgrade.php</code> - Upgrade steps",id:"upgradephp---upgrade-steps",level:4},{value:"<code>mobile.php</code> - Moodle Mobile Remote Add-ons",id:"mobilephp---moodle-mobile-remote-add-ons",level:4},{value:"<code>/lang/en/mod_[modname].php</code> - Language string definitions",id:"langenmod_modnamephp---language-string-definitions",level:3},{value:"<code>lib.php</code> - Library functions",id:"libphp---library-functions",level:3},{value:"<code>mod_form.php</code> - Instance create/edit form",id:"mod_formphp---instance-createedit-form",level:3},{value:"<code>index.php</code> - Instance list",id:"indexphp---instance-list",level:3},{value:"<code>view.php</code> - View an activity",id:"viewphp---view-an-activity",level:3},{value:"<code>version.php</code>",id:"versionphp",level:3},{value:"See also",id:"see-also",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Activity modules are a fundamental course feature and are usually the primary delivery method for learning content in Moodle."),(0,o.kt)("p",null,"The plugintype of an Activity module is ",(0,o.kt)("inlineCode",{parentName:"p"},"mod"),", and the frankenstyle name of a plugin is therefore ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_[modname]"),"."),(0,o.kt)("p",null,"All activity module plugins are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/mod/")," folder of Moodle."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The term ",(0,o.kt)("inlineCode",{parentName:"p"},"[modname]")," is used as a placeholder in this documentation and should be replaced with the name of your activity module."))),(0,o.kt)("h2",{id:"folder-layout"},"Folder layout"),(0,o.kt)("p",null,"Activity modules reside in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/mod")," directory."),(0,o.kt)("p",null,"Each module is in a separate subdirectory and consists of a number of ",(0,o.kt)("em",{parentName:"p"},"mandatory files")," and any other files the developer is going to use."),(0,o.kt)("p",null,"Below is an example of the file structure for the ",(0,o.kt)("inlineCode",{parentName:"p"},"folder")," plugin."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View an example directory layout for the `folder` plugin."),(0,o.kt)("div",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},".\n\u251c\u2500\u2500 backup\n\u2502\xa0\xa0 \u251c\u2500\u2500 moodle1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.php\n\u2502\xa0\xa0 \u2514\u2500\u2500 moodle2\n\u2502\xa0\xa0     \u251c\u2500\u2500 backup_folder_activity_task.class.php\n\u2502\xa0\xa0     \u251c\u2500\u2500 backup_folder_stepslib.php\n\u2502\xa0\xa0     \u251c\u2500\u2500 restore_folder_activity_task.class.php\n\u2502\xa0\xa0     \u2514\u2500\u2500 restore_folder_stepslib.php\n\u251c\u2500\u2500 classes\n\u2502\xa0\xa0 \u251c\u2500\u2500 analytics\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 indicator\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 activity_base.php\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 cognitive_depth.php\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 social_breadth.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 content\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 exporter.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 event\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 all_files_downloaded.php\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 course_module_instance_list_viewed.php\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 course_module_viewed.php\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 folder_updated.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 external.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 privacy\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 provider.php\n\u2502\xa0\xa0 \u2514\u2500\u2500 search\n\u2502\xa0\xa0     \u2514\u2500\u2500 activity.php\n\u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 access.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 install.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 install.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 log.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 services.php\n\u2502\xa0\xa0 \u2514\u2500\u2500 upgrade.php\n\u251c\u2500\u2500 download_folder.php\n\u251c\u2500\u2500 edit.php\n\u251c\u2500\u2500 edit_form.php\n\u251c\u2500\u2500 index.php\n\u251c\u2500\u2500 lang\n\u2502\xa0\xa0 \u2514\u2500\u2500 en\n\u2502\xa0\xa0     \u2514\u2500\u2500 folder.php\n\u251c\u2500\u2500 lib.php\n\u251c\u2500\u2500 locallib.php\n\u251c\u2500\u2500 mod_form.php\n\u251c\u2500\u2500 module.js\n\u251c\u2500\u2500 phpunit.xml\n\u251c\u2500\u2500 pix\n\u2502\xa0\xa0 \u251c\u2500\u2500 icon.png\n\u2502\xa0\xa0 \u2514\u2500\u2500 icon.svg\n\u251c\u2500\u2500 readme.txt\n\u251c\u2500\u2500 renderer.php\n\u251c\u2500\u2500 settings.php\n\u251c\u2500\u2500 styles.css\n\u251c\u2500\u2500 tests\n\u2502\xa0\xa0 \u251c\u2500\u2500 backup\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 restore_date_test.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 behat\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 folder_activity_completion.feature\n\u2502\xa0\xa0 \u251c\u2500\u2500 event\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 events_test.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 externallib_test.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 generator\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 generator_test.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 lib_test.php\n\u2502\xa0\xa0 \u251c\u2500\u2500 phpunit.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 search\n\u2502\xa0\xa0     \u2514\u2500\u2500 search_test.php\n\u251c\u2500\u2500 version.php\n\u2514\u2500\u2500 view.php\n")))),(0,o.kt)("h2",{id:"standard-files-and-their-functions"},"Standard Files and their Functions"),(0,o.kt)("p",null,"There are several files that are crucial to Moodle. These files are used to install your module and then integrate it into Moodle. Each file has a particular function, some of the files are optional, and are only created if you want to use the functionality it offers. Below are the list of most commonly used files."),(0,o.kt)("h3",{id:"backup-folder"},"Backup Folder"),(0,o.kt)("p",null,"If your activity stores data then you should implement the Backup feature which allows the activity to backed up, restored, and duplicated."),(0,o.kt)("p",null,"For more information on Backup and restore, see the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Backup_2.0_for_developers"},"Backup 2.0 for developers"),""),(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Restore_2.0_for_developers"},"Restore 2.0 for developers"),"")),(0,o.kt)("h3",{id:"db-folder"},"DB Folder"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," folder is used to store files related to the lifecycle of your plugin - that is it's initial installation, and upgrade between versions."),(0,o.kt)("p",null,"It includes configuration relating to areas such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"authorisation"),(0,o.kt)("li",{parentName:"ul"},"event generation and handling"),(0,o.kt)("li",{parentName:"ul"},"database tables"),(0,o.kt)("li",{parentName:"ul"},"scheduled tasks"),(0,o.kt)("li",{parentName:"ul"},"web services"),(0,o.kt)("li",{parentName:"ul"},"mobile application features"),(0,o.kt)("li",{parentName:"ul"},"installation"),(0,o.kt)("li",{parentName:"ul"},"upgrade")),(0,o.kt)("h4",{id:"accessphp---capability-defaults"},(0,o.kt)("inlineCode",{parentName:"h4"},"access.php")," - Capability defaults"),(0,o.kt)("p",null,"Authorisation is handled in Moodle by the use of Roles, and Capabilities. You can read more about these in the ",(0,o.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/access"},"Access API")," documentation."),(0,o.kt)("p",null,"For activities the following capabilities are ",(0,o.kt)("em",{parentName:"p"},"required"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mod/[modname]:addinstance"),": Controls whether a user may create a new instance of the activity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mod/[modname]:view"),": Controls whether a user may view an instance of the activity")),(0,o.kt)("h5",{id:"suggested-defaults-for-the-modmodnameaddinstance-capability"},"Suggested defaults for the ",(0,o.kt)("inlineCode",{parentName:"h5"},"mod/[modname]:addinstance")," capability"),(0,o.kt)("p",null,"The following is an example with recommended configuration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"addinstance")," capability."),(0,o.kt)("p",null,"It will allow editing teachers and managers to create new instances, but not non-editing teachers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/db/access.php"',title:'"mod/[modname]/db/access.php"'},"$capabilities = [\n    'mod/[modname]:addinstance' => [\n        'riskbitmask' => RISK_XSS,\n        'captype' => 'write',\n        'contextlevel' => CONTEXT_COURSE,\n        'archetypes' => [\n            'editingteacher' => CAP_ALLOW,\n            'manager' => CAP_ALLOW,\n        ],\n        'clonepermissionsfrom' => 'moodle/course:manageactivities',\n    ],\n];\n\n")),(0,o.kt)("h5",{id:"suggested-defaults-for-the-modmodnameview-capability"},"Suggested defaults for the ",(0,o.kt)("inlineCode",{parentName:"h5"},"mod/[modname]:view")," capability"),(0,o.kt)("p",null,"The view capability was added in ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-40854"},"MDL-40854"),"."),(0,o.kt)("p",null,"The following is an example with recommended configuration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," capability."),(0,o.kt)("p",null,"It allows all archetypes to view the activity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/db/access.php"',title:'"mod/[modname]/db/access.php"'},"'mod/[modname]:view' => [\n    'captype' => 'read',\n    'contextlevel' => CONTEXT_MODULE,\n    'archetypes' => [\n        'guest' => CAP_ALLOW,\n        'student' => CAP_ALLOW,\n        'teacher' => CAP_ALLOW,\n        'editingteacher' => CAP_ALLOW,\n        'manager' => CAP_ALLOW,\n    ],\n],\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Granting the view capability to archetypes like ",(0,o.kt)("inlineCode",{parentName:"p"},"guest")," does not allow any user to view all activities. Users are still subject to standard access controls like course enrolment."))),(0,o.kt)("p",null,"For further information on what each attribute in that capabilities array means visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/NEWMODULE_Adding_capabilities"},"NEWMODULE Adding capabilities"),"."),(0,o.kt)("h4",{id:"eventsphp---event-observers"},(0,o.kt)("inlineCode",{parentName:"h4"},"events.php")," - Event observers"),(0,o.kt)("p",null,"Moodle supports a feature known as ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("a",{parentName:"em",href:"https://docs.moodle.org/dev/Events_API#Event_observers"},"Event observers")," ")," to allow components to make changes when certain events take place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/db/events.php"',title:'"mod/[modname]/db/events.php"'},"$observers = [\n    [\n        'eventname' => '\\mod_quiz\\event\\attempt_submitted',\n        'includefile' => '/mod/quiz/locallib.php',\n        'callback' => 'quiz_attempt_submitted_handler',\n        'internal' => false,\n    ],\n];\n")),(0,o.kt)("p",null,"For further details on Event observers and the Events API see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Events_API"},"Events API"),"."),(0,o.kt)("h4",{id:"installxml---database-installation"},(0,o.kt)("inlineCode",{parentName:"h4"},"install.xml")," - Database installation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"install.xml")," file defines the list of database tables that will be created for your plugin."),(0,o.kt)("p",null,"Rather than creating, or editing, this file directly you should always use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/XMLDB_editor"},"XMLDB editor"),". You should never modify this file directly."),(0,o.kt)("p",null,"Moodle requires that you create a table for your plugin whose name exactly matches the plugin name. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate")," activity module ",(0,o.kt)("em",{parentName:"p"},"must")," have a database table named ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate"),". Certain fields within this table are\nalso ",(0,o.kt)("em",{parentName:"p"},"required"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Properties"),(0,o.kt)("th",{parentName:"tr",align:null},"Keys / Indexes"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INT(10), auto sequence")),(0,o.kt)("td",{parentName:"tr",align:null},"primary key for the table"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"course")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INT(10)")),(0,o.kt)("td",{parentName:"tr",align:null},"foreign key to the ",(0,o.kt)("inlineCode",{parentName:"td"},"course")," table"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CHAR(255)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the user-specified name of the activity instance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timemodified")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INT(10)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The timestamp of when the activity was last modified")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"intro")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TEXT")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"A standard field to hold the user-defined activity description (see ",(0,o.kt)("inlineCode",{parentName:"td"},"FEATURE_MOD_INTRO"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"introformat")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INT(4)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"A standard field to hold the format of the field")))),(0,o.kt)("h4",{id:"upgradephp---upgrade-steps"},(0,o.kt)("inlineCode",{parentName:"h4"},"upgrade.php")," - Upgrade steps"),(0,o.kt)("p",null,"This file handles upgrading the module to match the latest version. After creating a module and using it extensively on your site (and others) you may want to extend the functionality of your module. Using the certificate example, a suggestion was made that a unique code could be generated for each certificate issued and displayed if a setting was selected. This requires two new database fields, one to store whether the creator of the certificate has chosen to display the code on the certificate and another to store the actual code for each student. This is where the upgrade.php script becomes used."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"install.xml")," file is only executed once, that is when your module is first installed, so adding these two extra columns to this file does not change the database structure for users who have already installed the module."),(0,o.kt)("p",null,"To perform this upgrade you need to do three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_editor"},"XMLDB editor")," to create the definition of the new fields"),(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"install.xml")," from the XMLDB editor"),(0,o.kt)("li",{parentName:"ol"},"Generate the PHP upgrade steps from within the XMLDB Editor"),(0,o.kt)("li",{parentName:"ol"},"Update the version number in your ",(0,o.kt)("inlineCode",{parentName:"li"},"version.php"))),(0,o.kt)("p",null,"In many cases you will be able to combine multiple upgrade steps into a single version change."),(0,o.kt)("p",null,"An example of the upgrade.php file is as follows -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"function xmldb_certificate_upgrade($oldversion = 0) {\n    if ($oldversion < 2012091800) {\n        // Add new fields to certificate table.\n        $table = new xmldb_table('certificate');\n        $field = new xmldb_field('showcode');\n        $field->set_attributes(XMLDB_TYPE_INTEGER, '1', XMLDB_UNSIGNED, XMLDB_NOTNULL, null, '0', 'savecert');\n        if (!$dbman->field_exists($table, $field)) {\n            $dbman->add_field($table, $field);\n        }\n        // Add new fields to certificate_issues table.\n        $table = new xmldb_table('certificate_issues');\n        $field = new xmldb_field('code');\n        $field->set_attributes(XMLDB_TYPE_CHAR, '50', null, null, null, null, 'certificateid');\n        if (!$dbman->field_exists($table, $field)) {\n            $dbman->add_field($table, $field);\n        }\n\n        // Certificate savepoint reached.\n        upgrade_mod_savepoint(true, 2012091800, 'certificate');\n    }\n}\n")),(0,o.kt)("p",null,"When a version number increment is detected during an upgrade, the ",(0,o.kt)("inlineCode",{parentName:"p"},"xmldb_[modname]_upgrade")," function is called with the old version number as the first argument."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Upgrade_API"},"Upgrade API")," documentation for more information on the upgrade process."),(0,o.kt)("h4",{id:"mobilephp---moodle-mobile-remote-add-ons"},(0,o.kt)("inlineCode",{parentName:"h4"},"mobile.php")," - Moodle Mobile Remote Add-ons"),(0,o.kt)("p",null,"The Moodle Mobile remote add-on is the mobile app version of the plugin that will be loaded when a user accesses the plugin on the app."),(0,o.kt)("p",null,"A plugin can include several Mobile add-ons. Each add-on must indicate a unique name."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_App_Plugins_Development_Guide"},"Moodle App Plugins Development Guide")," for more information on configuring your plugin for the Moodle MobileApp."),(0,o.kt)("h3",{id:"langenmod_modnamephp---language-string-definitions"},(0,o.kt)("inlineCode",{parentName:"h3"},"/lang/en/mod_[modname].php")," - Language string definitions"),(0,o.kt)("p",null,"Every plugin must define a language string definition file, which contains the name of the plugin as a minimum requirement."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/String_API#Adding_language_file_to_plugin"},"String API")," documentation for more information on the format of this file."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/lang/en/mod_[modname].php"',title:'"mod/[modname]/lang/en/mod_[modname].php"'},"$string['pluginname'] = 'The name of your activity';\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get_string")," API can be used to translate a string identifier into a translated string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/example.php',title:'"mod/[modname]/example.php'},"get_string('pluginname', '[modname]');\n")),(0,o.kt)("h3",{id:"libphp---library-functions"},(0,o.kt)("inlineCode",{parentName:"h3"},"lib.php")," - Library functions"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/NEWMODULE_Documentation#lib.php"},"lib.php")," for details on the list of the functions which can be specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.php"),"."),(0,o.kt)("p",null,"As a minimum you ",(0,o.kt)("em",{parentName:"p"},"must")," define the following three functions, which are described below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/lib.php"',title:'"mod/[modname]/lib.php"'},"function [modname]_add_instance($instancedata, $mform = null): int;\nfunction [modname]_update_instance($instancedata, $mform): bool;\nfunction [modname]_delete_instance($id): bool;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"[modname]_add_instance()")," function is called when the activity creation form is submitted. This function is only called when adding an activity and should contain any logic required to add the activity."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"[modname]_update_instance()")," function is called when the activity editing form is submitted."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"[modname]_delete_instance()")," function is called when the activity deletion is confirmed. It is responsible for removing all data associated with the instance.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"lib.php")," file is one of the older parts of Moodle and functionality is gradually being migrated to class-based function calls."))),(0,o.kt)("h3",{id:"mod_formphp---instance-createedit-form"},(0,o.kt)("inlineCode",{parentName:"h3"},"mod_form.php")," - Instance create/edit form"),(0,o.kt)("p",null,"This file is used when adding/editing a module to a course. It contains the elements that will be displayed on the form responsible for creating/installing an instance of your module. The class in the file should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_[modname]_mod_form"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_[modname]_mod_form")," is a current exception to the class autoloading rules."),(0,o.kt)("p",{parentName:"div"},"This will be addressed in ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-74472"},"MDL-74472"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/mod_form.php"',title:'"mod/[modname]/mod_form.php"'},"<?php\nif (!defined('MOODLE_INTERNAL')) {\n    die('Direct access to this script is forbidden.');    //  It must be included from a Moodle page\n}\n\nrequire_once($CFG->dirroot.'/course/moodleform_mod.php');\nrequire_once($CFG->dirroot.'/mod/certificate/lib.php');\n\nclass mod_certificate_mod_form extends moodleform_mod {\n\n    function definition() {\n        global $CFG, $DB, $OUTPUT;\n\n        $mform =& $this->_form;\n\n        $mform->addElement('text', 'name', get_string('certificatename', 'certificate'), ['size'=>'64']);\n        $mform->setType('name', PARAM_TEXT);\n        $mform->addRule('name', null, 'required', null, 'client');\n\n        $ynoptions = [\n            0 => get_string('no'),\n            1 => get_string('yes'),\n        ];\n        $mform->addElement('select', 'usecode', get_string('usecode', 'certificate'), $ynoptions);\n        $mform->setDefault('usecode', 0);\n        $mform->addHelpButton('usecode', 'usecode', 'certificate');\n\n        $this->standard_coursemodule_elements();\n\n        $this->add_action_buttons();\n    }\n}\n")),(0,o.kt)("p",null,"The above example does not contain the full file, just enough to provide you with an idea. First we create a text element called 'name' that is required, this is obviously the name of the instance. I then created another element that stores whether a user wishes to display the unique code issued to a user when they receive the certificate or not with a default value of 0 and a help button explaining what this setting does. The function ",(0,o.kt)("inlineCode",{parentName:"p"},"standard_coursemodule_elements")," adds the elements common to all modules, such as the conditional fields. The add_action_buttons function adds the submit and cancel buttons to the form. This data will be passed to either ",(0,o.kt)("inlineCode",{parentName:"p"},"[modname]_add_instance")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[modname]_update_instance")," depending on whether you are adding a new instance or updating a current one. You can also add validation to this form, just like any other form in Moodle. For more information on how to create forms in Moodle see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Form_API"},"Form API"),"."),(0,o.kt)("h3",{id:"indexphp---instance-list"},(0,o.kt)("inlineCode",{parentName:"h3"},"index.php")," - Instance list"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.php")," should be used to list all instances of an activity that the current user has access to in the specified course."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/index.php"',title:'"mod/[modname]/index.php"'},"<?php\nrequire_once('../../config.php');\n\n// The `id` parameter is the course id.\n$id = required_param('id', PARAM_INT);\n\n// Fetch the requested course.\n$course = $DB->get_record('course', ['id'=> $id], '*', MUST_EXIST);\n\n// Require that the user is logged into the course.\nrequire_course_login($course);\n\n$modinfo = get_fast_modinfo($course);\n\nforeach ($modinfo->get_instances_of('[modinfo]') as $instanceid => $cm) {\n    // Display information about your activity.\n}\n")),(0,o.kt)("h3",{id:"viewphp---view-an-activity"},(0,o.kt)("inlineCode",{parentName:"h3"},"view.php")," - View an activity"),(0,o.kt)("p",null,"Moodle will automatically generate links to view the activity using the ",(0,o.kt)("inlineCode",{parentName:"p"},"/view.php")," page and passing in an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," value. The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," passed is the course module ID, which can be used to fetch all remaining data for the activity instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/[modname]/view.php"',title:'"mod/[modname]/view.php"'},"<?php\n\nrequire('../../config.php');\n\n$id = required_param('id', PARAM_INT);\n[$course, $cm] = get_course_and_cm_from_cmid($id, '[modname]');\n$instance = $DB->get_record('[modname]', ['id'=> $cm->instance], '*', MUST_EXIST);\n")),(0,o.kt)("h3",{id:"versionphp"},(0,o.kt)("inlineCode",{parentName:"h3"},"version.php")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"version.php")," file keeps track of the version of your module, and other attributes, such as what version of Moodle it requires. For a full list of the attributes please see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/version.php"},"version.php"),"."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/NEWMODULE_Documentation"},"NEWMODULE Documentation"),"")))}u.isMDXComponent=!0}}]);