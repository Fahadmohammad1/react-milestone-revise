import "./App.css";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-section">
        <div className="food">
          <Foods></Foods>
        </div>
        <div className="cart">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
