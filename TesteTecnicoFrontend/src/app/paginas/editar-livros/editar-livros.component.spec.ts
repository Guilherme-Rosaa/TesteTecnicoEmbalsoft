import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLivroComponent } from './editar-livros.component';

describe('EditarLivrosComponent', () => {
  let component: EditarLivroComponent;
  let fixture: ComponentFixture<EditarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarLivroComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
