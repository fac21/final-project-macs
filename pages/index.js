import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Language Exchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Language Exchange App title</h1>
        <div className={styles.user}>
          <img src="" alt="" className={styles.avatar} />
        </div>
      </main>
    </div>
  );
}
