import React ,{Component} from 'react'; 
class Userdata extends Component {
 state = {
     names : [] , 
     addr : [], 
     usrname : [],
     ran : 2
 }

componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
        let results = data.results ;
        //------------- Names
        let names = results.map(result => {
            return(result.name.first)
        })
        this.setState({names : names});
        //-------------address
        let addr =  results.map(result => {
            return(result.location.city)
        })
        this.setState({addr : addr});
        //-------------username
        let usrname =  results.map(result => {
            return(result.login.username)
        })
        this.setState({usrname : usrname});

        //--random number to get the data ---
        let random = Math.floor(Math.random()*10);
        this.setState({ran : random})
        console.log(this.state.usrname)
    })
}

render() {
    return(
      <div className='_headerData'>
           <p className='name'>Name : {this.state.names[this.state.ran]}</p>
           <p>Address : {this.state.addr[this.state.ran]}</p>
           <p>Username : @{this.state.usrname[this.state.ran]}</p>
      </div>
    )
}

}

export default Userdata;