import axios_service from "./axios_service";
var config = require('../config/config')
class UserService {
    constructor() {
        this.axiosService = new axios_service();
    }
    
    register(data) {
        let url = config.url + 'register'
        return this.axiosService.post(url, data, false);
    }
    login(data) {
        let url = config.url + 'login';
        return this.axiosService.post(url, data, false);
    }
    
}
export default new UserService();