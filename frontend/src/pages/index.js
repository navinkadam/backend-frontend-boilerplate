import React from "react";
import { Route, Routes } from "react-router-dom";

import { commonRoutes } from "../constant/route";
import Sample from "./Sample";

export default function Pages() {
  return (
    <main>
      <Routes>
        {commonRoutes.map(({ Component, to }, index) => (
          <Route
            exact
            path={to}
            key={`route-common-${index}`}
            element={<Component />}
          />
        ))}
        <Route exact path="/*" key="Sample" element={<Sample />} />
      </Routes>
    </main>
  );
}
