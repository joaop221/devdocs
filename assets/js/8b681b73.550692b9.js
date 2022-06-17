"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8607],{55001:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return m}});var o=r(83117),s=r(80102),a=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.7.1",tags:["Release notes","Moodle 2.7"],sidebar_position:1,moodleVersion:"2.7.1"},d=void 0,p={unversionedId:"releases/2.7/2.7.1",id:"releases/2.7/2.7.1",title:"Moodle 2.7.1",description:"Release date: 14 July, 2014",source:"@site/general/releases/2.7/2.7.1.md",sourceDirName:"releases/2.7",slug:"/releases/2.7/2.7.1",permalink:"/devdocs/general/releases/2.7/2.7.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.7/2.7.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.7",permalink:"/devdocs/general/tags/moodle-2-7"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655444750,formattedLastUpdatedAt:"17/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 2.7.1",tags:["Release notes","Moodle 2.7"],sidebar_position:1,moodleVersion:"2.7.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.7",permalink:"/devdocs/general/releases/2.7"},next:{title:"Moodle 2.7.2",permalink:"/devdocs/general/releases/2.7/2.7.2"}},u={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:m};function c(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"Release date: 14 July, 2014"),(0,a.kt)("p",null,"Here is ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.7.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.7.1"),"."),(0,a.kt)("h2",{id:"highlights"},"Highlights"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41383"},"MDL-41383")," - File picker works when zooming in and out of browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45580"},"MDL-45580")," - PDF Annotations working with multiple attempts")),(0,a.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43274"},"MDL-43274")," - Course logs can no longer be deleted when course is reset")),(0,a.kt)("h2",{id:"api-changes"},"API changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44871"},"MDL-44871")," - Behat tests written for Atto functionalities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43669"},"MDL-43669")," - Configuration option added so that mail can be sent from noreply address exclusively")),(0,a.kt)("h2",{id:"ui-changes"},"UI changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45599"},"MDL-45599")," - The term 'add-on' is changed to 'plugin'")),(0,a.kt)("h2",{id:"security-issues"},"Security issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264262"},"MSA-14-0021")," Code injection in Repositories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264263"},"MSA-14-0022")," XML External Entity vulnerability in LTI module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264264"},"MSA-14-0023")," XML External Entity vulnerability in IMSCC and IMSCP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264265"},"MSA-14-0024")," Cross-site scripting vulnerability in profile field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264266"},"MSA-14-0025")," Remote code execution in Quiz"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264267"},"MSA-14-0026")," Information leak in profile and notes pages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264268"},"MSA-14-0027")," Forum group posting issue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264269"},"MSA-14-0028")," Cross-site scripting possible in external badges"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264270"},"MSA-14-0029")," Cross-site scripting vulnerability in exception dialogues"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264271"},"MSA-14-0030")," Cross-site scripting through logs of failed logins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264272"},"MSA-14-0031")," Cross-site scripting though scheduled task error messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=264273"},"MSA-14-0032")," Cross-site scripting in advanced grading methods")),(0,a.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44124"},"MDL-44124")," - iCal import recurrence rules working consistently"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45579"},"MDL-45579")," - Duplicate group enrolment keys for the same course are no longer allowed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45682"},"MDL-45682")," - Can now insert images using Chrome"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43848"},"MDL-43848")," - New message popup no longer shows sender or contents of message")),(0,a.kt)("h2",{id:"translations"},"Translations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.7.1"},"Notes de mise \xe0 jour de Moodle 2.7.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.7.1"},"Notas de Moodle 2.7.1"))))}c.isMDXComponent=!0}}]);