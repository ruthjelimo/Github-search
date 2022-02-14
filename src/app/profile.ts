export class Profile {
    name: any;
  html_url: any;
    constructor(
        public login:string,
      
        public avatar_url:string,
        public bio:string,
        public followers:number,
        public following:number,
        public public_repos:number,
        public created_at:any
        // public html_url:string
    ){
    }
}