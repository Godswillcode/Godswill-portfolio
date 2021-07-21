import { useState } from "react"
import "./test.css"

const info = [
    {
        kind: "Apple",
        phone: "Iphone x"
    },
    {
        kind: "Apple",
        phone: "Iphone 12 pro"
    },

    {
        kind: "Samsung",
        phone: "Samsung A12"
    },
    {
        kind: "Samsung",
        phone: "Samsung s9"
    },
    {
        kind: "lg",
        phone: "lg s10"
    },
    {
        kind: "lg",
        phone: "lg spark"
    },
]


const Test = () => {

   const [phone, setPhone] = useState(info)

    

    return (
        <div className="container-fluid">
           <div className="btns">
               <button value="All">All</button>
               <button value="Iphone">Iphone</button>
               <button value="Samsung">Samsung</button>
               <button value="lg">LG</button>
           </div>

             <div className="box">
                {
                    phone.map((item)  => {
                        return(
                            <div className="single-box">
                            <h4>Kind: <b>Apple</b></h4>
                            <h4>phone: <b>Iphone x</b></h4>
                        </div>
                        )
                    })
                }
             </div>
        </div>
    )
}

export default Test
