/* tslint:disable */

declare var Object: any;
export interface ReportInterface {
  customer_id: number;
  report_type_id: number;
  name: string;
  ic_number: string;
  phone_number: string;
  radio_details?: string;
  location?: string;
  time?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  admin_notes?: string;
  created_at?: Date;
  updated_at?: Date;
  id?: number;
}

export class Report implements ReportInterface {
  customer_id: number;
  report_type_id: number;
  name: string;
  ic_number: string;
  phone_number: string;
  radio_details: string;
  location: string;
  time: string;
  description: string;
  latitude: number;
  longitude: number;
  admin_notes: string;
  created_at: Date;
  updated_at: Date;
  id: number;
  constructor(data?: ReportInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Report`.
   */
  public static getModelName() {
    return "Report";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Report for dynamic purposes.
  **/
  public static factory(data: ReportInterface): Report{
    return new Report(data);
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
      name: 'Report',
      plural: 'reports',
      properties: {
        customer_id: {
          name: 'customer_id',
          type: 'number'
        },
        report_type_id: {
          name: 'report_type_id',
          type: 'number'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        ic_number: {
          name: 'ic_number',
          type: 'string'
        },
        phone_number: {
          name: 'phone_number',
          type: 'string'
        },
        radio_details: {
          name: 'radio_details',
          type: 'string'
        },
        location: {
          name: 'location',
          type: 'string'
        },
        time: {
          name: 'time',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        latitude: {
          name: 'latitude',
          type: 'number'
        },
        longitude: {
          name: 'longitude',
          type: 'number'
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
      }
    }
  }
}
