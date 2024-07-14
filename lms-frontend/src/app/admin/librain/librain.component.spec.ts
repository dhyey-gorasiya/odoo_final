import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrainComponent } from './librain.component';

describe('LibrainComponent', () => {
  let component: LibrainComponent;
  let fixture: ComponentFixture<LibrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
