export default class Repo {
    constructor(data) {
        Object.assign(this, data);
    }

    static reconstituteFrom(json) {

        const state = {
            id: json['id'],
            url: json['url'],
            name: json['name'],
            description: json['description'],

        };
        return new Repo(state);
    }
}