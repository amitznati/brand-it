import React from 'react';
import { CoreSlider } from '../../../core';
import { getPX } from '../../../../sdk/utils';

const TemplatePreviewForProduct = ({ product }) => {
  const [scale, setScale] = React.useState(0.5);
  const productW = getPX(product.productSize.width, scale);
  const productH = getPX(product.productSize.height, scale);
  const templateH = getPX(product.templateFrame.height, scale);
  const templateW = getPX(product.templateFrame.width, scale);
  const templateX = getPX(product.templateFrame.x, scale);
  const templateY = getPX(product.templateFrame.y, scale);
  return (
    <div>
      <CoreSlider
        label='Scale'
        value={scale}
        max={30}
        step={0.001}
        handleSliderChange={(v) => setScale(Number(Number(v).toFixed(2)))}
      />
      <div
        style={{
          height: productH,
          width: productW,
          position: 'relative',
          margin: 'auto',
          background: product.image ? '' : 'white'
        }}
      >
        <img
          src={product.image}
          alt='product'
          style={{ height: productH, width: productW, position: 'absolute' }}
        />
        <div
          style={{
            height: templateH,
            width: templateW,
            position: 'absolute',
            overflow: 'hidden',
            bottom: templateY,
            left: templateX,
            backgroundColor: 'rgb(0 0 0 / 36%)'
          }}
        />
      </div>
    </div>
  );
};

export default TemplatePreviewForProduct;
