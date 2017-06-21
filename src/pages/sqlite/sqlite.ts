import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SqlitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

const sqliteConf: SQLiteDatabaseConfig = {
  name: 'data.db',
  location: 'default'
};

@IonicPage()
@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqlitePage {

  persistedData: string;
  isDataAvailable: boolean = false;
  database: SQLiteObject;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private sqlite: SQLite, private toastCtrl: ToastController) {

    this.sqlite.create(sqliteConf)
    .then((db: SQLiteObject) => {
      this.database = db;
      db.executeSql('create table testing(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL creation'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  } // Constructor

  retrieveData(): void {

    this.sqlite.create(sqliteConf)
    .then( (db) => {
      db.executeSql(this.prepareRetrieveStatement(), {})
      .then((res) => {
        this.persistedData = res.rows.item(0).name;
        this.isDataAvailable = true;
      })
      .catch((error) => {
        this.showErrorToast(`Error al recuperar los datos: ${error}`);
      });
    })
    .catch((error) => {
      this.showErrorToast(`Error al recuperar los datos: ${error}`);
    });
  }

  showErrorToast(error): void {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

  ionViewWillEnter(): void {
    this.isDataAvailable = this.persistedData?true:false;
    this.retrieveData();
  }

  prepareInsertStatement(insertData: string): string {
    // TODO Utilizar '?' para los parámetros, como si fuese un preparedStatement.
    // Así se protege uno de inyecciones SQL
    return `INSERT INTO testing VALUES(\'${insertData}\')`;
  }

  prepareUpdateStatement(updateData: string): string {
    return `UPDATE testing SET name = \'${updateData}\'`;
  }

   prepareRetrieveStatement(): string {
    return 'SELECT name FROM testing';
  }

  showSuccessToast(msg): void {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad SqlitePage');
  }

  overwriteData(data: string): void {
    let statement = this.isDataAvailable ? 
                      this.prepareUpdateStatement(data) : this.prepareInsertStatement(data);

        this.database.executeSql(statement, {})
        .then(
          () => {
            this.showSuccessToast('Datos escritos con éxito en la base de datos SQLite');
          }
        )
        .catch(
          (error) => {
            this.showErrorToast(`Error al escribir datos - ${error}`)
          }
        );
  }
}
