/**
 * 4:25 https://www.youtube.com/watch?v=2zRHlqc0_yw&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=13
 * Reason for doing this getStaticPaths property or rather function right here is to first tell nextjs how many html pages need to be made based on our data
 * 
 * Run command yarn build, after that open folder `.next/server/pages/ninjas` will see has 10 files html is generated
 */
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString()}
    }
  })

  return {
    /**
     * Property paths that we return and then it will know how many html pages to create based on this 
     */
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Detail = ({ ninja }) => {
  return (
    <>
      <div>
        <h1>{ ninja.name }</h1>
        <p>{ ninja.email }</p>
        <p>{ ninja.website }</p>
        <p>{ ninja.address.city }</p>
      </div>
    </>
  );
};

export default Detail;
