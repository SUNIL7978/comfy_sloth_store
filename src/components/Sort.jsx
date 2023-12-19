import Wrapper from "../assets/wrapper/componentwrapper/Sort";
import { useFilterContext } from "../context/Filter_Context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setListView,
    setGridView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={grid_view ? "active" : null}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={!grid_view ? "active" : null}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} Products Found</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort By :</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-low'>price (low)</option>
          <option value='price-high'>price (high)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};
export default Sort;
