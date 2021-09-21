import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropItemsComponent } from './drop-items.component';

describe('DropItemsComponent', () => {
  let component: DropItemsComponent;
  let fixture: ComponentFixture<DropItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
