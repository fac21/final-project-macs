import Link from "next/link";
import Header from "../components/HomeHeader";
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <>
      <Header updateFormData={props.updateFormData} />
      <Layout>
        <div>{/* <img src=biglogo></img> */}IMAGE</div>
        <section>
          <Link href="/profiles">
            <a>
              <h2>Profiles</h2>
              See who else is here and connect with them!
            </a>
          </Link>
        </section>
        {/* <section>
          Events
        </section> */}
        <div>Contact Us</div>
      </Layout>
    </>
  );
}
