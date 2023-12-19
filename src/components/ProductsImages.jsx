import { useState } from "react";
import Wrapper from "../assets/wrapper/componentwrapper/ProductImages";

const ProductsImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt={main.filename} className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              className={`${image.url === main.url ? "active" : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ProductsImages;
