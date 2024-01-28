import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  
  return (
    <div className="error-modal">
    <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0" onClick={props.onConfirm} ></div>
      <Card className="w-[36rem] z-20 p-0">
        <header className="bg-red-700 p-4  rounded-t-xl ">
          <h2  className="text-center text-xl text-white">{props.error?.title} </h2>
        </header>
        <section  className="p-4 "> {props.error?.message} </section>
        <footer className="p-4 flex justify-end "> <Button className="w-32" onClick={props.onConfirm} >Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
