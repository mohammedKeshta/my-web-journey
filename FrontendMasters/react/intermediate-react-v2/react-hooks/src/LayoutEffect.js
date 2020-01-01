import React, { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [widthBox, setBoxWidth] = useState(0);
  const [heightBox, setBoxHeight] = useState(0);
  const el = useRef();
  const boxEl = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);

    setBoxWidth(boxEl.current.clientWidth);
    setBoxHeight(boxEl.current.clientHeight);
  });

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>
        textarea width: {width}px / height: {height}px
      </h2>
      <h2>
        Box width: {widthBox}px / height: {heightBox}px
      </h2>
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={el}
      />

      <div className="box-use-layout" ref={boxEl}></div>
    </div>
  );
};

export default LayoutEffectComponent;
