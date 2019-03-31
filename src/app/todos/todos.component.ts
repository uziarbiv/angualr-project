import { Component, OnInit,Input } from '@angular/core';
import { Todos } from '../todos';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  model: any = {};
  @Input()
  public todos : Todos[] = [];
  @Input()
  userID : number;
  @Input()
  show : boolean;

  constructor() { }

  

  filterTodosByID(id : number){
    return this.todos.filter(x => x.userId == id);
  }

  markAsComleted(id: number){
    this.todos[id-1].completed = true;   
  }
  todosAdd(){
    var temp = 'todowrapper';
    document.getElementById(temp).style.display = "none";
    document.getElementById('Addtodowrapper').style.display = "block";
  }
  CancelTdo(){
    var temp = 'todowrapper';
    document.getElementById(temp).style.display = "block";
    document.getElementById('Addtodowrapper').style.display = "none";
  }
  AddmoreTodo(){
    console.log(this.model.title);
  }
  ngOnInit() {
  }

}
