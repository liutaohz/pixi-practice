
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Button } from 'antd';
import { keyboard } from '../../utils';
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
      backgroundAlpha: true,
      resolution: 1, // default: 1 分辨率  不同屏幕和分辨率适配
      backgroundColor: 0xadeeda
    });
    setPixiObj(app);
    if (!pixiObj) {
      canvasDemo4.current.appendChild(app.view);
    }
    case1(app);
    case2(app);
  }
  // 平铺背景图
  const case1 = (app) => {
    // app.loader.add(`/images/testMan.json`)
    app.loader.add(`${urlPr}/testMan.json`)
      .load(setup);
    function setup() {
      // let ids = app.loader.resources[`/images/testMan.json`].textures;
      const ids = app.loader.resources[`${urlPr}/testMan.json`].textures;
      let pixie1 = new PIXI.AnimatedSprite(countImgList(ids,0,3));  // 向下
      pixie1.position.set(100, 100)
      pixie1.animationSpeed = 0.1;
      pixie1.loop = true;
      pixie1.gotoAndPlay(0);
      pixie1.visible = false;
      pixie1.scale.set(1.4, 1.4);
      app.stage.addChild(pixie1);

      let pixie2 = new PIXI.AnimatedSprite(countImgList(ids,4,7));  // 向左
      pixie2.position.set(200, 100)
      pixie2.animationSpeed = 0.1;
      pixie2.loop = true;
      pixie2.gotoAndPlay(0);
      pixie2.visible = false;
      pixie2.scale.set(1.4, 1.4);
      app.stage.addChild(pixie2);

      let pixie3 = new PIXI.AnimatedSprite(countImgList(ids,8,11)); // 向右
      pixie3.position.set(100, 200)
      pixie3.animationSpeed = 0.1;
      pixie3.loop = true;
      pixie3.gotoAndPlay(0);
      pixie3.visible = false;
      pixie3.scale.set(1.4, 1.4);
      app.stage.addChild(pixie3);

      let pixie4 = new PIXI.AnimatedSprite(countImgList(ids,12,15));  // 向上
      pixie4.position.set(200, 200)
      pixie4.animationSpeed = 0.1;
      pixie4.loop = true;
      pixie4.gotoAndPlay(0);
      pixie4.visible = false;
      pixie4.scale.set(1.4, 1.4);
      app.stage.addChild(pixie4);

      const direction = new PIXI.Sprite.from(`testMan-0.png`);
      direction.position.set(100, 440)
      direction.scale.set(1.4, 1.4);
      direction.vx = 0;
      direction.vy = 0;
      app.stage.addChild(direction);
      //Capture the keyboard arrow keys
      let left = keyboard("ArrowLeft"),
      up = keyboard("ArrowUp"),
      right = keyboard("ArrowRight"),
      down = keyboard("ArrowDown");
      left.press = () => {
        //Change the cat's velocity when the key is pressed
        direction.vx = -5;
        direction.vy = 0;
      };
      left.release = () => {
        if (!right.isDown && direction.vy === 0) {
          direction.vx = 0;
        }
      };
      up.press = () => {
        direction.vy = -5;
        direction.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && direction.vx === 0) {
          direction.vy = 0;
        }
      };
      right.press = () => {
        direction.vx = 5;
        direction.vy = 0;
      };
      right.release = () => {
      if (!left.isDown && direction.vy === 0) {
        direction.vx = 0;
      }
      };
      down.press = () => {
        direction.vy = 5;
        direction.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && direction.vx === 0) {
          direction.vy = 0;
        }
      };

      //Set the game state
      let state = play;

      //Start the game loop
      app.ticker.add(delta => gameLoop(delta));
      function gameLoop(delta){
        //Update the current game state:
        state(delta);
      }

      function play(delta) {
        direction.x += direction.vx;
        direction.y += direction.vy
        if (direction.vx > 0) {
          // 向右
          pixie3.x = direction.x;
          pixie3.y = direction.y;

          pixie1.visible = false;
          pixie2.visible = false;
          pixie3.visible = true;
          pixie4.visible = false;
          direction.visible = false;
        } else if (direction.vx < 0) {
          // 向左
          pixie2.x = direction.x;
          pixie2.y = direction.y;

          pixie1.visible = false;
          pixie2.visible = true;
          pixie3.visible = false;
          pixie4.visible = false;
          direction.visible = false;
        } else if (direction.vy < 0) {
          // 向上
          pixie4.x = direction.x;
          pixie4.y = direction.y;

          pixie1.visible = false;
          pixie2.visible = false;
          pixie3.visible = false;
          pixie4.visible = true;
          direction.visible = false;
        } else if (direction.vy > 0) {
          // 向下
          pixie1.x = direction.x;
          pixie1.y = direction.y;

          pixie1.visible = true;
          pixie2.visible = false;
          pixie3.visible = false;
          pixie4.visible = false;
          direction.visible = false;
        } else {
          // 静止
          // pixie1.visible = false;
          // pixie2.visible = false;
          // pixie3.visible = false;
          // pixie4.visible = false;
          // direction.visible = true;

          pixie3.x = direction.x;
          pixie3.y = direction.y;

          pixie1.visible = false;
          pixie2.visible = false;
          pixie3.visible = true;
          pixie4.visible = false;
          direction.visible = false;
        }
        // 碰撞检测
      }
    }
  }
  // 多平铺背景图，伪3D效果
  const case2 = (app) => {
    // const wood = PIXI.Texture.from('/images/wood.jpg')
    const wood = PIXI.Texture.from(`${urlPr}/wood.jpg`)
    const tilingSprite1 = new PIXI.TilingSprite(wood, app.screen.width, 500)
    app.stage.addChild(tilingSprite1)
    // const ground = PIXI.Texture.from('/images/ground.png')
    const ground = PIXI.Texture.from(`${urlPr}/ground.png`)
    const tilingSprite2 = new PIXI.TilingSprite(ground, app.screen.width, 150)
    tilingSprite2.y = 450;
    app.stage.addChild(tilingSprite2)
    app.ticker.add(() => {
      tilingSprite1.tilePosition.x -= 1;
      tilingSprite2.tilePosition.x -= 3;
    })
  }
  const countImgList = (ids,start = 0, end = 3) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(ids[`testMan-${i}.png`]);
    }
    return array
  }
  const backHome = () => {
    props.history.push('/pixi-practice')
  }
  return (
    <div className={'demo-page'}>
      <div className={'demo-page-title'}>
        {props.meta.title} <Button className="back-home" onClick={backHome}>返回首页</Button>
      </div>
      <div className="demo-canvas" ref={canvasDemo4}></div>
    </div>
  );
}

export default Demo4;
