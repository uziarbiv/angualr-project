import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetDataComponent } from './get-data/get-data.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { SearchComponent } from './search/search.component';
import { UtilsPipe } from './utils.pipe';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    DisplayuserComponent,
    SearchComponent,
    UtilsPipe,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
