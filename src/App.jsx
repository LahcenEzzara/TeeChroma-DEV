import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

import Layouts from "./pages/Layouts";

import { useSnapshot } from "valtio";

import state from "./store";

function App() {
  const snap = useSnapshot(state);

  if (snap.page === "intro" || snap.page === "customize") {
    return (
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    );
  }

  return <Layouts />;
}
export default App;
