import React from "react";
import styles from "./app.module.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default App;
