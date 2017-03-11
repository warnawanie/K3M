/* tslint:disable */
import { Injectable } from '@angular/core';
import { ReportType } from '../../models/ReportType';
import { Report } from '../../models/Report';
import { Emergency } from '../../models/Emergency';
import { Announcement } from '../../models/Announcement';
import { Customer } from '../../models/Customer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    ReportType: ReportType,
    Report: Report,
    Emergency: Emergency,
    Announcement: Announcement,
    Customer: Customer,
    
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
