import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPageEditorComponent } from './on-page-editor.component';

describe('OnPageEditorComponent', () => {
  let component: OnPageEditorComponent;
  let fixture: ComponentFixture<OnPageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
