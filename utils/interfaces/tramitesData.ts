interface ITramitesData {
    id: number;
    name: string;
    image: string;
    enchargedId: number;
    encharged: string;
    cellphone: string;
    durationId: number;
    duration: string;
    requerimentId: number;
    requeriment: string;
    category: string;

    status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
  }
  function convertJSONService(data: any) {
    const convertedData: ITramitesData = {
      id: data.id,
      name: data.nombre,
      image: data.imagen,
  
      enchargedId:
        data.referencia && data.referencia[0] ? data.referencia[0].id : null,
      encharged:
        data.referencia && data.referencia[0] ? data.referencia[0].nombre : null,
      cellphone:
        data.referencia && data.referencia[0]
          ? data.referencia[0].numerocel
          : null,
      durationId: data.tramites && data.tramites[0] ? data.tramites[0].id : null,

      duration:
        data.tramites && data.tramites[0] ? data.tramites[0].tiempotramite : null,
  
      requerimentId:
        data.requisitos && data.requisitos[0] ? data.requisitos[0].id : null,
  
      requeriment:
        data.requisitos && data.requisitos[0]
          ? data.requisitos[0].descripcion
          : null,
  
      category: data.idCategoria,

      //category: data.categorias[0].nombre,
      status: data.estado == true ? "success" : "danger",
    };
    return convertedData;
  }
  function convertJSONListService(data: any) {
    const convertedListData: ITramitesData[] = [];
    if (data && Array.isArray(data)) {
    data.forEach((e: any) => {
      convertedListData.push(convertJSONService(e));
    });
  }
    return convertedListData;
  }
 
  export type { ITramitesData };
  export { convertJSONService, convertJSONListService };
  