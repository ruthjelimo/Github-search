export class Profile {
    constructor(
        public login:string,
        public avatar_url:string,
        public bio:string,
        public followers:number,
        public following:number,
        public public_repos:number
    ){
    }
}