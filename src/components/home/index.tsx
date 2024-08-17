import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./style.css";
import { useState } from "react";
import { categoryOptions, difficultyOptions } from "../../constants";
import { fetchQuizData } from "../../api/api";

const Home = () => {
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");

  const handleStart = async (e: any) => {
    e.preventDefault();
    try {
      const quizData = await fetchQuizData(category, difficulty);
      console.log(quizData);
    } catch (error) {
      console.error("Failed to fetch quiz data:", error);
    }
  };
  return (
    <>
      <Grid container>
        <Grid className="home_heading_grid" item xs={12}>
          <h1>Welcome to Quizzy!</h1>
        </Grid>
        <Grid className="home_para_grid" item xs={12}>
          <p>
            Quizzy is a fun and engaging way to learn about popular topics.
            Select a category, and we'll give you ten questions to test your
            knowledge. Enjoy!
          </p>
        </Grid>
        <Grid className="home_form_grid" item xs={12}>
          <form className="home_form" onSubmit={handleStart}>
            <Grid container gap={2} className="from_grid_container">
              <Grid item xs={10} sm={5.8} md={4} lg={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                    MenuProps={{
                      slotProps: { paper: { className: "category_menu" } },
                    }}
                  >
                    {categoryOptions.map((category) => (
                      <MenuItem key={category.value} value={category.value}>
                        {category.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={10} sm={5.8} md={4} lg={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Difficulty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={difficulty}
                    label="Difficulty"
                    onChange={(e) => setDifficulty(e.target.value)}
                  >
                    {difficultyOptions.map((difficulty) => (
                      <MenuItem key={difficulty.value} value={difficulty.value}>
                        {difficulty.text}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item className="home_button_grid" xs={12}>
                <Button
                  className="start_Button"
                  variant="contained"
                  type="submit"
                >
                  Start Quiz
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
