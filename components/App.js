import React from 'react';
import style from './App.css';
import calc from './calc.css';
import apply from './apply.css';
import media from './media-query-range.css';
import selector from './selector.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1 className={style.title}>Hello World</h1>
                <h2 className={style.h2}>Test</h2><br/>
                <a href="#">the usage of :root</a><br/>
                <span className={apply.danger}>This is a demo of apply</span><br/>
                <button>confirm</button><a href="#" className={selector.button}>Link</a>
            </div>
        )
    }
}
export default App;