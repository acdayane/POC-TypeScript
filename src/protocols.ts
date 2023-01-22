export type Task = {
    id?:number,
    responsable:string,
    description: string,
    concluded?:boolean,
    createdAt?: string
};