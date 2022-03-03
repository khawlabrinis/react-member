import { FaTimes } from "react-icons/fa";

const Member = ({ member, onDelete }) => {
	return (
		<div className={`task`}>
			<h3>
				{member.name}{" "}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(member._id)}
				/>
			</h3>
			<p>{member.email}</p>
		</div>
	);
};
//	<FaPencilAlt style={{ color: "yellow", cursor: "pointer" }} />
export default Member;
