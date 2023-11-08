import { useSelector } from "react-redux";

const Bag = () => {
  const bagItem = useSelector((store) => store.bag);
  console.log(bagItem);
  return <p>placeholder</p>;
};

export default Bag;
