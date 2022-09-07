import { Button, Modal } from "antd";
import React, { useState } from "react";
import LoginForm from "./landingpagecomponents/LoginForm";
import { useContext } from "react";
import { data } from "../App";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loggedIn, setLoggedin,userInfo } = useContext(data);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      {!userInfo && <Button onClick={showModal}>Login!</Button>}

      {!userInfo && (
        <Modal
          title="Title"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <>
            <LoginForm />
          </>
        </Modal>
      )}
    
      
        <></>
      
    </>
  );
};

export default LoginButton;
