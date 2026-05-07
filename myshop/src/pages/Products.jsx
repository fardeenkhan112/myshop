import React, { useReducer, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data';

function productReducer(state, action) {
  
  switch (action.type) {

    case "SET_LOADING":
      return { ...state, loading: true, products: [] };
    case "SET_PRODUCTS":
      return { ...state, loading: false, products: action.payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "RESET_FILTER":
      return { ...state, selectedCategory: "All" };
    default:
      return state;
  }
}

const initialState = {
  products: [],           
  loading: true,          
  selectedCategory: "All" 
};

function Products() {


  const [state, dispatch] = useReducer(productReducer, initialState);


  useEffect(() => {
  
    dispatch({ type: "SET_LOADING" }); 
    setTimeout(() => {
      dispatch({ type: "SET_PRODUCTS", payload: productsData }); // 
    }, 2000);

  }, []); 


  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  const filteredProducts = state.selectedCategory === "All"
    ? state.products
    : state.products.filter(p => p.category === state.selectedCategory);



  function handleFilterClick(category) {

    dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
  }

  const pageStyle = {
    padding: "60px 30px",
    maxWidth: "1300px",
    margin: "0 auto"
  };

  const headingStyle = {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#1a1a2e",
    textAlign: "center",
    marginBottom: "10px"
  };

  const paraStyle = {
    textAlign: "center",
    color: "#888",
    marginBottom: "30px",
    fontSize: "15px"
  };

  const filterContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    flexWrap: "wrap"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "25px"
  };

  return (
    <div style={pageStyle}>

      <h1 style={headingStyle}>Our Products 🛍️</h1>
      <p style={paraStyle}>
        {state.selectedCategory === "All"
          ? `Showing all ${filteredProducts.length} products`
          : `Showing ${filteredProducts.length} products in "${state.selectedCategory}"`
        }
      </p>

      <div style={filterContainerStyle}>
        {categories.map((cat) => {
          const isActive = state.selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              style={{
                padding: "10px 28px",
                backgroundColor: isActive ? "#e94560" : "white",
                color: isActive ? "white" : "#333",
                border: isActive ? "2px solid #e94560" : "2px solid #ddd",
                borderRadius: "25px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s"
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
      {state.loading && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontSize: "50px" }}>⏳</p>
          <p style={{ fontSize: "20px", color: "#888", fontWeight: "600" }}>
            Loading product please wait...
          </p>
          <p style={{ fontSize: "14px", color: "#bbb", marginTop: "8px" }}>
            (After 2 seconds, products will appear here)
          </p>
        </div>
      )}
      {!state.loading && (
        <div style={gridStyle}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!state.loading && filteredProducts.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <p style={{ fontSize: "50px" }}>😕</p>
          <p style={{ fontSize: "18px", color: "#999" }}>
            No products found in "{state.selectedCategory}" category.
          </p>
        </div>
      )}

    </div>
  );
}

export default Products;