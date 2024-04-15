"use client";
import React, {useState} from "react";
import {
    useAppDispatch,
    useAppSelector
} from "@/lib/hooks";
import {
    selectUsers,
    fetchUsers,
    deleteUser,
} from "@/lib/features/users/usersSlice";
import {
    useEffect,
} from "react";
import { Button } from '@/components/items/Button';
import { TUser } from "@/types/users";
import { Card } from '@/components/items/Card';
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { ConfirmModal } from "@/components/ConfirmModal";
import { useRouter } from 'next/navigation'

export default function UsersPage() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    const router = useRouter()
    const [allUser, setUsers] = useState<TUser[]>([]);

    useEffect(() => {
        dispatch(fetchUsers([]));
    }, [dispatch]);

    return (
            <Card>
                <div>
                    <Button onClick={() => router.push('/users/create')}>Create User</Button>
                </div>
                <div className='flex flex-col'>
                    {!users ? <p>No users found</p> :
                    <table>
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user: TUser) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                setIsModalOpen(true)
                                                setDeleteId(user.id)
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>}
                </div>
                    <ConfirmModal
                        title={"Delete User"}
                        isModalOpen={isModalOpen}
                        onClick={() => setIsModalOpen(false)}
                        onConfirm={() => {
                            deleteId && dispatch(deleteUser(deleteId))
                            setIsModalOpen(false)
                            router.push('/users')
                        }}
                     children={
                        <p>Are you sure you want to delete this user?</p>
                     }/>
            </Card>
    )
}