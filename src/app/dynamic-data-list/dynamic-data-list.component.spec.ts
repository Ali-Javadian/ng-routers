import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataListComponent } from './dynamic-data-list.component';

describe('DynamicDataListComponent', () => {
  let component: DynamicDataListComponent;
  let fixture: ComponentFixture<DynamicDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDataListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
