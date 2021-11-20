import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';

const UserRouter = ({ setToken, type }) => {
    return (
        <Routes>
            <Route path="/home" element={<HomeScreen setToken={setToken} type={type} />} />
            <Route path="/movie/:idMovie" element={<MovieScreen />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default UserRouter
