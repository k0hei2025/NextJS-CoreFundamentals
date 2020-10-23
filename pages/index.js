import React from "react"
import Link from "next/link"
import Usr from "../Components/users"
import Router from "next/router"


const index=()=>(
  <div>
  <h1>index heading</h1>
  <p>Go to <Link href="/auth"><a>Auth</a></Link> </p>
  <Usr name="max" age="18" />
  <button onClick={()=>Router.push("/auth")}>Go to Auth</button>   
  </div>
)
export default index;