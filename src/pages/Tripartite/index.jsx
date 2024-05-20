import React from 'react';

function Tripartite(props) {
    const docList = [
        {
            title: 'Ant Design',
            url: 'https://ant.design/index-cn?locale=en-US'
        },
        {
            title: 'Element',
            url: 'https://element-plus.gitee.io/zh-CN/'
        },
        {
            title: 'Umi',
            url: 'https://umijs.org/'
        },
        {
            title: 'AHooks',
            url: 'https://github.com/alibaba/hooks'
        },
        {
            title: 'NestJS',
            url: 'https://www.nestjs.com.cn/'
        },
        {
            title: 'Nuxtjs',
            url: 'https://www.nuxtjs.cn/'
        },
        {
            title: '',
            url: ''
        }
    ]

    return (
        <div className='doc-container'>
            <div className='title'>应用文档</div>
            <div className='list'>
                {
                    docList.map((doc, i) => {
                        return (
                            <a key={`tri${i}`} target='_blank' href={doc.url} >{doc.title}</a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Tripartite;