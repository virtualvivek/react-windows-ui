import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

const AppFourTwoZero = React.lazy(() => import("./v4.2.0"));
const AppFourTwoOne = React.lazy(() => import("./v4.2.1"));
const AppFourTwoTwo = React.lazy(() => import("./v4.2.2"));
const AppFourTwoFour = React.lazy(() => import("./v4.2.4"));

const Splash = () => {
  return <div style={{
                      height: "100vh",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#0078D7"
                    }}>
            <h1 style={{margin: "0 auto", color: "white"}}>
              react-windows-ui
            </h1>
          </div>
}

class App extends React.Component {
  render() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v4.2.4/home" />}/>
        <Route
          path="/v4.2.0/*"
          element={<React.Suspense fallback={<Splash/>}><AppFourTwoZero/></React.Suspense>}
        />
        <Route
          path="/v4.2.1/*"
          element={<React.Suspense fallback={<Splash/>}><AppFourTwoOne/></React.Suspense>}
        />
        <Route
          path="/v4.2.2/*"
          element={<React.Suspense fallback={<Splash/>}><AppFourTwoTwo/></React.Suspense>}
        />
        <Route
          path="/v4.2.4/*"
          element={<React.Suspense fallback={<Splash/>}><AppFourTwoFour/></React.Suspense>}
        />
      </Routes>
    </HashRouter>
    )
  }
}

export default App;