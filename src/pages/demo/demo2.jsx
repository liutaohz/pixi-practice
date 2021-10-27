
import React, { useEffect, useState, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Button } from 'antd';
import './index.less';

const urlPr = 'https://timesky.oss-cn-hangzhou.aliyuncs.com/pixi/demo';
const Demo2 = (props) => {
  // 按键控制方向
  const [pixiObj, setPixiObj] = useState(null);
  const canvasDemo2 = useRef();
  useEffect(() => {
    window.document.title = props.meta.title;
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
      canvasDemo2.current.appendChild(app.view);
    }
    case1(app);
  }
  const case1 = (app) => {
    // 图形绘制
    let rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xedaead, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 470;
    rectangle.y = 170;
    app.stage.addChild(rectangle);


    const direction = new PIXI.Sprite.from(`${urlPr}/direction.png`);
    direction.y = 96;
    direction.vx = 0;
    direction.vy = 0;
    app.stage.addChild(direction);

    // 文本展示
    let style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fill: "white",
      stroke: '#ff3300',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    });
    let message = new PIXI.Text("Hello Pixi!",style);
    app.stage.addChild(message);
    message.position.set(24, 24);


    //Capture the keyboard arrow keys
    let left = keyboard("ArrowLeft"),
    up = keyboard("ArrowUp"),
    right = keyboard("ArrowRight"),
    down = keyboard("ArrowDown");

    //Left arrow key `press` method
    left.press = () => {
      //Change the cat's velocity when the key is pressed
      direction.vx = -5;
      direction.vy = 0;
    };

    //Left arrow key `release` method
    left.release = () => {
      //If the left arrow has been released, and the right arrow isn't down,
      //and the direction isn't moving vertically:
      //Stop the direction
      if (!right.isDown && direction.vy === 0) {
        direction.vx = 0;
      }
    };

    //Up
    up.press = () => {
      direction.vy = -5;
      direction.vx = 0;
    };
    up.release = () => {
      if (!down.isDown && direction.vx === 0) {
        direction.vy = 0;
      }
    };

    //Right
    right.press = () => {
      direction.vx = 5;
      direction.vy = 0;
    };
    right.release = () => {
    if (!left.isDown && direction.vy === 0) {
      direction.vx = 0;
    }
    };

    //Down
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
      // 碰撞检测
      if (hitTestRectangle(direction, rectangle)) {
        message.text = "hit!";
        rectangle.tint = 0xff3300;
      } else {
        //if there's no collision, reset the message
        //text and the box's color
        message.text = "No collision...";
        rectangle.tint = 0xccff99;
      }
    }
  }
  const keyboard=(value)=>{
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );

    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };

    return key;
  }
  const hitTestRectangle=(r1, r2)=>{

    //Define the variables we'll need to calculate
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

      //A collision might be occurring. Check for a collision on the y axis
      if (Math.abs(vy) < combinedHalfHeights) {

        //There's definitely a collision happening
        hit = true;
      } else {

        //There's no collision on the y axis
        hit = false;
      }
    } else {

      //There's no collision on the x axis
      hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
  };
  const backHome = () => {
    props.history.go(-1)
  }
  return (
    <div className={'demo-page'}>
      <div className={'demo-page-title'}><Button className="back-home" onClick={backHome}>返回</Button>{props.meta.title}</div>
      <div className="demo-canvas" ref={canvasDemo2}></div>
    </div>
  );
}

export default Demo2;
