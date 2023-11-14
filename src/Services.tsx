export interface IUbicacion {
    identificador: number;
    descripcion: string | null;
    imagen: string | null;
    video: string | null;
}
export interface IContact {
    data:
    [
        {
            id: number;
            nombre: string | null;
            numero: string | null;
        }
    ]

}
export interface IServicio {
    identificador: number;
    nombre: string | null;
    modulo: string | null;
    imagen: string;
};
export interface IRequisitos {
    data: [
        {
            identificador: number;
            descripcion: string | null;
            pasosRequisito:
            [
                {
                    identificador: number;
                    nombre: string | null;
                }
            ]
        }
    ]
}