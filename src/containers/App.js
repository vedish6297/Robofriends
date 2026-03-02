import {React, Component} from "react";
import 'tachyons'
import Cardlist from '../components/Cardlist';
import Searchbox from "../components/Searchbox";
import Scroll from '../components/Scroll'
import './App.css'



class App  extends Component {
    constructor(){
        super()
        this.state={
             robots: [],
            searchfield: ''
        }



    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((users)=>{this.setState({robots : users })})

    }
    onSearchChange=(event)=>{

        this.setState({searchfield: event.target.value})

      
    }

    render(){

        if (this.state.robots.length===0)
        {
            return (<h1>Loading</h1>)
        }else
        {    
          const filteredRobots= this.state.robots.filter(
            (robots)=>{ return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
        return(
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox  searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots}/>

                </Scroll>
            </div>);
        }
}
}

export default App;