import React from 'react';
import ApiCard from './ApiCard/ApiCard'

const ApiCardsList = (props) => {
    return (
        <div>
            <div className="container pt-5" style={{minHeight:"750px"}}>
                <div className="row">
                    
                    {props.apis.map(api => {
                        return (
                            <div key={api._id} className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard  api={api}></ApiCard></div>
                        )
                    })}  
                </div>
            </div>
        </div>
    );
};

export default ApiCardsList;