import React from 'react';
import "./index.less"

function Org(props) {

    const docList = [
        {
            title: 'JavaScript MDN',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'
        },
        {
            title: 'React',
            url: 'https://react.docschina.org/'
        },
        {
            title: 'Vue',
            url: 'https://cn.vuejs.org/'
        },
        {
            title: 'Vite',
            url: 'https://vitejs.dev/'
        },
        {
            title: 'Webpack',
            url: 'https://webpack.docschina.org/'
        },
        {
            title: 'Gulp',
            url: 'https://www.gulpjs.com.cn/'
        },
        {
            title: 'Rollup',
            url: 'https://www.rollupjs.com/'
        },
        {
            title: 'Babel',
            url: 'https://www.babeljs.cn/'
        },
        {
            title: 'Pina',
            url: 'https://pinia.vuejs.org/'
        },
        {
            title: 'Redux',
            url: 'https://cn.redux.js.org/'
        },
        {
            title: 'React Router',
            url: 'https://reactrouter.com/en/main'
        },
        {
            title: 'Vue Router',
            url: 'https://router.vuejs.org/zh/'
        },
        {
            title: 'ESLint',
            url: 'https://zh-hans.eslint.org/'
        },
        {
            title: 'stylelint',
            url: 'http://stylelint.cn/user-guide/rules/'
        },
        {
            title: 'prettier',
            url: 'https://prettier.io/'
        }
    ]

    return (
        <div className='doc-container'>
            <div className='title'>基础文档</div>
            <div className='list'>
                {
                    docList.map((doc, i) => {
                        return (
                            <a key={`org${i}`} target='_blank' href={doc.url} >{doc.title}</a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Org;