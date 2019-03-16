import React from 'react'
import Service from '../Service/service';

const AllServices = (props) => props.services.map((service, i) => <div className="col-md-4 mb-3"><Service key={i} id={service.id} image={service.image} description={service.description} id={service.id} click={(id) => props.goTo(service.id)} name={service.name}/></div>);

export default AllServices
