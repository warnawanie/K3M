/* tslint:disable */
import {
  Report
} from '../index';

declare var Object: any;
export interface ReportTypeInterface {
  title: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
  reports?: Report[];
}

export class ReportType implements ReportTypeInterface {
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  reports: Report[];
  constructor(data?: ReportTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ReportType`.
   */
  public static getModelName() {
    return "ReportType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ReportType for dynamic purposes.
  **/
  public static factory(data: ReportTypeInterface): ReportType{
    return new ReportType(data);
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
      name: 'ReportType',
      plural: 'report-types',
      properties: {
        title: {
          name: 'title',
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
      },
      relations: {
        reports: {
          name: 'reports',
          type: 'Report[]',
          model: 'Report'
        },
      }
    }
  }
}
