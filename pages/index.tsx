import type { NextPage } from "next"
import Head from "next/head"
import { useUser } from "@auth0/nextjs-auth0"
import React, { useEffect } from "react"
import Home from "../components/Home/Home"
import { getCookieByName } from "../helpers/cookie"
export function Profile() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    user && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}
const Index: NextPage = () => {
  useEffect(() => {
    getCookieByName("value")
    console.log("ici")
  }, [])
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
