import React,{useState} from 'react'

const Todolist = () => {
    const [activity, setActivity]= useState("");
    const [listData,setlistData]=useState([]);
    function addActivity()
    {
            setlistData([...listData,activity])
        
    }
    function removeActivity(i)
    {
      const updatedListData=listData.filter((elem,id)=>{
        if(i!=id)
        return elem;
      })
      setlistData(updatedListData);
    }
  return (
    <>
        <div className='container'>
            <div className="header">Todo List</div>
            <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p className="List-heading">Here is your List :{")"}</p>
            {
              listData!==[] && listData.map((data,i)=>{
                return(
                  <>
                    <p key={i}>
                      <div className='listData'>{data}</div>
                      <div className="btn-position"><button onClick={removeActivity(i)}>remove</button></div>
                    </p>
                  </>
                )
              })}
              {listData.length>=1 && 
                <button>Remove All</button>
              }
              
        </div>
    </ >
  )
}

export default Todolist
