var a=[
    {
        name:'Tharini',
        place:'Thirupur',
    },
    {
        name:'Rajesh',
        place:'Chennai',
    },
    {
        name:'Shanthiya',
        place:'Salem',
    },
]
let b=a.filter(function(m){
    return m.name ==='Rajesh'
})
b.forEach(value => console.log('Hey Rajesh'))


 //const { name, value } = e.target;
      //console.log(e.target.value)
      //#another
      // let target = e.target;
      // let value= target.value;
      // console.log(value);
      //let value=target.type === 'checkbox'? target.checked : target.value;
      // let name=target.name;
      //#another
      // if(name==="hobbies"){
      //   this.setState({
      //     [name] : [this.state.hobbies.push(value)]
      //   });
      // }
      // else {
        //another
        // this.setState({
        //   [name] : value
        //  }); 
      // }


 