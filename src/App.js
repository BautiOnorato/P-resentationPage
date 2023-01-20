import DrawerAppBar from "./layout/Navbar";
import AboutMe from "./pages/AboutMe";
import CV from "./pages/CV";
import Experiences from "./pages/Experiences";
import Github from "./pages/Github";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <DrawerAppBar/>
      <Experiences/>
    </div>
  );
}

export default App;
