import React, { useState } from "react";
import {
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import "./style.css";

const Question = (props: any) => {
  const {
    question,
    currentQuestionIndex,
    totalQuestions,
    handleAnswer,
    handleNext,
    handleQuit,
  } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const handleSaveAndNext = () => {
    handleAnswer(selectedAnswer);
    handleNext();
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      className="question_container"
      sx={{ maxWidth: 600, mx: "auto", px: 2 }}
    >
      <Grid item xs={12}>
        <h2>
          Question {currentQuestionIndex + 1}/{totalQuestions}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: question.question }} />
      </Grid>

      <Grid item xs={12}>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup value={selectedAnswer} onChange={handleChange}>
            {question.incorrect_answers
              .concat(question.correct_answer)
              .sort()
              .map((option: any, index: number) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={<span dangerouslySetInnerHTML={{ __html: option }} />}
                />
              ))}
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm="auto">
            <Button
              fullWidth
              variant="contained"
              onClick={handleSaveAndNext}
              disabled={!selectedAnswer}
            >
              Save and Next
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={handleQuit}
            >
              Quit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Question;
