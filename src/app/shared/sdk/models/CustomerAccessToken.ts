/* tslint:disable */
import {
  Customer
} from '../index';

declare var Object: any;
export interface CustomerAccessTokenInterface {
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: string;
  "ttl"?: number;
  "scopes"?: Array<any>;
  "created"?: Date;
  "userId"?: number;
  user?: Customer;
}

export class CustomerAccessToken implements CustomerAccessTokenInterface {
  "created_at": Date;
  "updated_at": Date;
  "id": string;
  "ttl": number;
  "scopes": Array<any>;
  "created": Date;
  "userId": number;
  user: Customer;
  constructor(data?: CustomerAccessTokenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CustomerAccessToken`.
   */
  public static getModelName() {
    return "CustomerAccessToken";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CustomerAccessToken for dynamic purposes.
  **/
  public static factory(data: CustomerAccessTokenInterface): CustomerAccessToken{
    return new CustomerAccessToken(data);
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
      name: 'CustomerAccessToken',
      plural: 'CustomerAccessTokens',
      properties: {
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
          type: 'string'
        },
        "ttl": {
          name: 'ttl',
          type: 'number',
          default: 1209600
        },
        "scopes": {
          name: 'scopes',
          type: 'Array&lt;any&gt;'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'number'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'Customer',
          model: 'Customer'
        },
      }
    }
  }
}
