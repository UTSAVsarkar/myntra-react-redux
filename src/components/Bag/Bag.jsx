import { useSelector } from "react-redux";
import Item from "../Product/Item";

const Bag = () => {
  const bagItemIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.productItems);
  const productData = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <div className="container left-content-border">
      <div className="right-content">
        {productData.map((value) => {
          return <Item item={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default Bag;
