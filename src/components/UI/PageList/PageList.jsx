import React from 'react';

function PageList(props) {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-header-text"> { props.pageItem.title } </h1>
            </div>
            <div className="page-list">
                <ol>
                    {
                        props.pageItem.list.map((item, index) =>
                            <li key={index}> { item } </li>
                        )
                    }
                </ol>
            </div>
        </div>

    );
}

export default PageList;