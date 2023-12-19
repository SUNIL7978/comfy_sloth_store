import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/Product_Context";
import { useEffect } from "react";
import { single_product_url as url } from "../Utils/constants";
import {
  AddToCart,
  Error,
  Loading,
  PageHero,
  ProductsImages,
  Stars,
} from "../components";
import Wrapper from "../assets/wrapper/PageWrapper/SingleProductPage";
import { formatPrice } from "../Utils/helpers";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  console.log(product);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    company,
    description,
    id: sku,
    images,
    price,
    name,
    stars,
    stock,
    reviews,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          Back to Products
        </Link>
        <div className='product-center'>
          <ProductsImages images={images} />
          <section className='content'>
            <h3>{name}</h3>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available :</span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
