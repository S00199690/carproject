import { Component } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MyCars: any = [];
  makeValue = '';
  modelValue = '';
  engineValue = '';
  transmissionValue = '';
  imageURLValue = '';


  constructor(public firebaseApiService: FirebaseApiService) {

  }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    return this.firebaseApiService.getCars().subscribe((data: {}) => {
      this.MyCars = data;
    })
  }

  addCar() {
    return this.firebaseApiService.addCar(this.makeValue, this.modelValue, this.engineValue, this.transmissionValue, this.imageURLValue).subscribe((data: {}) => {
      this.MyCars = data;
      this.makeValue = '';
      this.modelValue = '';
      this.engineValue = '';
      this.transmissionValue = '';
      this.imageURLValue = '';
    })
  }

  deleteCar(id: string) {
    return this.firebaseApiService.delCar(id).subscribe((data: {}) => {
      this.MyCars = data;
    })
  }
}
