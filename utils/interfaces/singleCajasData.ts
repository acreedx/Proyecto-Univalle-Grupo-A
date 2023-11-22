import { convertReferenceJSONList, referencias } from "./referencesData";
import { convertUbicacionJSONList, ubicaciones } from "./ubicacionesData";

interface ICajasSingleData {
  id: number;
  nombre: string;
  imagenUrl: string;
  referencia: referencias[];
  ubicaciones: ubicaciones[];
}
function convertSingleJSONService(data: any) {
  const convertedData: ICajasSingleData = {
    id: data.identificador,
    nombre: data.nombre,
    imagenUrl: data.imagenUrl,
    referencia: convertReferenceJSONList(data.referencia),
    ubicaciones: convertUbicacionJSONList(data.ubicaciones),
  };
  return convertedData;
}

export type { ICajasSingleData };
export { convertSingleJSONService };
