"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1237],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5640:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"NodeJS"},s=void 0,c={unversionedId:"tools/nodejs",id:"tools/nodejs",title:"NodeJS",description:"Moodle development tools require the installation and use of NodeJS, which is a JavaScript runtime environment available for most operating systems.",source:"@site/docs/tools/nodejs.md",sourceDirName:"tools",slug:"/tools/nodejs",permalink:"/dinodevdocs/docs/next/tools/nodejs",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/docs/tools/nodejs.md",tags:[],version:"current",frontMatter:{title:"NodeJS"},sidebar:"docs",previous:{title:"Moodle Development Kit",permalink:"/dinodevdocs/docs/next/tools/mdk"},next:{title:"PHP CodeSniffer",permalink:"/dinodevdocs/docs/next/tools/phpcs"}},u={},d=[{value:"Node Version Manager",id:"node-version-manager",level:2},{value:"Grunt",id:"grunt",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Moodle development tools require the installation and use of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", which is a JavaScript runtime environment available for most operating systems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-{include}",metastring:"../_templates/node_version.md","../_templates/node_version.md":!0},"")),(0,a.kt)("p",null,"Use of ",(0,a.kt)("a",{parentName:"p",href:"#node-version-manager"},"NVM")," for installation of NodeJS is highly recommended over direct installation."),(0,a.kt)("h2",{id:"node-version-manager"},"Node Version Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," is the Node Version Manager. Its purpose is to simplify the installation, and use different versions of NodeJS."),(0,a.kt)("p",null,"Moodle includes a ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," which ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," can use to select the correct version of NodeJS."),(0,a.kt)("p",null,"To use the correct version of NodeJS for the current version of Moodle, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm install")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use")," commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm install\nFound '/Users/nicols/Sites/public_html/sm/.nvmrc' with version <lts/gallium>\nv16.14.0 is already installed.\nNow using node v16.14.0 (npm v8.3.1)\n")),(0,a.kt)("h2",{id:"grunt"},"Grunt"),(0,a.kt)("p",null,"As part of it's build stack, Moodle uses the ",(0,a.kt)("a",{parentName:"p",href:"https://gruntjs.com"},"Grunt")," task runner."),(0,a.kt)("p",null,"Grunt is composed of a set of tasks, defined within the Moodle code repository in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," file, and a grunt CLI tool which must also be installed."),(0,a.kt)("p",null,"To install the grunt CLI tool you can install it globally using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g grunt-cli\n$ grunt stylelint\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," command to install it on demand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx grunt stylelint\n")))}m.isMDXComponent=!0}}]);