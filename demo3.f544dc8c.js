import{r as s,a,j as c,f}from"./vendor.90d19503.js";import{A as g,b as v,c as p,S as y}from"./index.84784de1.js";const r="https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo",j=i=>{const[d,l]=s.exports.useState(null),n=s.exports.useRef();s.exports.useEffect(()=>{window.document.title=i.meta.title,m()},[]);const m=()=>{const t=new g({width:1e3,height:600,antialias:!0,backgroundAlpha:!0,resolution:1,backgroundColor:11398874});l(t),d||n.current.appendChild(t.view),u(t)},u=t=>{const h=v.from(`${r}/brick.jpg`),o=new p(h,t.screen.width,t.screen.height);t.stage.addChild(o),t.ticker.add(()=>{o.tilePosition.x-=1});const e=new y.from(`${r}/direction.png`);e.y=96,e.vx=1,e.vy=1,t.stage.addChild(e),t.ticker.add(()=>{e.x>800?e.vx=-1:e.x<50&&(e.vx=1),e.y>300?e.vy=-1:e.y<20&&(e.vy=1),e.x+=e.vx,e.y+=e.vy})},x=()=>{i.history.push("/pixi-practice")};return a("div",{className:"demo-page",children:[a("div",{className:"demo-page-title",children:[i.meta.title," ",c(f,{className:"back-home",onClick:x,children:"\u8FD4\u56DE\u9996\u9875"})]}),c("div",{className:"demo-canvas",ref:n})]})};export{j as default};
