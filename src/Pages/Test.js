import { useState } from "react";
import "./test.css";

const info = [
  {
    kind: "Apple",
    phone: "Iphone x",
  },
  {
    kind: "Apple",
    phone: "Iphone 12 pro",
  },

  {
    kind: "Samsung",
    phone: "Samsung A12",
  },
  {
    kind: "Samsung",
    phone: "Samsung s9",
  },
  {
    kind: "lg",
    phone: "lg s10",
  },
  {
    kind: "lg",
    phone: "lg spark",
  },

  {
    kind: "lg",
    phone: "lg spark pro",
  },
];

const Test = () => {
  const [phones, setPhones] = useState(info);

  const handleBtns = (e) => {
    let data = e.target.value;

    if (data === "All") {
      setPhones(info);
    } else if (data === "Apple") {
      const filtered = info.filter((item) => item.kind === "Apple");

      setPhones(filtered);
    } else if (data === "Samsung") {
      const filtered = info.filter((item) => item.kind === "Samsung");

      setPhones(filtered);
    } else if (data === "lg") {
      const filtered = info.filter((item) => item.kind === "lg");

      setPhones(filtered);
    }
  };

  return (
    <div className="container">
      <div className="btns">
        <button value="All" onClick={handleBtns}>
          All
        </button>
        <button value="Apple" onClick={handleBtns}>
          Iphone
        </button>
        <button value="Samsung" onClick={handleBtns}>
          Samsung
        </button>
        <button value="lg" onClick={handleBtns}>
          LG
        </button>
      </div>

      <div className="box">
        {phones.map((item) => {
          return (
            <div className="single-box" key={item.phone}>
              <h4>
                Kind: <b>{item.kind}</b>
              </h4>
              <h4>
                phone: <b>{item.phone}</b>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
