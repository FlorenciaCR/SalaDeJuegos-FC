import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosrComponent } from './juegosr.component';

describe('JuegosrComponent', () => {
  let component: JuegosrComponent;
  let fixture: ComponentFixture<JuegosrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
