import React from 'react';
import PropTypes from 'prop-types';
import './NavigationBar.css';
import {EPage, ids} from "../MainPage";
import {handleErrors} from "../../App";


class NavigationBar extends React.PureComponent {

    static propTypes = {
        activePage: PropTypes.string.isRequired,
        changePage: PropTypes.func.isRequired
    };

    componentDidMount() {
        setTimeout(() => {
            const rootEl = document.getElementById(ids.NavigationBar);
            if (rootEl) {
                rootEl.classList.add("visible");
            } else {
                handleErrors(new Error("Missing NavigationBar element. Cannot make it visible"))
            }
        }, 10);
    }

    render() {
        return (
            <div id={ids.NavigationBar} className='NavigationBar_root'>
                <div className='NavigationBar_menu'>
                    {this.renderMenuItem(EPage.Press, "Press")}
                    {this.renderMenuItem(EPage.Gallery, "Gallery")}
                    {this.renderMenuItem(EPage.About, "About")}
                    {this.renderMenuItem(EPage.HomePage, "Home")}
                </div>
            </div>
        )
    }

    renderMenuItem = (EPageValue, name) => {
        return (
            <div className={`${this.props.activePage === EPageValue ? "active" : null}`}
                 onClick={() => {
                     this.props.changePage(EPageValue)
                 }}
            >{name}</div>
        )
    }
}

export default NavigationBar;