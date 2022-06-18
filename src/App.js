import DataProvider from "./context/DataContext";
import TitleScore from "./components/TitleScore";
import GeneratePage from "./components/GeneratePage";
import Rules from "./components/Rules";


function App() {
  return (
    <div className="App">
      <DataProvider>
        <TitleScore/>
        <GeneratePage/>
        <Rules/>
      </DataProvider>
    </div>
  );
}

export default App;
