import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { FormValue } from '../../Types/Types';
import { addToBasket, closeModal } from '../Redux/RootReducer';
import { RootState, AppDispatch } from '../Redux/Store';
import Modal from './Modal';
import "../../App.css"

const InvoiceAddress = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useDispatch<AppDispatch>();
    const active = useAppSelector((state) => state.details.active);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValue>();
    
      const onFormHandler = (data: FormValue) => {
        dispatch(addToBasket(data))
        dispatch(closeModal());
    
      };
  return (
    <Fragment>


        <Modal titleHeader='Invoice Address'>
          <form onSubmit={handleSubmit(onFormHandler)}>
            {" "}
            <div>
              <label htmlFor="company">Company*</label>
              <input
                {...register("company", {
                  required: true,
                })}
              />
            </div>
            <div>
              {errors.company?.type === "required" && (
                <span>field is required</span>
              )}
            </div>
            <div>
              <label>Name*</label>
              <input
                className="input"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
            <div>
              {errors.name?.type === "required" && (
                <span>Name field is required</span>
              )}
            </div>
            <div>
              <label>Additional</label>
              <input className="input" {...register("additional")} />
            </div>
            <div>
              <label>Street</label>
              <input className="input" {...register("street")} />
            </div>
            <div>
              <label>Postal code</label>
              <input className="input" {...register("code")} />
            </div>
         <div className='btnBox'>
         <button className="btn">cancel</button>
            <button type="submit" >Save</button>
         </div>
          </form>
        </Modal>
      


    </Fragment>
  )
}

export default InvoiceAddress
