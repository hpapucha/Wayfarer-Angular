import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonComponent } from './ron.component';

describe('RonComponent', () => {
  let component: RonComponent;
  let fixture: ComponentFixture<RonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
