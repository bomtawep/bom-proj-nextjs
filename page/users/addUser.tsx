"use server";
import React from "react";
import {
    useAppDispatch,
} from "@/lib/hooks";
import {
    createUser,
} from "@/lib/features/users/usersSlice";
import {
    useState,
} from "react";
import {
    Card,
    CardBody,
    Input,
    Button,
} from "@nextui-org/react";

const initialUser = {
    id: 0,
    Username: '',
    Password: '',
    Firstname: '',
    Lastname: '',
}

export default function UsersPage() {
    const dispatch = useAppDispatch();
    const [usersPayload, setUsers] = useState(initialUser);

    return (
        <div>
            <Card>
                <CardBody>
                    <Input
                        value={usersPayload.Username}
                        onChange={(e) => setUsers({...usersPayload, Username: e.target.value})}
                        placeholder='Username'
                    />
                    <Input
                        value={usersPayload.Password}
                        onChange={(e) => setUsers({...usersPayload, Password: e.target.value})}
                        placeholder='Password'
                    />
                    <Input
                        value={usersPayload.Firstname}
                        onChange={(e) => setUsers({...usersPayload, Firstname: e.target.value})}
                        placeholder='Firstname'
                    />
                    <Input
                        value={usersPayload.Lastname}
                        onChange={(e) => setUsers({...usersPayload, Lastname: e.target.value})}
                        placeholder='Lastname'
                    />
                    <Button onClick={() => { dispatch(createUser(usersPayload)); }}>Add User</Button>
                </CardBody>
            </Card>
        </div>
    )
}