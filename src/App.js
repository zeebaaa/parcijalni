import { useState } from "react";
import "./App.css";
import { ModalHeader } from "react-bootstrap";
import { InputForm, Footer, Result } from "./components";
import { fetchUser, fetchUserRepos } from "./services/githubApi";

function App() {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [showForm, setShowForm] = useState(true);

	const fetchData = async (username) => {
		try {
			const userData = await fetchUser(username);
			setUser(userData);
			setShowForm(false);
			console.log(`User:`, JSON.stringify(userData, undefined, 4));

			const reposData = await fetchUserRepos(username);
			setRepos(reposData);
		} catch (error) {
			console.error("Error", error);
		}
	};

	const resetState = () => {
		setUser({});
		setRepos([]);
		setShowForm(true);
	};

	return (
		<div className='App'>
			<ModalHeader>
				<h1>Github App</h1>
			</ModalHeader>
			{showForm ? (
				<InputForm fetchData={fetchData} />
			) : (
				<Result user={user} repos={repos} onReset={resetState} />
			)}

			<Footer></Footer>
		</div>
	);
}

export default App;
