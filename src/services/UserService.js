import BaseService from './BaseService';

export default class UserService extends BaseService{

    static registerUser(payload){
        return this.upload('post','/user', payload)
    }

    static registerAdmin(payload){
        return this.upload('post','/admin', payload)
    }

    static login(payload){
        return this.post('/login', payload);
    }

    static adminLogin(payload){
        return this.post('/admin/login', payload);
    }

    static async updatePassword(payload){
        return this.put('/password', payload)
    }
}