import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBuilderComponent } from './forms-builder.component';

describe('FormsBuilderComponent', () => {
  let component: FormsBuilderComponent;
  let fixture: ComponentFixture<FormsBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
