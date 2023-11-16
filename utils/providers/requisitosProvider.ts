import URL from "../api";
import { IRequirementData } from "../interfaces/requisitosData";

class RequirementsProvider {
  private getRequirementsRoute: string = "Requisitos/getRequisitosByServiceId/";
  private requirementsList: IRequirementData[] = [];

  public async GetRequirementsList(id: Number): Promise<IRequirementData[]> {
    this.requirementsList = [];
    await fetch(`${URL.baseUrl}${this.getRequirementsRoute}${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data != null) {
          res.data.forEach((e: any) => {
            const tempRequirement: IRequirementData = {
              id: e.identificador,
              description: e.descripcion,
            };
            this.requirementsList.push(tempRequirement);
          });
        }
      })
      .catch((e: any) => {
        throw e;
      });
    return this.requirementsList;
  }
}
export default new RequirementsProvider();
