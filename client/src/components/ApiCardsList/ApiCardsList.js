import React from 'react';
import ApiCard from './ApiCard/ApiCard'

const ApiCardsList = () => {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><ApiCard></ApiCard></div>
                </div>
            
            </div>
            
        </div>
    );
};

export default ApiCardsList;