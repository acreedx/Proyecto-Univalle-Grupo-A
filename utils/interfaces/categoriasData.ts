interface ICategoriasData {
  id: number;
  name: string;
  description: string;
  status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
}
function convertJSONCategory(data: any) {
  const convertedData: ICategoriasData = {
    id: data.idCategoria,
    name: data.nombreCategoria,
    description: data.descripcion,
    status: data.estado == true ? "success" : "danger",
  };
  return convertedData;
}
function convertJSONListCategory(data: any) {
  const convertedListData: ICategoriasData[] = [];
  if (data && Array.isArray(data)) {
    data.

      forEach((e: any) => {
        convertedListData.
        push(convertJSONCategory(e));
      });
  }
  return convertedListData;
}

export type { ICategoriasData };
export { convertJSONCategory, convertJSONListCategory };
