import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <nav>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </nav>
      <div>{/* <img src=biglogo></img> */}</div>
      <div>
        <section>
          <Link href="/profiles">
            <a>Profiles</a>
          </Link>
        </section>
        {/* <section>
          Events
        </section> */}
      </div>
    </Layout>
  );
}
