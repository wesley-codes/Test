import React from 'react'
import { useDispatch } from 'react-redux';
import { PersonDetail, TableItemProps } from '../../Types/Types'
import { deleteItem } from '../Redux/RootReducer';
import { AppDispatch } from '../Redux/Store';
import DeleteIcon from '../SVG/DeleteSVG'

const TableItem = ( {company, name, additional, street, code, country, id}:PersonDetail) => {
    const dispatch = useDispatch<AppDispatch>();
const deleteRow = ()=>{
    dispatch(deleteItem(id))
}

  return (
    <tr>
    <td><DeleteIcon onClick={deleteRow} /></td>
    <td>{company}</td>
    <td>{name}</td>
    <td>{additional}</td>
    <td>{street}</td>
    <td>{code}</td>
    <td>{country}</td>
    <td>BIC</td>
    <td>Bank name</td>
    <td>FAX</td>
    <td>Email</td>
    <td>Birthday</td>
  </tr>
  )
}

export default TableItem
