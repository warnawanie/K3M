import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Customer } from '../../app/shared/sdk/models';
import { CustomerApi } from '../../app/shared/sdk/services';
import { CustomerCategoryApi }  from '../../app/shared/sdk/services';
import { CustomerSubCategoryApi }  from '../../app/shared/sdk/services';
import { StateApi } from './../../app/shared/sdk/services/custom/State';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  loader: any;

  kategori: Array<any>;
  subkategori: Array<any>;
  states: Array<any>;

  public account: Customer = new Customer();

  constructor(private customerCategoryApi: CustomerCategoryApi, private customerSubCategoryApi: CustomerSubCategoryApi, private stateApi: StateApi, public navCtrl: NavController, public navParams: NavParams, private accountApi: CustomerApi, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.kategori = [];
    this.subkategori = [];

    // this.customerCategoryApi.getAllCategories().then(categories => {
    //   let arrayKategori: any = categories;
    //   this.customerCategoryApi.getAllSubCategories().then(subcategories => {
    //     let arraySubkategori: any = subcategories;
    //     let newCategory: any;
    //     let subkategori: Array<any> = [];
    //     for(let kat of arrayKategori){
    //       newCategory = kat;
    //       subkategori = [];
    //       for (let sub of arraySubkategori){
    //         if (sub.category_id == kat.id){
    //           subkategori.push(sub);
    //         }
    //       }
    //       newCategory.subkategori = subkategori;
    //       this.kategori.push(newCategory);
    //     }

    //     this.customerCategoryApi.getStates().then(states => {
    //       this.states = states;
    //     })

    //   })
    //   //console.log(this.kategori);
    // })
    this.customerCategoryApi.find({"order" : "sort_id ASC"}).subscribe(
      categories => {
        let arrayKategori: any = categories;

        this.customerSubCategoryApi.find().subscribe(
          subcategories => {
            let arraySubkategori: any = subcategories;
            let newCategory: any;
            let subkategori: Array<any> = [];
            for(let kat of arrayKategori){
              newCategory = kat;
              subkategori = [];
              for (let sub of arraySubkategori){
                if (sub.category_id == kat.id){
                  subkategori.push(sub);
                }
              }
              newCategory.subkategori = subkategori;
              this.kategori.push(newCategory);
            }
            console.log( this.kategori);
          },
          err => {
            console.log( err );
          }
        );
      },
      err => {
        console.log( err );
      }
    );


    // states
    this.stateApi.find().subscribe(
      data => {
        this.states = data;
      },
      err => {
        console.log( err );
      }
    );

    // this.kategori = [
    //   {
    //     id: 1,
    //     name: "Pelancongan",
    //     subkategori: []
    //   },
    //   {
    //     id: 2,
    //     name: "Industri Perkapalan",
    //     subkategori: []
    //   },
    //   {
    //     id: 3,
    //     name: "Perikanan",
    //     subkategori: [
    //       {id: 1, name: "Ketua Persatuan Nelayan"},
    //       {id: 2, name: "Pengurusan Persatuan Nelayan"},
    //       {id: 3, name: "Pengusaha Bot"},
    //       {id: 4, name: "Tekong"},
    //       {id: 5, name: "Awak-awak"}
    //     ]
    //   },
    //   {
    //     id: 4,
    //     name: "Industri Petroleum",
    //     subkategori: []
    //   },
    //   {
    //     id: 5,
    //     name: "Rekreasi Maritim",
    //     subkategori: [
    //       {id: 6, name: "Orang Awam"}
    //     ]
    //   },
    //   {
    //     id: 6,
    //     name: "Lain-lain",
    //     subkategori: []
    //   },
    //   {
    //     id: 7,
    //     name: "Agensi Keselamatan",
    //     subkategori: [
    //       {id: 9, name: "TUDM"},
    //       {id: 10, name: "SPRM"},
    //       {id: 11, name: "PDRM"},
    //       {id: 12, name: "APMM"}
    //     ]
    //   },
    //   {
    //     id: 8,
    //     name: "Agensi Kerajaan",
    //     subkategori: [
    //       {id: 13, name: "SKMM"},
    //       {id: 14, name: "MOSTI"}
    //     ]
    //   },
    // ]
  }

  kategoriSelected(){
    this.account.subcategory_id = null;
    let kategoriIndex = this.kategori.findIndex(cat => cat.id == this.account.category_id);
    this.subkategori = this.kategori[kategoriIndex].subkategori;
  }

  isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  register() {
    // this.accountApi.create(this.account).subscribe((account: Customer) => this.navCtrl.setRoot(LoginPage));

    if (this.account.ic_number.length != 12){
      let alert = this.alertCtrl.create({
        title: 'IC number mesti tidak lebih atau kurang dari 12',
        buttons: ['OK']
          });
        alert.present();
      return;
    }

    this.loader = this.loadingCtrl.create({
      content: "Loading"
    });

    this.loader.present();

    this.accountApi.create(this.account).subscribe((account: Customer) => {

    this.loader.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Akaun K3M anda telah berjaya didaftarkan. Terima Kasih',
        buttons: ['OK']
          });
        alert.present();

        this.navCtrl.setRoot(LoginPage);

      },  error => {

        this.loader.dismiss();

        let alert = this.alertCtrl.create({
          title: 'Sila isikan semua maklumat di dalam ruangan yang disediakan',
          subTitle: 'Cuba lagi',
          buttons: ['OK']
        });

        alert.present();

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
