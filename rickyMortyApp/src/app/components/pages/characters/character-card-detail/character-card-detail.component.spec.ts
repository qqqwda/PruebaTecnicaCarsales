import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardDetailComponent } from './character-card-detail.component';

describe('CharacterCardDetailComponent', () => {
  let component: CharacterCardDetailComponent;
  let fixture: ComponentFixture<CharacterCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
