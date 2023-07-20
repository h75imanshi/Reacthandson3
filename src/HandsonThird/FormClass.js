import React, { Component } from 'react';
import './style.css'
import DisplayForm from './DisplayForm'

class Formclass extends Component {
    state={
        Name:'',
        Dept:'',
        Rate:'',
        Clicked :true,
        EmpData : []
    }
changeHandle=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    // console.log(this.state.Name);
}
toggleFunc=()=>
{
    this.setState({Clicked:! this.state.Clicked})
}
clickHandle=(e)=>{
    e.preventDefault();
    const newObj={
        name:this.state.Name,
        dept:this.state.Dept,
         rate:this.state.Rate
    }
    this.state.EmpData.push(newObj)
    this.setState({EmpData:this.state.EmpData,
        Name:'',
        Dept:'',
         Rate:'',
        Clicked:false
    })
}
    render(){
         return (
          <>
          <h1 className="head">EMPLOYEE FEEDBACK FORM</h1>
          {this.state.Clicked?
          <form>
          <label htmlFor="name" className="label1">Name :</label>
          <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <label htmlFor="dept " className="label2">Department :</label>
          <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <label htmlFor="rate" className="label3">Rating :</label>
          <input id="rate" type="text" placeholder="Enter rating" name="Rate" value={this.state.Rate} onChange={this.changeHandle} required/>
          <br/>
          <br/>
          <br/>
          <button id="submit" onClick={this.clickHandle}>Submit</button>
          </form>
          :
          <DisplayForm value={this.state.EmpData} toggleFunc={this.toggleFunc}/>
        }
         
            </>
         )
    }
}
export default Formclass;