import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
	const [temp, updateTemp] = useState();
	useEffect(() => {
		const getTemp = () => {
			fetch("/api/weather/current/Tel Aviv").then((res) => {
				res.json().then((data) => {
					updateTemp(data["current"]["temp_c"]);
				});
			});
		};
		getTemp()
	});

	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to
					reload.
				</p>
				<p> Current tempature in Tel Aviv is {temp} </p>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
