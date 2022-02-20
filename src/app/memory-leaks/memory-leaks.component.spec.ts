import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeaksComponent } from './memory-leaks.component';

describe('MemoryLeaksComponent', () => {
  let component: MemoryLeaksComponent;
  let fixture: ComponentFixture<MemoryLeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryLeaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryLeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
