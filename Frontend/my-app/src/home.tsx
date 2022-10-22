import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any,any>{

     constructor(props: any){
         super(props)
         this.state = { counter: 0}
         this.increment = this.increment.bind(this)
     }
        increment(){
            this.setState({counter: this.state.counter + 1})
        }
     render(){
         return (
             <div>
                 <p>
                     Home Pages
                 </p>
                 <Link to={"/fun"}>Fun</Link>
                 <p>{this.state.counter}</p>
                 <button onClick={this.increment}>Count</button>
             </div>
         )
     }
}