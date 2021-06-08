import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getChat } from "../../database/model.js";
import { useRouter } from "next/router";

export default function User(props) {
  console.log(props.chatString.hash_string);
  const router = useRouter();
  return (
    <>
      <Header />
      <Layout>
        <img src=""></img>
        <section>
          <h2>{router.query.user}</h2>
          <div>{props.flags || "Australia"}</div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </section>
        <section>
          <h2>Interests</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </section>
        <Link href={"/profiles/connect/" + props.chatString.hash_string}>
          <a>Connect with {router.query.user}</a>
        </Link>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  let users = [context.query.user];
  users.push(`Crag`); //get this second user from authetication
  users.sort();
  let chatString = await getChat(users);
  console.log("serversideprops", chatString);
  //console.log("chatString from props user.js", chatString.hash_string);
  return { props: { chatString } };
}
