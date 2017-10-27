/* tslint:disable */
import {
  CustomerSubCategory,
  Customer
} from '../index';

declare var Object: any;
export interface CustomerCategoryInterface {
  "name": string;
  "description"?: string;
  "sort_id"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: number;
  subcategories?: CustomerSubCategory[];
  customers?: Customer[];
}

export class CustomerCategory implements CustomerCategoryInterface {
  "name": string;
  "description": string;
  "sort_id": number;
  "created_at": Date;
  "updated_at": Date;
  "id": number;
  subcategories: CustomerSubCategory[];
  customers: Customer[];
  constructor(data?: CustomerCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CustomerCategory`.
   */
  public static getModelName() {
    return "CustomerCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CustomerCategory for dynamic purposes.
  **/
  public static factory(data: CustomerCategoryInterface): CustomerCategory{
    return new CustomerCategory(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CustomerCategory',
      plural: 'customer-categories',
      path: 'customer-categories',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "sort_id": {
          name: 'sort_id',
          type: 'number'
        },
        "created_at": {
          name: 'created_at',
          type: 'Date'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        subcategories: {
          name: 'subcategories',
          type: 'CustomerSubCategory[]',
          model: 'CustomerSubCategory'
        },
        customers: {
          name: 'customers',
          type: 'Customer[]',
          model: 'Customer'
        },
      }
    }
  }
}
