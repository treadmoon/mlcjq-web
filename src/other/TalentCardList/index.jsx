// import React from 'react';
// import './TalentCardList.less';

// const genders = {
//     male: '♂',
//     female: '♀',
// };

// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// const TalentCard = ({ talent }) => {
//     return (
//         <div className="talent-card">
//             <div className="A">
//                 <div className="A1">
//                     <img src={talent.avatarUrl} alt="avatar" />
//                     <span className="gender">{genders[talent.gender]}</span>
//                 </div>
//                 <div className="A2">
//                     <div className="info-row-1">
//                         <span className="name">{talent.name}</span>
//                         <span className="employee-id">{talent.employeeId}</span>
//                     </div>
//                     <div className="info-row-2">
//                         <span className="company" title={talent.company}>
//                             {talent.company.length > 100
//                                 ? `${talent.company.slice(0, 100)}...`
//                                 : talent.company}
//                         </span>
//                         <span>|</span>
//                         <span className="department" title={talent.department}>
//                             {talent.department.length > 100
//                                 ? `${talent.department.slice(0, 100)}...`
//                                 : talent.department}
//                         </span>
//                         <span>|</span>
//                         <span className="position" title={talent.position}>
//                             {talent.position.length > 100
//                                 ? `${talent.position.slice(0, 100)}...`
//                                 : talent.position}
//                         </span>
//                         <span>|</span>
//                         <span className="rank" title={talent.rank}>
//                             {talent.rank.length > 100
//                                 ? `${talent.rank.slice(0, 100)}...`
//                                 : talent.rank}
//                         </span>
//                     </div>
//                     <div className="info-row-3" title={talent.introduction}>
//                         {talent.introduction.length > 100
//                             ? `${talent.introduction.slice(0, 100)}...`
//                             : talent.introduction}
//                     </div>
//                 </div>
//             </div>
//             <div className="B">
//                 {talent.tags.map((tag, index) => (
//                     <span
//                         key={index}
//                         className="tag"
//                         style={{
//                             backgroundColor: getRandomColor(),
//                             color: getRandomColor(),
//                         }}
//                     >
//                         {tag.length > 60 ? `${tag.slice(0, 60)}...` : tag}
//                     </span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const TalentCardList = ({ talents }) => {
//     return (
//         <div className="talent-card-list">
//             {talents.map((talent, index) => (
//                 <TalentCard key={index} talent={talent} />
//             ))}
//         </div>
//     );
// };

// export default TalentCardList;
    

import React from 'react';
import './TalentCardList.less';

const getRandomDarkColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 12)]; // 避免白色和浅色
    }
    return color;
};

const TalentCard = ({
    avatar,
    gender,
    name,
    employeeId,
    company,
    department,
    position,
    rank,
    introduction,
    tags
}) => {
    return (
        <div className="talent-card">
            <div className="card-top">
                <div className="card-top-left">
                    <img src={avatar} alt="Avatar" className="avatar" />
                    <span className="gender-icon">{gender === 'male' ? '♂' : '♀'}</span>
                </div>
                <div className="card-top-right">
                    <div className="name-id">
                        <span className="name">{name}</span>
                        <span className="employee-id">{employeeId}</span>
                    </div>
                    <div className="info">
                        <span className="company" title={company}>{company}</span>
                        <span className="separator">|</span>
                        <span className="department" title={department}>{department}</span>
                        <span className="separator">|</span>
                        <span className="position" title={position}>{position}</span>
                        <span className="separator">|</span>
                        <span className="rank" title={rank}>{rank}</span>
                    </div>
                    <div className="introduction" title={introduction}>{introduction}</div>
                </div>
            </div>
            <div className="card-bottom">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="tag"
                        style={{ backgroundColor: getRandomDarkColor() }}
                        title={tag}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const TalentCardList = ({ cards }) => {
    return (
        <div className="talent-card-list">
            {cards.map((card, index) => (
                <TalentCard key={index} {...card} />
            ))}
        </div>
    );
};

export default TalentCardList;
    