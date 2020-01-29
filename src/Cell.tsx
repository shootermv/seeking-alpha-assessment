import React from 'react';

import './Cell.css';

const Cell: React.FC<{i: Boolean}> = ({i}) => (<div className={i ? 'live' : ''}/>);


export default Cell;