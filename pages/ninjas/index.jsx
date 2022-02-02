import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

/**
 * This function run at build time as our app is built and our components rendered at this point we can add a fetch request inside it to fetch any data we need for our component template
 * This function never run in the browser only at build time so don't write any code here that you expect to run in the browser
 */
export const getServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

/**
 * getStaticProps function will run before the component is rendered
 * 4:38 https://www.youtube.com/watch?v=zueyEdRZQlk&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=10
 */
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      {/* This template will be render on server and generates static HTML, so cannot see call api on network tab at browser */}
      {ninjas.map((ninja) => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
