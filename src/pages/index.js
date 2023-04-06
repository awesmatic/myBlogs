import Head from 'next/head';
import BlogList from '../components/BlogList';


export default function Home({ blog }) {



  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <main >
        <BlogList data={blog.blogs} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/blog`);
  const blog = await res.json();

  return { props: { blog } };
}
