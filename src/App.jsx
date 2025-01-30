import { Outlet } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <BottomBar />
      <Footer />
    </div>
  );
}

export default App;
