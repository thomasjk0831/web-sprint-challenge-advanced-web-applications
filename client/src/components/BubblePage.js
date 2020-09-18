import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { fetchColors } from '../api/fetchColors'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchColors()
      .then(res => {
        setColorList(res)
        
      })
  }, []);
  // fetch your colors data from the server when the component mounts
  // useEffect(()=>{
  //   axiosWithAuth()
  //   .get('/api/colors')
  //   .then(res=>{
  //      setColorList(res.data)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }, [])
   
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
