// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import RecipeList from './RecipeList';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <RecipeList />
            <Footer />
        </div>
    );
}

export default App;
