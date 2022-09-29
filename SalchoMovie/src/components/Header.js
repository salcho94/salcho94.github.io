import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1><a href=""><img src={logo} alt="salcho" /></a></h1>
                <p> 년도별 영화 정보 </p>
                <ul className="year_list">
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('all');
                            }}
                        >ALL</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2022');
                            }}
                        >2022</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2019');
                            }}
                        >2019</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2018');
                            }}
                        >2018</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2017');
                            }}
                        >2017</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2016');
                            }}
                        >2016</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeYear('2015');
                            }}
                        >2015</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;