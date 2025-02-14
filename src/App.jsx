
import { useState } from 'react';

// import components
import Card from './components/Card';
import Display from './components/Display';
import Button from './components/Button';

import './App.css';
import { evaluate } from 'mathjs';


const App = () => {
    
    const [value, setValue] = useState('');
    const btnValues = [
       [1, 2, 3, '/'],
       [4, 5, 6, '*' ],
       [ 7, 8, 9, '-'],
       ['.', 0, '=','+']
    ];

    const clickHandler = (val) => { 
        if (val === '=') {
         try {
            setValue(evaluate(value));
         } catch (err) {
            setValue('error');
         }
        } else {
            setValue((prevValue) => prevValue + val);
        }
    };



   return ( 
            <Card>
              <Display value={value} />
              <div className='btn-container'> 
              {btnValues.map((row, i)=>(
                  <div key={i} className='row'>
                            {row.map((btnValue) => (
                                <Button
                                   key={btnValue}
                                   value={btnValue} 
                                   name='btn' 
                                   onClick={() => clickHandler(btnValue)} 
                                 />
                            ))}
                  </div>
                ))}
            </div>
          </Card>
            );
};


export default App