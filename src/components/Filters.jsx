import { FaCheck } from "react-icons/fa";
import { formatPrice, getUniqueValue } from "../Utils/helpers";
import Wrapper from "../assets/wrapper/componentwrapper/filter";
import { useFilterContext } from "../context/Filter_Context";

const Filters = () => {
  const {
    filter: {
      text,
      category,
      colors,
      company,
      shipping,
      min_price,
      max_price,
      price,
    },
    all_products,
    filterUpdate,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValue(all_products, "category");
  const companies = getUniqueValue(all_products, "company");
  const color = getUniqueValue(all_products, "colors");

  console.log(categories, companies, color);

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='Search Product'
              className='search-input'
              value={text}
              onChange={filterUpdate}
            />
          </div>
          <div className='form-control'>
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    type='button'
                    key={index}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                    name='category'
                    onClick={filterUpdate}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Company</h5>
            <select
              name='company'
              className='company'
              onChange={filterUpdate}
              value={company}
            >
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {color.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      type='button'
                      name='colors'
                      className={`${
                        c === "all" ? "all-btn active" : "all-btn"
                      }`}
                      onClick={filterUpdate}
                      data-color='all'
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    type='button'
                    key={index}
                    className={`${
                      colors === c ? "color-btn active" : "color-btn"
                    }`}
                    style={{ background: c }}
                    name='colors'
                    data-color={c}
                    onClick={filterUpdate}
                  >
                    {colors === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={filterUpdate}
            />
          </div>
          <div className='form-control shipping'>
            <label htmlFor='shipping'>Free Shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={filterUpdate}
            />
          </div>
        </form>

        <button type='button' className='clear-btn' onClick={clearFilters}>
          Clear All Filters
        </button>
      </div>
    </Wrapper>
  );
};
export default Filters;
