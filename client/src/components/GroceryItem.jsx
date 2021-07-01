import React from 'react';

var GroceryItem = (props) => (
  <li> {props.item.name} {props.item.quantity} </li>
);

export default GroceryItem;