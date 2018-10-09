import React ,{Component} from 'react'; 

class Imgplace extends Component {
 state = {
     pics : [] ,
     ran : 6
 }

componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
        let results = data.results ; 
        let pics = results.map(result => {
            return(result.picture.medium)
        })
        this.setState({pics : pics});
        //--random number to get the data ---
        let random = Math.floor(Math.random()*11);
        this.setState({ran : random})
    })
}

render() {
    return(
          <div className='_imgPlaceholder'>
            <img src = {this.state.pics[this.state.ran] } alt='profile' /> 
          </div>
    )
}

}

export default Imgplace;