import { User } from '@/domain/entities/User.entity';
import axios from './axios';

export class UserAPI {
    constructor() { }
    
    getUser(id: string) {
        return axios.get(`/users/${id}`);
    }
    updateUser(data: User) {
        return axios.put(`/users/${data.id}`, data);
    }
    deleteUser(id: string) {
        return axios.delete(`/users/${id}`);
    }
}
