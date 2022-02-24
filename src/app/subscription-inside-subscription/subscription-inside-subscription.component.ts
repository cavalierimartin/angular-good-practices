import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-subscription-inside-subscription',
  templateUrl: './subscription-inside-subscription.component.html',
  styleUrls: ['./subscription-inside-subscription.component.scss']
})
export class SubscriptionInsideSubscriptionComponent implements OnInit {



  constructor(private dummyService: DummyService) { }

  ngOnInit(): void {
    this.callSubscriptionsWrongWay();
  }

  callSubscriptionsRightWay() {
    // We are keeping this as simple as we can, to make it easier to read, but remember to use all the good practice when you are using observables
    this.dummyService.serviceA().pipe(
      switchMap(serviceAResponse => {
        return this.dummyService.serviceB(serviceAResponse)
      })
    ).subscribe(serviceBResponse => {
      // Do whatever you need with the value
      console.log(serviceBResponse);
    })
  }

  callSubscriptionsWrongWay() {
    this.dummyService.serviceA().subscribe(valueA => {
      console.log("valueA", valueA);
      if (valueA.includes('1')) {
        this.dummyService.serviceB(valueA).subscribe(valueB => {
          console.log('valueB', valueB);
        })
      }
    })
  }

}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DummyService {
  constructor() { }

  serviceA(): Observable<string> {
    return of('A1', 'A2', 'A1');
  }

  serviceB(requiredParam: string): Observable<string> {
    if (requiredParam.includes('1')) {
      return of('B: value has a 1')
    } else {
      return of('B: value doesnt have a 1')
    }
  }
}
