import { Route, Routes } from "react-router-dom";
import Overview from "./components/tabs/overview/Overview";
import Main from "./main";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/overview" element={<Overview />} />
      </Route>
    </Routes>
  );
}

export default App;
