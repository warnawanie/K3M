import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
// import { Platform, ActionSheetController } from 'ionic-angular';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading, NavParams } from 'ionic-angular';
import { AduanSendPage } from '../aduan-send/aduan-send';
import { Report } from '../../app/shared/sdk/models';
import { ReportApi } from '../../app/shared/sdk/services';
import { CustomerApi, StorageApi }  from '../../app/shared/sdk/services';
import { TranslateService } from 'ng2-translate';
import { Camera, FilePath } from 'ionic-native';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { LoopBackConfig } from '../../app/shared/sdk/lb.config';

declare var cordova: any;

@Component({
  selector: 'page-aduan',
  templateUrl: 'aduan.html'
})

export class AduanPage {

  public aduan: Report = new Report();
  aduanData:any;
  lastImage: string = null;
  serverFilename: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public toastCtrl: ToastController,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    private reportApi: ReportApi,
    private customerApi: CustomerApi,
    private storageApi: StorageApi,
    public translateService: TranslateService,
    private transfer: Transfer,
    private file: File
    ) {

    this.customerApi.getCurrent().subscribe(

        data => {
          this.aduan.customer_id = data.id;
          this.aduan.name = data.fullname;
          this.aduan.ic_number = data.ic_number;
          this.aduan.phone_number = data.phone_number;

         // console.log(this.aduan.name);
        }
     );

     //this.aduan = this.aduanData.get('fullname');


  }


//  setQuantity(value) {
  //  this.aduan = value;
    //this.aduanData.user(this.aduan);
  //}


   report() {
   // report.name = customer.fullname
    this.reportApi.create(this.aduan).subscribe((aduan: Report) => {
        this.aduan = aduan;
        // if attachment is available - upload image
        if(this.lastImage){
          this.uploadImage();
        }else{
          this.navCtrl.setRoot(AduanSendPage);
        }
      },
      err => {
          console.log("Oops!");
      });
   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AduanPage');
  }


  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Lampiran Gambar',
      cssClass: 'action-upload-image',
      buttons: [

        {
          text: 'Camera',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Camera clicked');
            this.takePicture(Camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Album',
          // icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Album clicked');
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Video',
          // icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Video clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          // icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      // destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true
    };

    // Get the data of an image
    Camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
        FilePath.resolveNativePath(imagePath)
        .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage() {
    // Destination URL
    // var url = "http://yoururl/upload.php";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/storages/attachments/upload";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;
    var _token = this.customerApi.getCurrentToken();

    console.log( url );
    console.log( _token.id );

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      headers: {
        'Authorization': _token.id
      }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      console.log(data);
      // save filename to aduan
      var _response = JSON.parse( data.response );
      console.log( _response );

      this.serverFilename = _response.result.files.file[0].name;
      console.log(this.serverFilename);

      if(this.serverFilename){
        this.updateReport();
      }else{
        this.loading.dismissAll()
        this.onGoToAduanSend();
      }
    }, err => {
      console.log(err);
      this.loading.dismissAll()
      this.onGoToAduanSend();
      this.presentToast('Error while uploading file.');
    });
  }

  private updateReport(){
    // report.name = customer.fullname
    this.reportApi.patchAttributes(this.aduan.id, {"file": this.serverFilename }).subscribe((aduan: Report) => {
        console.log("filename updated");
        console.log(aduan);
        this.loading.dismissAll()
        this.onGoToAduanSend();
      },
      err => {
          console.log(err);
          console.log("Oops!");

          this.loading.dismissAll()
          this.onGoToAduanSend();
      });
  }



  onGoToAduanSend(){
    this.navCtrl.setRoot(AduanSendPage);
  }
}
