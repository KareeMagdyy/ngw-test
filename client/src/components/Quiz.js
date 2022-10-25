import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GrFormNextLink } from "react-icons/gr";
import { QuizContext } from "../helpers/Contexts";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ProgressBar from "./UI/ProgressBar";

const Quiz = () => {
  const [words, setWords] = useState([]);
  //Current word Index
  const [currQuestion, setCurrQuestion] = useState(0);
  //Answered Question Count for progress bar
  const [answered, setAnswered] = useState(0);
  //Current Answer Chosen
  const [optionChosen, setOptionChosen] = useState("");
  //Score Context to bass Score
  const { score, setScore, setCurPage, setRankState } = useContext(QuizContext);
  //get Next Question
  const nextQuestion = () => {
    let ansButton = document.querySelectorAll("button");
    setOptionChosen("");
    setCurrQuestion((prevNum) => prevNum + 1);

    ansButton.forEach((btn) => {
      if (btn.classList.contains("bg-green-500")) {
        btn.classList.remove("bg-green-500");
      } else {
        btn.classList.remove("bg-red-500");
      }
    });
  };
  //get words from API
  const getWords = async () => {
    try {
      const res = await axios("http://localhost:5000/api/words");
      setWords(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  //set chosen answer onClicking on Choice
  const answerClickHandler = (e) => {
    setOptionChosen(e.target.id);
    setAnswered((prevNum) => prevNum + 1);
    if (e.target.id === words[currQuestion]?.pos) {
      setScore((prevScore) => {
        return { newScore: prevScore.newScore + 10 };
      });
      e.target.classList.add("bg-green-500");
    } else {
      e.target.classList.add("bg-red-500");
    }
  };

  useEffect(() => {
    getWords();
  }, []);

  const postScore = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/rank", score);
      setRankState(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  if (words.length === 0) return;

  return (
    <Card classes='gap-16 relative overflow-hidden'>
      {answered !== 0 && (
        <ProgressBar value={`${(answered / words.length) * 100}`} />
      )}
      <h1 className='font-bold text-2xl lg:text-4xl select-none	capitalize '>
        {words[currQuestion]?.word}
      </h1>
      <div className='flex flex-col gap-6 md:flex-row'>
        <Button
          value='Noun'
          classes='hover:scale-[1.1] disabled:scale-[1]'
          onClick={answerClickHandler}
          id='noun'
          disabled={optionChosen}
        />
        <Button
          value='Adverb'
          classes='hover:scale-[1.1] disabled:scale-[1]'
          onClick={answerClickHandler}
          id='adverb'
          disabled={optionChosen}
        />
        <Button
          value='Adjective'
          classes='hover:scale-[1.1] disabled:scale-[1]'
          onClick={answerClickHandler}
          id='adjective'
          disabled={optionChosen}
        />
        <Button
          value='Verb'
          classes='hover:scale-[1.1] disabled:scale-[1]'
          onClick={answerClickHandler}
          id='verb'
          disabled={optionChosen}
        />
      </div>
      {currQuestion === words.length - 1 ? (
        <Button
          value='Finish'
          classes='ml-auto absolute bottom-5 lg:bottom-6 lg:right-6 py-3 px-4 hover:scale-[1.05]'
          onClick={() => {
            setCurPage("rank");
            postScore();
          }}
        />
      ) : (
        <Button
          value={<GrFormNextLink />}
          classes={`ml-auto absolute bottom-5 lg:bottom-6 lg:right-6 py-3 px-4 hover:scale-[1.05] ${
            !optionChosen ? "hidden" : ""
          }`}
          onClick={nextQuestion}
        />
      )}
    </Card>
  );
};

export default Quiz;
