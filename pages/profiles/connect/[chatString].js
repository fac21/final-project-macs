import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
//const socketIo = require("socket.io");

// import userGen from "username-generator"
// import { Button, Input } from 'reactstrap';

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export default function Connect(props) {
  const room = props.chatString;
  // socket.on("connection", function () {
  //   console.log("connected");
  //   socket.emit("room", room);
  // });

  const [user, setUser] = useState({
    usersList: null,
  });
  const [msg, setMsg] = useState("");
  const [recMsg, setRecMsg] = useState({
    listMsg: [],
  });
  // const [loggedUser, setLoggedUser] = useState("logged in user");
  useEffect(() => {
    // subscribe a new user
    // socket.emit("login", "username");
    // list of connected users
    socket.on("users", (data) => {
      setUser({ usersList: JSON.parse(data) });
    });
    // get the logged user
    // socket.on("connecteduser", (data) => {
    //   setLoggedUser(JSON.parse(data));
    // });

    socket.emit("joinRoom", room);

    // we get the messages
    socket.on("message", (data) => {
      let listMessages = recMsg.listMsg;
      //add new message into array
      listMessages.push(JSON.parse(data));
      //update received message to be the list of messages
      setRecMsg({ listMsg: listMessages });
    });
  }, []);

  // to send a message
  const sendMessage = () => {
    socket.emit("sendMsg", { id: "Cragalag", msg });
  };

  useEffect(() => {
    return () => {
      socket.emit("leaveRoom");
    };
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <div>
          {/* <h3> Connected users : {user.usersList?.length} </h3> */}
          {/* <h3> User : {loggedUser?.userName} </h3> */}
          <div>
            <h2> Chat </h2>
            {recMsg.listMsg?.map((msgInfo, index) => {
              return (
                <div key={index}>
                  {" "}
                  <b>{msgInfo.userName} </b> : {msgInfo.msg}{" "}
                  <small> {msgInfo.time} </small>{" "}
                </div>
              );
            })}
          </div>
          <div>
            <input
              id="inputmsg"
              onChange={(event) => setMsg(event.target.value)}
            />
            <button
              id="btnmsg"
              onClick={() => {
                sendMessage();
              }}
            >
              {" "}
              Send{" "}
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getServerSideProps(context) {
  const chatString = context.query.chatString;
  //console.log(chatString);
  // socketIo.on("connection", (socket) => {
  //   socket.join(chatString);
  // });
  return { props: { chatString } };
}
