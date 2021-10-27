var P=Object.defineProperty,R=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var f=(r,e,t)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))L.call(e,t)&&f(r,t,e[t]);if(u)for(var t of u(e))j.call(e,t)&&f(r,t,e[t]);return r},_=(r,e)=>R(r,g(e));import{R as h,j as n,r as D,S as O,B as $,a as A,b,c as p,d as I,e as S}from"./vendor.90d19503.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};T();const V="modulepreload",x={},k="/pixi-practice/",l=function(e,t){return!t||t.length===0?e():Promise.all(t.map(c=>{if(c=`${k}${c}`,c in x)return;x[c]=!0;const o=c.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":V,o||(s.as="script",s.crossOrigin=""),s.href=c,document.head.appendChild(s),o)return new Promise((v,y)=>{s.addEventListener("load",v),s.addEventListener("error",y)})})).then(()=>e())},{lazy:d}=h,E=d(()=>l(()=>import("./index.5d03563a.js"),["index.5d03563a.js","index.59c728bb.css","vendor.90d19503.js"])),w=d(()=>l(()=>import("./index.3ed7239e.js"),["index.3ed7239e.js","vendor.90d19503.js"])),B=d(()=>l(()=>import("./index.99454381.js"),["index.99454381.js","vendor.90d19503.js"])),N=d(()=>l(()=>import("./demo1.7480327f.js"),["demo1.7480327f.js","vendor.90d19503.js","index.84784de1.js","index.33661b27.css"])),q=d(()=>l(()=>import("./demo2.2a821c84.js"),["demo2.2a821c84.js","vendor.90d19503.js","index.84784de1.js","index.33661b27.css"])),z=d(()=>l(()=>import("./demo3.f544dc8c.js"),["demo3.f544dc8c.js","vendor.90d19503.js","index.84784de1.js","index.33661b27.css"])),C=d(()=>l(()=>import("./demo4.635129cd.js"),["demo4.635129cd.js","vendor.90d19503.js","index.84784de1.js","index.33661b27.css"])),a="/pixi-practice",M=[{path:`${a}/home`,meta:{title:"Pixi.js\u7EC3\u4E60"},component:E},{path:`${a}/error/404`,meta:{title:"\u9875\u9762\u627E\u4E0D\u5230"},component:w},{path:`${a}/demo1`,meta:{title:"\u57FA\u672C\u4F7F\u7528\uFF0CApplication,loader\u53CA\u7CBE\u7075\u56FE"},component:N},{path:`${a}/demo2`,meta:{title:"\u6587\u672C\u3001\u56FE\u5F62\u7ED8\u5236\uFF0C\u952E\u76D8\u4EA4\u4E92\uFF0C\u78B0\u649E\u68C0\u6D4B"},component:q},{path:`${a}/demo3`,meta:{title:"\u5E73\u94FA\u7EB9\u7406\uFF0C\u4F2A3D\u6548\u679C"},component:z},{path:`${a}/demo4`,meta:{title:"\u9010\u5E27\u52A8\u753B\uFF0C\u5206\u7EC4\u52A8\u4F5C"},component:C},{path:`${a}/test`,meta:{title:"\u6D4B\u8BD5\u9875\u9762"},component:B},{path:`${a}`,meta:{title:"Pixi.js\u7EC3\u4E60"},component:E}],F=()=>{const r=e=>n(I,{exact:!0,path:e.path,render:t=>n(e.component,_(m({},t),{routes:e.routes,meta:e.meta||"",cb:e.cb?e.cb:void 0}))});return n(D.exports.Suspense,{fallback:n("div",{children:n(O,{style:{position:"fixed",left:"50%",top:"50%"},size:"large"})}),children:n($,{children:A(b,{children:[M.map((e,t)=>n(r,m({},e),t)),n(p,{from:"/pixi-practice/",exact:!0,to:"/pixi-practice/home"}),n(p,{from:"/",exact:!0,to:"/pixi-practice/home"}),n(p,{to:"/pixi-practice/error/404"})]})})})};const H=()=>n(F,{});S.render(n(h.StrictMode,{children:n(H,{})}),document.getElementById("root"));export{M as r};