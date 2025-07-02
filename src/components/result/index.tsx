import { Button, Grid } from "@mui/material";
import "./syle.css";

const Result = (props: any) => {
  const { score, handlePlayAgain, handleHome } = props;
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      className="score_container"
      sx={{ minHeight: "100vh", justifyContent: "center", px: 2 }}
    >
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Your Score: {score}/10</h2>
      </Grid>
      
      <Grid item xs={12} className="score_buttons">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm="auto">
            <Button variant="contained" fullWidth onClick={handlePlayAgain}>
              Play Again
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button variant="outlined" fullWidth onClick={handleHome}>
              Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Result;
