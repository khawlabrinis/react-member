import { useState } from "react";

const AddMember = ({ onAdd }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		if (!email) {
			alert("Please add a task");
			return;
		}

		onAdd({ name, email });

		setEmail("");
		setName("");
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name</label>
				<input
					type="text"
					placeholder="Add Member"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Email</label>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<input type="submit" value="Save Member" className="btn btn-block" />
		</form>
	);
};

export default AddMember;
