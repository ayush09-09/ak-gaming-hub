import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RoutesApp from "./routes";

function App() {
  return (
    <Router>
      <MainLayout>
        <RoutesApp />
      </MainLayout>
    </Router>
  );
}

export default App;
