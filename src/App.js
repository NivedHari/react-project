import { useState, useEffect } from "react";
import "./App.css";
import OrderDetails from "./Components/OrderDetails/OrderDetails";
import TableList from "./Components/TableList/TableList";

function App(props) {
  useEffect(() => {
    const storedOrders = { table1: [], table2: [], table3: [] };
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const order = JSON.parse(localStorage.getItem(key));
      storedOrders[order.table].push(order);
    }
    setTableOrders(storedOrders);
  }, []);

  const [tableOrders, setTableOrders] = useState({
    table1: [],
    table2: [],
    table3: [],
  });

  const handleAddOrder = (tableId, order, enteredID) => {
    setTableOrders((prevTableOrders) => {
      const updatedTableOrders = { ...prevTableOrders };
  
      if (!updatedTableOrders[tableId]) {
        updatedTableOrders[tableId] = [];
      }
  
      updatedTableOrders[tableId] = [...updatedTableOrders[tableId], order];
  
      return updatedTableOrders;
    });
  
    localStorage.setItem(enteredID, JSON.stringify(order));
  };
  
  

  const handleDeleteOrder = (tableId, orderId) => {
    localStorage.removeItem(orderId);
    setTableOrders((prevTableOrders) => {
      return {
        ...prevTableOrders,
        [tableId]: prevTableOrders[tableId].filter(
          (order) => order.id !== orderId
        ),
      };
    });
  };

  return (
    <div className="App">
      <OrderDetails handleAddOrder={handleAddOrder}></OrderDetails>
      <TableList
        tableOrders={tableOrders}
        handleDeleteOrder={handleDeleteOrder}
      ></TableList>
    </div>
  );
}

export default App;
