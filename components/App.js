import React from 'react';
import style from './color.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1 className={style.title}>Hello World</h1>
                <h2 className={style.h2}>Test</h2><br/>
                <a href="#">the usage of :root</a>
            </div>
        )
    }
}
export default App;