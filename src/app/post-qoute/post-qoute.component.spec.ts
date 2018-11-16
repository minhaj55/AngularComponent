import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQouteComponent } from './post-qoute.component';

describe('PostQouteComponent', () => {
  let component: PostQouteComponent;
  let fixture: ComponentFixture<PostQouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostQouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
