/* tslint:disable */
import {
  Report,
  Emergency,
  CustomerCategory,
  CustomerSubCategory,
  CustomerAccessToken
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "fullname": string;
  "ic_number": string;
  "phone_number": string;
  "address_1"?: string;
  "address_2"?: string;
  "postcode"?: string;
  "town"?: string;
  "state"?: string;
  "referer_name"?: string;
  "referer_phone"?: string;
  "referer_address"?: string;
  "created_at"?: Date;
  "updated_at"?: Date;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "category_id"?: number;
  "subcategory_id"?: number;
  "password"?: string;
  reports?: Report[];
  emergencies?: Emergency[];
  category?: CustomerCategory;
  subcategory?: CustomerSubCategory;
  accessTokens?: CustomerAccessToken[];
}

export class Customer implements CustomerInterface {
  "fullname": string;
  "ic_number": string;
  "phone_number": string;
  "address_1": string;
  "address_2": string;
  "postcode": string;
  "town": string;
  "state": string;
  "referer_name": string;
  "referer_phone": string;
  "referer_address": string;
  "created_at": Date;
  "updated_at": Date;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "category_id": number;
  "subcategory_id": number;
  "password": string;
  reports: Report[];
  emergencies: Emergency[];
  category: CustomerCategory;
  subcategory: CustomerSubCategory;
  accessTokens: CustomerAccessToken[];
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'users',
      properties: {
        "fullname": {
          name: 'fullname',
          type: 'string'
        },
        "ic_number": {
          name: 'ic_number',
          type: 'string'
        },
        "phone_number": {
          name: 'phone_number',
          type: 'string'
        },
        "address_1": {
          name: 'address_1',
          type: 'string'
        },
        "address_2": {
          name: 'address_2',
          type: 'string'
        },
        "postcode": {
          name: 'postcode',
          type: 'string'
        },
        "town": {
          name: 'town',
          type: 'string'
        },
        "state": {
          name: 'state',
          type: 'string'
        },
        "referer_name": {
          name: 'referer_name',
          type: 'string'
        },
        "referer_phone": {
          name: 'referer_phone',
          type: 'string'
        },
        "referer_address": {
          name: 'referer_address',
          type: 'string'
        },
        "created_at": {
          name: 'created_at',
          type: 'Date'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'Date'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "category_id": {
          name: 'category_id',
          type: 'number'
        },
        "subcategory_id": {
          name: 'subcategory_id',
          type: 'number'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report'
        },
        emergencies: {
          name: 'emergencies',
          type: 'Emergency[]',
          model: 'Emergency'
        },
        category: {
          name: 'category',
          type: 'CustomerCategory',
          model: 'CustomerCategory'
        },
        subcategory: {
          name: 'subcategory',
          type: 'CustomerSubCategory',
          model: 'CustomerSubCategory'
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'CustomerAccessToken[]',
          model: 'CustomerAccessToken'
        },
      }
    }
  }
}
