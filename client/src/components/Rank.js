import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import Card from "./UI/Card";
import DoughnutChart from "./UI/DoughnutChart";
import { Chart as ChartJS } from "chart.js/auto";
import Button from "./UI/Button";

const Rank = () => {
  const { rankState, setCurPage, setScore, setRankState } =
    useContext(QuizContext);
  const resetQuiz = () => {
    setScore((prevScore) => {
      return { newScore: 0 };
    });
    setRankState({});
    setCurPage("main");
  };
  return (
    <Card classes='md:flex-row justify-around'>
      <div className='w-[300px]'>
        <h1>Peers Score Chart</h1>
        <DoughnutChart />
      </div>
      <div className='flex flex-col gap-5 items-center'>
        <h1 className='font-semibold text-lg'>Your Rank</h1>
        <p className='font-semibold text-lg'>{rankState.studentRank}%</p>
        <p>You are Above {rankState.studentRank}% of all Students</p>
        <Button
          value='Try Again'
          classes='mt-5 hover:bg-[#2FBACF] '
          onClick={resetQuiz}
        />
      </div>
    </Card>
  );
};

export default Rank;
