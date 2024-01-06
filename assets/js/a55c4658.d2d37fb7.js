"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[452],{9547:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=r(5893),t=r(1151),l=r(4866),a=r(5162),o=r(6393),i=r(4379);const c={sidebar_position:0,tags:["query"]},u="INSERT",d={id:"examples/queries/simple-queries/insert",title:"INSERT",description:"The examples below also work for the execute method.",source:"@site/docs/examples/queries/simple-queries/insert.mdx",sourceDirName:"examples/queries/simple-queries",slug:"/examples/queries/simple-queries/insert",permalink:"/node-mysql2/docs/examples/queries/simple-queries/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/simple-queries/insert.mdx",tags:[{label:"query",permalink:"/node-mysql2/docs/tags/query"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,tags:["query"]},sidebar:"examples",previous:{title:"Simple Queries",permalink:"/node-mysql2/docs/examples/queries/simple-queries/"},next:{title:"SELECT",permalink:"/node-mysql2/docs/examples/queries/simple-queries/select"}},h={},p=[{value:"query(sql)",id:"querysql",level:2},{value:"query(options)",id:"queryoptions",level:2},{value:"Glossary",id:"glossary",level:2},{value:"ResultSetHeader",id:"resultsetheader",level:3},{value:"QueryOptions",id:"queryoptions-1",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"insert",children:"INSERT"}),"\n",(0,s.jsxs)(n.p,{children:["The examples below also work for the ",(0,s.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements/insert",children:(0,s.jsx)(n.code,{children:"execute"})})," method."]}),"\n",(0,s.jsx)(n.h2,{id:"querysql",children:"query(sql)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"query(sql: string)"})}),"\n"]}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'try {\n  const sql =\n    \'INSERT INTO `users`(`name`, `age`) VALUES ("Josh", 19), ("Page", 45)\';\n\n  // highlight-next-line\n  const [result, fields] = await connection.query(sql);\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n'})})}),(0,s.jsx)(a.Z,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const sql =\n  \'INSERT INTO `users`(`name`, `age`) VALUES ("Josh", 19), ("Page", 45)\';\n\nconnection.query(sql, (err, result, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(result);\n  console.log(fields);\n});\n'})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"result"}),": contains a ",(0,s.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"queryoptions",children:"query(options)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["query(options: ",(0,s.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(a.Z,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'try {\n  const sql =\n    \'INSERT INTO `users`(`name`, `age`) VALUES ("Josh", 19), ("Page", 45)\';\n\n  // highlight-start\n  const [result, fields] = await connection.query({\n    sql,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n'})})}),(0,s.jsx)(a.Z,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const sql =\n  \'INSERT INTO `users`(`name`, `age`) VALUES ("Josh", 19), ("Page", 45)\';\n\nconnection.query(\n  {\n    sql,\n    // ... other options\n  },\n  (err, result, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(result);\n    console.log(fields);\n  }\n);\n'})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"result"}),": contains a ",(0,s.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h3,{id:"resultsetheader",children:"ResultSetHeader"}),"\n",(0,s.jsx)(o.Z,{title:"ResultSetHeader Specification",children:(0,s.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/packets/ResultSetHeader.d.ts",extractMethod:"ResultSetHeader",methodType:"interface"})}),"\n",(0,s.jsx)(n.h3,{id:"queryoptions-1",children:"QueryOptions"}),"\n",(0,s.jsx)(o.Z,{title:"QueryOptions Specification",children:(0,s.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var s=r(512);const t={tabItem:"tabItem_Ymn6"};var l=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>v});var s=r(7294),t=r(512),l=r(2466),a=r(6550),o=r(469),i=r(1980),c=r(7392),u=r(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:t}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,u.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),b=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function j(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==s&&(c(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function q(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(q,{...e,...n})]})}function v(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},4379:(e,n,r)=>{r.d(n,{I:()=>i});var s=r(7294),t=r(2263),l=r(9286),a=r(5893);const o=()=>(0,a.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:r,extractMethod:i,methodType:c}=e;const[u,d]=(0,s.useState)(""),[h,p]=(0,s.useState)(!0),[m,x]=(0,s.useState)(!0),{siteConfig:f}=(0,t.Z)(),b=f.baseUrl.replace(/\/$/,""),g=/^\//.test(n)?`${b}${n}`:n;return(0,s.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(g,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&c?((e,n,r)=>{const s=e.split("\n"),t=`${r} ${n}`;let l=!1,a=0,o="";for(const i of s)if(i.includes(t)&&(l=!0),l&&(i.includes("{")&&a++,o+=i+"\n",i.includes("}")&&(a--,0===a)))break;return o.trim()||e})(e,i,c):e;d(n||e),p(!1),x(!1)})).catch((()=>{x(!0),p(!1)})),()=>{e.abort()}}),[g,i,c]),(0,a.jsx)(a.Fragment,{children:h?(0,a.jsx)(o,{}):(0,a.jsx)(a.Fragment,{children:m?(0,a.jsxs)("div",{children:["Unable to access the requested link: ",(0,a.jsx)("code",{children:g}),". Please verify the link or try again later."]}):(0,a.jsx)(l.Z,{className:`language-${r}`,children:u})})})}},6393:(e,n,r)=>{r.d(n,{Z:()=>l});var s=r(4673),t=r(5893);const l=e=>{let{children:n,open:r,title:l}=e;return(0,t.jsx)(s.Z,{open:r,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:l})}),children:(0,t.jsx)("section",{children:n})})}}}]);