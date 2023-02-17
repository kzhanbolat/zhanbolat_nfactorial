import './index.css'
import React, { useState, useEffect } from 'react'
import img from './images/img.png'
import del from './images/del.png'
import doit from './images/doit.png'
import Modal from '../Modal';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function FilterFunction() {

  const [items, setItem] = useState([
    {
      id: 0,
      content: "work every day",
      status: "started",
      isDone: false,
      trash: false
    }
  ]);

  const [value, setValue] = useState("")
  const [type, setType] = useState("");
  const [trash, setTrash] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    console.log(isModal);
    setIsModal(!isModal)
  }



  // const addItem = (e) => {
  //     // setItem([...items, 
  //     //     {
  //     //             id: items.length,
  //     //             content: e.target.value,
  //     //             status: "started"
  //     //         }])
  // };

  const handleChange = (e) => {
    const content = e.target.value
    setValue(content)
  };

  const handleSubmit = () => {
    const newItem = {
      id: items.length,
      content: value,
      status: "started",
      isDone: false,
      trash: false
    }
    setItem([...items, newItem])
  }

  const handleDone = (keyFromButton) => {
    const index = items.findIndex(item => item.id === keyFromButton)
    const oldObject = items[index]
    console.log(oldObject)
    const newObject = { ...oldObject, isDone: !oldObject.isDone }
    console.log(newObject)
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index + 1, items.length)
    const newItems = [...leftPart, newObject, ...rightPart]
    setItem(newItems)
    console.log(newItems)
    // 1. find index element
    // 2. create new element and change isDone field
    // 3. replace new element in items
  }

  // const [open, setOpen] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTrash = (keyFromButton) => {
    // setOpen(true);
    // setAnchorEl(event.currentTarget);


    const index = items.findIndex(item => item.id === keyFromButton)
    const oldObject = items[index]
    console.log(oldObject)
    const newObject = { ...oldObject, trash: !oldObject.trash }
    console.log(newObject)
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index + 1, items.length)
    const newItems = [...leftPart, newObject, ...rightPart]
    setItem(newItems)
    console.log(newItems)
    setAnchorEl(null);

    // 1. find index element
    // 2. create new element and change isDone field
    // 3. replace new element in items
  }




  const handleDelete = (keyFromButton) => {
    const index = items.findIndex(item => item.id === keyFromButton)
    const leftPart = items.slice(0, index)
    const rightPart = items.slice(index + 1, items.length)
    const newItems = [...leftPart, ...rightPart]
    const oldObject = items[index]
    setItem(newItems)
    setAnchorEl(null);
    // setTrash([...trash, oldObject])
  }

  const handleStatus = (typeFromButton) => {
    setType(typeFromButton)
  }

  const filteredItems = items.filter(item =>
    type === 'Todo' ? !item.isDone && !item.trash
      : type === 'Done' ? item.isDone && !item.trash
        : type === 'Trash' ? item.trash
          : "")

  return (
    <div>
      <div className="m-5 d-flex justify-content-between">
        <div style={{ border: "none" }}>
          <button key="Todo"
            type="button"
            className={`btn btn${"Todo" === type ? "" : "-outline"}-info`}
            onClick={() => handleStatus("Todo")}
            style={{ border: "none", background: "grey", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white" }}
          >To Do</button>
          <button key="Done"
            type="button"
            className={`btn btn${"Done" === type ? "" : "-outline"}-info m-2`}
            onClick={() => handleStatus("Done")}
            style={{
              border: "none",
              background: "grey", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"
            }}>
            Done</button>
          <button key="Trash"
            type="button"
            className={`btn btn${"Trash" === type ? "" : "-outline"}-info m-2`}
            onClick={() => handleStatus("Trash")}
            style={{
              border: "none", background: "grey",
              borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"
            }}>Trash</button>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <div>
          {/* <input type='text' value={value} required onChange={handleChange} />
          <button onClick={handleSubmit}
            type="submit" style={{
              border: "none", background: "black",
              borderRadius: "100px", padding: "1px 15px 1px 15px", color: "white"
            }}>+</button> */}
          <button onClick={openModal}
            type="submit" style={{
              border: "none", background: "black",
              borderRadius: "100px", padding: "1px 15px 1px 15px", color: "white"
            }}>+</button>
          {/* {isModal && <Modal onClick={openModal} value={value} onChange={handleChange} />} */}
          <div hidden={!isModal} style={{
            width: 268,
            height: 264,
            backgroundColor: "#E4E6E7",
            borderRadius: 12,
            position: "absolute",
            top: 100,
            // index: 1,
            right: "10%"
          }} >
            <div className="m-3">
              Add New To Do
            </div>
            <input className="m-3 " value={value} required onChange={handleChange}
              style={{ width: 200, height: 100, borderRadius: 12, }} />
            <button style={{
              border: "none",
              background: "black", borderRadius: "20px", padding: "1px 15px 1px 15px", color: "white"
            }} onClick={handleSubmit} className="m-3 ">Add</button>
          </div>

          {/* </form> */}
        </div>

      </div>
      <h4 className="m-5">To Do</h4>
      <div className="linedivider m-5 mr-5"></div>
      {/* <div className="m-5">{resourseType}</div> */}
      <ul className="list-group todo-list ">
        {filteredItems.map((item) => (
          <li key={item.id} className="list-group-item ">
            <img className="ml-5" src={img} height="10px" witdh="10px" alt=":" />
            <input className="m-2" type="checkbox" onChange={handleClick} /> 
            {/* <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
            </Button> */}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              {item.trash && item.isDone?
                <Typography >
                  {/* sx={{ p: 2 }} */}
                  <img className="ml-3" src={del} height="10px" witdh="10px" alt=":" />
                  <Button style={{color: "black"}} onClick={(e) => handleDelete(item.id)}>Delete forever</Button>
                  <br />
                  <img className="ml-3" src={doit} height="10px" witdh="10px" alt=":" />
                  <Button  style={{color: "black"}} onClick={(e)=>{handleTrash(item.id)}}>Move back To Done</Button>
                </Typography>
                :
              item.trash && !item.isDone?
                <Typography >
                  {/* sx={{ p: 2 }} */}
                  <img className="ml-3" src={del} height="10px" witdh="10px" alt=":" />
                  <Button style={{color: "black"}} onClick={(e) => handleDelete(item.id)}>
                  Delete forever</Button>
                  <br />
                  <img className="ml-3" src={doit} height="10px" witdh="10px" alt=":" />
                  <Button  style={{color: "black"}} onClick={(e)=>{handleTrash(item.id)}}>Move back To Do</Button>
                </Typography>
                :
                // sx={{ p: 2 }}
                <Typography >
                  <img className="ml-3" src={del} height="10px" witdh="10px" alt=":" />
                  <Button   style={{color: "black"}} onClick={(e)=>{handleTrash(item.id)}}>Move To Trash</Button>
                </Typography>
              }
            </Popover>
            <span className={`todo-list-item ${item.isDone ? "done" : ""}`} onClick={() => handleDone(item.id)}>


              <span
                className="todo-list-item-label"
              // onClick={()=>handleDone(item.key)}
              >


                {item.content}
              </span>




            </span>
            {/* <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => handleTrash(item.id)}
            >
              <i className="fa fa-exclamation" />
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={() => handleDelete(item.id)}
            >
              <i className="fa fa-trash-o" />
            </button> */}
          </li>
        ))}
      </ul>







      {/* <div className="d-flex flex-column">
            {items.map(item => (
                <button style={{border: "none"}} key={item.id}> {item.content}</button>
            ))}
        </div> */}

    </div>

  )
};

export default FilterFunction;















 // const handleSubmit = (e) => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const content = formData.get("content");

    // setItem([
    //     ...items,
    //     {
    //     id: items.length,
    //     content: content,
    //     status: "started"
    //     }
    // ]);
    // console.log(content);
    // };