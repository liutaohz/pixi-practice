
import React, { useEffect, useState } from 'react';
import routesArr from '../../router/routes';
import { Button } from 'antd';
import './index.less';
const HomePage = (props) => {
  const demoList = routesArr.filter(item => item.path.includes('demo'));
  useEffect(() => {
    window.document.title = props.meta.title;
  }, []);
  const toDetail = (item) => {
    props.history.push(item.path);
  }
  return (
    <div className='home-page'>
      {demoList?.map(item =>
        <div key={item.path} className="home-page-item">
          <Button type="primary" onClick={()=>toDetail(item)}>{item.meta.title}</Button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
