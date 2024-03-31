import { User } from "@/types/users";
type TUsers = {
    user: User[];
};
export type TResponse = {
    data: TUsers;
    status: number;
    message: string;
}