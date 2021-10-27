
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Button } from 'antd';
import './index.less';

const urlPr = 'https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo';
const Demo4 = (props) => {
  const [pixiObj, setPixiObj] = useState(null);
  const canvasDemo4 = useRef();
  useEffect(() => {
    window.document.title = props.meta.title;
    initFn();
  }, []);
  const initFn = () => {
    const app = new PIXI.Application({
      width: 1000,  // default: 800 宽度
      height: 600,  // default: 800 宽度
      antialias: true, //  default: false 反锯齿  使得字体的边界和图形更加平滑
      transparent: false, // default: false 透明度
      resolution: 1, // default: 1 分辨率  不同屏幕和分辨率适配
      backgroundColor: 0xadeeda
    });
    setPixiObj(app);
    if (!pixiObj) {
      canvasDemo4.current.appendChild(app.view);
    }
    case1(app);
    // case2(app);
  }
  // 平铺背景图
  const case1 = (app) => {
    app.loader.add(`/images/testMan.json`)
      .load(setup);
    function setup() {
      let ids = app.loader.resources[`/images/testMan.json`].textures;
      let pixie1 = new PIXI.AnimatedSprite(countImgList(ids,0,3));
      pixie1.position.set(100, 100)
      pixie1.animationSpeed = 0.1;
      pixie1.loop = true;
      pixie1.gotoAndPlay(0);
      app.stage.addChild(pixie1);

      let pixie2 = new PIXI.AnimatedSprite(countImgList(ids,4,7));
      pixie2.position.set(200, 100)
      pixie2.animationSpeed = 0.1;
      pixie2.loop = true;
      pixie2.gotoAndPlay(0);
      app.stage.addChild(pixie2);

      let pixie3 = new PIXI.AnimatedSprite(countImgList(ids,8,11));
      pixie3.position.set(100, 200)
      pixie3.animationSpeed = 0.1;
      pixie3.loop = true;
      pixie3.gotoAndPlay(0);
      app.stage.addChild(pixie3);

      let pixie4 = new PIXI.AnimatedSprite(countImgList(ids,12,15));
      pixie4.position.set(200, 200)
      pixie4.animationSpeed = 0.1;
      pixie4.loop = true;
      pixie4.gotoAndPlay(0);
      app.stage.addChild(pixie4);
    }
  }
  const countImgList = (ids,start = 0, end = 3) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(ids[`testMan-${i}.png`]);
    }
    return array
  }
  const backHome = () => {
    props.history.go(-1)
  }
  return (
    <div className={'demo-page'}>
      <div className={'demo-page-title'}><Button className="back-home" onClick={backHome}>返回</Button>{props.meta.title}</div>
      <div className="demo-canvas" ref={canvasDemo4}></div>
    </div>
  );
}

export default Demo4;
