import { User } from "@/domain/entities/User.entity";
import { IUserService } from "../interfaces/user-service.interface";

export class UserService implements IUserService {
    constructor() { }
    
    getUser(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateUser(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
