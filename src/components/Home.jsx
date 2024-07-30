import React, { useState } from "react";
import "../styles/Home.scss";

const Home = (props) => {
  // front end logic
  // hooks // useState
  // const [color, setColor] = useState("yellow");
  const [count, setCount] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [arr, setArr] = useState(["Apple" , "Orange" , "Kiwi"]);
  // const [object, setObject] = useState({
  //   name: "irfan",
  //   address: "hawal",
  // });

  // function handleClick() {
  //   setColor("red");
  //   setLoading(!loading);
  // }
  function increment() {
    setCount((x) => x + 1);
  }
  function decrement() {
    setCount((x) => x - 1);
  }
  function reset() {
    setCount((x) => x = 0);
  }
  // console.log(loading);

  return (
    <div className="home">
      {/* <h1>this is under development </h1> */}
      {/* <h2> project is under {props.x} </h2> */}
      {/* <p> {props.x} </p> */}
      {/* <p> my favorite color is {color}</p> */}
      <div className="count">
          <h1>{count} </h1>
      {/* <h1> {object.name} </h1> */}
      {/* <h1> {object.address} </h1> */}
      {/* <h2> {arr.map((element) => (<p> {element} </p>) )} </h2> */}
      {/* <button onClick={handleClick}> click me </button> */}
      <button onClick={decrement}> Decrement </button>
      <button onClick={reset}> Reset </button>
      <button onClick={increment}> Increment </button>
      </div>
    
    </div>
  );
};

export default Home;
