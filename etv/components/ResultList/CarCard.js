function CarCard(props) {
  return (
    <div className="container-product">
      <div className="product-icon">
        <img src={props.caritem.image} alt="VW-e-Crafter-Front-300x225" />
      </div>
      <div className="product-info">
        <h3>{props.caritem.title}</h3>
        <p>
          RGF
          <br />
          <span>€ 19.000</span>
        </p>
      </div>
    </div>
  );
}
export default CarCard;
