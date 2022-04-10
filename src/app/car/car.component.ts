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
  carImageWidth: number = 300;
  constructor(private _firebaseAPIService: FirebaseApiService) { }

  ngOnInit() {
  }

  deleteCar(carId: string) {
    console.log(carId);
    this._firebaseAPIService.delCar(carId);
  }

}

