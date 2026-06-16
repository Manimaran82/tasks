import { Component } from "react";


class Comp extends Component{

     render(){
         const str = "This is DashBoard"

        return(
            <div className="bg-blue-700 text-2xl text-white h-screen">
                <h1>{str}</h1>
            </div>
        )


     }
   
}
export default Comp