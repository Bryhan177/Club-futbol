import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarJogoComponent } from './lugar-jogo.component';

describe('LugarJogoComponent', () => {
  let component: LugarJogoComponent;
  let fixture: ComponentFixture<LugarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
