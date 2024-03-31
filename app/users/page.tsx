import { User } from "@/types/users";
import { useUsersApi } from "@/app/api/users/users";


export default async () => {
    const { getUsers } = useUsersApi()
    const response = await getUsers()
    const users = response.data.user

    return (
        <div>
            <h1>Users</h1>
            <h1>
                <ul>
                    {users.map((user: User) => (
                        <li key={user.id+user.username}> {user.id} {user.username}</li>
                    ))}
                </ul>
            </h1>
        </div>
    )
}