import "./test.css"
const Test = () => {
    return (
        <div>
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
