import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Login Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Login Modal"
        style={{
          content: {
            maxWidth: "400px",
            margin: "auto",
            padding: "2rem",
            borderRadius: "8px"
          }
        }}
      >
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" style={{ width: "100%", marginBottom: "1rem" }} />
          <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: "1rem" }} />
          <button type="submit" style={{ width: "100%" }}>Login</button>
        </form>
        <button onClick={() => setModalIsOpen(false)} style={{ marginTop: "1rem" }}>Close</button>
      </Modal>
    </div>
  );
};

export default Login;