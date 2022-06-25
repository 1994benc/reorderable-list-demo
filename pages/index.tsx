import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
// import ReorderableList from "../components/ReorderableList";
const ReorderableList = dynamic(() => import("../components/ReorderableList"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Demo: Saving List Positions to Database After a Reorder</title>
        <meta
          name="description"
          content="Just a demo app - to see if it works"
        />
      </Head>
      <>
        <ReorderableList />
      </>
    </div>
  );
};

export default Home;
