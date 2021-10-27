
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Button } from 'antd';
import './index.less';

const urlPr = 'https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo';
const Demo1 = (props) => {
  const [pixiObj, setPixiObj] = useState(null);
  const canvasDemo1 = useRef();
  useEffect(() => {
    window.document.title = props.meta.title;
    // 特别说明：pixi.jsv5版本以上默认使用webgl渲染，如果希望可以回退到canvas，需要使用pixi.js-legacy
    console.log('support WebGL:', PIXI.utils.isWebGLSupported())
    if (PIXI.utils.isWebGLSupported()) {
      initFn();
    }
  }, []);
  const initFn = () => {
    console.log('PIXI:', PIXI);
    console.log('canvasDemo1:',canvasDemo1.current)
    const app = new PIXI.Application({
      width: 1000,  // default: 800 宽度
      height: 500,  // default: 800 宽度
      antialias: true, //  default: false 反锯齿  使得字体的边界和图形更加平滑
      backgroundAlpha: true, // 透明度
      resolution: 1, // default: 1 分辨率  不同屏幕和分辨率适配
      backgroundColor: 0xadeeda
    });
    setPixiObj(app);
    if (!pixiObj) {
      canvasDemo1.current.appendChild(app.view);
    }
    case1(app);
    // case2(app);
    // case3(app);
  }
  // 创建图片并旋转
  const case1 = (app) => {
    // 创建一个图片精灵
    const avatar = new PIXI.Sprite.from(`${urlPr}/wifi.png`);
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
    app.loader.add(`${urlPr}/tool.png`)
    .load(setup);
    function setup() {
      let testPic = new PIXI.Sprite(
        app.loader.resources[`${urlPr}/tool.png`].texture
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
    // 创建一个图片精灵
    // app.loader.add("/images/test1.json")
    //   .load(setup);
    // function setup() {
    //   let id = app.loader.resources["/images/test1.json"].textures;
    app.loader.add(`${urlPr}/test1.json`)
      .load(setup);
    function setup() {
      let id = app.loader.resources[`${urlPr}/test1.json`].textures;
      let testPic = new PIXI.Sprite(id["GitHub.png"]);
      testPic.scale.set(0.5, 0.5);
      testPic.position.set(400, 100)
      testPic.anchor.set(0.5, 0.5)
      app.stage.addChild(testPic);

      let testPic2 = new PIXI.Sprite(id["微信.png"]);
      testPic2.scale.set(0.5, 0.5);
      testPic2.position.set(400, 300)
      testPic2.anchor.set(0.5, 0.5)
      app.stage.addChild(testPic2);

      app.ticker.add(delta => gameLoop(delta));
      function gameLoop(delta){
        testPic2.vx = 1;
        testPic2.vy = 1;
        //Move the cat 1 pixel
        if (testPic2.y > 100) {
          testPic2.x += testPic2.vx;
          testPic2.y -=  testPic2.vy;
        }
      }
    }
  }
  const backHome = () => {
    props.history.push('/pixi-practice')
  }
  return (
    <div className={'demo-page'}>
      <div className={'demo-page-title'}>
        {props.meta.title} <Button className="back-home" onClick={backHome}>返回首页</Button>
      </div>
      {PIXI.utils.isWebGLSupported() ?
        <div className="demo-canvas" ref={canvasDemo1}></div> :
        <div className="demo-canvas" ref={canvasDemo1}>浏览器暂不支持webgl</div>
      }
    </div>
  );
}

export default Demo1;
