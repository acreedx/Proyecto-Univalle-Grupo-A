interface ICajasData {
  id: number;
  nombre: string;
  modulo: string;
  imagen: string;
  status: "success" | "danger";
}
function convertJSONService(data: any) {
  const convertedData: ICajasData = {
    id: data.identificador,
    nombre: data.nombre,
    modulo: data.modulo,
    imagen: data.imagen,
    status: data.estado == true ? "success" : "danger",
  };
  return convertedData;
}
function convertJSONListService(data: any) {
  const convertedListData: ICajasData[] = [];
  data.forEach((e: any) => {
    convertedListData.push(convertJSONService(e));
  });
  return convertedListData;
}

export type { ICajasData };
export { convertJSONService, convertJSONListService };
