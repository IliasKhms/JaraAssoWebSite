import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventForComingCardComponent } from './event-for-coming-card.component';

describe('EventForComingCardComponent', () => {
  let component: EventForComingCardComponent;
  let fixture: ComponentFixture<EventForComingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventForComingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventForComingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
