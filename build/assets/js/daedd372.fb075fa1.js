"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2748],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),v=r,h=m["".concat(s,".").concat(v)]||m[v]||u[v]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],p={slug:"api",title:"How to setup a Fastapi web server",authors:[{name:"Ramsey Gavin",title:"Software Engineer II",url:"https://github.com/rgavin1",image_url:"https://github.com/rgavin1.png"}],tags:["python","venv","fastapi","api"]},s="How to setup a Fastapi web server",l={unversionedId:"api/python/fastapi",id:"api/python/fastapi",title:"How to setup a Fastapi web server",description:"Step 1: Setup the virtual environment. Follow this link to How to setup a Virtual Environment on a Mac",source:"@site/docs/api/python/fastapi.md",sourceDirName:"api/python",slug:"/api/python/api",permalink:"/docs/api/python/api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/python/fastapi.md",tags:[{label:"python",permalink:"/docs/tags/python"},{label:"venv",permalink:"/docs/tags/venv"},{label:"fastapi",permalink:"/docs/tags/fastapi"},{label:"api",permalink:"/docs/tags/api"}],version:"current",frontMatter:{slug:"api",title:"How to setup a Fastapi web server",authors:[{name:"Ramsey Gavin",title:"Software Engineer II",url:"https://github.com/rgavin1",image_url:"https://github.com/rgavin1.png"}],tags:["python","venv","fastapi","api"]},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/api/intro"},next:{title:"How to setup a Virtual Environment on a Mac",permalink:"/docs/api/python/api"}},c={},u=[{value:"Step 1: Setup the virtual environment. Follow this link to How to setup a Virtual Environment on a Mac",id:"step-1-setup-the-virtual-environment-follow-this-link-to-how-to-setup-a-virtual-environment-on-a-mac",level:3},{value:"Step 2: Install Fastapi in the newly created venv",id:"step-2-install-fastapi-in-the-newly-created-venv",level:3},{value:"Step 3: Create an instance of fastapi",id:"step-3-create-an-instance-of-fastapi",level:3},{value:"Step 4: Create the path operation",id:"step-4-create-the-path-operation",level:3},{value:"Step 5: Start the web server using univcon",id:"step-5-start-the-web-server-using-univcon",level:3},{value:"Step 6: Watch the terminal",id:"step-6-watch-the-terminal",level:3},{value:"Step 7: Confirm the server is working",id:"step-7-confirm-the-server-is-working",level:3}],m={toc:u};function v(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-setup-a-fastapi-web-server"},"How to setup a Fastapi web server"),(0,i.kt)("h3",{id:"step-1-setup-the-virtual-environment-follow-this-link-to-how-to-setup-a-virtual-environment-on-a-mac"},"Step 1: Setup the virtual environment. Follow this link to ",(0,i.kt)("a",{parentName:"h3",href:"/docs/api/python/api"},"How to setup a Virtual Environment on a Mac")),(0,i.kt)("h3",{id:"step-2-install-fastapi-in-the-newly-created-venv"},"Step 2: Install Fastapi in the newly created venv"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/tutorial/"},"Fastapi documentation")))),(0,i.kt)("p",null,"Run this command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "fastapi[all]"\n')),(0,i.kt)("h3",{id:"step-3-create-an-instance-of-fastapi"},"Step 3: Create an instance of fastapi"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Place this code inside a main.py file"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from fastapi import FastAPI\n\napp = FastAPI()\n")),(0,i.kt)("h3",{id:"step-4-create-the-path-operation"},"Step 4: Create the path operation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/")\nasync def root():\n    return {"message": "Hello World"}\n')),(0,i.kt)("h3",{id:"step-5-start-the-web-server-using-univcon"},"Step 5: Start the web server using univcon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ uvicorn main:app --reload\n")),(0,i.kt)("h3",{id:"step-6-watch-the-terminal"},"Step 6: Watch the terminal"),(0,i.kt)("p",null,"This should now appear"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)\nINFO:     Started reloader process [28720]\nINFO:     Started server process [28722]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\n")),(0,i.kt)("h3",{id:"step-7-confirm-the-server-is-working"},"Step 7: Confirm the server is working"),(0,i.kt)("p",null,"Open the browser using Command + Click or localhost:8000"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)\n")),(0,i.kt)("p",null,"This should appear in the browser"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6711).Z,width:"376",height:"124"})))}v.isMDXComponent=!0},6711:function(e,t,a){t.Z=a.p+"assets/images/verify-server-is-working-41c2116a38a73f445c52daaa863e2b6e.png"}}]);