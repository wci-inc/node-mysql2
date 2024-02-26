"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8401],{7293:(e,t,n)=>{n.d(t,{A:()=>H});var s=n(6540),i=n(4848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),l=n?.props.children;return{mdxAdmonitionTitle:l,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var l=n(4164),o=n(1312),r=n(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,l.A)(r.G.common.admonition,r.G.common.admonitionType(t),c.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:c.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:a,className:l}=e;return(0,i.jsxs)(d,{type:t,className:l,children:[(0,i.jsx)(u,{title:s,icon:n}),(0,i.jsx)(m,{children:a})]})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const v={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,i.jsx)(h,{...v,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(p,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,i.jsx)(h,{...j,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,i.jsx)(h,{...A,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function _(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const T={icon:(0,i.jsx)(_,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const y={...{note:f,tip:g,info:N,warning:function(e){return(0,i.jsx)(h,{...L,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(h,{...T,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(f,{title:"secondary",...e}),important:e=>(0,i.jsx)(N,{title:"important",...e}),success:e=>(0,i.jsx)(g,{title:"success",...e}),caution:function(e){return(0,i.jsx)(h,{...k,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function H(e){const t=a(e),n=(s=t.type,y[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),y.info));var s;return(0,i.jsx)(n,{...t})}},3612:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var s=n(6540),i=n(1003),a=n(9532),l=n(4848);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(1312),x=n(8774);function v(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,l.jsxs)(x.A,{className:(0,u.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function f(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(v,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(v,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function p(){const{metadata:e}=c();return(0,l.jsx)(f,{previous:e.previous,next:e.next})}var j=n(4586),g=n(4070),b=n(7559),A=n(5597),N=n(2252);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.A,{to:n,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,j.A)(),{pluginId:i}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,A.g1)(i),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.HW)(i),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(t,b.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(L,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function k(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,l.jsx)(T,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,l.jsx)("span",{className:(0,u.A)(t,b.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function w(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:b.G.common.lastUpdated,children:[(0,l.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(H,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(w,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const M={iconEdit:"iconEdit_Z9Sw"};function B(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:t}=e;return(0,l.jsxs)(x.A,{to:t,className:b.G.common.editThisPage,children:[(0,l.jsx)(B,{}),(0,l.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var E=n(6133);const z={tags:"tags_jXut",tag:"tag_QGVx"};function V(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(z.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:z.tag,children:(0,l.jsx)(E.A,{label:t,permalink:n})},n)}))})]})}const R={lastUpdated:"lastUpdated_vwxv"};function G(e){return(0,l.jsx)("div",{className:(0,u.A)(b.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(V,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return(0,l.jsxs)("div",{className:(0,u.A)(b.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",R.lastUpdated),children:(n||s)&&(0,l.jsx)(U,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:s})})]})}function S(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:a}=e,o=a.length>0,r=!!(t||n||i);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(b.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(G,{tags:a}),r&&(0,l.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:s})]}):null}var D=n(1422),F=n(6342);function P(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function q(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=q({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function W(e){const t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}function $(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>W(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(W(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Z(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){const t=(0,s.useRef)(void 0),n=Z();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),r=$(o,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function Q(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,l.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(x.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(Q,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const X=s.memo(Q);function Y(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,F.p)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>q({toc:P(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return J((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,l.jsx)(X,{toc:h,className:n,linkClassName:i,...c})}const K={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function ee(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",K.tocCollapsibleButton,!t&&K.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const te={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ne(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:o}=(0,D.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(te.tocCollapsible,!a&&te.tocCollapsibleExpanded,n),children:[(0,l.jsx)(ee,{collapsed:a,onClick:o}),(0,l.jsx)(D.N,{lazy:!0,className:te.tocCollapsibleContent,collapsed:a,children:(0,l.jsx)(Y,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const se={tocMobile:"tocMobile_ITEo"};function ie(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(b.G.docs.docTocMobile,se.tocMobile)})}const ae={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},le="table-of-contents__link toc-highlight",oe="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(ae.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(Y,{...n,linkClassName:le,linkActiveClassName:oe})})}function ce(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.G.docs.docTocDesktop})}var de=n(1107),ue=n(8453),me=n(5260),he=n(1432);function xe(e){return(0,l.jsx)("code",{...e})}var ve=n(1622);function fe(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(ve.A,{...e,summary:n,children:i})}function pe(e){return(0,l.jsx)(de.A,{...e})}const je={containsTaskList:"containsTaskList_mC6p"};function ge(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&je.containsTaskList)}var be=n(3427);const Ae={img:"img_ev3q"};var Ne=n(7293);const Ce={Head:me.A,details:fe,Details:fe,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(xe,{...e}):(0,l.jsx)(he.A,{...e})},a:function(e){return(0,l.jsx)(x.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:ge(e.className)})},li:function(e){return(0,be.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,Ae.img))});var t},h1:e=>(0,l.jsx)(pe,{as:"h1",...e}),h2:e=>(0,l.jsx)(pe,{as:"h2",...e}),h3:e=>(0,l.jsx)(pe,{as:"h3",...e}),h4:e=>(0,l.jsx)(pe,{as:"h4",...e}),h5:e=>(0,l.jsx)(pe,{as:"h5",...e}),h6:e=>(0,l.jsx)(pe,{as:"h6",...e}),admonition:Ne.A,mermaid:()=>null};function Le(e){let{children:t}=e;return(0,l.jsx)(ue.x,{components:Ce,children:t})}function _e(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(b.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(de.A,{as:"h1",children:n})}),(0,l.jsx)(Le,{children:t})]})}var Te=n(4142),ke=n(9169),ye=n(6025);function He(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const we={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Ue(){const e=(0,ye.A)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(He,{className:we.breadcrumbHomeIcon})})})}const Me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Be(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,l.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,l.jsx)(x.A,{className:i,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:i,children:t})}function Ie(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,l.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Ee(){const e=(0,Te.OF)(),t=(0,ke.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(b.G.docs.docBreadcrumbs,Me.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(Ue,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(Ie,{active:s,index:n,addMicrodata:!!i,children:(0,l.jsx)(Be,{href:i,isLast:s,children:t.label})},n)}))]})}):null}var ze=n(996);const Ve={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Re(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,l.jsx)(ie,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(ce,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Ve.docItemCol),children:[s&&(0,l.jsx)(ze.A,{}),(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:Ve.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(Ee,{}),(0,l.jsx)(y,{}),n.mobile,(0,l.jsx)(_e,{children:t}),(0,l.jsx)(S,{})]}),(0,l.jsx)(p,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function Ge(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(i.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(Re,{children:(0,l.jsx)(n,{})})]})})}},6133:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164),i=n(8774);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function o(e){let{permalink:t,label:n,count:o}=e;return(0,l.jsxs)(i.A,{href:t,className:(0,s.A)(a.tag,o?a.tagWithCount:a.tagRegular),children:[n,o&&(0,l.jsx)("span",{children:o})]})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var s=n(4164),i=n(1312),a=n(5260),l=n(4848);function o(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(a.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);