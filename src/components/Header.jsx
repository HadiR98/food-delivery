import logoImg from "../assets/logo.jpg";

export default function Header({ cartData }) {
  console.log(cartData);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>Cart ({cartData.length})</button>
      </nav>
    </header>
  );
}
