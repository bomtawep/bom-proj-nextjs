import { TResponse } from "@/types/response";

const host = process.env.NEXT_PUBLIC_HOST_API;

export const useUsersApi = () => {
    const getUsers = async (): Promise<TResponse> => {
        const res = await fetch(`${host}/users`,{
            headers: { "Content-Type": "application/json" },
        });
        return await res.json();
    }
    const postUser = async (user: any): Promise<TResponse> => {
        const res = await fetch(`${host}/users`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        return await res.json();
    }
    const deleteUserById = async (id: number): Promise<TResponse> => {
        const res = await fetch(`${host}/users/${id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });
        return await res.json();
    }
    return {
        getUsers,
        postUser,
        deleteUserById
    };
}