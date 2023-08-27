import RootRouter from "./routers/RootRouter";
import "animate.css";
import { Provider } from "react-redux";
import Store from "./store/store";

export default function App() {
  return (
    <Provider store={Store}>
      <RootRouter />
    </Provider>
  );
}
