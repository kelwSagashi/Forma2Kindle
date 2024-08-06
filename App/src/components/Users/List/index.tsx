import { useEffect, useState } from "react";
import { Users } from "../../../utils/Users/types";
import { UseAxiosAdapter } from "../../../utils/fetch/Adapters/Axios";
import { UseFetch } from "../../../utils/fetch/Hook";
import UserListItem from "./Item";

const http_client = new UseAxiosAdapter<Users>("http://localhost:8080/api");
const useFetch = new UseFetch<Users>(http_client, {
    endpoint: "/users",
    method: "get",
});

function UserList() {
    const [users, setUsers] = useState<Users>();

    useEffect(() => {
        async function getUsers() {
            const { body: user } = await useFetch.useFetch();
            setUsers(user);
        }

        getUsers();
    }, []);

    return (
        <div>
            {users &&
            users.users.map(user => (
                <UserListItem user={user} key={user.id}/>
            ))
            }
        </div>
    )
}

export default UserList