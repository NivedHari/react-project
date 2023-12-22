import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./OrderDetails.module.css";
import { useState } from "react";

const OrderDetails = (props) => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredTable, setEnteredTable] = useState("");

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const productChangeHandler = (event) => {
    setEnteredProduct(event.target.value);
  };
  const tableChangeHandler = (event) => {
    setEnteredTable(event.target.value);
  };

  const tableOptions = [
    { value: "table1", label: "Electronic Items" },
    { value: "table2", label: "Food Items" },
    { value: "table3", label: "Skincare Items" },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredTable === "table1" ||
      enteredTable === "table2" ||
      enteredTable === "table3"
    ) {
      const item = {
        id: enteredID,
        product: enteredProduct,
        price: enteredPrice,
        table: enteredTable,
      };
      props.handleAddOrder(enteredTable, item, enteredID);

      console.log(item);
      setEnteredID("");
      setEnteredPrice("");
      setEnteredProduct("");
      setEnteredTable("");
    }

    else{
      alert("Select Table");
    }
  };

  return (
    <Card className={classes.items}>
      <form onSubmit={submitHandler}>
        <Input
          label="Product ID"
          type="number"
          id="uniqueID"
          onChange={idChangeHandler}
          value={enteredID}
        ></Input>
        <Input
          label="Product Name"
          type="text"
          id="product"
          onChange={productChangeHandler}
          value={enteredProduct}
        ></Input>
        <Input
          label="Selling Price"
          type="number"
          id="price"
          onChange={priceChangeHandler}
          value={enteredPrice}
        ></Input>

        <Input
          label="Category"
          type="select"
          id="table"
          options={tableOptions}
          onChange={tableChangeHandler}
          value={enteredTable}
        ></Input>
        <div>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </Card>
  );
};

export default OrderDetails;
