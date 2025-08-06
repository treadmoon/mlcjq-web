import React from 'react';
import IDrag from './IDrag';

import Scroll1 from './ScrollItem';
import SearchBox from './IUseDeferredValue'
import UseTalentCardList from './TalentCardList/useTalentCardList';
import TreeGraph from './TreeGraph/TreeGraph';
import JuZhen from './JuZhen';
import AI from "./AI/index"

const OtherIndex = () => {
    return (  
        <div className="other-index">
            {/* <IDrag /> */}
            {/* <Scroll1 /> */}
            {/* <SearchBox /> */}
            {/* <UseTalentCardList /> */}
            {/* <JuZhen /> */}
            {/* <TreeGraph /> */}
            <AI />
        </div>
    );
}
 
export default OtherIndex;