//Task 1

import {StudentProfile as StudentProfile1, EmployeeCard, ProductCard, MovieDetails, CompanyInfo} from '../assignments/assignment1/Index'
//Task 2
import {Home,About,Contact,Login as Login2} from '../assignments/assignment2/Index'
//Task 3
import {Employee,Product,Skills,UserCard} from '../assignments/assignment3/Index'
//Task 4
import {SchoolCards, Schoollist, StudentProfile as StudentProfile4, StudentCards} from '../assignments/assignment4/Index'
//Task 5
import {Array,Comp,Count,Lifecycle,Object,Usestate} from '../assignments/assignment5/Index'
//Task 6
import {Task1,Task2,Task3,Task4,Task5,Task6,Task7,Task8,Task9,Task10} from '../assignments/assignment6/Index'
//Task 7
import {Array as Array7,Object as Object7,Arrobj} from '../assignments/assignment7/Index'
//Task 8
import { Task1 as Task1_8, Task2 as Task2_8, Task3 as Task3_8, Task4 as Task4_8, Task5 as Task5_8, Task6 as Task6_8, Task7 as Task7_8, Task8 as Task8_8,Task9 as Task9_8,Task10 as Task10_8, Task11 as Task11_8, Task12 as Task12_8} from '../assignments/assignment8/Index'
//Task 9
import {Button , Higher , withHigher} from '../assignments/assignment9/Index'
//Task 10
import {Mapping} from '../assignments/assignment10/Index'
//Task 11
import {Students,Employee as Employee11,Product as Product11,Profile,School} from '../assignments/assignment11/Index'
//Task 12
import {Register,Login as Login12,DashBoard} from '../assignments/assignment12/Index'
//Task 13
import {Employ,Logi,Productes,Profiles,Registers,Schooldetails,Studentdetails} from '../assignments/assignment13/Index'
//Task 14
import {Componentload,Countdisplay,Counterconsole,Apicarts,Digitalclock,Timersec} from '../assignments/assignment14/Index'
//Task 15
import {Searchstudent,Searchproduct,Searchemplohye,Searchcourse} from '../assignments/assignment15/Index'
//Task 16
import {Searchfilter} from '../assignments/assignment16/Index'
//Task 17
import {Todoprocees} from '../assignments/assignment17/Index'
//Task18
import {Input,Scrolling,Toggle} from '../assignments/assignment18/Indus'
export const assignments = [
    {
        id : "day1",
        title : "Assignment 1",
        tasks : [
      {id:1 ,title:"Student Profile" ,path:'/day1/student-card' ,component :StudentProfile1 },
      { id: 2, title: "Employee Card", path: "/day1/employee-card", component: EmployeeCard },
      { id: 3, title: "Product Card", path: "/day1/product-card", component: ProductCard },
      { id: 4, title: "Movie Details", path: "/day1/movie-details", component: MovieDetails },
      { id: 5, title: "Company Info", path: "/day1/company-info", component: CompanyInfo },
     
        ]
    },
    {
        id : "day2",
        title : "Assignment 2",
        tasks : [
      {id:1 ,title:"Home" ,path:'/day2/home' ,component :Home },
      { id: 2, title: "About", path: "/day2/about", component: About },
      { id: 3, title: "Contact", path: "/day2/contact", component: Contact },
      { id: 4, title: "Login", path: "/day2/login", component: Login2 },
      
        ]
    },

    {
        id : "day3",
        title : "Assignment 3",
        tasks : [
      {id:1 ,title:"Employee" ,path:'/day3/employee' ,component :Employee },
      { id: 2, title: "Product", path: "/day3/product", component: Product },
      { id: 3, title: "Skills", path: "/day3/skills", component: Skills },
      { id: 4, title: "UserCard", path: "/day3/usercard", component: UserCard },
      
        ]
    },

     {
        id : "day4",
        title : "Assignment 4",
        tasks : [
      {id:1 ,title:"SchoolCards" ,path:'/day4/schoolCards' ,component :SchoolCards },
      { id: 2, title: "Schoollist", path: "/day4/schoollist", component: Schoollist },
      { id: 3, title: "StudentProfile", path: "/day4/studentProfile", component: StudentProfile4 },
      { id: 4, title: "StudentCards", path: "/day4/studentCards", component: StudentCards },
      
        ]
    }
      ,
    {
        id : "day5",
        title : "Assignment 5",
        tasks : [
      {id:1 ,title:"Array" ,path:'/day5/array' ,component :Array },
      { id: 2, title: "Class", path: "/day4/class", component: Comp },
      { id: 3, title: "Count", path: "/day4/count", component: Count },
      { id: 4, title: "Lifecycle", path: "/day4/lifecycle", component: Lifecycle },
      { id: 5, title: "Object", path: "/day4/object", component: Object },
      { id: 6, title: "Usestate", path: "/day4/usestate", component: Usestate }
      
        ]
    }

    ,
    {
        id : "day6",
        title : "Assignment 6",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day5/Task1' ,component :Task1 },
      { id: 2, title: "Task2", path: "/day4/task2", component: Task2 },
      { id: 3, title: "Task3", path: "/day4/task3", component: Task3 },
      { id: 4, title: "Task4", path: "/day4/task4", component: Task4 },
      { id: 5, title: "Task5", path: "/day4/task5", component: Task5 },
      { id: 6, title: "Task6", path: "/day4/task6", component: Task6 },
      { id: 7, title: "Task7", path: "/day4/task7", component: Task7 },
      { id: 8, title: "Task8", path: "/day4/task8", component: Task8 },
      { id: 9, title: "Task9", path: "/day4/task9", component: Task9 },
      { id: 10, title: "Task10", path: "/day4/task10", component: Task10 }
      
        ]
    },
    
     {
        id : "day7",
        title : "Assignment 7",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day7/Task1' ,component :Array7 },
      { id: 2, title: "Task2", path: "/day7/task2", component:Object7 },
      { id: 3, title: "Task3", path: "/day7/task3", component:Arrobj }
     
      
        ]
    }

    ,
    {
        id : "day8",
        title : "Assignment 8",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day8/Task1' ,component :Task1_8 },
          { id: 2, title: "Task2", path: "/day8/task2", component: Task2_8 },
          { id: 3, title: "Task3", path: "/day8/task3", component: Task3_8 },
          { id: 4, title: "Task4", path: "/day8/task4", component: Task4_8 },
          { id: 5, title: "Task5", path: "/day8/task5", component: Task5_8 },
          { id: 6, title: "Task6", path: "/day8/task6", component: Task6_8 },
          { id: 7, title: "Task7", path: "/day8/task7", component: Task7_8 },
          { id: 8, title: "Task8", path: "/day8/task8", component: Task8_8 },
          { id: 9, title: "Task9", path: "/day8/task9", component: Task9_8 },
          { id: 10, title: "Task10", path: "/day8/task10", component: Task10_8 },
      { id: 11, title: "Task11", path: "/day8/task11", component: Task11_8},
       { id: 12, title: "Task12", path: "/day8/task12", component: Task12_8 }
      
        ]
    }
,
     {
        id : "day9",
        title : "Assignment 9",
        tasks : [
          {id:1 ,title:"Task 1" ,path:'/day9/button' ,component :Button },
          { id: 2, title: "Task 2", path: "/day9/higher", component: Higher },
          { id: 3, title: "Task 3", path: "/day9/with-higher", component: withHigher }
        ]
        }
        ,
         {
        id : "day10",
        title : "Assignment 10",
        tasks : [
          {id:1 ,title:"Task 1" ,path:'/day10/Mapping' ,component :Mapping }
         
          
        ]
        }
        ,
        {
        id : "day11",
        title : "Assignment 11",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day11/Task1' ,component :Students },
      { id: 2, title: "Task2", path: "/day11/task2", component:Employee11 },
      { id: 3, title: "Task3", path: "/day11/task3", component:Product11 },
      { id: 4, title: "Task4", path: "/day11/task4", component:Profile },
      { id: 5, title: "Task5", path: "/day11/task5", component:School }
     
      
        ]
    }
    ,
     {
        id : "day12",
        title : "Assignment 12",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day12/Task1' ,component :Register },
      { id: 2, title: "Task2", path: "/day12/task2", component:Login12 },
      { id: 3, title: "Task3", path: "/day12/task3", component:DashBoard },
        ]
    }
    ,
    {
        id : "day13",
        title : "Assignment 13",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day13/Task1' ,component :Employ },
      { id: 2, title: "Task2", path: "/day13/task2", component:Logi },
      { id: 3, title: "Task3", path: "/day13/task3", component:Productes },
      { id: 4, title: "Task4", path: "/day13/task4", component:Profiles },
      { id: 5, title: "Task5", path: "/day13/task5", component:Registers },
      { id: 6, title: "Task5", path: "/day13/task5", component:Schooldetails },
      { id: 7, title: "Task5", path: "/day13/task5", component:Studentdetails }
        ]
    }
    ,
     {
        id : "day14",
        title : "Assignment 14",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day14/Task1' ,component :Componentload },
      { id: 2, title: "Task2", path: "/day14/task2", component:Countdisplay },
      { id: 3, title: "Task3", path: "/day14/task3", component:Counterconsole },
      { id: 4, title: "Task4", path: "/day14/task4", component:Digitalclock },
      { id: 5, title: "Task5", path: "/day14/task5", component:Apicarts },
      { id: 6, title: "Task6", path: "/day14/task5", component:Timersec }
     
        ]
    }
     ,
     {
        id : "day15",
        title : "Assignment 15",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day15/Task1' ,component :Searchstudent },
      { id: 2, title: "Task2", path: "/day15/task2", component:Searchproduct },
      { id: 3, title: "Task3", path: "/day15/task3", component:Searchemplohye },
      { id: 4, title: "Task4", path: "/day15/task4", component:Searchcourse }
      
     
        ]
    }
    ,
    {
        id : "day16",
        title : "Assignment 16",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day16/Task1' ,component :Searchfilter }
     
        ]
    }
    ,
     {
        id : "day17",
        title : "Assignment 17",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day17/Task1' ,component :Todoprocees}
     
        ]
    }
    ,
    {
        id : "day18",
        title : "Assignment 18",
        tasks : [
      {id:1 ,title:"Task1" ,path:'/day18/Task1' ,component :Input },
      { id: 2, title: "Task2", path: "/day18/task2", component:Scrolling },
      { id: 3, title: "Task3", path: "/day18/task3", component:Toggle }
     
        ]
    }
]