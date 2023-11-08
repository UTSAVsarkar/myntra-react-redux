import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../store/bagSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.find((e) => e === item.id);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
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
            {elementFound ? (
              <button
                type="button"
                className="btn btn-add-bag btn-danger"
                onClick={handleRemove}
              >
                Remove
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-add-bag btn-success"
                onClick={handleAddToBag}
              >
                Add to Bag
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
