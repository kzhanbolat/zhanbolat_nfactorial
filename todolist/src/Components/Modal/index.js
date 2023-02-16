

import './index.css';

function Modal(onClick, value, handleChange) {
    return (
        <div style={{ width: 268,
            height: 264,
            backgroundColor: "#E4E6E7",
            borderRadius: 12,
            position: "absolute",
            top: 100,
            // index: 1,
            right: "10%"}} >
            <div className="m-3">
                Add New To Do
            </div>
            <input className="m-3 " value={value}  required onChange={handleChange}
            style={{width: 200, height: 100, borderRadius: 12,}}/>
            <button Onclick={onClick} className="m-3 ">add Item</button>
        </div>
    )
}

export default Modal;