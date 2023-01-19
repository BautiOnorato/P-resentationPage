import DrawerAppBar from "./layout/Navbar";
import AboutMe from "./pages/AboutMe";
import CV from "./pages/CV";
import Github from "./pages/Github";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DrawerAppBar/>
      <Github/>
    </div>
  );
}

export default App;
