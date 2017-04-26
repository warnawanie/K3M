/* tslint:disable */
import {
  Tide,
  State
} from '../index';

declare var Object: any;
export interface TideLocationInterface {
  "name": string;
  "state_id"?: number;
  "latitude"?: number;
  "longitude"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: number;
  tides?: Tide[];
  state?: State;
}

export class TideLocation implements TideLocationInterface {
  "name": string;
  "state_id": number;
  "latitude": number;
  "longitude": number;
  "created_at": Date;
  "updated_at": Date;
  "id": number;
  tides: Tide[];
  state: State;
  constructor(data?: TideLocationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TideLocation`.
   */
  public static getModelName() {
    return "TideLocation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TideLocation for dynamic purposes.
  **/
  public static factory(data: TideLocationInterface): TideLocation{
    return new TideLocation(data);
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
      name: 'TideLocation',
      plural: 'tides-locations',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "state_id": {
          name: 'state_id',
          type: 'number'
        },
        "latitude": {
          name: 'latitude',
          type: 'number'
        },
        "longitude": {
          name: 'longitude',
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
        tides: {
          name: 'tides',
          type: 'Tide[]',
          model: 'Tide'
        },
        state: {
          name: 'state',
          type: 'State',
          model: 'State'
        },
      }
    }
  }
}
