import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedVideoComponent } from './liked-video.component';

describe('LikedVideoComponent', () => {
  let component: LikedVideoComponent;
  let fixture: ComponentFixture<LikedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
