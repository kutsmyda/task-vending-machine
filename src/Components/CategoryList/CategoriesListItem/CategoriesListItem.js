import React from 'react';

const CategoriesListItem = ({category, onClickBuy}) => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>Name :</strong>&nbsp;{category.name}</span>
                            <p><strong>Price :</strong>&nbsp;{category.price}</p>
                            <p><strong><strong>Count :</strong>&nbsp;{category.count}</strong></p>
                        </div>
                        <div className="card-action">
                            <button
                                className={'btn'}
                                onClick={() => onClickBuy(category)}
                                disabled={category.count <= 0}
                            >Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesListItem;