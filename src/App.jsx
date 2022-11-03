import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Yoga from './pages/Yoga'

import './App.css'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Yoga />} />
            </Routes>
        </Router>
    )
}
