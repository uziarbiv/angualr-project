import { Component, OnInit} from '@angular/core';
import { DalService } from '../dal.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Posts } from '../posts';
import { Todos } from '../todos';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  searching : string;
  TempUsers : any[] = []; 
  TempTodos : any[] = []; 
  TempPosts : any[] = []; 
  public Posts : Posts[] = []; 
  public Users : Users[] = []; 
  public Todos : Todos[] = [];
  
  showTodos: boolean = false;
  pickedUserID : number = null;
  UsersUrl : string = "https://jsonplaceholder.typicode.com/users";
  PostsUrl : string = "https://jsonplaceholder.typicode.com/posts";
  TodosUrl : string = "https://jsonplaceholder.typicode.com/todos";


  constructor(private dal : DalService) { 
    
  }
  UpdateUser(isValid : boolean ,id :number)
  {
    
    if(isValid)
    {
     console.log('valid');

    } else {
      console.log('not valid');
    }
    
  }
  completed (id : number) {
    
    var completedClass = 'green';
   for (var i = 0; i < this.Todos.length; i++) {
        if (id == this.Todos[i].userId) {
            if (this.Todos[i].completed == false){
              completedClass = 'red';
              return completedClass;
            }
          }
        }
        return completedClass; 
  }
  PickID(id : number){
    if (this.pickedUserID != null) {
      var temp1 = 'userWrapper'+ this.pickedUserID;
      var element1 = document.getElementById(temp1);
      element1.classList.remove("pickedUser"); 
    }
    var temp = 'userWrapper'+ id;
    var element = document.getElementById(temp);
    element.classList.toggle("pickedUser"); 
    if(!this.showTodos){
      this.showTodos = true;
    }
    else {
      this.showTodos = false;
      element.classList.toggle("pickedUser"); 
    }
    this.pickedUserID = id;

  }
  showinfo(id : number) {
    var temp = 'moreinfoWrapper'+ id
    document.getElementById(temp).style.display = "block";
  }
  
  hideinfo(id : number){
    var temp = 'moreinfoWrapper'+ id
    document.getElementById(temp).style.display = "none";
  }
  
  deleteUSer(id : number){
    for (var i = 0; i < this.Users.length; i++) {
    if(this.Users[i].id == id) {
      this.Users.splice(i, 1);
      return;
    }
    }
  }
  indexTracker(index: number, value: any) {
    return index;
  }
  
  ngOnInit() {
   
      this.dal.getData(this.UsersUrl).subscribe((res : any[])=>{ this.TempUsers = res; 
        for(var i = 0 ; i < this.TempUsers.length; i++){
          this.Users[i] = new Users( this.TempUsers[i]['id'],this.TempUsers[i]['name'],this.TempUsers[i]['email'],this.TempUsers[i]['address']['street'],this.TempUsers[i]['address']['city'],this.TempUsers[i]['address']['zipcode']);
        }
      });  
      this.dal.getData(this.PostsUrl).subscribe((res : any[])=>{ this.TempPosts = res;
        for(var i = 0 ; i < this.TempPosts.length; i++){
          this.Posts[i] = new Posts( this.TempPosts[i]['userId'],this.TempPosts[i]['id'],this.TempPosts[i]['title'],this.TempPosts[i]['body']);
        }
      });  
      this.dal.getData(this.TodosUrl).subscribe((res : any[])=>{ this.TempTodos = res;
        for(var i = 0 ; i < this.TempTodos.length; i++){
          this.Todos[i] = new Todos( this.TempTodos[i]['userId'],this.TempTodos[i]['id'],this.TempTodos[i]['title'],this.TempTodos[i]['completed']);
        }
      });    
      
  }  
 
}
