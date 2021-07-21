import "./test.css"

const info = [
    {
        kind: "Apple",
        phone: "Iphone x"
    },
    {
        kind: "Apple",
        phone: "Iphone x"
    },

]


const Test = () => {
    return (
        <div className="container-fluid">
           <div className="btns">
               <button value="All">All</button>
               <button value="Iphone">Iphone</button>
               <button value="Samsung">Samsung</button>
           </div>

             <div className="box">
             <div className="single-box">
               <h4>Kind: <b>Apple</b></h4>
               <h4>phone: <b>Iphone x</b></h4>
           </div>
             </div>
        </div>
    )
}

export default Test
