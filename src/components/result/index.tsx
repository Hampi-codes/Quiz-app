import { Button, Grid } from "@mui/material";
import "./syle.css";

const Result = (props: any) => {
  const { score, handlePlayAgain, handleHome } = props;
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12}>
        <h2>Your Score: {score}/10</h2>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handlePlayAgain}>
          Play Again
        </Button>
        <Button variant="contained" onClick={handleHome}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default Result;
