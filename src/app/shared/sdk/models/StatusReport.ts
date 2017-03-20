/* tslint:disable */
import {
  Report
} from '../index';

declare var Object: any;
export interface StatusReportInterface {
  name: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
  reports?: Report[];
}

export class StatusReport implements StatusReportInterface {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  reports: Report[];
  constructor(data?: StatusReportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `StatusReport`.
   */
  public static getModelName() {
    return "StatusReport";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of StatusReport for dynamic purposes.
  **/
  public static factory(data: StatusReportInterface): StatusReport{
    return new StatusReport(data);
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
      name: 'StatusReport',
      plural: 'status-report',
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
