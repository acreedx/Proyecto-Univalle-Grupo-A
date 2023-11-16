import URL from "../api";
import { ubicaciones, convertUbicacionJSONList } from "../interfaces/ubicacionesData";

class LocationsProvider {
  private getLocationsRoute: string = "Ubicaciones/getUbicacionesbyServicioId/";

  private locationsList: ubicaciones[] = [];

  public async GetLocationsList(id: Number): Promise<ubicaciones[]> {
    this.locationsList = [];
    await fetch(`${URL.baseUrl}${this.getLocationsRoute}${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data != null) {
            this.locationsList = convertUbicacionJSONList(res.data)
        }
      })
      .catch((e: any) => {
        throw e;
      });
    return this.locationsList;
  }
}
export default new LocationsProvider();
