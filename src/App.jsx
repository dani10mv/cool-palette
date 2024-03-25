import "./App.css";
import { ColorSelector } from "@/components/ColorSelector";
import { Palette } from "@/components/Palette";

function App() {

  return (
    <main>
      <h1>THE COOL PALETTE.</h1>
      <ColorSelector/>
      <Palette />
    </main>
  );
}

export default App;
