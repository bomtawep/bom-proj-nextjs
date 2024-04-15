import { TUser } from "@/types/users";
interface TUsers {
    user: TUser[];
}
export interface TResponse {
    data: TUsers;
    status: number;
    message: string;
}