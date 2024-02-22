import "./App.css";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { SelectedOptionsProvider } from "./Components/SelectedOptionsContext";
function App() {
  return (
    <div>
      <SelectedOptionsProvider>
        <NavBar></NavBar>
        <Main></Main>
      </SelectedOptionsProvider>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
