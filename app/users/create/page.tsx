'use client';
import { Card } from "@/components/items/Card";
import { useAppDispatch } from "@/lib/hooks";
import {
    createUser
} from "@/lib/features/users/usersSlice";
import {useState} from "react";
import {TUser} from "@/types/users";
import {useRouter} from "next/navigation";

const initialState = {
    id: 0,
    username: '',
    password: '',
    firstname: '',
    lastname: ''
}
export default function CreatePage() {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<TUser>(initialState);
    const router = useRouter();

    return (
        <Card children={
            <div>
                <h1 id='title'>Register</h1>
                <form>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                username: e.target.value
                            })
                        }}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }}
                    />
                    <input
                        id="firstname"
                        type="text"
                        placeholder="Firstname"
                        value={user.firstname}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                firstname: e.target.value
                            })
                        }}
                    />
                    <input
                        id="lastname"
                        type="text"
                        placeholder="Lastname"
                        value={user.lastname}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                lastname: e.target.value
                            })
                        }}
                    />
                    <button
                        id='submit'
                        type="reset"
                        onClick={(e) =>{
                            dispatch(createUser(user))
                            // setUser(initialState)
                            // e.preventDefault();
                            // router.push('/users')
                            console.log('user', user)
                        }}
                    >
                        Register
                    </button>
                    <button
                        id='cancel'
                        type="reset"
                        onClick={(e) => {
                            setUser(initialState);
                            console.log('user', user)
                        }}
                    >
                        Clear
                    </button>
                </form>
            </div>
        }></Card>
    )
}