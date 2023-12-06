import URL from "../api";
import { ICategoriasData,convertJSONListCategory } from "../interfaces/categoriasData";

class CategoriasProvider {

  private getActiveCategories: string = "Categoria/getActiveCategorias";

  private categories: ICategoriasData[] = [];
  public async CategoriesList(): Promise<ICategoriasData[]> {
    this.categories = [];
    await fetch(`${URL.baseUrl}${this.getActiveCategories}`)
      .then((res) => res.json())
      .catch((e: any) => {
        throw e;
      })
      .then((res) => {
        console.log(res.data);
        this.categories = convertJSONListCategory(res.data);
      })
      .catch((e: any) => {
        throw e;
      });
    return this.categories;
  }

  
 
}
export default new CategoriasProvider();
