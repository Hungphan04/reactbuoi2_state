import React, { useState } from 'react'
import { dataGlasses } from '../data_glasses/dataGlasses';
export default function Home() {
  const [glasses, setGlasses] = useState(dataGlasses);
  const [numGlasses, setNumglasses] = useState(null);
  const handleNum = (item) => {
    setNumglasses(item);
  };

  const render = () => {
    return glasses.map((item) => {
      return <div onClick={() => handleNum(item)} key={item.id}
      className='col-2 text-center'
      >
        <img src={item.url} width={90} alt="" />
      </div>
    });
  };
  return (
    <div>
      <h5 style={{ backgroundColor: "#282c34" }} className='text-white text-center py-4'>TRY GLASSES APP ONLINE</h5>

      <div className='container mt-4'>
        <div className='row d-flex m-auto'>
          <div className='col-sm-6'>
            <img style={{ width: "200px" }} src="./glassesImage/model.jpg" alt="" />
          </div>
          <div className='col-sm-6'>
            <div className='position-relative'>
              <img className='position-absolute' style={{ width: "200px" }} src="./glassesImage/model.jpg" alt="" />
              {
                numGlasses && (
                  <img style={{width: '100px', top: '60px', right: '115px', opacity: '0.6'}} className='position-absolute' src={numGlasses.url} alt={numGlasses.name} />
                )
              }
              {
                numGlasses && (
                  <div style={{ background: "orange", width: "200px", top: "150px", right: "67px", fontSize: "12px"}} className='position-absolute'>
                    <p>{numGlasses.name}</p>
                    <p>{numGlasses.desc}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='row'>{render()}</div>
        </div>
      </div>
    </div >
  )
}
