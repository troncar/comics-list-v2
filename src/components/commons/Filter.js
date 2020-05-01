import React  from "react";
require('./Filter.scss');

const Filter = props => {
    const { publishers , handlerFilter } = props;

    return (
        <div className="filter">
            <form>
            { publishers.map( (publisher , index) =>(
                <label key={index}>
                <input type="radio"  name="option" value={publisher} onChange={ () => handlerFilter(publisher)} onTouchEnd={handlerFilter} key={index}/>{' '}
                    {publisher}
                </label>
                ))
            }
            </form>

        </div>
        
    )
}

export default Filter;