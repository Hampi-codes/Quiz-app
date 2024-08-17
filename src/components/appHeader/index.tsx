import { Grid, Paper } from "@mui/material";
import { appIcon } from "../../assets/images";
import "./style.css";

const AppHeader = () => {
  return (
    <>
      <Paper elevation={4}>
        <Grid container>
          <Grid className="header_grid" item xs={12}>
            <img className="header_img" src={appIcon} />
            <span className="header_span">Quizzy</span>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AppHeader;
