import Wrapper from "../assets/wrapper/PageWrapper/ProductsPage";
import { Filters, PageHero, ProductList, Sort } from "../components";

const ProductPage = () => {
  return (
    <main>
      <PageHero title='Products' />
      <Wrapper className='page'>
        <div className='products section-center'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
export default ProductPage;
