import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContext";

function App() {
	return (
		<>
			<Navbar />
			<WatchListContextWrapper>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/watchlist" element={<WatchList />} />
				</Routes>
			</WatchListContextWrapper>
			{/* can also wrap individual components */}
			{/* <Routes>
				<Route
					path="/"
					element={
						<WatchListContextWrapper>
							<Home />
						</WatchListContextWrapper>
					}
				/>
				<Route
					path="/watchlist"
					element={
						<WatchListContextWrapper>
							<WatchList />
						</WatchListContextWrapper>
					}
				/>
			</Routes> */}
		</>
	);
}

export default App;
