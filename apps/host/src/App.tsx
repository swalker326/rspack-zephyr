import { Suspense, useState } from "react";
import "./App.css";
import { lazy } from "react";

//@ts-expect-error
const Remote = lazy(() => import("remote/App"));

function App() {
	const [count, setCount] = useState(10);

	return (
		<div className="App">
			<h1>Host App</h1>
			<p>I'm the host app, I like to drive</p>
			<p>Whats rendered in this red box is a remote app</p>
			<h2>Remote</h2>
			<div style={{ border: "1px solid red" }}>
				<Suspense fallback={"Loading Remote...."}>
					<Remote />
				</Suspense>
			</div>
		</div>
	);
}

export default App;
