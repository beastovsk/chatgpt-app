import { useState } from "react";
import Chat from "./components/Chat/Chat";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<div className="title">
				<h1>Bot Chat</h1>
				<p>AI-based service</p>
			</div>
			<Chat />
		</div>
	);
}

export default App;
