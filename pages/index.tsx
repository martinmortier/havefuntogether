import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Button from "@mui/material/Button"
import { useUser } from "@auth0/nextjs-auth0"
import React from "react"
export function Profile() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Log out</a>
      {Profile()}
    </div>
  )
}

export default Home
