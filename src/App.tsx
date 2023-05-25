import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'components/Home';
import Counter from 'components/pages/Counter/Counter';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect} from 'react';
import Calculator from 'components/pages/Calculator/Calculator';
import Todo from 'components/pages/TodoList/Todo';
import Timer from 'components/pages/Timer/Timer';
import Stopwatch from 'components/pages/Stopwatch/Stopwatch';

function App() {

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loader);

  useEffect(() => {
    setTimeout(() => {
    dispatch({
        type: 'loader',
        payload: false,
      })
      }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
          <div className='h-screen flex items-center justify-center'>
            <div className="container">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
</div>
        </div>
      ) : (
        <div className='relative min-h-screen pb-[100px] text-[#0D707D] overflow-x-hidden'>
        <Header/>
        <div className='min-h-[70vh] flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/stopwatch' element={<Stopwatch/>}/>
          <Route path='/timer' element={<Timer/>}/>
        </Routes>
        </div>
        <Footer/>
        </div>
      )}
      </div>
  );
}

export default App;
