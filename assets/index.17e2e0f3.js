import{r as s,j as a,f as i}from"./vendor.0f4381db.js";import{r as n}from"./index.507ff271.js";const l=r=>{const t=n.filter(e=>e.path.includes("demo"));s.exports.useEffect(()=>{window.document.title=r.meta.title},[]);const o=e=>{r.history.push(e.path)};return a("div",{className:"home-page",children:t==null?void 0:t.map(e=>a("div",{className:"home-page-item",children:a(i,{type:"primary",onClick:()=>o(e),children:e.meta.title})},e.path))})};export{l as default};
