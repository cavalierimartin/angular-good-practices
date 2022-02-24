import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionInsideSubscriptionComponent } from './subscription-inside-subscription.component';

describe('SubscriptionInsideSubscriptionComponent', () => {
  let component: SubscriptionInsideSubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionInsideSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionInsideSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionInsideSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
