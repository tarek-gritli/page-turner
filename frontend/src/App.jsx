import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes";
import AtomicSpinner from "atomic-spinner";

const App = () => {
  const location = useLocation();
  return (
    <SwitchTransition component={null}>
      <CSSTransition
        classNames="fade"
        timeout={300}
        unmountOnExit
        key={location.pathname}
      >
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <AtomicSpinner />
            </div>
          }
        >
          <Routes location={location}>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default App;
