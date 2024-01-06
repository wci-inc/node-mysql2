"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9010],{9964:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=s(5893),o=s(1151),r=s(4866),l=s(5162),a=s(4442);const i={slug:"/",position:1,title:"Quickstart",description:"\u9002\u7528\u4e8eNode.js\u7684MySQL\u5ba2\u6237\u7aef\uff0c\u4e13\u6ce8\u4e8e\u6027\u80fd\u4f18\u5316"},c="MySQL2",d={id:"index",title:"Quickstart",description:"\u9002\u7528\u4e8eNode.js\u7684MySQL\u5ba2\u6237\u7aef\uff0c\u4e13\u6ce8\u4e8e\u6027\u80fd\u4f18\u5316",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/index.mdx",sourceDirName:".",slug:"/",permalink:"/node-mysql2/zh-CN/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/index.mdx",tags:[],version:"current",frontMatter:{slug:"/",position:1,title:"Quickstart",description:"\u9002\u7528\u4e8eNode.js\u7684MySQL\u5ba2\u6237\u7aef\uff0c\u4e13\u6ce8\u4e8e\u6027\u80fd\u4f18\u5316"},sidebar:"docs",next:{title:"MySQL2\u7684\u5386\u53f2\u4ee5\u53ca\u9009\u62e9\u539f\u56e0",permalink:"/node-mysql2/zh-CN/docs/history-and-why-mysq2"}},u={},h=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:3},{value:"SQL\u9884\u5904\u7406\u7684\u4f7f\u7528",id:"sql\u9884\u5904\u7406\u7684\u4f7f\u7528",level:3},{value:"\u8fde\u63a5\u6c60\u7684\u4f7f\u7528",id:"using-connection-pools",level:3},{value:"Promise\u5c01\u88c5",id:"promise\u5c01\u88c5",level:3},{value:"\u7ed3\u679c\u8fd4\u56de",id:"\u7ed3\u679c\u8fd4\u56de",level:3},{value:"\u8fde\u63a5\u7ea7\u522b",id:"\u8fde\u63a5\u7ea7\u522b",level:4},{value:"\u67e5\u8be2\u7ea7\u522b",id:"\u67e5\u8be2\u7ea7\u522b",level:4}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.V,{title:"MySQL2 | Quickstart"}),"\n",(0,t.jsx)(n.h1,{id:"mysql2",children:"MySQL2"}),"\n","\n",(0,t.jsx)(n.p,{children:"\u9002\u7528\u4e8eNode.js\u7684MySQL\u5ba2\u6237\u7aef\uff0c\u4e13\u6ce8\u4e8e\u6027\u80fd\u4f18\u5316\u3002\u652f\u6301SQL\u9884\u5904\u7406\u3001\u975eUTF-8\u7f16\u7801\u652f\u6301\u3001\u4e8c\u8fdb\u5236\u6587\u4ef6\u7f16\u7801\u652f\u6301\u3001\u538b\u7f29\u548cSSL\u7b49\u7b49 \u67e5\u770b\u66f4\u591a\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://npmjs.org/package/mysql2",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/mysql2.svg",alt:"NPM Version"})}),"\n",(0,t.jsx)(n.a,{href:"https://npmjs.org/package/mysql2",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/dm/mysql2.svg",alt:"NPM Downloads"})}),"\n",(0,t.jsx)(n.a,{href:"https://nodejs.org/download/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/node/v/mysql2.svg",alt:"Node.js Version"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/blob/master/License",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/l/mysql2.svg?maxAge=2592000",alt:"License"})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"MySQL2 \u53ef\u4ee5\u8de8\u5e73\u53f0\u4f7f\u7528\uff0c\u6beb\u65e0\u7591\u95ee\u53ef\u4ee5\u5b89\u88c5\u5728 Linux\u3001Mac OS \u6216 Windows \u4e0a\u3002"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"JavaScript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save mysql2\n"})})}),(0,t.jsxs)(l.Z,{value:"TypeScript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save mysql2\nnpm install --save-dev @types/node\n"})}),(0,t.jsxs)(n.p,{children:["For TypeScript documentation and examples, see ",(0,t.jsx)(n.a,{href:"/docs/documentation/typescript-examples",children:"here"}),"."]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more queries examples, please visit the example sections ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/simple-queries",children:(0,t.jsx)(n.strong,{children:"Simple Queries"})})," and ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,t.jsx)(n.strong,{children:"Prepared Statements"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u5bfc\u5165\u6a21\u5757\nimport mysql from 'mysql2/promise';\n\n// \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\nconst connection = await mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// \u7b80\u5355\u67e5\u8be2\ntry {\n  const [results, fields] = await connection.query(\n    'SELECT * FROM `table` WHERE `name` = \"Page\" AND `age` > 45'\n  );\n\n  console.log(results); // \u7ed3\u679c\u96c6\n  console.log(fields); // \u989d\u5916\u7684\u5143\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\n} catch (err) {\n  console.log(err);\n}\n\n// \u4f7f\u7528\u5360\u4f4d\u7b26\ntry {\n  const [results] = await connection.query(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Page', 45]\n  );\n\n  console.log(results);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u5bfc\u5165\u6a21\u5757\nconst mysql = require('mysql2');\n\n// \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// \u7b80\u5355\u67e5\u8be2\nconnection.query(\n  'SELECT * FROM `table` WHERE `name` = \"Page\" AND `age` > 45',\n  function (err, results, fields) {\n    console.log(results); // \u7ed3\u679c\u96c6\n    console.log(fields); // \u989d\u5916\u7684\u5143\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\n  }\n);\n\n// \u4f7f\u7528\u5360\u4f4d\u7b26\nconnection.query(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Page', 45],\n  function (err, results) {\n    console.log(results);\n  }\n);\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sql\u9884\u5904\u7406\u7684\u4f7f\u7528",children:"SQL\u9884\u5904\u7406\u7684\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 MySQL2\uff0c\u60a8\u8fd8\u53ef\u4ee5\u63d0\u524d\u51c6\u5907\u597dSQL\u9884\u5904\u7406\u8bed\u53e5\u3002 \u4f7f\u7528\u51c6\u5907\u597d\u7684SQL\u9884\u5904\u7406\u8bed\u53e5\uff0cMySQL \u4e0d\u5fc5\u6bcf\u6b21\u90fd\u4e3a\u76f8\u540c\u7684\u67e5\u8be2\u505a\u51c6\u5907\uff0c\u8fd9\u4f1a\u5e26\u6765\u66f4\u597d\u7684\u6027\u80fd\u3002 \u5982\u679c\u60a8\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u5b83\u4eec\u5f88\u91cd\u8981\uff0c\u8bf7\u67e5\u770b\u8fd9\u4e9b\u8ba8\u8bba\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/8263371/how-can-prepared-statements-protect-from-sql-injection-attacks",children:"\u5982\u4f55\u9632\u6b62\u9884\u5904\u7406\u8bed\u53e5SQL\u6ce8\u5165\u653b\u51fb"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 \u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"execute"})," \u8f85\u52a9\u51fd\u6570\uff0c\u5b83\u5c06\u51c6\u5907\u548c\u67e5\u8be2\u8bed\u53e5\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"prepare"})," / ",(0,t.jsx)(n.code,{children:"unprepare"})," \u65b9\u6cd5\u624b\u52a8\u51c6\u5907/\u53d6\u6d88\u51c6\u5907\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more Prepared Statements and Placeholders examples, please visit the example section ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,t.jsx)(n.strong,{children:"Prepared Statements"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // execute \u5c06\u5728\u5185\u90e8\u8c03\u7528 prepare \u548c query\n  const [results, fields] = await connection.execute(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Rick C-137', 53]\n  );\n\n  console.log(results); // \u7ed3\u679c\u96c6\n  console.log(fields); // \u989d\u5916\u7684\u5143\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\n// \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// execute \u5c06\u5728\u5185\u90e8\u8c03\u7528 prepare \u548c query\nconnection.execute(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Rick C-137', 53],\n  function (err, results, fields) {\n    console.log(results); // \u7ed3\u679c\u96c6\n    console.log(fields); // \u989d\u5916\u7684\u5143\u6570\u636e\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\n  }\n);\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u5982\u679c\u518d\u6b21\u6267\u884c\u76f8\u540c\u7684\u8bed\u53e5\uff0c\u4ed6\u5c06\u4ece\u7f13\u5b58\u4e2d\u9009\u53d6\uff0c\u8fd9\u80fd\u6709\u6548\u7684\u8282\u7701\u51c6\u5907\u67e5\u8be2\u65f6\u95f4\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"using-connection-pools",children:"\u8fde\u63a5\u6c60\u7684\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5\u6c60\u901a\u8fc7\u91cd\u7528\u4ee5\u524d\u7684\u8fde\u63a5\u6765\u5e2e\u52a9\u51cf\u5c11\u8fde\u63a5\u5230 MySQL \u670d\u52a1\u5668\u6240\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u5f53\u4f60\u5b8c\u6210\u5b83\u4eec\u65f6\u8ba9\u5b83\u4eec\u4fdd\u6301\u6253\u5f00\u800c\u4e0d\u662f\u5173\u95ed\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6539\u5584\u4e86\u67e5\u8be2\u7684\u5ef6\u8fdf\uff0c\u56e0\u4e3a\u60a8\u907f\u514d\u4e86\u5efa\u7acb\u65b0\u8fde\u63a5\u6240\u5e26\u6765\u7684\u6240\u6709\u5f00\u9500\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more Connection Pools examples, please visit the example section ",(0,t.jsx)(n.a,{href:"/docs/examples/connections/create-pool",children:(0,t.jsx)(n.strong,{children:"createPool"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\n// \u521b\u5efa\u8fde\u63a5\u6c60\uff0c\u8bbe\u7f6e\u8fde\u63a5\u6c60\u7684\u53c2\u6570\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  waitForConnections: true,\n  connectionLimit: 10,\n  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`\n  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000\n  queueLimit: 0,\n  enableKeepAlive: true,\n  keepAliveInitialDelay: 0,\n});\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\n// \u521b\u5efa\u8fde\u63a5\u6c60\uff0c\u8bbe\u7f6e\u8fde\u63a5\u6c60\u7684\u53c2\u6570\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  waitForConnections: true,\n  connectionLimit: 10,\n  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`\n  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000\n  queueLimit: 0,\n  enableKeepAlive: true,\n  keepAliveInitialDelay: 0,\n});\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u8be5\u6c60\u4e0d\u4f1a\u9884\u5148\u521b\u5efa\u6240\u6709\u8fde\u63a5\uff0c\u800c\u662f\u6839\u636e\u9700\u8981\u521b\u5efa\u5b83\u4eec\uff0c\u76f4\u5230\u8fbe\u5230\u8fde\u63a5\u9650\u5236\u3002"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u50cf\u76f4\u63a5\u8fde\u63a5\u4e00\u6837\u4f7f\u7528\u6c60\uff08\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"pool.query()"})," \u548c ",(0,t.jsx)(n.code,{children:"pool.execute()"}),"\uff09\uff1a"]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  // For pool initialization, see above\n  const [rows, fields] = await pool.query('SELECT `field` FROM `table`');\n  // Connection is automatically released when query resolves\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\npool.query('SELECT `field` FROM `table`', function (err, rows, fields) {\n  // Connection is automatically released when query resolves\n});\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u4ece\u6c60\u4e2d\u83b7\u53d6\u8fde\u63a5\u5e76\u7a0d\u540e\u8fd4\u56de\uff1a"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\nconst conn = await pool.getConnection();\n\n// Do something with the connection\nawait conn.query(/* ... */);\n\n// Don't forget to release the connection when finished!\npool.releaseConnection(conn);\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\npool.getConnection(function (err, conn) {\n  // Do something with the connection\n  conn.query(/* ... */);\n\n  // Don't forget to release the connection when finished!\n  pool.releaseConnection(conn);\n});\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Additionally, directly release the connection using the ",(0,t.jsx)(n.code,{children:"connection"})," object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"conn.release();\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"promise\u5c01\u88c5",children:"Promise\u5c01\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"MySQL2 \u4e5f\u652f\u6301 Promise API\u3002 \u8fd9\u4e0e ES7 \u5f02\u6b65\u7b49\u5f85\u975e\u5e38\u6709\u6548\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nasync function main() {\n  // create the connection\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // query database\n  const [rows, fields] = await connection.execute(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Morty', 14]\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 \u4f7f\u7528\u8303\u56f4\u5185\u53ef\u7528\u7684\u9ed8\u8ba4 ",(0,t.jsx)(n.code,{children:"Promise"})," \u5bf9\u8c61\u3002 \u4f46\u662f\u4f60\u53ef\u4ee5\u9009\u62e9\u4f60\u60f3\u4f7f\u7528\u7684 ",(0,t.jsx)(n.code,{children:"Promise"})," \u5b9e\u73b0\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u5bfc\u5165\u6a21\u5757\nimport mysql from 'mysql2/promise';\n\n// get the promise implementation, we will use bluebird\nimport bluebird from 'bluebird';\n\n// create the connection, specify bluebird as Promise\nconst connection = await mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  Promise: bluebird,\n});\n\n// query database\nconst [rows, fields] = await connection.execute(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Morty', 14]\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 \u8fd8\u5728 Pools \u4e0a\u516c\u5f00\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:".promise()"}),"\u51fd\u6570\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4ece\u540c\u4e00\u4e2a\u6c60\u521b\u5efa\u4e00\u4e2a promise/non-promise \u8fde\u63a5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2';\n\nasync function main() {\n  // create the pool\n  const pool = mysql.createPool({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // now get a Promise wrapped instance of that pool\n  const promisePool = pool.promise();\n\n  // query database using promises\n  const [rows, fields] = await promisePool.query('SELECT 1');\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 \u5728 Connections \u4e0a\u516c\u5f00\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:".promise()"}),"\u51fd\u6570\uff0c\u4ee5\u201c\u5347\u7ea7\u201d\u73b0\u6709\u7684 non-promise \u8fde\u63a5\u4ee5\u4f7f\u7528 Promise\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{11}",children:"const mysql = require('mysql2');\n\n// create the connection\nconst conn = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\nconn\n  .promise()\n  .query('SELECT 1')\n  .then(([rows, fields]) => {\n    console.log(rows);\n  })\n  .catch(console.log)\n  .then(() => conn.end());\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed3\u679c\u8fd4\u56de",children:"\u7ed3\u679c\u8fd4\u56de"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6709\u4e24\u4e2a\u76f8\u540c\u540d\u79f0\u7684\u5217\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u4ee5\u6570\u7ec4\u800c\u4e0d\u662f\u5bf9\u8c61\u7684\u5f62\u5f0f\u83b7\u53d6\u7ed3\u679c\uff0c\u4e3a\u4e86\u9632\u6b62\u51b2\u7a81\uff0c\u8fd9\u662f\u4e0e ",(0,t.jsx)(n.a,{href:"https://github.com/mysqljs/mysql",children:"Node MySQL"})," \u5e93\u7684\u533a\u522b\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a ",(0,t.jsx)(n.code,{children:"SELECT 1 AS `foo`, 2 AS `foo`"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u8fde\u63a5\u7ea7\u522b\uff08\u9002\u7528\u4e8e\u6240\u6709\u67e5\u8be2\uff09\u6216\u67e5\u8be2\u7ea7\u522b\uff08\u4ec5\u9002\u7528\u4e8e\u8be5\u7279\u5b9a\u67e5\u8be2\uff09\u542f\u7528\u6b64\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u8fde\u63a5\u7ea7\u522b",children:"\u8fde\u63a5\u7ea7\u522b"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{5}",children:"const conn = await mysql.createConnection({\n  host: 'localhost',\n  database: 'test',\n  user: 'root',\n  rowsAsArray: true,\n});\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{5}",children:"const conn = mysql.createConnection({\n  host: 'localhost',\n  database: 'test',\n  user: 'root',\n  rowsAsArray: true,\n});\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"\u67e5\u8be2\u7ea7\u522b",children:"\u67e5\u8be2\u7ea7\u522b"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{4}",children:"try {\n  const [results, fields] = await conn.query({\n    sql: 'SELECT 1 AS `foo`, 2 AS `foo`',\n    rowsAsArray: true,\n  });\n\n  console.log(results); // \u8fd4\u56de\u6570\u7ec4\u800c\u4e0d\u662f\u6570\u7ec4\u5bf9\u8c61\n  console.log(fields); // \u65e0\u53d8\u5316\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.Z,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{4}",children:"conn.query(\n  {\n    sql: 'SELECT 1 AS `foo`, 2 AS `foo`',\n    rowsAsArray: true,\n  },\n  function (err, results, fields) {\n    console.log(results); // in this query, results will be an array of arrays rather than an array of objects\n    console.log(fields); // fields are unchanged\n  }\n);\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Getting Help",type:"tip",children:(0,t.jsxs)(n.p,{children:["Need help? Ask your question on ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/mysql2",children:"Stack Overflow"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions",children:"GitHub"}),".\nIf you've encountered an issue, please ",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/issues",children:"file it on GitHub"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>l});s(7294);var t=s(512);const o={tabItem:"tabItem_Ymn6"};var r=s(5893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,l),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>q});var t=s(7294),o=s(512),r=s(2466),l=s(6550),a=s(469),i=s(1980),c=s(7392),d=s(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:o}}=e;return{value:n,label:s,attributes:t,default:o}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const o=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,r=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:s,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(s);return[o,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:o}),g=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=s(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function y(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,s=i.indexOf(n),o=a[s].value;o!==t&&(c(n),l(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:o}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function q(e){const n=(0,j.Z)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},4442:(e,n,s)=>{s.d(n,{V:()=>r});var t=s(5742),o=s(5893);const r=e=>{let{title:n}=e;return(0,o.jsx)(t.Z,{children:(0,o.jsx)("title",{children:n})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var t=s(7294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);