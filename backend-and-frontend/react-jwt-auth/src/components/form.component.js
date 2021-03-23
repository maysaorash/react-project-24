import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
      super(props)
      this.state={
            name:"",
            email:"",
            phone:"",
            position:"",
            department:"",
            jobTitle: "",
            additionalInfo: "",
            isActive: true
      };
 this.initialState=this.state
    }
    inputHandler=(e)=>{
     this.setState({
       [e.target.name] : e.target.value 
     })
    //  console.log(this.state)
    }
    handleClick=(e)=>{
        e.preventDefault()
     this.props.create(this.state)
      this.setState(this.initialState)
    }
    render() {
        console.log(this.props)
        return (
            <div>
              <form>
              <label>name<input onChange={this.inputHandler} type="text" name="name" value={this.state.name}/></label> 
              <label>email<input onChange={this.inputHandler} type="text" name="email" value={this.state.email}/></label>    
              <label>phone<input onChange={this.inputHandler} type="number" name="phone" value={this.state.phone}/></label>    
              <label>position<input onChange={this.inputHandler} type="text" name="position" value={this.state.position}/></label>       
              <label>jobTitle<input onChange={this.inputHandler} type="text" name="jobTitle" value={this.state.jobTitle}/></label>  
              <label>department<input onChange={this.inputHandler} type="text" name="department" value={this.state.department}/></label>   
              <label>additionalInfo<input onChange={this.inputHandler} type="text" name="additionalInfo" value={this.state.additionalInfo}/></label>
              <button type="submit" onClick={this.handleClick}>submit</button>
            </form>  
            </div>
        )
    }
}

