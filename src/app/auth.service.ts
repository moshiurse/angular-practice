export class AuthService {
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('authenticated', this.loggedIn);
                resolve(this.loggedIn);
            }, 800)
        });
        return promise;
    }

    login(){
        this.loggedIn = true;
        console.log('login', this.loggedIn);
    }

    logout(){
        this.loggedIn = false;
    }
}