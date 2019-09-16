import { NgModule } from '@angular/core';
import { OnPageEditorComponent } from './on-page-editor.component';
import {DemoMaterialModule} from '../materialmodules';

@NgModule({
  declarations: [OnPageEditorComponent],
  imports: [
    DemoMaterialModule
  ],
  exports: [OnPageEditorComponent]
})
export class OnPageEditorModule { }
