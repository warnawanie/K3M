/* tslint:disable */
import { Injectable } from '@angular/core';
import { ReportType } from '../../models/ReportType';
import { Report } from '../../models/Report';
import { State } from '../../models/State';
import { Emergency } from '../../models/Emergency';
import { StatusEmergency } from '../../models/StatusEmergency';
import { StatusReport } from '../../models/StatusReport';
import { Announcement } from '../../models/Announcement';
import { Tide } from '../../models/Tide';
import { TideLocation } from '../../models/TideLocation';
import { Weather } from '../../models/Weather';
import { CustomerCategory } from '../../models/CustomerCategory';
import { CustomerSubCategory } from '../../models/CustomerSubCategory';
import { Storage } from '../../models/Storage';
import { Customer } from '../../models/Customer';
import { CustomerAccessToken } from '../../models/CustomerAccessToken';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    ReportType: ReportType,
    Report: Report,
    State: State,
    Emergency: Emergency,
    StatusEmergency: StatusEmergency,
    StatusReport: StatusReport,
    Announcement: Announcement,
    Tide: Tide,
    TideLocation: TideLocation,
    Weather: Weather,
    CustomerCategory: CustomerCategory,
    CustomerSubCategory: CustomerSubCategory,
    Storage: Storage,
    Customer: Customer,
    CustomerAccessToken: CustomerAccessToken,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
