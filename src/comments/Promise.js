class MyPromise {

    static PENDING = "pending";
    static REJECTED = "rejected";
    static FULFILLED = "fulfilled";

    constructor(excutor) {
        this.currentState = PENDING;
    }

    then (resolve, reject) {
        if (resolve) {
            this.currentState = FULFILLED;

            return resolve
        }
        if (reject) {
            this.currentState = REJECTED;
            return reject
        }
    }
}
