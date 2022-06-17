"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[34558],{3381:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=o(83117),a=o(80102),s=(o(67294),o(3905)),i=o(13904),l=["components"],n={title:"Moodle 1.9.5",tags:["Release notes","Moodle 1.9"],sidebar_position:5,moodleVersion:"1.9.5"},d=void 0,p={unversionedId:"releases/1.9/1.9.5",id:"releases/1.9/1.9.5",title:"Moodle 1.9.5",description:"Release date: May 13th 2009",source:"@site/general/releases/1.9/1.9.5.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.5",permalink:"/devdocs/general/releases/1.9/1.9.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655444750,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 1.9.5",tags:["Release notes","Moodle 1.9"],sidebar_position:5,moodleVersion:"1.9.5"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.4",permalink:"/devdocs/general/releases/1.9/1.9.4"},next:{title:"Moodle 1.9.6",permalink:"/devdocs/general/releases/1.9/1.9.6"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Known problems and regressions",id:"known-problems-and-regressions",level:2},{value:"Changes in Moodle API",id:"changes-in-moodle-api",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: May 13th 2009"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10320"},"the full list of fixed issues in 1.9.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18083"},"MDL-18083")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Gradebook_improvements_in_Moodle_1.9.5"},"Gradebook improvements")," including tabs navigation option, horizontal scrollbar in grader report, easier editing of categories and items, option to reduce the number of aggregation types and option to allow grades over 100%"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17074"},"MDL-17074")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Course_default_settings"},"Course default settings")," in ",(0,s.kt)("em",{parentName:"li"},"Administration > Courses > Course default settings"),". Now it's possible to specify some defaults to be applied on interactive course creation. Note this feature is one subset of the more complete defaults available in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Category/Moodle_2.0"},"Moodle 2.0"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17144"},"MDL-17144")," - New ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Spam_cleaner"},"Spam cleaner")," report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18468"},"MDL-18468")," - New setting in ",(0,s.kt)("em",{parentName:"li"},"Administration > Miscellaneous > ",(0,s.kt)("a",{parentName:"em",href:"https://docs.moodle.org/dev/Experimental"},"Experimental"))," for checking course backup files for XML errors and splitting into smaller parts for use in the restore process. This will result in improvements to restore robustness and execution times, particularly for medium to large course backups."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18518"},"MDL-18518")," - New user profile field - First access"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14743"},"MDL-14743")," - Help popup link allowing users to switch between English and their own language"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11313"},"MDL-11313")," - New setting in ",(0,s.kt)("em",{parentName:"li"},"Administration > Users > Permissions > ",(0,s.kt)("a",{parentName:"em",href:"https://docs.moodle.org/dev/User_policies"},"User policies"))," for allowing users without the assign roles capability to switch roles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18338"},"MDL-18338")," - Option to hide groups on user profile pages")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=121039"},"MSA-09-0009")," - TeX filter file disclosure"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=123855"},"MSA-09-0010")," - Unzip binary may create symbolic links pointing outside of dataroot on unix/linux servers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=123856"},"MSA-09-0011")," - Glossary, database and forum ratings are not verified after submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=123858"},"MSA-09-0012")," - SQL injections when importing outcomes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=123860"},"MSA-09-0013")," - Customised PhpMyAdmin upgraded to 2.11.9.5")),(0,s.kt)("h2",{id:"known-problems-and-regressions"},"Known problems and regressions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19266"},"MDL-19266")," - Forum posts containing links are not sent on a PHP4 system  (fixed in weekly build of 27th May)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19288"},"MDL-19288")," - Context and module information caching regressions on large sites. It was reported that it may ",(0,s.kt)("em",{parentName:"li"},"cause all sorts of bad things to happen"),".  (fixed in weekly build of 27th May)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19227"},"MDL-19227")," - Imports of outcomes by CSV were not being completed successfully (fixed in weekly build of 27th May)")),(0,s.kt)("h2",{id:"changes-in-moodle-api"},"Changes in Moodle API"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18066"},"MDL-18066"),": The ",(0,s.kt)("strong",{parentName:"li"},"import_backup_file_silently()")," has been modified, so it doesn't provide automatic administrator credentials anymore. The (custom) caller functions have the responsibility of doing that. This change only affects to 3rd party code using the function, core doesn't use it at all.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.5"},"French version of this page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.9.5"},"Notas de Moodle 1.9.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.9.5_Versionsinformationen"},"Moodle 1.9.5 Versionsinformationen"))))}c.isMDXComponent=!0}}]);