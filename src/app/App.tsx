import { Outlet } from "react-router";
import Provider from "./Provider";
import Header from "@/shared/components";

function App() {
  return (
    <Provider>
      <div className=" font-bold">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
