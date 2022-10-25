import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import Button from "./UI/Button";
import Card from "./UI/Card";

const Main = () => {
  const { setCurPage } = useContext(QuizContext);
  const clickHandler = () => setCurPage("quiz");
  return (
    <Card classes='gap-2 py-20'>
      <h1 className='font-bold text-2xl'>Part of Speech Practice</h1>
      <p className='p-5 text-lg'>
        Categorize a set of words according to their part of speech.
      </p>
      <Button
        value='Start'
        classes='mt-auto text-white hover:text-[#2FBACF] outline outline-2 bg-transparent'
        onClick={clickHandler}
      />
    </Card>
  );
};

export default Main;
