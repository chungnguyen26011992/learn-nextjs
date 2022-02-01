import Head from "next/head";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          explicabo debitis quibusdam, itaque delectus a vero officia, saepe ut,
          possimus dolorem praesentium voluptatum. Aperiam vitae velit omnis
          nisi odit iste.
        </p>
      </div>
    </>
  );
};

export default About;
