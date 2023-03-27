import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ta from "../../Asstes/style/user_take_action.module.css";
import { useRouter } from "next/router";
import {suspendeUser,veryfiyUser} from "../../redux/reducers/userReducer"
import { useDispatch } from "react-redux";

const UserSuspendModal = (props) => {
  const dispatch=useDispatch()
  console.log("props===>",props.state2)
  const router = useRouter()
  const user_id=router.query.id
  const handleSuspendUser=()=>{
    if(props.state2===true){
      dispatch(veryfiyUser(user_id));
    }else{
      dispatch(suspendeUser(user_id))
    }
  
    props.onClick()
  }
  return (
    <>
      <Modal
        className="add_mode_modal"
        show={props.state}
        onHide={props.onClick}
        centered
      >
        <div className={ta.suspend_modal_body}>
          <div className={ta.modal_heading}>Suspend @John Doe ?</div>
          <div className={ta.modal_text}>
            Are you sure you want to suspend @John Doe ?
          </div>
          <div className={ta.modal_btn} onClick={()=>handleSuspendUser()}>{props.state2===true?"Verify":"Suspend"}</div>
          <div className={ta.modal_btn2}        onClick={props.onClick}>Cancel</div>
        </div>
      </Modal>
    </>
  );
};

export default UserSuspendModal;
