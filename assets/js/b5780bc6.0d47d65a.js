"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5898],{76605:function(e,l,t){t.r(l),t.d(l,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=t(83117),n=t(80102),s=(t(67294),t(3905)),i=t(13904),o=["components"],r={title:"SQL coding style",tags:["Coding guidelines","XMLDB","DB","Policies","Developer processes"]},d=void 0,p={unversionedId:"development/policies/codingstyle/sql",id:"development/policies/codingstyle/sql",title:"SQL coding style",description:"This page describes recommended coding style for complex database queries.",source:"@site/general/development/policies/codingstyle/sql.md",sourceDirName:"development/policies/codingstyle",slug:"/development/policies/codingstyle/sql",permalink:"/devdocs/general/development/policies/codingstyle/sql",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/codingstyle/sql.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"XMLDB",permalink:"/devdocs/general/tags/xmldb"},{label:"DB",permalink:"/devdocs/general/tags/db"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Developer processes",permalink:"/devdocs/general/tags/developer-processes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655444750,formattedLastUpdatedAt:"17/06/2022",frontMatter:{title:"SQL coding style",tags:["Coding guidelines","XMLDB","DB","Policies","Developer processes"]},sidebar:"coding",previous:{title:"Coding style",permalink:"/devdocs/general/development/policies/codingstyle/"},next:{title:"Moodle App Coding style",permalink:"/devdocs/general/development/policies/codingstyle-moodleapp"}},u={},c=[{value:"General rules",id:"general-rules",level:2},{value:"Double quotes",id:"double-quotes",level:2},{value:"Parameter placeholders",id:"parameter-placeholders",level:2},{value:"Indentation",id:"indentation",level:2},{value:"Subqueries",id:"subqueries",level:2},{value:"See also",id:"see-also",level:2}],m={toc:c};function g(e){var l=e.components,d=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,d,{components:l,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:r},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"This page describes recommended coding style for complex database queries."),(0,s.kt)("p",null,"Full SQL queries are used in ",(0,s.kt)("inlineCode",{parentName:"p"},"$DB->get_records_sql()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"$DB->get_recordset_sql()"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"$DB->execute()"),"."),(0,s.kt)("p",null,"SQL fragments may be used in DML method with _select() suffix."),(0,s.kt)("h2",{id:"general-rules"},"General rules"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use parameter placeholders."),(0,s.kt)("li",{parentName:"ul"},"All SQL keywords are in UPPER CASE."),(0,s.kt)("li",{parentName:"ul"},"All SQL queries and fragments should be enclosed in double quotes."),(0,s.kt)("li",{parentName:"ul"},"Complex SQL queries should be on multiple lines."),(0,s.kt)("li",{parentName:"ul"},"Multiline SQL queries should be right aligned on SELECT, FROM, JOIN, WHERE, GROUPY BY and HAVING."),(0,s.kt)("li",{parentName:"ul"},"Use JOIN instead of INNER JOIN."),(0,s.kt)("li",{parentName:"ul"},"Do not use right joins."),(0,s.kt)("li",{parentName:"ul"},"Always use AS keyword for column aliases."),(0,s.kt)("li",{parentName:"ul"},"Never use AS keyword for table aliases."),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"<>")," for comparing if values are not equals and do not use ",(0,s.kt)("inlineCode",{parentName:"li"},"!="),".")),(0,s.kt)("h2",{id:"double-quotes"},"Double quotes"),(0,s.kt)("p",null,"All sql queries and fragments should be enclosed in double quotes, do not concat SQL from multiple parts if possible. The single quotes are used for sql strings, it also helps with visual highlighting and SQL code completion in some IDEs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$records = $DB->get_records_select('some_table', \"id > ?\", [111]);\n")),(0,s.kt)("h2",{id:"parameter-placeholders"},"Parameter placeholders"),(0,s.kt)("p",null,"All variable query parameters must be specified via placeholders. It is possible to use three different types of placeholders: ",(0,s.kt)("inlineCode",{parentName:"p"},":named"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"?")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"$1"),". It is recommended to use named parameters if there is more than one parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$sql = \"SELECT *\n          FROM {some_table}\n         WHERE id > :above\";\n$records = $DB->get_records_sql($sql, ['above'=>111]);\n")),(0,s.kt)("h2",{id:"indentation"},"Indentation"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sql_indentation.png",src:t(71026).Z,width:"471",height:"171"})),(0,s.kt)("h2",{id:"subqueries"},"Subqueries"),(0,s.kt)("p",null,"There are no strict rules for subquery indentation, the deciding factor is good readability - see ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLSITE-1914"},"MDLSITE-1914"),"."),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/apis/core/dml"},"Data manipulation API")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Database"},"Database")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style"))))}g.isMDXComponent=!0},71026:function(e,l,t){l.Z=t.p+"assets/images/sql_indentation-ef4f5e790899d21da8c0a1f3e281eeef.png"}}]);