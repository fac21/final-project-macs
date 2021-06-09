import Header from "../components/Header";
import Layout from "../components/Layout";
import { getProfiles } from "/database/model.js";
import Miniprofile from "../components/MiniProfile";
import Link from "next/link";
import User from "./profiles/[user]";
import { getSession } from "next-auth/client";

export default function Profiles(props) {
  return (
    <>
      <Header />
      <Layout>
        <section>{profilesInfo(props)}</section>
      </Layout>
    </>
  );
}

function profilesInfo(props) {
  //console.log(props);
  let profiles = props.profiles;
  profiles = JSON.parse(profiles);
  //an array of objects
  return profiles.map((user) => {
    return (
      <Miniprofile name={user.name} src={user.image} gender={user.gender} />
    );
  });
}

export async function getServerSideProps(context) {
  let sessionInfo = await getSession(context);
  let email = sessionInfo.user.email;
  let profiles = await getProfiles(email);
  profiles = JSON.stringify(profiles);
  return { props: { profiles } };
}
