import{r as c,a as m,j as p,f as y}from"./vendor.0f4381db.js";import{A as v,d}from"./index.fd16ee7c.js";const h="https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo",b=l=>{const[g,x]=c.exports.useState(null),u=c.exports.useRef();c.exports.useEffect(()=>{window.document.title=l.meta.title,f()},[]);const f=()=>{const e=new v({width:1e3,height:600,antialias:!0,transparent:!1,resolution:1,backgroundColor:11398874});x(e),g||u.current.appendChild(e.view),j(e)},j=e=>{e.loader.add(`${h}/testMan.json`).load(r);function r(){const s=e.loader.resources[`${h}/testMan.json`].textures;let o=new d(a(s,0,3));o.position.set(100,100),o.animationSpeed=.1,o.loop=!0,o.gotoAndPlay(0),e.stage.addChild(o);let t=new d(a(s,4,7));t.position.set(200,100),t.animationSpeed=.1,t.loop=!0,t.gotoAndPlay(0),e.stage.addChild(t);let i=new d(a(s,8,11));i.position.set(100,200),i.animationSpeed=.1,i.loop=!0,i.gotoAndPlay(0),e.stage.addChild(i);let n=new d(a(s,12,15));n.position.set(200,200),n.animationSpeed=.1,n.loop=!0,n.gotoAndPlay(0),e.stage.addChild(n)}},a=(e,r=0,s=3)=>{let o=[];for(let t=r;t<=s;t++)o.push(e[`testMan-${t}.png`]);return o},w=()=>{l.history.go(-1)};return m("div",{className:"demo-page",children:[m("div",{className:"demo-page-title",children:[l.meta.title," ",p(y,{className:"back-home",onClick:w,children:"\u8FD4\u56DE\u9996\u9875"})]}),p("div",{className:"demo-canvas",ref:u})]})};export{b as default};
