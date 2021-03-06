import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import style from './eventNav.less';


class EventNav extends Component {

    state = {
        open: false
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { genres } = this.props;
        const { open } = this.state;
        const { handleClick } = this;

        return (
            <div className={ style.nav }>
                <div className={ style.navTitle }>
                    <span>
                        <Link to={'/ticketmaster-events'}>Ticketmaster Events</Link>
                    </span>
                </div>

                <div className={ open ? style.linkOpen : style.linkClosed }>
                    <span onClick={ handleClick }>Genres ({ genres.length })</span>
                    
                    <div className={ open ? style.menuOpen : style.menuClosed }>
                {   
                    genres.map((genre, idx) => (
                        <div key={ idx } className={ style.linkItems }>
                            <Link to={`/ticketmaster-events/genre/${genre}`}>
                                { genre }
                            </Link>
                        </div>
                    ))
                }
                    </div>
                </div>
            </div>
        )
    }
}


export default EventNav;