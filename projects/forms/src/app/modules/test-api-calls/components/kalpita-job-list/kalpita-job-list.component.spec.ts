import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpitaJobListComponent } from './kalpita-job-list.component';

describe('KalpitaJobListComponent', () => {
  let component: KalpitaJobListComponent;
  let fixture: ComponentFixture<KalpitaJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalpitaJobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalpitaJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
