import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsItemComponent } from './songs-item.component';

describe('SongsItemComponent', () => {
  let component: SongsItemComponent;
  let fixture: ComponentFixture<SongsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
