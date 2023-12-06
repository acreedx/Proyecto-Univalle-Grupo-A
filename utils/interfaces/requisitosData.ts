interface IRequirementData {
  id: number;
  description: string;
}

function convertJSONRequirement(data: any) {
  const convertedData: IRequirementData = {
    id: data.identificador,
    description: data.descripcion,
  };
  return convertedData;
}
function convertJSONListRequirement(data: any) {
  const convertedListData: IRequirementData[] = [];
  data.forEach((e: any) => {
    convertedListData.push(convertJSONRequirement(e));
  });
  return convertedListData;
}

export type { IRequirementData };
export { convertJSONRequirement, convertJSONListRequirement };
