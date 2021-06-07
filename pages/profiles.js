import Header from "../components/Header";
import Layout from "../components/Layout";
import { getProfiles } from "/database/model.js";
import Miniprofile from "../components/MiniProfile";
import Link from "next/link";

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
  console.log(props);
  let profiles = props.profiles;
  profiles = JSON.parse(profiles);
  //an array of objects
  return profiles.map((user) => {
    return <Miniprofile></Miniprofile>;
  });
}

export async function getServerSideProps() {
  let profiles = await getProfiles();
  profiles = JSON.stringify(profiles);
  return { props: { profiles } };
}
