import React from "react";

export default function ListGourp(props) {
  const { items, textProperty, valueProperty, onItemSelect } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className="list-group-item"
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </>
  );
}

// instead of passing props we can use default props.
ListGourp.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
