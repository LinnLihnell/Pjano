export default class User {
    constructor(username = '', lastLesson = '', progress = {}) {
        this.username = username;
        this.lastLesson = lastLesson;
        this.progress = progress;
    }

    saveToLocalStorage() {
        localStorage.setItem('user', JSON.stringify(this));
    }

    static loadFromLocalStorage() {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            return new User(userData.username, userData.lastLesson, userData.progress);
        }
        return new User();
    }
}
