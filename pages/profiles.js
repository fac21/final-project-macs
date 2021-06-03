import Header from "../components/Header";
import Layout from "../components/Layout"
import { getProfiles } from "/database/model.js";
import Link from "next/link";

export default function Profiles(props) {
  return (
    <>
      <Header />
      <Layout>
        <p>{profilesInfo(props)}</p>
      </Layout>
    </>
  );
}

function profilesInfo(props) {
  console.log(props)
  let profiles = props.profiles;
  profiles = JSON.parse(profiles);
  //an array of objects
  return profiles.map((user) => {
    return (
      <Link href={"/profiles/" + user.name} name={user.name}>
        <a>
          <h2>{user.name}</h2>
          <p>{user.gender}</p>
        </a>
      </Link>
    );
  });
}

export async function getServerSideProps() {
  let profiles = await getProfiles();
  profiles = JSON.stringify(profiles);
  return { props: { profiles } };
}
