import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinehtmlComponent } from './inlinehtml.component';

describe('InlinehtmlComponent', () => {
  let component: InlinehtmlComponent;
  let fixture: ComponentFixture<InlinehtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlinehtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinehtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
