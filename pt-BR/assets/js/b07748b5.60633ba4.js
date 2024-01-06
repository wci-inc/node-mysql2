"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4403],{214:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=s(5893),o=s(1151),l=s(4866),t=s(5162),c=s(6393),i=s(4379);const a={sidebar_position:3,tags:["createPoolCluster","URI","SHA1","RDS","SSL","Socks"]},d="createPoolCluster",u={id:"examples/connections/createPoolCluster",title:"createPoolCluster",description:"For queries please see the Simple Queries and Prepared Statements examples.",source:"@site/docs/examples/connections/createPoolCluster.mdx",sourceDirName:"examples/connections",slug:"/examples/connections/createPoolCluster",permalink:"/node-mysql2/pt-BR/docs/examples/connections/createPoolCluster",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/connections/createPoolCluster.mdx",tags:[{label:"createPoolCluster",permalink:"/node-mysql2/pt-BR/docs/tags/create-pool-cluster"},{label:"URI",permalink:"/node-mysql2/pt-BR/docs/tags/uri"},{label:"SHA1",permalink:"/node-mysql2/pt-BR/docs/tags/sha-1"},{label:"RDS",permalink:"/node-mysql2/pt-BR/docs/tags/rds"},{label:"SSL",permalink:"/node-mysql2/pt-BR/docs/tags/ssl"},{label:"Socks",permalink:"/node-mysql2/pt-BR/docs/tags/socks"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["createPoolCluster","URI","SHA1","RDS","SSL","Socks"]},sidebar:"examples",previous:{title:"createPool",permalink:"/node-mysql2/pt-BR/docs/examples/connections/create-pool"},next:{title:"Simple Queries",permalink:"/node-mysql2/pt-BR/docs/examples/queries/simple-queries/"}},h={},p=[{value:"add(group, connectionUri)",id:"addgroup-connectionuri",level:2},{value:"add(group, config)",id:"addgroup-config",level:2},{value:"add(group, config) \u2014 SHA1",id:"addgroup-config--sha1",level:2},{value:"add(group, config) \u2014 SSL",id:"addgroup-config--ssl",level:2},{value:"add(group, config) \u2014 RDS SSL",id:"addgroup-config--rds-ssl",level:2},{value:"Related Links",id:"related-links",level:3},{value:"add(group, config) \u2014 Socks",id:"addgroup-config--socks",level:2},{value:"Glossary",id:"glossary",level:2},{value:"PoolOptions",id:"pooloptions",level:3}];function g(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"createpoolcluster",children:"createPoolCluster"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For queries please see the ",(0,r.jsx)(n.a,{href:"/docs/examples/queries/simple-queries",children:(0,r.jsx)(n.strong,{children:"Simple Queries"})})," and ",(0,r.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,r.jsx)(n.strong,{children:"Prepared Statements"})})," examples."]})}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-connectionuri",children:"add(group, connectionUri)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"add(group: string, connectionUri: string)"})}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(t.Z,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const poolCluster = mysql.createPoolCluster();\n\n  poolCluster.add('clusterA', 'mysql://root:password@localhost:3306/test');\n  // poolCluster.add('clusterB', '...');\n\n  const connection = await poolCluster.getConnection('clusterA');\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(t.Z,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', 'mysql://root:password@localhost:3306/test');\n// poolCluster.add('clusterB', '...');\n\npoolCluster.getConnection('clusterA', function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-config",children:"add(group, config)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["add(group: string, config: ",(0,r.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(t.Z,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const poolCluster = mysql.createPoolCluster();\n\n  poolCluster.add('clusterA', {\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n    // port: 3306,\n    // password: '',\n  });\n  // poolCluster.add('clusterB', '...');\n\n  const connection = await poolCluster.getConnection('clusterA');\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(t.Z,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  // port: 3306,\n  // password: '',\n});\n// poolCluster.add('clusterB', '...');\n\npoolCluster.getConnection('clusterA', function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-config--sha1",children:"add(group, config) \u2014 SHA1"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["add(group: string, config: ",(0,r.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(t.Z,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const poolCluster = mysql.createPoolCluster();\n\n  poolCluster.add('clusterA', {\n    // ...\n    passwordSha1: Buffer.from(\n      '8bb6118f8fd6935ad0876a3be34a717d32708ffd',\n      'hex'\n    ),\n  });\n  // poolCluster.add('clusterB', '...');\n\n  const connection = await poolCluster.getConnection('clusterA');\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(t.Z,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  // ...\n  passwordSha1: Buffer.from('8bb6118f8fd6935ad0876a3be34a717d32708ffd', 'hex'),\n});\n// poolCluster.add('clusterB', '...');\n\npoolCluster.getConnection('clusterA', function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-config--ssl",children:"add(group, config) \u2014 SSL"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["add(group: string, config: ",(0,r.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(t.Z,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const poolCluster = mysql.createPoolCluster();\n\n  poolCluster.add('clusterA', {\n    // ...\n    ssl: {\n      // key: fs.readFileSync('./certs/client-key.pem'),\n      // cert: fs.readFileSync('./certs/client-cert.pem')\n      ca: fs.readFileSync('./certs/ca-cert.pem'),\n    },\n  });\n  // poolCluster.add('clusterB', '...');\n\n  const connection = await poolCluster.getConnection('clusterA');\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(t.Z,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  // ...\n  ssl: {\n    // key: fs.readFileSync('./certs/client-key.pem'),\n    // cert: fs.readFileSync('./certs/client-cert.pem')\n    ca: fs.readFileSync('./certs/ca-cert.pem'),\n  },\n});\n// poolCluster.add('clusterB', '...');\n\npoolCluster.getConnection('clusterA', function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})})}),(0,r.jsxs)(t.Z,{value:"certs/ca-cert.pem",children:[(0,r.jsx)(i.I,{language:"plan",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/test/fixtures/ssl/certs/ca.pem"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/tree/master/test/fixtures/ssl/certs",children:"ssl/certs"}),"."]}),"\n"]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-config--rds-ssl",children:"add(group, config) \u2014 RDS SSL"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["add(group: string, config: ",(0,r.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.strong,{children:"Amazon RDS"})," string as value to ssl property to connect to ",(0,r.jsx)(n.strong,{children:"Amazon RDS"})," MySQL over SSL."]}),"\n",(0,r.jsxs)(n.p,{children:["In that case ",(0,r.jsx)(n.a,{href:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem",children:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem"})," CA cert is used:"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(t.Z,{value:"promise.js",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const poolCluster = mysql.createPoolCluster();\n\n  poolCluster.add('clusterA', {\n    // ...\n    host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n    ssl: 'Amazon RDS',\n  });\n  // poolCluster.add('clusterB', '...');\n\n  const connection = await poolCluster.getConnection('clusterA');\n  // highlight-end\n  // ... some query\n\n  // highlight-next-line\n  connection.release();\n} catch (err) {\n  console.log(err);\n}\n"})}),(0,r.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"try {\n  const [res] = await connection.query('SHOW `status` LIKE \"Ssl_cipher\"');\n  await poolCluster.end();\n\n  console.log(res);\n} catch (err) {\n  console.log(err);\n}\n"})})})]}),(0,r.jsxs)(t.Z,{value:"callback.js",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  // ...\n  host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n  ssl: 'Amazon RDS',\n});\n// poolCluster.add('clusterB', '...');\n\npoolCluster.getConnection('clusterA', function (err, connection) {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  // ... some query\n\n  connection.release();\n});\n"})}),(0,r.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"connectionquery('SHOW `status` LIKE \"Ssl_cipher\"', function (err, res) {\n  poolCluster.end();\n\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(res);\n});\n"})})})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Don't forget to release the connection when finished by using:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"connection.release()"})}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"related-links",children:"Related Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Issues"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/issues/2130",children:"#2130 \u2014 Update TLS certs for Amazon RDS instances"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pull Requests"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/pull/2119",children:"#2119 \u2014 fix: make startTls code compatible with Bun"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/pull/2131",children:"#2131 \u2014 Update Amazon RDS SSL CA cert"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"addgroup-config--socks",children:"add(group, config) \u2014 Socks"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["add(group: string, config: ",(0,r.jsx)(n.a,{href:"#pooloptions",children:"PoolOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(t.Z,{value:"A.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\nconst socksProxy = new SocksConnection({ port: 3306 });\n// highlight-start\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  stream: socksProxy,\n});\n// poolCluster.add('clusterB', '...');\n\nconst poolNamespace = poolCluster.of('clusterA');\n// highlight-end\n"})})}),(0,r.jsx)(t.Z,{value:"B.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\n// highlight-start\nconst poolCluster = mysql.createPoolCluster();\n\npoolCluster.add('clusterA', {\n  debug: 1,\n  stream: function () {\n    return new SocksConnection({ port: 3306 });\n  },\n});\n// poolCluster.add('clusterB', '...');\n\nconst poolNamespace = poolCluster.of('clusterA');\n// highlight-end\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"poolNamespace.execute('SELECT SLEEP(1.1) AS `www`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\npoolNamespace.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\npoolNamespace.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n"})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,r.jsx)(n.h3,{id:"pooloptions",children:"PoolOptions"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PoolOptions"})," extends all options from ",(0,r.jsx)(n.strong,{children:"ConnectionOptions"}),":"]}),"\n",(0,r.jsx)(c.Z,{title:"ConnectionOptions Specification",children:(0,r.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/Connection.d.ts",extractMethod:"ConnectionOptions",methodType:"interface"})}),"\n"]}),"\n",(0,r.jsx)(c.Z,{title:"PoolOptions Specification",children:(0,r.jsx)(i.I,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/Pool.d.ts",extractMethod:"PoolOptions",methodType:"interface"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>t});s(7294);var r=s(512);const o={tabItem:"tabItem_Ymn6"};var l=s(5893);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,t),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>C});var r=s(7294),o=s(512),l=s(2466),t=s(6550),c=s(469),i=s(1980),a=s(7392),d=s(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:o}}=e;return{value:n,label:s,attributes:r,default:o}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const o=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,l=h(e),[t,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[a,u]=g({queryString:s,groupId:o}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,d.Nk)(s);return[o,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:o}),j=(()=>{const e=a??m;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=s(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function y(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=i.indexOf(n),o=c[s].value;o!==r&&(a(n),t(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,o.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:o}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function q(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function C(e){const n=(0,x.Z)();return(0,f.jsx)(q,{...e,children:u(e.children)},String(n))}},4379:(e,n,s)=>{s.d(n,{I:()=>i});var r=s(7294),o=s(2263),l=s(9286),t=s(5893);const c=()=>(0,t.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:s,extractMethod:i,methodType:a}=e;const[d,u]=(0,r.useState)(""),[h,p]=(0,r.useState)(!0),[g,m]=(0,r.useState)(!0),{siteConfig:x}=(0,o.Z)(),j=x.baseUrl.replace(/\/$/,""),f=/^\//.test(n)?`${j}${n}`:n;return(0,r.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(f,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&a?((e,n,s)=>{const r=e.split("\n"),o=`${s} ${n}`;let l=!1,t=0,c="";for(const i of r)if(i.includes(o)&&(l=!0),l&&(i.includes("{")&&t++,c+=i+"\n",i.includes("}")&&(t--,0===t)))break;return c.trim()||e})(e,i,a):e;u(n||e),p(!1),m(!1)})).catch((()=>{m(!0),p(!1)})),()=>{e.abort()}}),[f,i,a]),(0,t.jsx)(t.Fragment,{children:h?(0,t.jsx)(c,{}):(0,t.jsx)(t.Fragment,{children:g?(0,t.jsxs)("div",{children:["Unable to access the requested link: ",(0,t.jsx)("code",{children:f}),". Please verify the link or try again later."]}):(0,t.jsx)(l.Z,{className:`language-${s}`,children:d})})})}},6393:(e,n,s)=>{s.d(n,{Z:()=>l});var r=s(4673),o=s(5893);const l=e=>{let{children:n,open:s,title:l}=e;return(0,o.jsx)(r.Z,{open:s,className:"faq",summary:(0,o.jsx)("summary",{children:(0,o.jsx)("strong",{children:l})}),children:(0,o.jsx)("section",{children:n})})}}}]);