import URL from "../api";
import { IStepRequirementData, convertJSONListRequirement } from "../interfaces/stepRequerimentData";

class StepsRequirementsProvider {
  private getRequirementsRoute: string = "Requisitos/getRequisitosByServiceId/";

  private requirementsList: IStepRequirementData[] = [];

  public async GetStepsRequirementsList(id: Number): Promise<IStepRequirementData[]> {
    this.requirementsList = [];
    await fetch(`${URL.baseUrl}${this.getRequirementsRoute}${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data != null) {
            this.requirementsList = convertJSONListRequirement(res.data)
        }
      })
      .catch((e: any) => {
        throw e;
      });
    return this.requirementsList;
  }
}
export default new StepsRequirementsProvider();
