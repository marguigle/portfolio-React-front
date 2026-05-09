import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FetchContextProviderWrapper } from "./contexts/fetchContextPersona.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FetchContextProviderWrapper>
      <App />
    </FetchContextProviderWrapper>
  </AuthProvider>
);