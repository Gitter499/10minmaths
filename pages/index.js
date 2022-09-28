import Head from "next/head";
import styles from "../styles/Home.module.css";

/*

Landing/Main page
*/

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>10 Min Maths</title>
        {/* TODO ! Add all the required headers here */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Do your magic here Matt */}

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
