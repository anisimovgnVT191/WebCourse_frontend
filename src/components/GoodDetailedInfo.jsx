import React from "react";

function GoodDetailedInfo(props) {
    return (
        <div className="good-detailed-row">
            <div className="good-detailed-gallery-wrapper">
                <div>
                    <img className="good-detailed-image" src={props.good.imageUrl}/>
                </div>
            </div>
            <div className="good-detailed-right-side-description">
                <div className="good-detailed-article">
                    <span className="good-detailed-label-article">Артикул:</span>
                    <span className="good-detailed-article-title"> { props.good.title }</span>
                </div>
                <div className="good-detailed-description-wrapper">
                    <p>
                        { props.good.description }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GoodDetailedInfo;