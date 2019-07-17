import React from 'react';
class Registration extends React.Component{
  constructor(){
  super();
    this.state={fName:'',
          lName:'',
          email:'',
          password:'',
          city:'',
          hobbies:{
            //  Gaming:false,
            //  Sports:false,
            //  Drawing:false
          },
          gender:'',
          
    }
          this.handleclicked=this.handleclicked.bind(this);
          this.clicked=this.clicked.bind(this);
  }

    clicked(e){
       e.preventDefault();
       console.log(this.state.hobbies)
    }
    
    handleclicked(e){
      const val=e.target.checked;
      const name=e.target.name;
      let updated=Object.assign({},this.state.hobbies,{[name]:val})
      this.setState({
        'hobbies':updated
      })
    }
     
    renderUpdate(){
      const hobby=['Gaming','Sports','Drawing'];
      return hobby.map((data,i) =>(
      // return(
      <label key={i}>
        {data}
        <input type="checkbox" name={data} onChange={this.handleclicked.bind(this)}  value={this.state.hobbies[data]}/>
               
      </label>
    ))
  }
   
 render() {
  return (
      <form onSubmit={this.clicked.bind(this)}>
          <h1>Registration</h1><br/>
      <div>
           <label htmlFor="fName">FirstName:</label><br/>
          <input name="fName" value={this.state.fName} type="text" placeholder="Enter your First Name" onChange={this.handleclicked.bind(this)}/><br/>
        </div>

        <div>
           <label htmlFor="lName">LastName:</label>
           <input name="lName" value={this.state.lName} type="text" onChange={this.handleclicked.bind(this)} placeholder="Enter your Last Name"/> <br/>
        </div>

         <div>
           <label htmlFor="email">Email:</label>
    <input name="email"  type="text" value={this.state.email} onChange={this.handleclicked.bind(this)} placeholder="Enter your Email Address"/><br/>
       </div>

       <div>
           <label htmlFor="password">Password:</label>
         <input name="password" value={this.state.password} type="password" onChange={this.handleclicked.bind(this)} placeholder="Enter your password"/>  <br/>
        </div>

          <p> City:
              <select name="city" value={this.state.city} onChange={this.handleclicked.bind(this)} >
                  <option >Chennai</option>
                    <option>Coimbatore</option>
                    <option >Tirupur</option>
                    <option >Trichy</option>
                </select>
          </p> 
          <p>Hobbies:</p> 
          <div>{this.renderUpdate()} </div>
              
         <p>Gender:</p>
        <div onChange={this.handleclicked.bind(this)}>
                <input type="radio" value="Male" name="gender"/> Male
                 <input type="radio" value="Female" name="gender"/> Female
         </div>
         {/* <button type='submit' onClick ={this.clicked.bind(this)}>Register</button> */}
        <input type="submit" value="Register"/>
      </form>
  )
}
}
export default Registration;
