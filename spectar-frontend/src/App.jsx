import React, { useState } from "react";
import AppRouter from "./Router/AppRouter";

import tours from "./data/testToursData.json";

export const TourContext = React.createContext();

function App() {
  return (
    <>
      <TourContext.Provider value={tours}>
        <AppRouter />
      </TourContext.Provider>
    </>
  );
}

export default App;
