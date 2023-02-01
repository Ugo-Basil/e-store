import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Layout from "./components/Layout";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
