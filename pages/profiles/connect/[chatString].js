import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { signIn, signOut, useSession } from "next-auth/client";

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

export default function Connect(props) {
  const [session, loading] = useSession();
  const router = useRouter()

  const room = props.chatString;

  const [user, setUser] = useState({
    usersList: null,
  });
  const [msg, setMsg] = useState("");
  const [recMsg, setRecMsg] = useState({
    listMsg: [],
  });
  useEffect(() => {
    // list of connected users
    socket.on("users", (data) => {
      setUser({ usersList: JSON.parse(data) });
    });

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
    socket.emit("sendMsg", { id: socket.id, msg });
  };

  useEffect(() => {
    socket.emit("joinRoom", { room, userName: session.user.name });
    return () => {
      socket.emit("leaveRoom");
    };
  }, []);


  useEffect(() => {
   if (!session) {
     router.push('/accessDenied')
   }
  }, [])
 
  if (!session) {
    return null
  }

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
  return { props: { chatString } };
}
