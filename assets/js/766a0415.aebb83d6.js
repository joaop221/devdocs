"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7529],{33903:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),n=a(13904),i=["components"],s={title:"Moodle 3.6",tags:["Release notes","Moodle 3.6"],sidebar_position:-306,moodleVersion:"3.6"},p=void 0,m={unversionedId:"releases/3.6",id:"releases/3.6",title:"Moodle 3.6",description:"Release date: 3 December 2018",source:"@site/general/releases/3.6.md",sourceDirName:"releases",slug:"/releases/3.6",permalink:"/devdocs/general/releases/3.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.6",permalink:"/devdocs/general/tags/moodle-3-6"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655444750,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:-306,frontMatter:{title:"Moodle 3.6",tags:["Release notes","Moodle 3.6"],sidebar_position:-306,moodleVersion:"3.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.7.9",permalink:"/devdocs/general/releases/3.7/3.7.9"},next:{title:"Moodle 3.6.1",permalink:"/devdocs/general/releases/3.6/3.6.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Dashboard and Course overview",id:"dashboard-and-course-overview",level:3},{value:"GDPR and Privacy",id:"gdpr-and-privacy",level:3},{value:"Messaging",id:"messaging",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Workshop",id:"workshop",level:3},{value:"Repositories",id:"repositories",level:3},{value:"Open Badges",id:"open-badges",level:3},{value:"Performance",id:"performance",level:3},{value:"Usability improvements",id:"usability-improvements",level:3},{value:"Experimental",id:"experimental",level:3},{value:"Other highlights",id:"other-highlights",level:2},{value:"Functional changes",id:"functional-changes",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"For developers",id:"for-developers",level:2},{value:"Privacy API update",id:"privacy-api-update",level:3},{value:"Behat scenario files",id:"behat-scenario-files",level:3},{value:"Login token",id:"login-token",level:3},{value:"New core functions",id:"new-core-functions",level:3},{value:"New callback hooking points in page layouts",id:"new-callback-hooking-points-in-page-layouts",level:3},{value:"Component APIs upgrades",id:"component-apis-upgrades",level:3},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,r.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 3 December 2018"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.6"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/36/en/New_features"},"New features page")," in the user documentation for an introduction to Moodle 3.6 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from a previous version, please see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Upgrading"},"Upgrading")," in the user docs. ",(0,l.kt)("em",{parentName:"p"},"In particular, for sites using a custom theme or login form, from 3.6 onwards, the login form must include a new login token field. See ",(0,l.kt)("a",{parentName:"em",href:"https://docs.moodle.org/dev/Login_token"},"Login token")," for details.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You are recommended to use ",(0,l.kt)("a",{parentName:"p",href:"/general/releases/3.6/3.6.1"},"Moodle 3.6.1"),", as it includes a messaging regression fix."))),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 3.1 or later"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 7.0.0 ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.3"),". PHP 7.1.x, 7.2.x and 7.3.x (since Moodle 3.6.4) are supported too. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP"},"Moodle and PHP")," for details."),(0,l.kt)("li",{parentName:"ul"},"PHP extension ",(0,l.kt)("strong",{parentName:"li"},"intl")," is required since Moodle 3.4 (it was recommended in 2.0 onwards)")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.4"),(0,l.kt)("td",{parentName:"tr",align:null},"11.x - note that 12.x is not yet supported (",(0,l.kt)("a",{parentName:"td",href:"https://tracker.moodle.org/browse/MDL-67414"},"MDL-67414"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.6"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"11.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://www.whatismybrowser.com/"},"https://www.whatismybrowser.com/")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.6:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"dashboard-and-course-overview"},"Dashboard and Course overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63044"},"MDL-63044")," and ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63337"},"MDL-63337")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Course_overview"},"Course overview")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Timeline_block"},"Timeline block")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63062"},"MDL-63062")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Recently_accessed_courses_block"},"Recently accessed courses block")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63063"},"MDL-63063")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Recently_accessed_items_block"},"Recently accessed items block")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63457"},"MDL-63457")," - Option to hide courses in the course overview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63058"},"MDL-63058")," - Option to star/unstar courses in the course overview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63064"},"MDL-63064")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Starred_courses_block"},"Starred courses block")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63352"},"MDL-63352")," - Dashboard retains user preferences for view options"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63793"},"MDL-63793")," - Course overview block retains user preferences for the number of courses to show"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61161"},"MDL-61161"),' - Grace period when displaying "In progress" courses in course overview block'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63040"},"MDL-63040")," - Removal of Dashboard page header")),(0,l.kt)("h3",{id:"gdpr-and-privacy"},"GDPR and Privacy"),(0,l.kt)("p",null,"Note that some of these GDPR improvements have also been backported to Moodle 3.5.3,  3.4.6 and 3.3.9."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63116"},"MDL-63116")," - Data requests bulk actions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62309"},"MDL-62309")," - Option to make site policies required or optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61652"},"MDL-61652")," - Capabilities for controlling who can download SAR data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62563"},"MDL-62563")," - Data deletion of existing deleted users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63897"},"MDL-63897")," - Pre-processing stage removed from data requests process"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62558"},"MDL-62558")," - Data retention summary (read-only)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63726"},"MDL-63726"),' - Option to remove the "Data retention summary" link in the footer'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62491"},"MDL-62491")," - HTML data request export format"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63401"},"MDL-63401")," - User expiry improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63619"},"MDL-63619")," - Data purpose and category inheritance improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62560"},"MDL-62560")," - Different data retention strategies for different roles in a purpose"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62554"},"MDL-62554")," - Ability to configure data registry to use module type defaults"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63009"},"MDL-63009")," - Site mentioned in email notifications of data requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-6074"},"MDL-6074")," - Option to hide your name in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Online_users_block"},"online users block"))),(0,l.kt)("h3",{id:"messaging"},"Messaging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://tracker.moodle.org/browse/MDL-57272"},"MDL-57272")," and ",(0,l.kt)("a",{parentName:"strong",href:"https://tracker.moodle.org/browse/MDL-63280"},"MDL-63280")," - Group messaging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63303"},"MDL-63303")," - New messaging UI with ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Messaging"},"messaging drawer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63279"},"MDL-63279")," - Option to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Messaging_settings"},"disable site-wide messaging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63214"},"MDL-63214")," - Privacy setting for restricting who can message you",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The new 'Allow site-wide messaging' setting is disabled by default for new installs but enabled for upgraded sites if ",(0,l.kt)("em",{parentName:"li"},"$CFG->keepmessagingallusersenabled = true;")," is defined in config.php"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63213"},"MDL-63213")," - Option to star messaging conversations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63283"},"MDL-63283")," - Notifications not sent for group conversations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63281"},"MDL-63281")," - Group members synchronised with messaging conversations members")),(0,l.kt)("h3",{id:"assignment"},"Assignment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27520"},"MDL-27520")," - Assignment feedback can include media or other files")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62610"},"MDL-62610")," - Improved quiz statistics report usability for randomized questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62708"},"MDL-62708")," - Option to add ID numbers to questions and question categories"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63738"},"MDL-63738")," - Single questions can be exported from the question bank")),(0,l.kt)("h3",{id:"workshop"},"Workshop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60820"},"MDL-60820")," - Teachers can specify workshop submission types")),(0,l.kt)("h3",{id:"repositories"},"Repositories"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58943"},"MDL-58943")," - Nextcloud integration, with a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Nextcloud_repository"},"Nextcloud repository")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/OAuth_2_Nextcloud_service"},"OAuth 2 Nextcloud service"))),(0,l.kt)("h3",{id:"open-badges"},"Open Badges"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58454"},"MDL-58454")," - Support for Open Badges v2.0")),(0,l.kt)("h3",{id:"performance"},"Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54035"},"MDL-54035")," - Performance improvements to cache flags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47962"},"MDL-47962")," - Glossary auto-linking filter performance improvements")),(0,l.kt)("h3",{id:"usability-improvements"},"Usability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51177"},"MDL-51177")," - atto_htmlplus implemented to improve Atto editor HTML indenting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45170"},"MDL-45170")," - Copy and paste of images from one WYSIWYG window to another"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61388"},"MDL-61388")," - Forum actions announced by screen reader when completed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62899"},"MDL-62899")," - Global search displays a relevant icon next to link in results"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46415"},"MDL-46415")," - SVG/high resolution emoticons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58000"},"MDL-58000")," - Larger badge images are used")),(0,l.kt)("h3",{id:"experimental"},"Experimental"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53566"},"MDL-53566")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Context_freezing"},"Context freezing")," - setting read-only access for categories, courses, activities and their content")),(0,l.kt)("h2",{id:"other-highlights"},"Other highlights"),(0,l.kt)("h3",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17943"},"MDL-17943")," - 'Resend confirmation email' button on login page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14274"},"MDL-14274")," - IF conditions in grade calculations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37624"},"MDL-37624")," - Calendar entries location support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36754"},"MDL-36754")," - Images are displayed in forum notification emails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59259"},"MDL-59259")," - Course format options may be specified in upload courses CSV file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41265"},"MDL-41265"),' - Page resource option to show/hide "Last modified"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61378"},"MDL-61378")," - Forum post HTML structure improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59454"},"MDL-59454")," - Option to download the list of course participants"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60520"},"MDL-60520")," - Analytics models can use different machine learning backends"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61573"},"MDL-61573")," - User menu: customusermenuitems map Font Awesome icons for non pix/t folders"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62320"},"MDL-62320")," - JSON added to the default MIME types list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63431"},"MDL-63431")," - Atto media plugin title global attribute support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60435"},"MDL-60435")," - Shibboleth authentication identity providers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59169"},"MDL-59169")," - Grader report saves after edit with multiple tabs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62960"},"MDL-62960")," - Drag and drop of course events respects the course start date")),(0,l.kt)("h3",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=378731"},"MSA-18-0020")," Login CSRF vulnerability in login form. Note that this fix has previously been disclosed following the release of Moodle 3.5.3, 3.4.6, 3.3.9 and 3.1.15.")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62334"},"MDL-62334")," - 'Add a new course' link in Site administration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63253"},"MDL-63253")," - Admin search results provide location of the found matching page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63772"},"MDL-63772")," - Capability to control use of Atto Record RTC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63708"},"MDL-63708")," - New blocks supported by the mobile app can be disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52953"},"MDL-52953")," - Legacy log store deprecation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59429"},"MDL-59429")," - Log changes to site administrators"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62651"},"MDL-62651")," - adhoc task runner"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62777"},"MDL-62777")," - Site upgrades via CLI display new default settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63603"},"MDL-63603")," - Indian Rupee added to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/PayPal_enrolment"},"PayPal enrolment")," currencies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60514"},"MDL-60514")," - Set Path to PHP CLI in order to display 'Run now' for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/36/en/Scheduled_tasks"},"Scheduled tasks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61041"},"MDL-61041")," - Assignment upgrade helper tool removed from core.")),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55188"},"MDL-55188")," - Old Events API final deprecation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54741"},"MDL-54741")," - Phase 2 of deprecation of functions in lib/deprecatedlib.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51803"},"MDL-51803")," - Reusable element for drag and drop sortable table or list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63329"},"MDL-63329")," - memcache session handler removal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63658"},"MDL-63658")," - New Favourites subsystem"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63729"},"MDL-63729")," - Badges web services return new fields and data added by the Open Badges v2.0 specification"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50812"},"MDL-50812")," - core_useragent::get_browser_version_classes distinguishes between different browsers")),(0,l.kt)("h3",{id:"privacy-api-update"},"Privacy API update"),(0,l.kt)("p",null,"In addition to existing requirements, any plugin which implements the plugin provider interface must also implement the ",(0,l.kt)("tt",null,"\\core_privacy\\local\\request\\core_userlist_provider")," interface. Two new methods need to be implemented:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Privacy_API#Retrieving_the_users_in_a_context"},"get users in context()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Privacy_API#Delete_personal_information_for_several_users_in_a_specific_context"},"delete data for users()"))),(0,l.kt)("p",null,"However, the two above methods are not required for plugins that ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Privacy_API#Plugins_which_do_not_store_personal_data"},"implement the ",(0,l.kt)("tt",null,"null provider"))," only (i.e. which do not store personal data)."),(0,l.kt)("p",null,"Note that these changes are also required for latest Moodle 3.4.6 and 3.5.3 versions."),(0,l.kt)("h3",{id:"behat-scenario-files"},"Behat scenario files"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57281"},"MDL-57281")," - The behat step ",(0,l.kt)("inlineCode",{parentName:"li"},'I navigate to "ITEM" node in "MAINNODE > PATH"')," has been deprecated and throws an exception with details on how to replace it. The recommended replacement steps work in all recent Moodle versions. The updated Behat will pass with Moodle 3.4 too.")),(0,l.kt)("h3",{id:"login-token"},"Login token"),(0,l.kt)("p",null,"If your plugin provides an alternative login form (e.g. it is a theme replacing the default login form template / renderer), the login form must include a new login token field. For details of required changes, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Login_token"},"Login token"),". Note that this also affects latest stable branches too."),(0,l.kt)("h3",{id:"new-core-functions"},"New core functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("tt",null,"userdate_htmltime()"))),(0,l.kt)("h3",{id:"new-callback-hooking-points-in-page-layouts"},"New callback hooking points in page layouts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("tt",null,"standard_after_main_region_html")," - A new general purpose callback hooking point in the page layout. Used for example by the new messaging drawer UI.")),(0,l.kt)("h3",{id:"component-apis-upgrades"},"Component APIs upgrades"),(0,l.kt)("p",null,"Please refer to the upgrade.txt files in the relevant component directory for changes in this particular Moodle release."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/admin/tool/log/upgrade.txt"},"admin/tool/log/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/admin/tool/upgrade.txt"},"admin/tool/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/auth/shibboleth/upgrade.txt"},"auth/shibboleth/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/auth/upgrade.txt"},"auth/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/badges/upgrade.txt"},"badges/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/blocks/upgrade.txt"},"blocks/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/cache/upgrade.txt"},"cache/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/calendar/upgrade.txt"},"calendar/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/course/format/upgrade.txt"},"course/format/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/course/upgrade.txt"},"course/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/enrol/upgrade.txt"},"enrol/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/filter/upgrade.txt"},"filter/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/grade/grading/form/upgrade.txt"},"grade/grading/form/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/grade/report/upgrade.txt"},"grade/report/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/grade/upgrade.txt"},"grade/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/lib/upgrade.txt"},"lib/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/media/upgrade.txt"},"media/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/message/upgrade.txt"},"message/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/assign/upgrade.txt"},"mod/assign/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/feedback/upgrade.txt"},"mod/feedback/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/forum/upgrade.txt"},"mod/forum/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/quiz/upgrade.txt"},"mod/quiz/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/scorm/report/basic/upgrade.txt"},"mod/scorm/report/basic/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/scorm/upgrade.txt"},"mod/scorm/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/upgrade.txt"},"mod/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/mod/workshop/upgrade.txt"},"mod/workshop/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/question/format/upgrade.txt"},"question/format/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/report/upgrade.txt"},"report/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/tag/upgrade.txt"},"tag/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/theme/upgrade.txt"},"theme/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.6.0/user/upgrade.txt"},"user/upgrade.txt"))),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.6"},"Notes de mise \xe0 jour de Moodle 3.6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.6"},"Notas de Moodle 3.6"))))}k.isMDXComponent=!0}}]);