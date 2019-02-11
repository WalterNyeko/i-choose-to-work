import React from 'react';
import Service from '../Service/Service';
import {Spinner,Button, ButtonGroup} from 'reactstrap'

const ServicesList = (props) => {
    const services = props.services;
    let servicesList = null;
    if(props.loading === true)
    {
        <Spinner color="primary"/>
    }
    else
    {
    servicesList = services.map((service) => <div key={service.id} className="col-md-4">
                                                        <Service title={service.name} link={`request/${service.id}`}/>
                                                    </div>);
    }
    return(
        <div>
            <h2>Services Available</h2>
            <div className="row">
                {servicesList}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                        <ButtonGroup>
                            <Button {...props.page == 1 &&  'disabled' } color="primary" onClick={props.prevClick} >Prev </Button>
                            <Button>{ '  ' }</Button>
                            <Button {...props.page == props.lastPage && 'disabled' } color="primary" onClick={props.nextclick}>Next</Button>
                        </ButtonGroup>
                </div>
                
            </div>
        </div>
    )
}

export default ServicesList;