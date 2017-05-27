import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoopBackConfig} from '../app/shared/sdk';

@Injectable()
export class PengumumanService {

  constructor(public http: Http) {
    console.log('Hello PengumumanService Provider');
  }
  
  getPengumumanData(){

    console.log(this.http.get(LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + '/announcements').map(res => res.json()).subscribe(data => {
      console.log(data);
    }));

  }
  
}

