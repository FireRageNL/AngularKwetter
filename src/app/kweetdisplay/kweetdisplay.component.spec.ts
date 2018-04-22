import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KweetdisplayComponent } from './kweetdisplay.component';

describe('KweetdisplayComponent', () => {
  let component: KweetdisplayComponent;
  let fixture: ComponentFixture<KweetdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KweetdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KweetdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
