import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from '../screens/HomeScreen';
import MovieFormScreen from '../screens/MovieFormScreen';
import MovieScreen from '../screens/MovieScreen';

const AdminRouter = ({ setToken, type }) => {
    return (
        <Routes>
            <Route path="/home" element={<HomeScreen setToken={setToken} type={type} />} />
            <Route path="/movie/:idMovie" element={<MovieScreen type={type} />} />
            <Route path="/movie/new" element={<MovieFormScreen />} />
            <Route path="/movie/edit/:idMovie" element={<MovieFormScreen />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default AdminRouter
