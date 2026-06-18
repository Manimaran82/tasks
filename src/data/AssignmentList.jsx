//Task 1

import {StudentProfile as StudentProfile1, EmployeeCard, ProductCard, MovieDetails, CompanyInfo} from '../assignments/assignment1/Index'
//Task 2
import {Home,About,Contact,Login} from '../assignments/assignment2/Index'
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
      { id: 4, title: "Login", path: "/day2/login", component: Login },
      
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

]