
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import './index.less';

const urlPr = 'https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo';
const Demo3 = () => {
  const [pixiObj, setPixiObj] = useState(null);
  const canvasDemo3 = useRef();
  useEffect(() => {
    initFn();
  }, []);
  const initFn = () => {
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
      canvasDemo3.current.appendChild(app.view);
    }
    // case1(app);
    case2(app);
  }
  // 平铺背景图
  const case1 = (app) => {
    const bgImage = PIXI.Texture.from(`${urlPr}/brick.jpg`)
    const tilingSprite = new PIXI.TilingSprite(bgImage, app.screen.width, app.screen.height)
    app.stage.addChild(tilingSprite)
    app.ticker.add(() => {
      tilingSprite.tilePosition.x-= 1;
    })
    const direction = new PIXI.Sprite.from(`${urlPr}/direction.png`);
    direction.y = 96;
    direction.vx = 1;
    direction.vy = 1;
    app.stage.addChild(direction);
    app.ticker.add(() => {
      // 每秒调用该方法60次(60帧动画)
      if (direction.x > 800) {
        direction.vx = -1
      } else if (direction.x < 50) {
        direction.vx = 1
      }
      if (direction.y > 300) {
        direction.vy = -1
      } else if (direction.y < 20) {
        direction.vy = 1
      }
      direction.x += direction.vx;
      direction.y += direction.vy
    })
  }
  // 平铺背景图
  const case2 = (app) => {
    const wood = PIXI.Texture.from('/images/wood.jpg')
    const tilingSprite1 = new PIXI.TilingSprite(wood, app.screen.width, app.screen.height)
    app.stage.addChild(tilingSprite1)
    const ground = PIXI.Texture.from('/images/ground.png')
    const tilingSprite2 = new PIXI.TilingSprite(ground, app.screen.width, 100)
    tilingSprite2.y = 400;
    app.stage.addChild(tilingSprite2)
    app.ticker.add(() => {
      tilingSprite1.tilePosition.x -= 1;
      tilingSprite2.tilePosition.x -= 3;
    })
  }
  return (
    <div className={'demo3-page'}>
      <div className={'demo3-page-title'}>demo3-page</div>
      <div className="demo3-canvas" ref={canvasDemo3} id="demo3-area"></div>
    </div>
  );
}

export default Demo3;
