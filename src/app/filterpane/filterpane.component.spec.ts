import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterpaneComponent } from './filterpane.component';

describe('FilterpaneComponent', () => {
  let component: FilterpaneComponent;
  let fixture: ComponentFixture<FilterpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
