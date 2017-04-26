/* tslint:disable */
import {
  TideLocation
} from '../index';

declare var Object: any;
export interface TideInterface {
  "date"?: string;
  "time"?: string;
  "height"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: number;
  location?: TideLocation;
}

export class Tide implements TideInterface {
  "date": string;
  "time": string;
  "height": number;
  "created_at": Date;
  "updated_at": Date;
  "id": number;
  location: TideLocation;
  constructor(data?: TideInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tide`.
   */
  public static getModelName() {
    return "Tide";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tide for dynamic purposes.
  **/
  public static factory(data: TideInterface): Tide{
    return new Tide(data);
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
      name: 'Tide',
      plural: 'tides',
      properties: {
        "date": {
          name: 'date',
          type: 'string'
        },
        "time": {
          name: 'time',
          type: 'string'
        },
        "height": {
          name: 'height',
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
        location: {
          name: 'location',
          type: 'TideLocation',
          model: 'TideLocation'
        },
      }
    }
  }
}
