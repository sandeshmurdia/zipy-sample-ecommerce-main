import { throwerror500 } from "../API/api";

const randomerrorgen = () => {
  throwerror500();
};
function Randomgen() {
  return (
    <div className="card-total1">
      <h1>Generate Random UUID error</h1>

      <button onClick={randomerrorgen}> Random UUID Generator</button>
    </div>
  );
}

export default Randomgen;
