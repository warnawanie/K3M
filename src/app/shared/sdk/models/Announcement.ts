/* tslint:disable */

declare var Object: any;
export interface AnnouncementInterface {
  "title": string;
  "content": string;
  "image_path"?: string;
  "admin_id": number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "id"?: number;
}

export class Announcement implements AnnouncementInterface {
  "title": string;
  "content": string;
  "image_path": string;
  "admin_id": number;
  "created_at": Date;
  "updated_at": Date;
  "id": number;
  constructor(data?: AnnouncementInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Announcement`.
   */
  public static getModelName() {
    return "Announcement";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Announcement for dynamic purposes.
  **/
  public static factory(data: AnnouncementInterface): Announcement{
    return new Announcement(data);
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
      name: 'Announcement',
      plural: 'announcements',
      properties: {
        "title": {
          name: 'title',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "image_path": {
          name: 'image_path',
          type: 'string'
        },
        "admin_id": {
          name: 'admin_id',
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
      }
    }
  }
}
