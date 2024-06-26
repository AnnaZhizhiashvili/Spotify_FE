import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularArtistsComponent } from './popular-artists.component';

describe('PopularArtistsComponent', () => {
  let component: PopularArtistsComponent;
  let fixture: ComponentFixture<PopularArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularArtistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
