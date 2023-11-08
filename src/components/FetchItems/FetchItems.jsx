import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/itemSlice";

const FetchItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://charlesgalwyn.github.io/gocoapi/shirts.json", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(itemsActions.addInitialItems(data.shirts));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
