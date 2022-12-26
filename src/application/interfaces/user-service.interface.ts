import { User } from "@/domain/entities/User.entity";

export interface IUserService {
    getUser(id: string): Promise<User>;
    updateUser(data: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
