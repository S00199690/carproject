import { Component, OnInit, Input, IterableChangeRecord } from '@angular/core';
import { FirebaseApiService } from '../firebase-api.service';
import { Car } from "../car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [FirebaseApiService]
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  MyCars: any = [];
  carImageWidth: number = 450;
  carImageHeight: number = 300;
  constructor(private firebaseAPIService: FirebaseApiService) { }

   ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    return this.firebaseAPIService.getCars().subscribe((data: {}) => {
      this.MyCars = data;
    })
  } 

  deleteCar(carId: string) {
    console.log(carId);
    return this.firebaseAPIService.delCar(carId).subscribe((data: {}) => {
      this.MyCars = data;
    })
  }
}



