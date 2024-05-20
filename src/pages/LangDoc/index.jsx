import React from 'react';

import Org from "../Org"
import Tripartite from "../Tripartite"

import "./index.less"

function LangDoc(props) {
    return (
        <div className='doc-wrapper'>
            <Org />
            <Tripartite />
        </div>
    );
}

export default LangDoc;