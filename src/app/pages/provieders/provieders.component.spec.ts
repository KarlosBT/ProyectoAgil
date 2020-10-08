import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviedersComponent } from './provieders.component';

describe('ProviedersComponent', () => {
  let component: ProviedersComponent;
  let fixture: ComponentFixture<ProviedersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviedersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviedersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
