import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListeComponent } from './photo-liste.component';

describe('PhotoListeComponent', () => {
  let component: PhotoListeComponent;
  let fixture: ComponentFixture<PhotoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
