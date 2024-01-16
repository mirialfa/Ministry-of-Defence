import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Success = ({ success}) => {
  
  return (
    <Snackbar open={success} autoHideDuration={5000}>
      <MuiAlert severity="success">
       successfully!
      </MuiAlert>
    </Snackbar>
  );
};

export default Success;