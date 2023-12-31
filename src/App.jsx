import Home from "./pages/Home";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

import { useSnapshot } from "valtio";

import state from "./store";

function App() {
  const snap = useSnapshot(state);

  if (state.page == "intro" || state.page == "customizer") {
    return (
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    );
  }

  return (
    <>
      <HomePage />
      <ContactPage />
    </>
  );
}
export default App;
