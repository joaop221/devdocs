"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27842],{66766:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=o(83117),n=o(80102),i=(o(67294),o(3905)),r=o(13904),s=["components"],l={title:"Moodle App FAQ",sidebar_label:"FAQ",tags:["Moodle App"]},p=void 0,d={unversionedId:"moodleapp/faq",id:"moodleapp/faq",title:"Moodle App FAQ",description:"How can I contribute to the Moodle App?",source:"@site/docs/moodleapp/faq.md",sourceDirName:"moodleapp",slug:"/moodleapp/faq",permalink:"/devdocs/docs/moodleapp/faq",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/faq.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655444750,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"Moodle App FAQ",sidebar_label:"FAQ",tags:["Moodle App"]},sidebar:"docs",previous:{title:"Release process",permalink:"/devdocs/docs/moodleapp/development/release-process"},next:{title:"Upgrading your code",permalink:"/devdocs/docs/category/upgrading-your-code"}},c={},u=[{value:"How can I contribute to the Moodle App?",id:"how-can-i-contribute-to-the-moodle-app",level:2},{value:"I see this error: &quot;Cannot connect: Verify that your have typed correctly the URL and that your site uses Moodle 2.4 or later&quot;",id:"i-see-this-error-cannot-connect-verify-that-your-have-typed-correctly-the-url-and-that-your-site-uses-moodle-24-or-later",level:2},{value:"The app starts but it says it cannot connect to any site I try",id:"the-app-starts-but-it-says-it-cannot-connect-to-any-site-i-try",level:2},{value:"Some features like IMSCP, resource mini sites, local notifications are not working in the browser",id:"some-features-like-imscp-resource-mini-sites-local-notifications-are-not-working-in-the-browser",level:2},{value:"What is the difference between a native app and a Mobile specific theme or responsive theme?",id:"what-is-the-difference-between-a-native-app-and-a-mobile-specific-theme-or-responsive-theme",level:2},{value:"I am having problems running the app from the source code",id:"i-am-having-problems-running-the-app-from-the-source-code",level:2}],h={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,a.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"how-can-i-contribute-to-the-moodle-app"},"How can I contribute to the Moodle App?"),(0,i.kt)("p",null,"You can help with ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3231?jql=project%20%3D%20MOBILE%20AND%20status%20%3D%20Open%20AND%20labels%20%3D%20contribfriendly"},"any issue marked with the ",(0,i.kt)("inlineCode",{parentName:"a"},"contribfriendly")," label"),"."),(0,i.kt)("p",null,"If you want to help with another issue, please let us know first via the tracker, you can a comment in the issue itself."),(0,i.kt)("p",null,"You have a detailed description of our development process here: ",(0,i.kt)("a",{parentName:"p",href:"/general/development/process-moodleapp"},"Moodle App Development Process"),"."),(0,i.kt)("h2",{id:"i-see-this-error-cannot-connect-verify-that-your-have-typed-correctly-the-url-and-that-your-site-uses-moodle-24-or-later"},'I see this error: "Cannot connect: Verify that your have typed correctly the URL and that your site uses Moodle 2.4 or later"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure that debugging is disabled in your site: Site administration > Development > Debugging."),(0,i.kt)("li",{parentName:"ul"},'Check that the ADOdb option is disabled if you are using the external database auth or enrolment plugin. You can do that in "Plugins > Authentication > External database" and in "Plugins > Enrolment > External database".'),(0,i.kt)("li",{parentName:"ul"},"If your site uses an SSL certificate, it must be a trusted certificate, not self-signed. You can use this tool or a similar one to check that your certificate is fine: ",(0,i.kt)("a",{parentName:"li",href:"https://www.geocerts.com/ssl-checker"},"SSL Checker"),'. All the checks must be ok, including the "Certificate Chain Complete". Otherwise the app might work on iOS but not on Android.')),(0,i.kt)("h2",{id:"the-app-starts-but-it-says-it-cannot-connect-to-any-site-i-try"},"The app starts but it says it cannot connect to any site I try"),(0,i.kt)("p",null,"This may happen because you need to use a different browser with special flags enabled so cross domains XHR requests are allowed."),(0,i.kt)("p",null,"In short, you need to download Chromium from ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/download-chromium/"},"the official download page")," and open it with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chromium-browser --allow-file-access-from-files --disable-web-security\n")),(0,i.kt)("p",null,"For additional information please, read the ",(0,i.kt)("a",{parentName:"p",href:"./development/setup/app-in-browser"},"Using the Moodle App in a browser")," page."),(0,i.kt)("h2",{id:"some-features-like-imscp-resource-mini-sites-local-notifications-are-not-working-in-the-browser"},"Some features like IMSCP, resource mini sites, local notifications are not working in the browser"),(0,i.kt)("p",null,"Some features must be tested directly in a mobile device. You can do that using the application in the app stores, or you can learn how to compile it yourself in the ",(0,i.kt)("a",{parentName:"p",href:"./development/setup#running-the-app-in-android-and-ios"},"Setting up your development environment for the Moodle App")," page."),(0,i.kt)("h2",{id:"what-is-the-difference-between-a-native-app-and-a-mobile-specific-theme-or-responsive-theme"},"What is the difference between a native app and a Mobile specific theme or responsive theme?"),(0,i.kt)("p",null,"You can read about that in the following forum posts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=206736#p901475"},"Juan Leyva forum post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=206736#p901751"},"Martin Dougiamas forum post"))),(0,i.kt)("h2",{id:"i-am-having-problems-running-the-app-from-the-source-code"},"I am having problems running the app from the source code"),(0,i.kt)("p",null,"If you are having issues getting the app to compile, make sure to check out the troubleshooting section of the ",(0,i.kt)("a",{parentName:"p",href:"./development/setup#troubleshooting"},"Setting up your development environment for the Moodle App")," page."))}m.isMDXComponent=!0}}]);