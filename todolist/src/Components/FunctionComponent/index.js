import './index.css'
import React, {useState, useEffect} from 'react'

function FilterFunction() {
    
    const [items, setItem] = useState([
        {
            id: 0,
            content: "work every day",
            status: "completed"
            }
    ])

    const [filterCondition, setFilterCondition] = useState('status');

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(items.filter(item => item[filterCondition] == 'completed'));
      }, [items, filterCondition]);



    const array_todo = [
        {
        id: 0,
        content: "work every day",
        status: "started"
        },
        {
        id: 1,
        content: "study",
        status: "started"
        },
        {
        id: 2,
        content: "workout in gym",
        status: "started"
        }
    ] ;

    const Done = [
        
    ] ;


    const filteredItems = items;

    const toDoItem = () => {

        
        setItem(filteredItems.filter(item => item.status === 'started'))
    };

    const filteredItems1 = items.filter(item => item.status === 'completed');
    const doneItem = () => {
        
        setItem(filteredItems1)
    };

    // const addItem = (e) => {
    //     // setItem([...items, 
    //     //     {
    //     //             id: items.length,
    //     //             content: e.target.value,
    //     //             status: "started"
    //     //         }])
    // };
    
    const handleChange = (e) =>  {
        const content = e.target.value
        console.log(content)
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const content = formData.get("content");

    setItem([
        ...items,
        {
        id: items.length,
        content: content,
        status: "started"
        }
    ]);
    console.log(content);
    };

    return (
        <div>
        <div className="m-5 d-flex justify-content-between">
            <div style={{border: "none"}}>
            <button onClick ={toDoItem} style={{border: "none", background: "grey", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"}}
            >To Do</button>
            <button onClick ={doneItem} className="m-2" style={{border: "none", background: "grey", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"}}>Done</button>
            <button style={{border: "none", background: "grey", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"}}>Trash</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='content' required onChange={handleChange}/>
                <button type="submit" style={{border: "none", background: "black", borderRadius: "100px", padding: "1px 15px 1px 15px", color: "white"}}>+</button>
            </form>
            
        </div>
        <h4 className="m-5">To Do</h4>
        <div className="linedivider m-5 mr-5"></div>
        {/* <div className="m-5">{resourseType}</div> */}
        <div className="d-flex flex-column">
            {items.map(item => (
                <button style={{border: "none"}} key={item.id}> {item.content}</button>
            ))}
        </div>
        
        </div>
        
    )
};

export default FilterFunction;