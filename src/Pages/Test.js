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

   const [phones, setPhones] = useState(info)

    const handleBtns = (e) => {
        let data = e.target.value;

        if (data === "All") {
             setPhones(info)
        }

        else if (data === "Apple") {
            const filtered = info.filter(item => item.kind === "Apple")
        }
    }

    return (
        <div className="container">
           <div className="btns">
               <button value="All">All</button>
               <button value="Iphone">Iphone</button>
               <button value="Samsung">Samsung</button>
               <button value="lg">LG</button>
           </div>

             <div className="box">
                {
                    phones.map((item)  => {
                        return(
                            <div className="single-box" key={item.phone}>
                            <h4>Kind: <b>{item.kind}</b></h4>
                            <h4>phone: <b>{item.phone}</b></h4>
                        </div>
                        )
                    })
                }
             </div>
        </div>
    )
}

export default Test
