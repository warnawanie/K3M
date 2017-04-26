/* tslint:disable */
import {
  Emergency
} from '../index';

declare var Object: any;
export interface StatusEmergencyInterface {
  "name": string;
  "description"?: string;
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: number;
  emergencies?: Emergency[];
}

export class StatusEmergency implements StatusEmergencyInterface {
  "name": string;
  "description": string;
  "created_at": Date;
  "updated_at": Date;
  "id": number;
  emergencies: Emergency[];
  constructor(data?: StatusEmergencyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StatusEmergency`.
   */
  public static getModelName() {
    return "StatusEmergency";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StatusEmergency for dynamic purposes.
  **/
  public static factory(data: StatusEmergencyInterface): StatusEmergency{
    return new StatusEmergency(data);
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
      name: 'StatusEmergency',
      plural: 'status-emergency',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        emergencies: {
          name: 'emergencies',
          type: 'Emergency[]',
          model: 'Emergency'
        },
      }
    }
  }
}
