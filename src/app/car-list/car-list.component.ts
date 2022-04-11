import { Component, OnInit } from '@angular/core';
import { FirebaseApiService } from '../firebase-api.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  data: Car[];
  MyCars: any = [];
  show: boolean;
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

}
