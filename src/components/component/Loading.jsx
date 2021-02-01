import React,{useState} from "react";

export default function Loading(props) {
  let [count,upDateCount]=useState(0)
  return (
    <div>
      <h1 style={{ margin: "25%" }}>{props.value}</h1>
      <button onClick={()=>{upDateCount(count+1)}}>{count}</button>
    </div>
  );
}


// this.state={
//   count:0
// }


// this.setState({count:this.state.count+1})