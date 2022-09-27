import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1><a href=""><img src={logo} alt="salcho" /></a></h1>
                <p>칸 국제영화제 연도별 국내 출품작</p>
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