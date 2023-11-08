import { useSelector } from "react-redux";
import Item from "../Product/Item";
import FinalAmount from "./FInalAmount";
import "./Bag.css";

const Bag = () => {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.productItems);
  const productData = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      {productData.length === 0 ? (
        <center style={{ margin: 200 }}>
          <h1>No Item Selected!</h1>
        </center>
      ) : (
        <main>
          <div className="bag-page">
            <div className="bag-items-container">
              {productData.map((value) => {
                return <Item item={value} key={value.id} />;
              })}
            </div>
            <FinalAmount />
          </div>
        </main>
      )}
    </>
  );
};

export default Bag;
