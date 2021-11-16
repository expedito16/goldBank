import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransacaoComponent } from './listar-transacao.component';

describe('ListarTransacaoComponent', () => {
  let component: ListarTransacaoComponent;
  let fixture: ComponentFixture<ListarTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTransacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
