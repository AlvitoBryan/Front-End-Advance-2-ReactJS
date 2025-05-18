import { useSelector } from "react-redux";

const ListView = () => {
    const users = useSelector((state) => state.users);
    return (
        <ul style={{ display: 'none' }}>
            {users.map(user => (
                <li key={user.id}>
                    {user.namalengkap} - {user.email} - {user.noHp} - {user.katasandi} - {user.jeniskelamin} - {user.id}
                </li>
            ))}
        </ul>
    );
};

export default ListView;