import { TResponse } from "@/types/response";

const host = process.env.HOST_API;

export const useUsersApi = () => {
  const getUsers = async (): Promise<TResponse> => {
    const res = await fetch(`${host}/users`,{ cache: 'force-cache' });
    return await res.json();
  }
  return { getUsers };
}