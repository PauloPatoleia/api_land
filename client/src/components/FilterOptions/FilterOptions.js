import React from 'react';


const FilterOptions = () => {
    return (
        <div>
            <select class="form-control" style={{width: "50%", margin: "0 auto"}}>
                <option>Category</option>
                <option>1</option>
                <option>D2</option>
                <option>D3</option>
                <option>De4</option>
            </select>

            <div class="container p-4">
                <div class="row">


                    <div className="col-lg-2 col-md-0"></div>
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h3>Features</h3>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> 
                                <label class="form-check-label" for="inlineCheckbox1">HTTPS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label class="form-check-label" for="inlineCheckbox2">CORS</label>
                            </div>
                    </div>


                    <div class="col-lg-4 col-md-12">
                        <h3>Authentication</h3>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> 
                                <label class="form-check-label" for="inlineCheckbox1">Api key</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label class="form-check-label" for="inlineCheckbox2">OAuth</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label class="form-check-label" for="inlineCheckbox2">X-Mashape-Key</label>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-0"></div>
                    </div>
                </div>
            </div>
            
    );
};

export default FilterOptions;