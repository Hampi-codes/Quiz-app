import { Grid, Button, FormControl, Select, MenuItem } from "@mui/material";
import "./style.css";
import { useState } from "react";
import { categoryOptions, difficultyOptions } from "../../constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");

  const navigate = useNavigate();

  const handleStart = async (e: any) => {
    e.preventDefault();
    navigate("/quiz", { state: { category, difficulty } });
  };

  return (
    <>
      <Grid className="home_container" container>
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
                  <Select
                    className="home_select"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    MenuProps={{
                      slotProps: { paper: { className: "category_menu" } },
                    }}
                    inputProps={{
                      className: "category",
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
                  <Select
                    className="home_select"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={difficulty}
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
