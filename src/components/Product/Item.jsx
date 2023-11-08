import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ item }) => {
  return item.visible ? (
    <>
      <div className="cards">
        <div className="card">
          <div className="slider">
            <img src={item.imgscr} alt="" className="product-image" />
          </div>
          <div className="card-info">
            <div className="flexed">
              <div className="card-category">{item.pname}</div>
              <div style={{ color: "red" }}>
                <FontAwesomeIcon icon={faBox} />
              </div>
            </div>
            <p className="card-title">{item.product}</p>
            <p className="card-price">{item.price}</p>
            <div className="wishlist-wrapper">
              <button className="wishlist">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Item;
