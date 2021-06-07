import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getChat } from "../../database/model.js";

export default function User(props) {
  return (
    <>
      <Header />
      <Layout>
        <img src=""></img>
        <section>
          <h2>{props.name || "Margaret"}</h2>
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
        <Link href={"/profiles/connect/" + (props.name || "crystal")}>
          <a>Connect with {props.name || "Susan"}</a>
        </Link>
      </Layout>
    </>
  );
}

export function getServerSideProps() {
  //have [user, user] then sort alphabetically, so [user1, user2]
  //then return getChat(user_one, user_two)
  return { props: { chatString: getChat("Amy", "Crag") } };
}
