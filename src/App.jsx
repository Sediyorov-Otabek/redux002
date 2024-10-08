import { Route, Routes } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Auth from "./routes/auth/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
