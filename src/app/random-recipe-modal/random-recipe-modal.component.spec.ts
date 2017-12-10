import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRecipeModalComponent } from './random-recipe-modal.component';

describe('RandomRecipeModalComponent', () => {
  let component: RandomRecipeModalComponent;
  let fixture: ComponentFixture<RandomRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomRecipeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
