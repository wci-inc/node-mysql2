"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[641],{8602:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=n(5893),s=n(1151),l=n(4866),a=n(5162),o=n(6393),i=n(4379);const c={sidebar_position:3,tags:["query"]},u="DELETE",d={id:"examples/queries/simple-queries/delete",title:"DELETE",description:"The examples below also work for the execute method.",source:"@site/docs/examples/queries/simple-queries/delete.mdx",sourceDirName:"examples/queries/simple-queries",slug:"/examples/queries/simple-queries/delete",permalink:"/node-mysql2/zh-CN/docs/examples/queries/simple-queries/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/simple-queries/delete.mdx",tags:[{label:"query",permalink:"/node-mysql2/zh-CN/docs/tags/query"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["query"]},sidebar:"examples",previous:{title:"UPDATE",permalink:"/node-mysql2/zh-CN/docs/examples/queries/simple-queries/update"},next:{title:"Prepared Statements",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/"}},h={},p=[{value:"query(sql)",id:"querysql",level:2},{value:"query(options)",id:"queryoptions",level:2},{value:"Glossary",id:"glossary",level:2},{value:"ResultSetHeader",id:"resultsetheader",level:3},{value:"QueryOptions",id:"queryoptions-1",level:3}];function m(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"delete",children:"DELETE"}),"\n",(0,t.jsxs)(r.p,{children:["The examples below also work for the ",(0,t.jsx)(r.a,{href:"/docs/examples/queries/prepared-statements/delete",children:(0,t.jsx)(r.code,{children:"execute"})})," method."]}),"\n",(0,t.jsx)(r.h2,{id:"querysql",children:"query(sql)"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"query(sql: string)"})}),"\n"]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.Z,{value:"promise.js",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\n  // highlight-next-line\n  const [result, fields] = await connection.query(sql);\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.Z,{value:"callback.js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\nconnection.query(sql, (err, result, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(result);\n  console.log(fields);\n});\n"})})})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"result"}),": contains a ",(0,t.jsx)(r.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["The connection used for the query (",(0,t.jsx)(r.code,{children:".query()"}),") can be obtained through the ",(0,t.jsx)(r.code,{children:"createConnection"}),", ",(0,t.jsx)(r.code,{children:"createPool"})," or ",(0,t.jsx)(r.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"queryoptions",children:"query(options)"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.strong,{children:["query(options: ",(0,t.jsx)(r.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(a.Z,{value:"promise.js",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\n  // highlight-start\n  const [result, fields] = await connection.query({\n    sql,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.Z,{value:"callback.js",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\nconnection.query(\n  {\n    sql,\n    // ... other options\n  },\n  (err, result, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(result);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"result"}),": contains a ",(0,t.jsx)(r.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["The connection used for the query (",(0,t.jsx)(r.code,{children:".query()"}),") can be obtained through the ",(0,t.jsx)(r.code,{children:"createConnection"}),", ",(0,t.jsx)(r.code,{children:"createPool"})," or ",(0,t.jsx)(r.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"glossary",children:"Glossary"}),"\n",(0,t.jsx)(r.h3,{id:"resultsetheader",children:"ResultSetHeader"}),"\n",(0,t.jsx)(o.Z,{title:"ResultSetHeader Specification",children:(0,t.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/packets/ResultSetHeader.d.ts",extractMethod:"ResultSetHeader",methodType:"interface"})}),"\n",(0,t.jsx)(r.h3,{id:"queryoptions-1",children:"QueryOptions"}),"\n",(0,t.jsx)(o.Z,{title:"QueryOptions Specification",children:(0,t.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>a});n(7294);var t=n(512);const s={tabItem:"tabItem_Ymn6"};var l=n(5893);function a(e){let{children:r,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>v});var t=n(7294),s=n(512),l=n(2466),a=n(6550),o=n(469),i=n(1980),c=n(7392),u=n(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,a.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,l=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:l}))),[c,d]=m({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,l]=(0,u.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function j(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),s=o[n].value;s!==t&&(c(r),a(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function q(e){const r=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...r}),(0,g.jsx)(y,{...e,...r})]})}function v(e){const r=(0,f.Z)();return(0,g.jsx)(q,{...e,children:d(e.children)},String(r))}},4379:(e,r,n)=>{n.d(r,{I:()=>i});var t=n(7294),s=n(2263),l=n(9286),a=n(5893);const o=()=>(0,a.jsx)("span",{className:"loader"}),i=e=>{let{url:r,language:n,extractMethod:i,methodType:c}=e;const[u,d]=(0,t.useState)(""),[h,p]=(0,t.useState)(!0),[m,x]=(0,t.useState)(!0),{siteConfig:f}=(0,s.Z)(),b=f.baseUrl.replace(/\/$/,""),g=/^\//.test(r)?`${b}${r}`:r;return(0,t.useEffect)((()=>{const e=new AbortController,r=e.signal;return fetch(g,{signal:r}).then((e=>e.text())).then((e=>{const r=i&&c?((e,r,n)=>{const t=e.split("\n"),s=`${n} ${r}`;let l=!1,a=0,o="";for(const i of t)if(i.includes(s)&&(l=!0),l&&(i.includes("{")&&a++,o+=i+"\n",i.includes("}")&&(a--,0===a)))break;return o.trim()||e})(e,i,c):e;d(r||e),p(!1),x(!1)})).catch((()=>{x(!0),p(!1)})),()=>{e.abort()}}),[g,i,c]),(0,a.jsx)(a.Fragment,{children:h?(0,a.jsx)(o,{}):(0,a.jsx)(a.Fragment,{children:m?(0,a.jsxs)("div",{children:["Unable to access the requested link: ",(0,a.jsx)("code",{children:g}),". Please verify the link or try again later."]}):(0,a.jsx)(l.Z,{className:`language-${n}`,children:u})})})}},6393:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(4673),s=n(5893);const l=e=>{let{children:r,open:n,title:l}=e;return(0,s.jsx)(t.Z,{open:n,className:"faq",summary:(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:l})}),children:(0,s.jsx)("section",{children:r})})}}}]);