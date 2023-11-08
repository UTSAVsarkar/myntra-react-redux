import React from "react";
import "../../helper.css";
import style from "./Filter.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { filterActionCreator } from "../../ActionCreator/productActionCreator";
import { filterCatActionCreator } from "../../ActionCreator/productActionCreator";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-left-content">
      <div className="position-fixed left-content-border-new">
        <div className="filter-wrapper">
          <div className="container">
            <h3>Categories</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterCatActionCreator,
                    dispatch
                  );
                  actionCreator("shirt");
                }}
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterCatActionCreator,
                    dispatch
                  );
                  actionCreator("sleepShirt");
                }}
              />
              <label>Sleep Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterCatActionCreator,
                    dispatch
                  );
                  actionCreator("dogShirt");
                }}
              />
              <label>Dog shirts</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Brands</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterActionCreator,
                    dispatch
                  );
                  actionCreator("zara");
                }}
              />
              <label>Zara</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterActionCreator,
                    dispatch
                  );
                  actionCreator("nautica");
                }}
              />
              <label>Nautica</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterActionCreator,
                    dispatch
                  );
                  actionCreator("roadster");
                }}
              />
              <label>Roadster</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterActionCreator,
                    dispatch
                  );
                  actionCreator("arrow");
                }}
              />
              <label>Arrow</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
                  let actionCreator = bindActionCreators(
                    filterActionCreator,
                    dispatch
                  );
                  actionCreator("wrogn");
                }}
              />
              <label>Wrogn</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
