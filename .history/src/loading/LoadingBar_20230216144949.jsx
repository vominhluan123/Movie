import { LinearProgress, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
const LoadingBar = () => {
  const [level, setLever] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLever((newLever) => (newLever >= 100 ? 0 : newLever + 10));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <LinearProgress
        value={level}
        color="primary"
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></LinearProgress>
    </>
  );
};

export default LoadingBar;