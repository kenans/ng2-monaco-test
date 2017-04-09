import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    MonacoEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
