import {img_1, img_2} from '../images' 
import Tweet from './tweet'


export default function TweetList() {
    const tweets = [
            {
                authorName: "Free KZ today",
                userName: "@KZ",
                img: img_1,
                content: "content 1st author is the best",
                replies: 200,
                retweets: 1000,
                likes: 500
            },
            {
                authorName: "qwerty",
                userName: "@jumbo",
                img: img_2,
                content: "content 2nd author is the best after 1st one ",
                replies: 430,
                retweets: 564,
                likes: 904
            },
            {
                authorName: "Free KZ today",
                userName: "@KZ",
                img: img_1,
                content: "content 1st author is the best",
                replies: 200,
                retweets: 1000,
                likes: 500
            },
            {
                authorName: "Free KZ today",
                userName: "@KZ",
                img: img_1,
                content: "content 1st author is the best",
                replies: 200,
                retweets: 1000,
                likes: 500
            },
            {
                authorName: "Free KZ today",
                userName: "@KZ",
                img: img_1,
                content: "content 1st author is the best",
                replies: 200,
                retweets: 1000,
                likes: 500
            },
            {
                authorName: "Free KZ today",
                userName: "@KZ",
                img: img_1,
                content: "content 1st author is the best",
                replies: 200,
                retweets: 1000,
                likes: 500
            }
    ]
    
    return (
        
        
        tweets.map((tweet, index)=><Tweet {...tweet}  key={index}/>)
            
        
    )
};