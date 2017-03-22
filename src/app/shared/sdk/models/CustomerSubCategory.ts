/* tslint:disable */
import {
  CustomerCategory,
  Customer
} from '../index';

declare var Object: any;
export interface CustomerSubCategoryInterface {
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
  category_id?: number;
  category?: CustomerCategory;
  customers?: Customer[];
}

export class CustomerSubCategory implements CustomerSubCategoryInterface {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  category_id: number;
  category: CustomerCategory;
  customers: Customer[];
  constructor(data?: CustomerSubCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CustomerSubCategory`.
   */
  public static getModelName() {
    return "CustomerSubCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CustomerSubCategory for dynamic purposes.
  **/
  public static factory(data: CustomerSubCategoryInterface): CustomerSubCategory{
    return new CustomerSubCategory(data);
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
      name: 'CustomerSubCategory',
      plural: 'customer-subcategories',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        created_at: {
          name: 'created_at',
          type: 'Date'
        },
        updated_at: {
          name: 'updated_at',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        category_id: {
          name: 'category_id',
          type: 'number'
        },
      },
      relations: {
        category: {
          name: 'category',
          type: 'CustomerCategory',
          model: 'CustomerCategory'
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
