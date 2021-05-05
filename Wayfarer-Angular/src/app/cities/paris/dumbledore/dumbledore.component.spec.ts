import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbledoreComponent } from './dumbledore.component';

describe('DumbledoreComponent', () => {
  let component: DumbledoreComponent;
  let fixture: ComponentFixture<DumbledoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbledoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbledoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
