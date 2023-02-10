import React from "react";
import NewTweet from "./NewTweet";
import TweetList from "./TweetList";



class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count +1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count -1
        })
    }
    
    rendre() {
        return (
                                                           
                    <div className="w-50 mt-3">
                        <div className="m-5">
                            <button onClick={this.increment}>Increment</button>
                            <p>count: {this.state.count}</p>
                        </div>




                        <h5 className="mx-3">Home</h5>
                        <NewTweet/>
                        <TweetList/>
                    </div>
                    
                )
    }
}




// function Home() {
//     return (
//         <div className="w-50 mt-3">
//             <h5 className="mx-3">Home</h5>
//             <NewTweet/>
//             <TweetList/>
//         </div>
        
//     )
// };

export default Home;