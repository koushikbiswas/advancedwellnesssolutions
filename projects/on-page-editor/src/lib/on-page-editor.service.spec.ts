import { TestBed } from '@angular/core/testing';

import { OnPageEditorService } from './on-page-editor.service';

describe('OnPageEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnPageEditorService = TestBed.get(OnPageEditorService);
    expect(service).toBeTruthy();
  });
});
