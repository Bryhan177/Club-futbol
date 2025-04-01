import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPartidosComponent } from './resultados-partidos.component';

describe('ResultadosPartidosComponent', () => {
  let component: ResultadosPartidosComponent;
  let fixture: ComponentFixture<ResultadosPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosPartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
