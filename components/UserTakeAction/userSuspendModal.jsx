import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ta from "../../Asstes/style/user_take_action.module.css";

const UserSuspendModal = (props) => {
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
          <div className={ta.modal_btn}>Suspend</div>
          <div className={ta.modal_btn2}        onClick={props.onClick}>Cancel</div>
        </div>
      </Modal>
    </>
  );
};

export default UserSuspendModal;
