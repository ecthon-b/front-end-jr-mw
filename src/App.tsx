import { GlobalStyle } from "./styles/global";
import MainRoutes from "./routes";

export function App() {
  return (
    <div className="App">
      <MainRoutes />
      <GlobalStyle />
    </div>
  );
}
