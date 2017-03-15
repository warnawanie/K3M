import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tidesForecast'})
export class TidesForecast implements PipeTransform {
  transform(value, args:string[]) : any {
  let keys = [];
  for (let key in value) {
    keys.push({key: key, value: value[key]});
  } 
  return keys;
  } 
}