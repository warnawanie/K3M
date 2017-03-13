/* tslint:disable */
import {
  Report,
  TideLocation
} from '../index';

declare var Object: any;
export interface StateInterface {
  name: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
  reports?: Report[];
  locations?: TideLocation[];
}

export class State implements StateInterface {
  name: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  reports: Report[];
  locations: TideLocation[];
  constructor(data?: StateInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `State`.
   */
  public static getModelName() {
    return "State";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of State for dynamic purposes.
  **/
  public static factory(data: StateInterface): State{
    return new State(data);
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
      name: 'State',
      plural: 'states',
      properties: {
        name: {
          name: 'name',
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
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report'
        },
        locations: {
          name: 'locations',
          type: 'TideLocation[]',
          model: 'TideLocation'
        },
      }
    }
  }
}
