import React from 'react'
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from '../Redux/Store';
import TableItem from './TableItem';

const TableItems = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useDispatch<AppDispatch>();

    const basket = useAppSelector((state) => state.details.details);
    console.log("data====",basket)

   
    const ItemDetails = basket.map((item, index)=>
    
       ( <TableItem
        key={index}
        id={item.id}
        company={item.company}
        name={item.name}
        additional={item.additional}
        country = {item.country}
        code = {item.code}
        street={item.street}
        />)
    )
  return (
  <>
  {ItemDetails}
  </>
  )
}

export default TableItems
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}

