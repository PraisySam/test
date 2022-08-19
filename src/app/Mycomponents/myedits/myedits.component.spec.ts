import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeditsComponent } from './myedits.component';

describe('MyeditsComponent', () => {
  let component: MyeditsComponent;
  let fixture: ComponentFixture<MyeditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyeditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
