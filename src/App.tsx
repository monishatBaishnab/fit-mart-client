import { Outlet } from "react-router-dom";
import FTMainLayout from "./components/layouts/FTMainLayout";

function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     event.preventDefault();
  //     event.returnValue = ""; // For older browsers
  //     console.log(event);
  //     return null;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <>
      <FTMainLayout>
        <Outlet />
      </FTMainLayout>
    </>
  );
}

export default App;
