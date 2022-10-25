import { useState } from "react";
import { QuizContext } from "./helpers/Contexts";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Rank from "./components/Rank";

function App() {
  const [curPage, setCurPage] = useState("main");
  const [score, setScore] = useState({ newScore: 0 });
  const [rankState, setRankState] = useState({});

  return (
    <main className='flex flex-col  items-center justify-around h-screen bg-[#1C2244]'>
      <img
        className='max-w-full w-44 md:w-56 bg-white p-5 rounded-lg'
        src='https://contents.nagwa.com/content/images/logo.svg'
        alt='logo'
      />
      <QuizContext.Provider
        value={{ setCurPage, setScore, score, setRankState, rankState }}
      >
        {curPage === "main" && <Main />}
        {curPage === "quiz" && <Quiz />}
        {curPage === "rank" && <Rank />}
      </QuizContext.Provider>
    </main>
  );
}

export default App;
