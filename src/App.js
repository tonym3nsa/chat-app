import { BrowserRouter, Router } from "react-router-dom";
import { RoutesSection } from "./routes/RoutesSection";

function App() {
  return (
    <BrowserRouter>
      <RoutesSection />
    </BrowserRouter>
  );
}

export default App;
