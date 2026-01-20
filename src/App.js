import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RegisterPage from './pages/registerPage/registerPage';
import LoginPage from './pages/loginPage/loginPage';
import LoginWithEmailPage from './pages/loginWithEmailPage/loginWithEmailPage';
import MainPage from './pages/mainPage/mainPage';
import GeneratorPage from './pages/generatorPage/GeneratorPage';
import ColorDetailPage from './pages/colorDetailPage/ColorDetailPage';

// import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
// import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters';
// import { Header } from './components/header/header.component';

function App() {
  // console.log('r', getRandomPalette())
  // console.log(getPalette('#1a5e63'))

  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/loginWithEmail" element={<LoginWithEmailPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/colors/:colorHex" element={<ColorDetailPage />} />

        <Route path="*" element={<div className="flex h-screen items-center justify-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>


    // <div className="App">
    //   {/* <header>
    //     <div>colors</div>
    //     <div>
    //       <div>tools</div>
    //       <div>go pro</div>
    //     </div>
    //   </header> */}
    //   <Header />
    //   <HoverColorLetters
    //     text="Aliquip non consectetur consectetur do duis pariatur duis laborum."
    //     defaultColor="black"
    //     colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
    //   />
    //   <Header />
    //   <HoverColorLetters
    //     text="Dolor pariatur mollit aute commodo occaecat magna est sint sint."
    //     defaultColor="green"
    //     colors={['#2660a4', '#edf7f6', '#f19953', '#c47335', '#56351e']}
    //   />
    //   <Header />
    //   <Header />
    //   <Header />
    //   <Header />
    //   <Header />
    //   <HoverColorLetters
    //     text="Pariatur culpa ipsum consectetur pariatur amet reprehenderit."
    //     defaultColor="red"
    //     colors={['#001514', '#fbfffe', '#6b0504', '#a3320b', '#e6af2e']}
    //   />
    // </div>
  );
}

export default App;
