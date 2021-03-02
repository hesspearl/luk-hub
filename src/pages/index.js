import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import Profile from "../components/Profile";
import RepositoryList from "../components/RepositoryList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage | LukHub - search repositories</title>
      </Head>
      <section>
        <div className={styles.sectionContainer}>
          <Profile />
          <RepositoryList />
        </div>
      </section>
    </div>
  );
}
