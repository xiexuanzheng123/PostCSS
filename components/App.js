import React from 'react';
import style from './App.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1 className="title">Hello World</h1>
                <h2 className={style.h2}>Test</h2>
            </div>
        )
    }
}
export default App;