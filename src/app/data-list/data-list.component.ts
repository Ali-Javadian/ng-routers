import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {

constructor(){

}

data:any=[{
   id:1,
   title:"parent Num.1 ",
   children:[{id :10,
            title:"Child Num.1",
            children:[
              {id :
                100,
                title:"Child Num.1",
                children:[],
                parent_id:10
                },
              {id :
                200,
                title:"Child Num.2",
                children:[],
                parent_id:10
                }
            ],
            parent_id:1
            },
            {id :20,
              title:"Child Num.2",
              children:[],
              parent_id:1
              }
              ,
              {id :30,
                title:"Child Num.3",
                parent_id:1
                }
                ,
                {id :40,
                  title:"Child Num.4",
                  parent_id:1
                  }
              ],
  parent : null,
  },
  {
    id:2,
    title:"parent Num.2",
    children:[{id :10,
      title:"Child Num.1",
      children:[],
      parent_id:2
      },
      {id :20,
        title:"Child Num.2",
        parent_id:2
        }
        ,
        {id :
          30,
          title:"Child Num.3",
          children:[],
          parent_id:2
          }],
    parent : null,
   },
  {
    id:3,
    title:"parent Num.3",
    children:[{id :5,
             title:"Child Num.1",
             children:[],
             parent_id:3
             }],
    parent : null,
   },
  {
    id:4,
    title:"parent Num.4",
    parent : null,
   },
   {
    id:5,
    title:"parent Num.5",
    children:[{id :10,
             title:"Child Num.1",
             parent_id:5
             },
             {id :20,
              title:"Child Num.2",
              children:[
                {id :
                  100,
                  title:"Child Num.1",
                  children:[],
                  parent_id:20
                  },
                {id :
                  200,
                  title:"Child Num.2",
                  children:[],
                  parent_id:20
                  },
                  {id :
                    300,
                    title:"Child Num.3",
                    children:[],
                    parent_id:20
                    },
                    {id :
                      400,
                      title:"Child Num.4",
                      children:[],
                      parent_id:20
                      }
              ],
              parent_id:5
              }
            ],
    parent : null,
   },

];

parent_index = -1;
children_index = -1;
grandchild_index = -1;

active_parent:boolean[]=[];
active_children:boolean[]=[];
active_grandchild:boolean[]=[];

select_parent_item(i:any){
  this.parent_index = i
  this.children_index = -1;
  this.active_parent = this.active_parent.map(()=> false)
  this.active_parent[i] = true;
  this.path_menu();
}

select_cildren_item(i:any){
  this.children_index = i
 this.grandchild_index = -1;
 this.active_children = this.active_children.map(()=> false)
 this.active_children[i] = true;
 this.path_menu();
}

select_grandchild_item(i:any){
  this.grandchild_index = i
 this.active_grandchild = this.active_grandchild.map(()=> false)
 this.active_grandchild[i] = true;
 this.path_menu();
}




parent_background_color(i:any){
  return this.active_parent[i] ? 'lightblue' : 'white';
}

children_background_color(i:any){
  return this.active_children[i] ? 'lightgreen' : 'white';
}

grandchild_background_color(i:any){
  return this.active_grandchild[i] ? ' lightpink' : 'white';
}

path_array:any[]=[];

path_menu(){
  this.path_array= [];
  if (this.parent_index >= 0){
    this.path_array.push(this.data[this.parent_index].title)
    if(this.children_index >=0){
    this.path_array.push(this.data[this.parent_index].children[this.children_index].title)
    if(this.grandchild_index >=0){
    this.path_array.push(this.data[this.parent_index].children[this.children_index].children[this.grandchild_index].title)

    }
    }
  }
}


}
 