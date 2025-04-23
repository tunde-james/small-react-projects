import { useEffect, useCallback, useState } from 'react';
import './styles.css';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${page * 20}`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        // For initial load (page 0), replace products array
        // For subsequent loads, append to existing products
        if (page === 0) {
          setProducts(data.products);
        } else {
          setProducts((prevData) => [...prevData, ...data.products]);
        }
        setLoading(false);
      } else {
        // No more products to load
        setDisableBtn(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page]); // Add page as a dependency since it's used in the function

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Check if we've reached the total product limit
  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      {loading && page === 0 ? (
        <p>Loading data, please wait...</p>
      ) : (
        <>
          <div className="product-container">
            {products && products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>

          <div className="button-container">
            {loading && page > 0 ? (
              <p>Loading more products, please wait...</p>
            ) : (
              <button disabled={disableBtn} onClick={handleLoadMore}>
                Load More Products
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LoadMoreData;
