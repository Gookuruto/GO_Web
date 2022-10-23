import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css'
import CSS from 'csstype';
import Button from 'react-bootstrap/Button';


const h1: CSS.Properties = {
    textAlign: "center"
}
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
             <div className={styles.centerized_page}>
                 <p>
                     Home Page
                 </p>
                 <p>{this.state.counter}</p>
                 <Button variant='primary' onClick={this.increment}>Count</Button>
             </div>
         )
     }
}