import { createAppSlice } from "@/lib/createAppSlice";
import { TUser } from "@/types/users";
import { useUsersApi } from "@/lib/features/users/usersApi";

export interface UserSliceState {
    users: TUser[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | '';
}

const initialState: UserSliceState = {
    users: [],
    status: 'idle',
    error: '',
}
const { getUsers, postUser, deleteUserById } = useUsersApi();
export const usersSlice = createAppSlice({
    name: "users",
    initialState,
    reducers: (create) => ({
        fetchUsers: create.asyncThunk(
            async () => {
                const response = await getUsers();
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                },
                fulfilled: (state, action) => {
                    state.status = 'succeeded';
                    state.users = action.payload.user;
                },
                rejected: (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message || '';
                }
            }
        ),
        createUser: create.asyncThunk(
            async (user: any) => {
                const payload = {
                    Username: user.Username,
                    Password: user.Password,
                    Firstname: user.Firstname,
                    Lastname: user.Lastname,
                }
                const response = await postUser(payload);
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                },
                fulfilled: (state, action) => {
                    state.status = 'succeeded';
                    state.users = action.payload.user;
                },
                rejected: (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message || '';
                }
            }
        ),
        deleteUser: create.asyncThunk(
            async (id: number) => {
                const response = await deleteUserById(id);
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                },
                fulfilled: (state, action) => {
                    state.status = 'succeeded';
                    state.users = action.payload.user;
                },
                rejected: (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message || '';
                }
            }
        )
    }),
    selectors: {
        selectUsers: (users) => users.users,
        selectStatus: (users) => users.status,
        selectError: (users) => users.error,
    }
});

export const { fetchUsers, createUser, deleteUser } = usersSlice.actions;
export const { selectUsers,     selectStatus, selectError } = usersSlice.selectors;