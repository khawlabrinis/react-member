import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddMember from "./components/AddMember";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Members from "./components/Members";

const baseUrl = "http://localhost:3001/members";

const App = () => {
	const [showAddMember, setShowAddMember] = useState(false);
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(baseUrl).then((response) => {
			setMembers(response.data);
		});
	}, []);

	// Add Member
	const addMember = (member) => {
		axios
			.post(baseUrl, {
				name: member.name,
				email: member.email,
			})
			.then((response) => {
				setMembers([...members, member]);
			});
	};

	// Delete Member
	const deleteMember = (id) => {
		axios.delete(`${baseUrl}/${id}`).then((res) => {
			//We should control the response status to decide if we will change the state or not.
			res.status === 200
				? setMembers(members.filter((member) => member._id !== id))
				: alert("Error Deleting This Task");
		});
	};

	// Toggle Reminder
	const updateMember = (member) => {
		/*const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);*/
	};

	return (
		<Router>
			<div className="container">
				<Header
					onAdd={() => setShowAddMember(!showAddMember)}
					showAdd={showAddMember}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{showAddMember && <AddMember onAdd={addMember} />}
								{members.length > 0 ? (
									<Members members={members} onDelete={deleteMember} />
								) : (
									"No Members To Show"
								)}
							</>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
