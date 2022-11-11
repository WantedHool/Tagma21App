import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownSyndromePageComponent } from './down-syndrome-page.component';

describe('DownSyndromePageComponent', () => {
  let component: DownSyndromePageComponent;
  let fixture: ComponentFixture<DownSyndromePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownSyndromePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownSyndromePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
