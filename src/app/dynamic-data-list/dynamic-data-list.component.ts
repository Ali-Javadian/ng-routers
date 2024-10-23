import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-data-list.component.html',
  styleUrl: './dynamic-data-list.component.css'
})
export class DynamicDataListComponent {

  data:any=[{
      id:1,
      title:"parent Num.1 ",
      children:[{id :10,
               title:"Child Num.1",
               children:[
                 {id :
                   100,
                   title:"Child Num.1",
                   children:[
                    {id :
                      100,
                      title:"Child Num.1",
                      children:[
                        {id :
                          100,
                          title:"Child Num.1",
                          children:[ {id :
                            100,
                            title:"Child Num.1",
                            children:[{id :
                              100,
                              title:"Child Num.1",
                              children:[
                               {id :
                                 100,
                                 title:"Child Num.1",
                                 children:[
                                   {id :
                                     100,
                                     title:"Child Num.1",
                                     children:[ {id :
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
                                       }],
                                     parent_id:10
                                     },
                                   {id :
                                     200,
                                     title:"Child Num.2",
                                     children:[ {id :
                                       100,
                                       title:"Child Num.1",
                                       children:[
                                         {id :
                                           100,
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
                                           parent_id:10
                                           },
                                         {id :
                                           200,
                                           title:"Child Num.2",
                                           children:[],
                                           parent_id:10
                                           }
                                       ],
                                       parent_id:10
                                       },
                                     {id :
                                       200,
                                       title:"Child Num.2",
                                       children:[],
                                       parent_id:10
                                       }],
                                     parent_id:10
                                     }
                                 ],
                                 parent_id:10
                                 },
                               {id :
                                 200,
                                 title:"Child Num.2",
                                 children:[],
                                 parent_id:10
                                 }
                              ],
                              parent_id:10
                              },],
                            parent_id:10
                            },
                          {id :
                            200,
                            title:"Child Num.2",
                            children:[],
                            parent_id:10
                            }],
                          parent_id:10
                          },
                        {id :
                          200,
                          title:"Child Num.2",
                          children:[ {id :
                            100,
                            title:"Child Num.1",
                            children:[
                              {id :
                                100,
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
                                parent_id:10
                                },
                              {id :
                                200,
                                title:"Child Num.2",
                                children:[],
                                parent_id:10
                                }
                            ],
                            parent_id:10
                            },
                          {id :
                            200,
                            title:"Child Num.2",
                            children:[],
                            parent_id:10
                            }],
                          parent_id:10
                          }
                      ],
                      parent_id:10
                      },
                    {id :
                      200,
                      title:"Child Num.2",
                      children:[],
                      parent_id:10
                      }
                   ],
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
         children:[{id :
          100,
          title:"Child Num.1",
          children:[
           {id :
             100,
             title:"Child Num.1",
             children:[
               {id :
                 100,
                 title:"Child Num.1",
                 children:[ {id :
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
                   }],
                 parent_id:10
                 },
               {id :
                 200,
                 title:"Child Num.2",
                 children:[ {id :
                   100,
                   title:"Child Num.1",
                   children:[
                     {id :
                       100,
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
                       parent_id:10
                       },
                     {id :
                       200,
                       title:"Child Num.2",
                       children:[],
                       parent_id:10
                       }
                   ],
                   parent_id:10
                   },
                 {id :
                   200,
                   title:"Child Num.2",
                   children:[],
                   parent_id:10
                   }],
                 parent_id:10
                 }
             ],
             parent_id:10
             },
           {id :
             200,
             title:"Child Num.2",
             children:[],
             parent_id:10
             }
          ],
          parent_id:10
          },],
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
             children:[{id :
              100,
              title:"Child Num.1",
              children:[
               {id :
                 100,
                 title:"Child Num.1",
                 children:[
                   {id :
                     100,
                     title:"Child Num.1",
                     children:[ {id :
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
                       }],
                     parent_id:10
                     },
                   {id :
                     200,
                     title:"Child Num.2",
                     children:[ {id :
                       100,
                       title:"Child Num.1",
                       children:[
                         {id :
                           100,
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
                           parent_id:10
                           },
                         {id :
                           200,
                           title:"Child Num.2",
                           children:[],
                           parent_id:10
                           }
                       ],
                       parent_id:10
                       },
                     {id :
                       200,
                       title:"Child Num.2",
                       children:[],
                       parent_id:10
                       }],
                     parent_id:10
                     }
                 ],
                 parent_id:10
                 },
               {id :
                 200,
                 title:"Child Num.2",
                 children:[],
                 parent_id:10
                 }
              ],
              parent_id:10
              },],
             parent_id:2
             }],
       parent : null,
      },
     {
       id:3,
       title:"parent Num.3",
       children:[{id :5,
                title:"Child Num.1",
                children:[{id :
                  100,
                  title:"Child Num.1",
                  children:[
                   {id :
                     100,
                     title:"Child Num.1",
                     children:[
                       {id :
                         100,
                         title:"Child Num.1",
                         children:[ {id :
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
                           }],
                         parent_id:10
                         },
                       {id :
                         200,
                         title:"Child Num.2",
                         children:[ {id :
                           100,
                           title:"Child Num.1",
                           children:[
                             {id :
                               100,
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
                               parent_id:10
                               },
                             {id :
                               200,
                               title:"Child Num.2",
                               children:[],
                               parent_id:10
                               }
                           ],
                           parent_id:10
                           },
                         {id :
                           200,
                           title:"Child Num.2",
                           children:[],
                           parent_id:10
                           }],
                         parent_id:10
                         }
                     ],
                     parent_id:10
                     },
                   {id :
                     200,
                     title:"Child Num.2",
                     children:[],
                     parent_id:10
                     }
                  ],
                  parent_id:10
                  },{id :
                    100,
                    title:"Child Num.1",
                    children:[
                     {id :
                       100,
                       title:"Child Num.1",
                       children:[
                         {id :
                           100,
                           title:"Child Num.1",
                           children:[ {id :
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
                             }],
                           parent_id:10
                           },
                         {id :
                           200,
                           title:"Child Num.2",
                           children:[ {id :
                             100,
                             title:"Child Num.1",
                             children:[
                               {id :
                                 100,
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
                                 parent_id:10
                                 },
                               {id :
                                 200,
                                 title:"Child Num.2",
                                 children:[],
                                 parent_id:10
                                 }
                             ],
                             parent_id:10
                             },
                           {id :
                             200,
                             title:"Child Num.2",
                             children:[],
                             parent_id:10
                             }],
                           parent_id:10
                           }
                       ],
                       parent_id:10
                       },
                     {id :
                       200,
                       title:"Child Num.2",
                       children:[],
                       parent_id:10
                       }
                    ],
                    parent_id:10
                    }],
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
                     children:[{id :
                      100,
                      title:"Child Num.1",
                      children:[
                       {id :
                         100,
                         title:"Child Num.1",
                         children:[
                           {id :
                             100,
                             title:"Child Num.1",
                             children:[ {id :
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
                               }],
                             parent_id:10
                             },
                           {id :
                             200,
                             title:"Child Num.2",
                             children:[ {id :
                               100,
                               title:"Child Num.1",
                               children:[
                                 {id :
                                   100,
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
                                   parent_id:10
                                   },
                                 {id :
                                   200,
                                   title:"Child Num.2",
                                   children:[],
                                   parent_id:10
                                   }
                               ],
                               parent_id:10
                               },
                             {id :
                               200,
                               title:"Child Num.2",
                               children:[],
                               parent_id:10
                               }],
                             parent_id:10
                             }
                         ],
                         parent_id:10
                         },
                       {id :
                         200,
                         title:"Child Num.2",
                         children:[],
                         parent_id:10
                         }
                      ],
                      parent_id:10
                      },],
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
   
    
    // Store selected indexes for each level (dynamic)
    selectedIndexes: number[] = [];
  
    // Store data for each level (dynamic)
    data_array: any[] = [this.data];
   
  
    path_array: string[] = [];
  
    // Select an item and dynamically load the next level
    selectItem(levelIndex: number, itemIndex: number) {
      // Truncate selected indexes and data array up to the current level
      this.selectedIndexes = this.selectedIndexes.slice(0, levelIndex);
      this.data_array = this.data_array.slice(0, levelIndex +1);
  
      // Update the selected index for this level
      this.selectedIndexes[levelIndex] = itemIndex;
  
      // Add the item title to the path
      this.updatePathMenu();
  
      // Get selected item
      const selectedItem = this.data_array[levelIndex][itemIndex];
  
      // If the selected item has children, load the next level
      if (selectedItem.children && selectedItem.children.length > 0) {
        this.data_array.push(selectedItem.children);
      }
      
    }
  
    // Dynamically update the breadcrumb path
    updatePathMenu() {
      this.path_array = this.selectedIndexes.map((index, level) => {
        return this.data_array[level][index].title;
      });
    }
  
    // Helper to set the background color for active item
    isActive(levelIndex: number, itemIndex: number) {
      return this.selectedIndexes[levelIndex] === itemIndex ? 'lightblue' : 'white';
    }
  }
