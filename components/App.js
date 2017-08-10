import React from 'react';
import style from '../css/App.css';
import calc from '../css/calc.css';
import apply from '../css/apply.css';
import media from '../css/media-query-range.css';
import selector from '../css/selector.css';

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