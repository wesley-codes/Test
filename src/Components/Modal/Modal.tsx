import React, { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { ModalProps } from "../../Types/Types";
import { closeModal } from "../Redux/RootReducer";
import { AppDispatch, RootState } from "../Redux/Store";
const Modal = ({ titleHeader,children }: ModalProps) => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const active = useAppSelector((state) => state.details.active);

  const modalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {active && (
        <div className="modal">
          <div className="modalContainer">
            <div
              style={{
                fontSize: "20px",
                display: "Flex",
                justifyContent: "end",
              }}
            >
              <p onClick={modalHandler}>X</p>
            </div>

            <h2>{titleHeader}</h2>
            <div className="inputWrapper">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
