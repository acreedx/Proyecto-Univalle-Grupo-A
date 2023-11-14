interface ICafeteriaData {
    Id: number; 
    Titulo: string; //nombre
    Descripcion_1: string;  //descripcion
    Descripcion_2: Number;  //precio
    archivo: string; //image
  
    status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
  }
  
  const tableData: ICafeteriaData[] = [
    {
      Id: 1,
      Titulo: "Cafe 1",
      Descripcion_1: "Prueba2",
      Descripcion_2: 12,
      archivo: "SDadas",
      status: "neutral",
    },
    {
      Id: 2,
      Titulo: "Cafe 2",
      Descripcion_1: "Prueba2",
      Descripcion_2: 12,
      archivo: "SDadas",
      status: "neutral",
    },
    {
      Id: 3,
      Titulo: "Cafe 3",
      Descripcion_1: "Prueba2",
      Descripcion_2: 12,
      archivo: "SDadas",
      status: "neutral",
    },
  ];
  
  export default tableData;
  export type { ICafeteriaData };