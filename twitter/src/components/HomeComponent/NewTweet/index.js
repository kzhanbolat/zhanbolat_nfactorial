import { img_1, img_2 } from "../images";

export default function NewTweet() {
    return (
        <div className ="p-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <img src={img_1} style = {{width: 30, height: 30, borderRadius: 30}}/>
            <input placeholder="whats happening" style={{border: "none", fontSize: 18, outline: "none"}} className="mx-3"/>
            
        </div>
    )
};