export interface cliente{
    id:number;
    titulo:string;

    poster:string;
}

export interface LandingPageDTO{
    enStock?:cliente[];
    sinStock?:cliente[];
}

export interface clienteCreacionDTO{

    nombre:string;
    descripción:string;
    poster?:File;
    posterURL?:string

}