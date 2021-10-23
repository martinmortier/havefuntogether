import type { NextPage } from "next"
import Head from "next/head"
import Home from "../components/Home/Home"

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Home />
    </div>
  )
}

export default Index
