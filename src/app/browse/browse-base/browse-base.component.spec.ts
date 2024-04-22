import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBaseComponent } from './browse-base.component';

describe('BrowseBaseComponent', () => {
  let component: BrowseBaseComponent;
  let fixture: ComponentFixture<BrowseBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
