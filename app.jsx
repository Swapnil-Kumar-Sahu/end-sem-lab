import { useState } from "react";
function App() {
const [count, setCount] = useState(0);
const [a, setA] = useState("");
const [b, setB] = useState("");
const [result, setResult] = useState(0);
const calculate = (op) => {
const x = Number(a);
const y = Number(b);
if (op === "+") setResult(x + y);
if (op === "-") setResult(x - y);
if (op === "×") setResult(x * y);
if (op === "/") setResult(y !== 0 ? x / y : "Cannot divide by zero");
};
return (
<div style={{ textAlign: "center", padding: "20px" }}>
<h2>Counter</h2>
<h3>{count}</h3>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
<button onClick={() => setCount(0)}>Reset</button>
<h2>Calculator</h2>
<input
type="number"
placeholder="First number"
onChange={e => setA(e.target.value)}
/>
<input
type="number"
placeholder="Second number"
onChange={e => setB(e.target.value)}
/>
<br /><br />
<button onClick={() => calculate("+")}>+</button>
<button onClick={() => calculate("-")}>-</button>
<button onClick={() => calculate("")}>×</button>
<button onClick={() => calculate("/")}>÷</button>
<h3>Result: {result}</h3>
</div>
);
}
export default App;