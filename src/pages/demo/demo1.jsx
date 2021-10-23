
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js'
import './index.less';

const Demo1 = () => {
  const [pixiObj, setPixiObj] = useState(null);
  const canvasDemo1 = useRef();
  useEffect(() => {
    initFn();
  }, []);
  const initFn = () => {
    console.log('PIXI:', PIXI);
    console.log('canvasDemo1:',canvasDemo1.current)
    const app = new PIXI.Application({
      width: 1000,  // default: 800 宽度
      height: 500,  // default: 800 宽度
      antialias: true, //  default: false 反锯齿  使得字体的边界和图形更加平滑
      transparent: false, // default: false 透明度
      resolution: 1, // default: 1 分辨率  不同屏幕和分辨率适配
      backgroundColor: 0xadeeda
    });
    setPixiObj(app);
    if (!pixiObj) {
      canvasDemo1.current.appendChild(app.view);
    }
    case1(app);
    case2(app);
  }
  // 创建图片并旋转
  const case1 = (app) => {
    // 创建一个图片精灵
    const avatar = new PIXI.Sprite.from('https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo/wifi.png');
    avatar.scale.set(0.5, 0.5);
    avatar.x = 150;
    avatar.y = 150;
    // 修改旋转中心为图片中心
    avatar.anchor.set(0.5, 0.5)
    app.stage.addChild(avatar);
    app.ticker.add(() => {
      // 每秒调用该方法60次(60帧动画)
      avatar.rotation += 0.01;
    })
    console.log('app.stage:',app.stage)
  }
  // loader 多张图片
  const case2 = (app) => {
    // 创建一个图片精灵
    app.loader.add("https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo/tool.png")
    .load(setup);
    function setup() {
      let testPic = new PIXI.Sprite(
        app.loader.resources["https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo/tool.png"].texture
      );
      testPic.scale.set(0.5, 0.5);
      // testPic.x = 300;
      // testPic.y = 300;
      testPic.position.set(300, 300)
      // 修改旋转中心为图片中心
      testPic.anchor.set(0.5, 0.5)
      app.stage.addChild(testPic);
    }
  }
  // 使用雪碧图
  const case3 = (app) => {
    // TODO
  }
  return (
    <div className={'demo1-page'}>
      <div className={'demo1-page-title'}>demo1-page</div>
      <div className="demo1-canvas" ref={canvasDemo1} id="demo1-area"></div>
    </div>
  );
}

export default Demo1;
