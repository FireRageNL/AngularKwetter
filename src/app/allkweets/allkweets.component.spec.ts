import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllkweetsComponent } from './allkweets.component';

describe('AllkweetsComponent', () => {
  let component: AllkweetsComponent;
  let fixture: ComponentFixture<AllkweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllkweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllkweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
