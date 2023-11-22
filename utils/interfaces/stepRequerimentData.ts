interface IStepRequirementData {
  id: number;
  description: string;
  pasosRequisito: Array<{
    idStep: number;
    nameStep: string;
  }>;
}

function convertJSONRequirement(data: any) {
  const convertedData: IStepRequirementData = {
    id: data.identificador,
    description: data.descripcion,
    pasosRequisito: [
      {
        idStep: data.identificador,
        nameStep: data.nombre,
      },
    ],
  };
  return convertedData;
}

function convertJSONListRequirement(data: any) {
  const convertedListData = data.map((item: any) => {
    const requisito = {
      id: item.identificador,
      description: item.descripcion,
      pasosRequisito: item.pasosRequisito.map((paso: any) => ({
        idStep: paso.identificador,
        nameStep: paso.nombre,
      })),
    };
    return requisito;
  });
  return convertedListData;
}

export type { IStepRequirementData };
export { convertJSONRequirement, convertJSONListRequirement };
