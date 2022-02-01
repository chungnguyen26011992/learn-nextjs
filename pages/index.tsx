import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
          blanditiis. Magni, odit quis numquam facere tempore, molestias velit
          sunt earum sit ad consectetur? Necessitatibus quo suscipit magni
          repellat, porro nam!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
          blanditiis. Magni, odit quis numquam facere tempore, molestias velit
          sunt earum sit ad consectetur? Necessitatibus quo suscipit magni
          repellat, porro nam!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
