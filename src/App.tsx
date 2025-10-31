import EnergyFormula from "./components/EnergyFormula";
import PythagoreanTheorem from "./components/PythagoreanTheorem";
import CylinderVolume from "./components/CylinderVolume";
import QuadraticEquation from "./components/QuadraticEquation";
import SumSquare from "./components/SumSquare";
import WaterFormula from "./components/WaterFormula";
import Logarithm from "./components/Logarithm";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  return (
    <ol>
      <h3 className="appTitle" >Формулы для верстки:</h3>
      <EnergyFormula />
      <PythagoreanTheorem />
      <PythagoreanTheorem />
      <CylinderVolume />
      <QuadraticEquation />
      <SumSquare />
      <WaterFormula />
      <Logarithm />
      <CurrencyInput />
    </ol>
  );
}

export default App;
