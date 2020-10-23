import React from "react"
const users=(props)=>{
  return(
      <div>
          <h1> {props.name} </h1> <br /> 
        Age:   {props.age}
        <style jsx>
            {
                `
                div {
                    border: 1px solid #eee;
                    box-shadow: 0 2p 3px #ccc;
                    padding:20x;
                    text-align:center;
                }
                `

            }
        </style>
      </div>
  )
}
export default users