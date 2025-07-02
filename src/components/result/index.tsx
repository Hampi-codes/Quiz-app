import { Button, Grid } from "@mui/material";
import Confetti from "react-confetti";
import "./syle.css";

const Result = (props: any) => {
  const { score, handlePlayAgain, handleHome, quited } = props;
  return (
    <Grid container direction="column" className="score_container">
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Your Score: {score}/10</h2>
      </Grid>

      <Grid item xs={12} className="score_buttons">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={10} sm="auto">
            <Button variant="contained" fullWidth onClick={handlePlayAgain}>
              Play Again
            </Button>
          </Grid>
          <Grid item xs={10} sm="auto">
            <Button variant="outlined" fullWidth onClick={handleHome}>
              Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {score > 5 ? (
        <Confetti recycle={false} numberOfPieces={500} />
      ) : !quited ? (
        <p className="oops">😅 Oops! Better luck next time!</p>
      ) : (
        <p className="oops">🤡 Quiter</p>
      )}
    </Grid>
  );
};

export default Result;
