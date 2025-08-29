import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <h4>Discover amazing Products</h4>
      <ProductList />
    </div>
  );
}