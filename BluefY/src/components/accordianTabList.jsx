


function TabList({data}){

    return(

        <div className="container">
      <div className="vertical-line"></div>
      <ul className="list">
        {
            data.map((ele)=>(<li>{ele}</li>))
        }
      </ul>
    </div>
    )
}

export default TabList