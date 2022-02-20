import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leaks',
  templateUrl: './memory-leaks.component.html',
  styleUrls: ['./memory-leaks.component.scss']
})
export class MemoryLeaksComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  observable = of('observalble value 1')

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.observable.subscribe(value => {
        // Lo que sea que debas hacer
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
