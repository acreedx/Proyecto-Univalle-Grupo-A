import URL from "../api";

import { ITramitesData, convertJSONListService, convertJSONService } from "../interfaces/tramitesData";

class TramitesProvider {
  private moduleName: string = "Tramites";
  private moduleId: Number = 3;
  private getTramiteRoute: string = "Servicios/getServicioByModuloId/";
  private getRouteCategory:string = "Servicios/getTramiteByCategory/"
  private getTramiteById:string = "Servicios/getTramiteById/"

  private tramites: ITramitesData[] = [];

  public async TramitesList(): Promise<ITramitesData[]> {
    try {
      const response = await fetch(`${URL.baseUrl}${this.getTramiteRoute}${this.moduleId}`);
      const data = await response.json();
  
      console.log(data.data);
      this.tramites = convertJSONListService(data.data);
  
      return this.tramites;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  
  private tramitesByCategory: ITramitesData[] = [];
  public async TramiteByCategory(name: String): Promise<ITramitesData[]> {
    this.tramitesByCategory = [];
    await fetch(`${URL.baseUrl}${this.getRouteCategory}${name}`)
      .then((res) => res.json())
      .catch((e: any) => {
        throw e;
      })
      .then((res) => {
        console.log(res.data);
        this.tramitesByCategory = convertJSONListService(res.data);
      })
      .catch((e: any) => {
        throw e;
      });
    return this.tramitesByCategory;
  }

 
  public async GetOneTramite(id: Number): Promise<ITramitesData> {
    try {
        const response = await fetch(`${URL.baseUrl}${this.getTramiteById}${id}`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          return convertJSONService(data.data[0]);
        } else {
          throw new Error("Trámite no encontrado");
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
  }
}

export default new TramitesProvider();
