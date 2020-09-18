//test

import {axiosWithAuth} from '../utils/axiosWithAuth'

export const fetchColors = () => {

    
   return axiosWithAuth()
      .get(
        "/api/colors"
      )
      .then(res => {
        console.log("inside fetchColors", res)

        // return res.data
        return res.data
      })
      .catch(err => {
          return err
      })
  };