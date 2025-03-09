import axios from 'axios';
import React from 'react';
const axiosPublic = axios.create({
     baseURL:'https://my-backend-server-sigma.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
