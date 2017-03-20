/* tslint:disable */
import {
  StatusEmergency,
  Customer
} from '../index';

declare var Object: any;
export interface EmergencyInterface {
  customer_id: number;
  latitude: number;
  longitude: number;
  status_emergency_id?: number;
  admin_notes?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
  status?: StatusEmergency;
  customer?: Customer;
}

export class Emergency implements EmergencyInterface {
  customer_id: number;
  latitude: number;
  longitude: number;
  status_emergency_id: number;
  admin_notes: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  status: StatusEmergency;
  customer: Customer;
  constructor(data?: EmergencyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Emergency`.
   */
  public static getModelName() {
    return "Emergency";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Emergency for dynamic purposes.
  **/
  public static factory(data: EmergencyInterface): Emergency{
    return new Emergency(data);
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
      name: 'Emergency',
      plural: 'emergencies',
      properties: {
        customer_id: {
          name: 'customer_id',
          type: 'number'
        },
        latitude: {
          name: 'latitude',
          type: 'number'
        },
        longitude: {
          name: 'longitude',
          type: 'number'
        },
        status_emergency_id: {
          name: 'status_emergency_id',
          type: 'number',
          default: 1
        },
        admin_notes: {
          name: 'admin_notes',
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
      },
      relations: {
        status: {
          name: 'status',
          type: 'StatusEmergency',
          model: 'StatusEmergency'
        },
        customer: {
          name: 'customer',
          type: 'Customer',
          model: 'Customer'
        },
      }
    }
  }
}
