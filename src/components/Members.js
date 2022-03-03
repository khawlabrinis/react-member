import Member from "./Member";

const Members = ({ members, onDelete, onUpdate, onAdd }) => {
	return (
		<>
			{members.map((member, index) => (
				<Member
					key={index}
					member={member}
					onDelete={onDelete}
					onUpdate={onUpdate}
					onAdd={onAdd}
				/>
			))}
		</>
	);
};

export default Members;
