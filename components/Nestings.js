import React, { Component } from 'react';
import nestings from '../css/nestings.css';

class Nestings extends Component {
    render() {
        return(
            <div>
                <div className={nestings.foo}>nestings.foo
                    <div className={nestings.bar}>nestings.bar</div>
                </div>
                <div className={nestings.parent}>
                   <div className={nestings.foo}>
                        nestings.parent + ' ' + nestings.foo
                   </div>
                </div>
            </div>
            
        );
    }
}
export default Nestings;