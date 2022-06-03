import React, { useState } from "react";
import "./App.css";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Components/Redux/Store";
import {  OpenModal } from "./Components/Redux/RootReducer";
import TableItems from "./Components/TableItem/TableItems";
import InvoiceAddress from "./Components/Modal/InvoiceAddress";

function App() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const active = useAppSelector((state) => state.details.active);

  
  const openModal = () => {
    dispatch(OpenModal());
  };

  

 

  return (
    <div>
      <nav>
        <button onClick={openModal}>ADD</button>
      </nav>

      <div className="container">
        <table className="table">
          <tr className="heading">
            <th>Icon</th>

            <th>Company</th>
            <th>Name</th>
            <th>Additional</th>
            <th>Street</th>
            <th>Postal code</th>
            <th>IBAN</th>
            <th>BIC</th>
            <th>Bank name</th>

            <th>FAX</th>
            <th>E-mail</th>
            <th>Birthday</th>
          </tr>

         <TableItems/>

          <tr>
            <td>Icon</td>
            <td>Company</td>
            <td>Name</td>
            <td>Additional</td>
            <td>Street</td>
            <td>Postal</td>
            <td>IBAN</td>
            <td>BIC</td>
            <td>Bank name</td>
            <td>FAX</td>
            <td>Email</td>
            <td>Birthday</td>
          </tr>
        </table>
      </div>
{active && <InvoiceAddress/>}
     
    </div>
  );
}

export default App;
