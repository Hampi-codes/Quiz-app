import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { fetchQuizData } from "../../api/api";
import "./style.css";
import Result from "../result";
import Question from "../question";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, difficulty } = location.state || {};
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleQuit = () => {
    setShowResult(true);
  };

  const handlePlayAgain = async () => {
    setShowResult(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    const quizData = await fetchQuizData(category, difficulty);
    setQuestions(quizData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const quizData = await fetchQuizData(category, difficulty);
      setQuestions(quizData);
    };

    fetchData();
  }, [category, difficulty]);

  if (showResult) {
    return (
      <Result
        score={score}
        handlePlayAgain={handlePlayAgain}
        handleHome={() => navigate("/")}
      />
    );
  }

  return questions?.length > 0 ? (
    <Question
      question={questions[currentQuestionIndex]}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={questions.length}
      handleAnswer={handleAnswer}
      handleNext={handleNext}
      handleQuit={handleQuit}
    />
  ) : (
    <Grid container direction="column" alignItems="center">
      <h2>Loading...</h2>
    </Grid>
  );
};

export default Quiz;
