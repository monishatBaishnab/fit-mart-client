import { Outlet } from "react-router-dom";
import FTMainLayout from "./components/layouts/FTMainLayout";
import { useGetAccessoriesQuery } from "./redux/api";

function App() {
  const {data} = useGetAccessoriesQuery(undefined);
  console.log(data);
  return (
    <>
      <FTMainLayout>
        <Outlet />
      </FTMainLayout>
    </>
  );
}

export default App;
