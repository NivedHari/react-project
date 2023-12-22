import React from "react";
import Card from "../UI/Card/Card";
import classes from "./TableList.module.css";
import Button from "../UI/Button/Button";

const TableList = (props) => {
  const { handleDeleteOrder } = props;

  return (
    <Card className={classes.order}>
      <h2>Products</h2>

      <div id="tab1">
        <h2>Electronic Items</h2>
        <ul id="table1">
          {props.tableOrders.table1.map((order, index) => (
            <li key={index}>
              ID: {order.id}, Product: <strong>{order.product}</strong>, Price:{" "}
              <strong>{order.price}</strong>
              <Button onClick={() => handleDeleteOrder("table1", order.id)}>
                Delete Order
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div id="1">
        <h2>Food Items</h2>
        <ul id="table2">
          {props.tableOrders.table2.map((order, index) => (
            <li key={index}>
              ID: {order.id}, Product: <strong>{order.product}</strong>, Price:{" "}
              <strong>{order.price}</strong>
              <Button onClick={() => handleDeleteOrder("table2", order.id)}>
                Delete Order
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div id="tab3">
        <h2>Skincare Items</h2>
        <ul id="table3">
          {props.tableOrders.table3.map((order, index) => (
            <li key={index}>
              ID: {order.id}, Product: <strong>{order.product}</strong>, Price:{" "}
              <strong>{order.price}</strong>
              <Button onClick={() => handleDeleteOrder("table3", order.id)}>
                Delete Order
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default TableList;
