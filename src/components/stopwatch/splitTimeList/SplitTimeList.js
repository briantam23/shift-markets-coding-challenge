import React, { Fragment } from 'react';
import style from './splitTimeList.less';
import formatTime from '../../../util/stopwatchUtil';


const SplitTimeList = ({ splitTimes, isRunning, reset, index }) => (
    <div className={ style.splitContainer }>
        <ul>
    {
        splitTimes.map((splitTime, idx) => (
            <div className={ style.row } key={ idx }>
                <div className={ style.column }>
            {
                idx === index 
                ? <h3 style={{ backgroundColor: 'yellow' }}>{ formatTime(splitTime) }</h3>
                : <h3>{ formatTime(splitTime) }</h3>
            }
                </div>
                <div className={ style.column }>
                    <button 
                        onClick={ (e) => reset(splitTime, idx + 1, e) } 
                        disabled={ isRunning }
                    > 
                        Reset time to this split
                    </button>
                </div>
            </div>
        ))
    }
        </ul>
    </div>
)


export default SplitTimeList;