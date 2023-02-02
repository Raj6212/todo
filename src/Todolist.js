import { useState } from 'react'

const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData([...listData, activity])
    console.log(activity)
    console.log(listData)

  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      if (i !== id)
        return elem;
    })

    setlistData(updatedListData);
  }
  return (
    <div >
      <div >Todo List</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button onClick={addActivity}>Add</button>
      <p >Here is your List :{")"}</p>
      <div>

        {listData.length != 0 ?
          listData.map((data, index) => {
            return (
              <p key={index}>
                <div >{data}</div>
                <div ><button onClick={() => { removeActivity(index) }}>remove</button></div>
              </p>
            )
          }) : null}
      </div>
      {listData.length >= 1 &&
        <button>Remove All</button>
      }

    </div>

  )
}

export default Todolist
