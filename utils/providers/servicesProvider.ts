import URL from "../api";
import {
  ICajasData,
  convertJSONListService,
  convertJSONService,
} from "../interfaces/cajasData";
import {
  ICajasSingleData,
  convertSingleJSONService,
} from "../interfaces/singleCajasData";

class ServicesProvider {
  private moduleName: string = "Cajas";
  private moduleId: Number = 2;
  private getServiceRoute: string = "Servicios/getServicioByModuloId/";
  private getServiceByIdRoute = "Servicios/getServicioById/";

  private services: ICajasData[] = [];
  public async ServicesList(): Promise<ICajasData[]> {
    this.services = [];
    await fetch(`${URL.baseUrl}${this.getServiceRoute}${this.moduleId}`)
      .then((res) => res.json())
      .catch((e: any) => {
        throw e;
      })
      .then((res) => {
        console.log(res.data);
        this.services = convertJSONListService(res.data);
      })
      .catch((e: any) => {
        throw e;
      });
    return this.services;
  }
  public async GetOneService(id: Number): Promise<ICajasSingleData> {
    let empty: ICajasSingleData = {
      id: 0,
      nombre: "",
      imagenUrl: "",
      referencia: [],
      ubicaciones: [],
    };
    await fetch(`${URL.baseUrl}${this.getServiceByIdRoute}${id}`)
      .then((res) => res.json())
      .then((res) => {
        empty = convertSingleJSONService(res.data[0]);
      })
      .catch((e: any) => {
        throw e;
      });
    return empty;
  }
}
export default new ServicesProvider();
