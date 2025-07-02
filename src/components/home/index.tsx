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
    <Grid
      container
      className="home_container"
      sx={{ px: 2, py: 4, justifyContent: "center" }}
    >
      <Grid item xs={12} className="home_heading_grid">
        <h1 style={{ textAlign: "center" }}>Welcome to Quizzy!</h1>
      </Grid>
      <Grid
        item
        xs={12}
        className="home_para_grid"
        sx={{ maxWidth: 600, mx: "auto" }}
      >
        <p style={{ textAlign: "center" }}>
          Quizzy is a fun and engaging way to learn about popular topics. Select
          a category, and we'll give you ten questions to test your knowledge.
          Enjoy!
        </p>
      </Grid>

      <Grid
        item
        xs={12}
        className="home_form_grid"
        sx={{ width: "100%", mt: 4 }}
      >
        <form className="home_form" onSubmit={handleStart}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="form_grid_container"
          >
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="home_select"
                  inputProps={{ className: "category" }}
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

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <Select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="home_select"
                >
                  {difficultyOptions.map((difficulty) => (
                    <MenuItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              className="home_button_grid"
              sx={{ textAlign: "center" }}
            >
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
  );
};

export default Home;
