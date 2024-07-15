import { Outlet } from "react-router-dom";
import FTMainLayout from "./components/layouts/FTMainLayout";


function App() {

  return (
    <>
      <FTMainLayout>
        <Outlet />
      </FTMainLayout>
    </>
  );
}

export default App;
