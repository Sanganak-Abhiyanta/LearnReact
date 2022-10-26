import React from "react";

export default function ListGourp(props) {
  const { items, textProperty, valueProperty, onItemSelect,selectedItems } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={item!==selectedItems?"list-group-item":"list-group-item active"}
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
