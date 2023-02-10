import { COMMENTS, img_1, img_2, LIKES, RETWEETS, SHARE } from "../images"


export default function Tweet(tweet) {
    return (
        <div className="mt-3 mx-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className="mx-5" style={{fontSize: 14, fontWeight: '600'}}>You might like it: <span>See more!</span></p>
            <div className="d-flex">
                <img src={tweet.img} style = {{width: 30, height:30, borderRadius: 30}}/>
                <div  className="mx-3">
                    <p style={{fontWeight: '600'}}>{tweet.authorName} <span>{tweet.userName}</span></p>
                    <p>{tweet.content}</p>
                </div>
                
            </div>
            <div className="d-flex m-auto justify-content-between" style={{width: '80%'}}>
                <div className="d-flex">
                    <div style={{width:30, height: 30}}>{COMMENTS}</div>
                    <p className="px-1">{tweet.replies}</p>
                </div>
                <div className="d-flex">
                    <div style={{width:30, height: 30}}>{RETWEETS}</div>
                    <p className="px-1">{tweet.retweets}</p>
                </div>
                <div className="d-flex">
                    <div style={{width:30, height: 30}}>{LIKES}</div>
                    <p className="px-1">{tweet.likes}</p>
                </div>
                <div className="d-flex">
                    <div style={{width:30, height: 30}}>{SHARE}</div>
                    <p className="px-1">{tweet.replies}</p>
                </div>
            </div>

        </div>
    )
};