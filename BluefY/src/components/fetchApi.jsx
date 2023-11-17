




const fetchApiData=async()=>{

    try {
        const data= await fetch('https://rapidapi.com/apidojo/api/asos2');
        const myData=await data.json()
       
        console.plog(myData)
    } catch (error) {
        console.log(error)
    }

    
}


export default fetchApiData;


// import React, { useState, useEffect } from 'react';

// const FetchApiData = () => {
//   const [clothingData, setClothingData] = useState([]);

//   useEffect(() => {
//     const fetchClothingData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const data = await response.json();
//         setClothingData(data);
//       } catch (error) {
//         console.error('Error fetching clothing data:', error.message);
//       }
//     };

//     fetchClothingData();
//   }, []);

//   return (
//     <div>
//       <h1>Clothing Site</h1>
//       <div>
//         {clothingData.map(item => (
//           <div key={item.id}>
//             <img src={item.url} alt={item.title} />
//             <p>{item.title}</p>
//             {/* You can include other information like price, description, etc. */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FetchApiData;