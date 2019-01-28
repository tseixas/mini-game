import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingGameComponent } from './starting-game.component';

describe('StartingGameComponent', () => {
  let component: StartingGameComponent;
  let fixture: ComponentFixture<StartingGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
