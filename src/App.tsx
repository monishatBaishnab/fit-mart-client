import FTButton from "./components/ui/FTButton";
import FTSelect from "./components/ui/FTSelect";
import FTSelectItem from "./components/ui/FTSelectItem";
import { useGetAccessoriesQuery } from "./redux/api";

function App() {
  const {data} = useGetAccessoriesQuery(undefined);
  console.log(data);
  return (
    <>
      <p className="read-the-docs m-10">
        <FTButton>
          Button
        </FTButton>

        <FTSelect>
          <FTSelectItem key='u'>
            selectite,
          </FTSelectItem>
        </FTSelect>
      </p>
    </>
  );
}

export default App;
