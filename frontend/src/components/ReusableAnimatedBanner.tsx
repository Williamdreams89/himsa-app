import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

const AnimatedBanner = (props: any) => {
  return (
    <div>
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#364D79',
            }}
          />
          <div className="banner-user-title font-extrabold">HIMSA UCC</div>
          <div className="banner-user-text">{props.routeName}</div>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/download.jpeg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          />
          <div className="banner-user-title font-extrabold">HIMSA UCC</div>
          <div className="banner-user-text">{props.routeName}</div>
        </Element>
        <Element prefixCls="banner-user-elem" key="2">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: '#64CBCC',
            }}
          />
          <div className="banner-user-title font-extrabold">Chance on to know</div>
          <div className="banner-user-text">(The Alumni, Past Executives, among others!)</div>
        </Element>
      </BannerAnim>
    </div>
  );
};

export default AnimatedBanner;
