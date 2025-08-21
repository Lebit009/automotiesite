import Title from "./Title";
import "../css/Product.css";
import logo1 from "../assets/img/logo.png";

const products = [
  { id: 1, image: logo1, name: "Engine Parts" },
  { id: 2, image: logo1, name: "Suspension Systems" },
  { id: 3, image: logo1, name: "Tyres & Wheels" },
  { id: 4, image: logo1, name: "Car Accessories" },
  { id: 5, image: logo1, name: "Engine Parts" },
  { id: 6, image: logo1, name: "Suspension Systems" },
  { id: 7, image: logo1, name: "Tyres & Wheels" },
  { id: 8, image: logo1, name: "Car Accessories" },
  { id: 9, image: logo1, name: "Engine Parts" },
  { id: 10, image: logo1, name: "Suspension Systems" },
  { id: 11, image: logo1, name: "Tyres & Wheels" },
  { id: 12, image: logo1, name: "Car Accessories" },
];

const Products = () => (
  <div>
    <section className="products">
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Products;
