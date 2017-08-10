import React, { Component } from 'react';
import nest from './nesting.css';

class Nest extends Component {
    render() {
        return(
            <div>
                <a>red
                    <span>orange</span>
                </a>
                <p>red
                    <em>orange</em>
                </p>
                <table className={nest.colortable}>
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>one</td>
                            <td className={nest.c}>two</td>
                            <td>three</td>
                            <td>four</td>
                            <td>five</td>
                    </tr>
                    </tbody>
                </table>
                <div className={nest.foo}>outer
                    <span className={nest.bar}>inner</span>
                </div>
                <div className={nest.fooo}>两个类在一起
                    <div className={nest.fooo + ' ' + nest.barr}>什么样子</div>
                </div>
                <div className={nest.foo1 + ' ' + nest.qux}>
                    foo1
                </div>
                <div className={nest.foo1}>foo1</div>
                <div className={nest.baz}>baz</div>
                <div className={nest.bar1 + ' ' + nest.qux}>
                    bar1+qux
                    <div className={nest.qux}>qux</div>
                </div>
            </div>
            
        );
    }
}
export default Nest;