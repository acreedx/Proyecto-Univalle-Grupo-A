interface ubicaciones {
  id: number;
  descripcion: string;
  imagen: string;
  video:string;
}
function convertUbicacionJSON(data: any) {
  const convertedData: ubicaciones = {
    id: data.id,
    descripcion: data.descripcion,
    imagen: data.imagen,
    video: data.video,
  };
  return convertedData;
}
function convertUbicacionJSONList(data: any) {
  const convertedListData: ubicaciones[] = [];
  data.forEach((e: any) => {
    convertedListData.push(convertUbicacionJSON(e));
  });
  return convertedListData;
}

export type { ubicaciones };
export { convertUbicacionJSON, convertUbicacionJSONList };
