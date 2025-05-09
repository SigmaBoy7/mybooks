import { Outlet } from "react-router";
import Provider from "./Provider";

function App() {
  return (
    <Provider>
      <Outlet />
    </Provider>
  );
}

export default App;
