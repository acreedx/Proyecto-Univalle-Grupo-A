interface IServicesData {
  id: number;
  name: string;
  ubicacionId: number;
  ubicacion: string;
  enchargedId: number;
  encharged: string;
  imagenUrl: string;
  cellphone: string;
  status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
}
function convertJSONService(data: any) {
  const convertedData: IServicesData = {
    id: data.id,
    name: data.nombre,
    ubicacionId: data.ubicaciones[0]?.id,
    ubicacion: data.ubicaciones[0]?.descripcion,
    enchargedId: data.referencia[0].id,
    imagenUrl: data.imagenUrl,
    encharged: data.referencia[0].nombre,
    cellphone: data.referencia[0].numerocel,
    status: data.estado == true ? "success" : "danger",
  };
  return convertedData;
}
function convertJSONListService(data: any) {
  const convertedListData: IServicesData[] = [];
  data.forEach((e: any) => {
    convertedListData.push(convertJSONService(e));
  });
  return convertedListData;
}

export type { IServicesData };
export { convertJSONService, convertJSONListService };
