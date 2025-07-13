import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="app bg-gray-20">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;