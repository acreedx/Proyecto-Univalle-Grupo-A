interface referencias {
  id: number;
  nombre: string;
  numerocel: string;
}
function convertReferenceJSON(data: any) {
  const convertedData: referencias = {
    id: data.id,
    nombre: data.nombre,
    numerocel: data.numerocel,
  };
  return convertedData;
}
function convertReferenceJSONList(data: any) {
  const convertedListData: referencias[] = [];
  data.forEach((e: any) => {
    convertedListData.push(convertReferenceJSON(e));
  });
  return convertedListData;
}

export type { referencias };
export { convertReferenceJSON, convertReferenceJSONList };
