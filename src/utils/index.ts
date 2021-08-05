import { findAllEntreprises } from "../services"

export function generateCategoriesList(credentials: any) {
  return new Promise((resolve, reject) => {
    findAllEntreprises(credentials)
      .then((result: any) => {

        const array = result.enterprises;

        const arrayItems = array.map((i: any) => ({
          label: i.enterprise_type.enterprise_type_name,
          value: i.enterprise_type.id,
        }));

        const reduced: any = [];

        arrayItems.forEach((item: any) => {
          var duplicated = reduced.findIndex((redItem: any) => {
            return item.label == redItem.label;
          }) > -1;

          if (!duplicated) {
            reduced.push(item);
          }
        });

        reduced.unshift({ label: 'Todas', value: -1 })

        resolve(reduced);

      }).catch((err) => {
        reject(err)
      })
  })
}