import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";
const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();
  const minimumWage = 2000;
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWorkerName.trim().length === 0 
    ) {
      setError({title:"Name Is Important!",message:"Please write a name"})
      return;
    }
    if (+enteredWage < minimumWage) {
      setError({title:"Wage Is Important!",message:`Please write a wage higher than ${minimumWage}.`})
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
  };
const onComfirm=()=>{
setError(null)
}
  return (
     <div>
      {error && <ErrorModal onConfirm={onComfirm} error={error}></ErrorModal>}  
        <Card className="mt-10 ">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Worker Name
        </label>
        <input
          value={enteredWorkerName}
          onChange={(e) => {
            setEnteredWorkerName(e.target.value);
          }}
          autoComplete="off"
          type="text"
          id="name"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Write worker name "
        />
        <label htmlFor="wage" className="font-medium">
          Wage Amount
        </label>
        <input
          value={enteredWage}
          onChange={(e) => {
            setEnteredWage(e.target.value);
          }}
          autoComplete="off"
          type="number"
          id="wage"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Write salary amount "
        />
        <Button type="submit" className="mt-2">
          Add
        </Button>
      </form>
    </Card>
     </div>
  );



   
   
 
};

export default AddWorker;
