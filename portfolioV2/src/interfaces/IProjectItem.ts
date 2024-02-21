export interface IProjectItem {
	tittle: string;
    githubLink: string;
    description: string
}
export interface IMainProject{
    title:string, 
    description:string, 
    tags:ITags[], 
    link:string, 
    github?:string,
    images:string[]
}
interface ITags{
    name: string,
    class: string,
    icon: any,
}