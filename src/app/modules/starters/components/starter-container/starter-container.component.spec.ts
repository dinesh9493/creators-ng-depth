import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterContainerComponent } from './starter-container.component';

describe('StarterContainerComponent', () => {
  let component: StarterContainerComponent;
  let fixture: ComponentFixture<StarterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
