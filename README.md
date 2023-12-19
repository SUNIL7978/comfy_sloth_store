How create rating in product.

{/* <span>
{stars >= 1 ? (
<BsStarFill />
) : Stars >= 0.5 ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span>
<span>
{stars >= 2 ? (
<BsStarFill />
) : Stars >= 1.5 ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span>
<span>
{stars >= 3 ? (
<BsStarFill />
) : Stars >= 2.5 ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span>
<span>
{stars >= 4 ? (
<BsStarFill />
) : Stars >= 3.5 ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span>
<span>
{stars === 5 ? (
<BsStarFill />
) : Stars >= 4.5 ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span> /*This is the Manual Approach \*/}

How to create with Array Approach in product.
const tempStars = Array.from({ length: 5 }, (\_, index) => {
const number = index + 0.5;
return (
<span key={index}>
{stars >= index + 1 ? (
<BsStarFill />
) : stars >= number ? (
<BsStarHalf />
) : (
<BsStar />
)}
</span>
);
});
