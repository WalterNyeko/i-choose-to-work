import React, { Component } from 'react'
import {Alert} from 'reactstrap'
//Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import {connect} from 'react-redux';
import {fetchQuestions} from '../../../actions/questionsAction'

import {withRouter} from 'react-router-dom'
import Questionso from '../../../containers/Questions/Questionso';

class Request extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          details: {},
          errors: [],
          successMessage: '',
          loading: false,
          isSelect: false,
          rate: [],
          city: '',
          query: '',
          lat: '',
          visible: false,
      }

     
      this.handleNext = this.handleNext.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleScriptLoad = this.handleScriptLoad.bind(this);
      this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this);
      this.renderErrorFor = this.renderErrorFor.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
  }


  handleAdd()
  {
    //   const newArray = this.state.rate.slice();
    //   newArray.push(1)
      this.setState(previousState => ({
          rate: [...previousState.rate, 1]
      }))
  }

  componentDidMount (){
    const { match: { params }, history } = this.props;
    this.props.fetchQuestions(params.id);
  };
  

  handleRemove(e)
  {
      const array = [...this.state.rate];
      const index = array.indexOf(1)
      if(index !== -1)
      {
          array.splice(index, 1);
          this.setState({rate: array});
      }
     console.log(this.props)
  }

  handleNext()
  {
      this.setState({
          isSelect: !this.state.isSelect
      })
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  }

  handleSubmit(e)
  {
    e.preventDefault();

    const { match: { params }, history } = this.props;

    const data = {
        customer_id: this.props.user.id,
        service_id: params.id,
        address: this.state.address,
        description: this.state.description,
        expected_start_date: this.state.date
    }

    axios.post('/api/request', data)
            .then((res) => {
                if(this.state.isSelect === false)
                {
                    this.props.history.push('/');
                }
                else
                {
                    const id = res.data.id;
                    this.props.history.push(`service-providers/${id}`)
                }
            })
            .catch((err) => {
                this.setState({
                    errors: err.response.data.errors
                })
                if(err.response.data.errors['customer_id'])
                {
                    this.onDismiss();
                }
            })
  }
  hasErrorFor (field) {
        return !!this.state.errors[field]
      }

   renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
  onDismiss() {
    this.setState({ visible: !this.state.visible });
  }
  handleScriptLoad() {
      // Declare Options For Autocomplete
      var options = {
        //   types: ['(cities)'],
          componentRestrictions: {country: "ug"}
      };

      // Initialize Google Autocomplete
      /*global google*/ // To disable any eslint 'google not defined' errors
      this.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'),
          options,
      );

      // Fire Event when a suggested name is selected
      this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {

      // Extract City From Address Object
      let addressObject = this.autocomplete.getPlace();
      let address = addressObject.address_components;

      // Check if address is valid
      if (address) {
          // Set State
          this.setState({
              city: address[0].long_name,
              address: addressObject.formatted_address,
              lat: addressObject.geometry.viewport.ga.j,
              long: addressObject.geometry.viewport.ga.l,
          });
      }
      console.log(this.state.long)
  }

  render() {
    const id = this.props.userid;
    const some = this.state.rate.map((sm, index) => <div key={index} className="form-group row">
                    <div className="col-md-4">
                        <label className="col-form-label">Address</label>
                    </div>
                    <div className="col-md-5">
                        <input type="text" name="address" className="form-control"/> 
                    </div>
                    <div className="col-m-md-3">
                        <button type="button" onClick={this.handleAdd} className="btn btn-sm btn-primary mr-3">+</button>
                        <button type="button" onClick={this.handleRemove} className="btn btn-sm btn-primary">-</button>
                    </div>
                    
                </div>);
    return (
     <div class="container">
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhV7K0LTU02IbjYC1Tz6GEpF3z5TU2_xs&libraries=places" onLoad={this.handleScriptLoad}        
        />   
                                <div class="row justify-content-center">
                                    <div class="col-md-8">
                                        <div class="card">
                                            <div class="card-header">Please describe the Service Request</div>

                                            <div class="card-body">
                                                <Alert color={`${this.hasErrorFor('customer_id') ? 'danger' : 'success'}`} isOpen={this.state.visible} toggle={this.onDismiss}>
                                                    {`${this.hasErrorFor('customer_id') ? this.state.errors['customer_id'] : 'Thanks for making your request'}`}
                                                </Alert>
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group row">
                                                        <div className="col-md-4">
                                                            <label className="col-form-label">Date</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="date" name="date" className={`form-control ${this.hasErrorFor('expected_start_date') ? 'is-invalid' : ''}`} onChange={this.handleInputChange}/> 
                                                            {
                                                                this.renderErrorFor('expected_start_date')
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-4">
                                                            <label className="col-form-label">Address</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input type="text" name="address" id="autocomplete" className={`form-control ${this.hasErrorFor('address') ? 'is-invalid' : ''}`} onChange={this.handlePlaceSelect}/> 
                                                            {this.renderErrorFor('address')}
                                                        </div>
                                                        {/* <div className="col-m-md-3">
                                                            <button type="button" onClick={this.handleAdd} className="btn btn-sm btn-primary">Add Address</button>
                                                        </div> */}
                                                    </div>
                                                    {some}  
                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <label className="col-form-label">
                                                                Description of Request
                                                            </label>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <textarea className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`} name="description" onChange={this.handleInputChange} id="" rows="3"></textarea>
                                                            {this.renderErrorFor('description')}
                                                        </div>
                                                    </div>
                                                   
                                                    <Questionso questions={this.props.questions} />
                                                    <button className="btn btn-primary">{this.state.isSelect === false ? 'submit' : 'Select Pro'}</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </div>
        
    )
  }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    user: state.auth.user,
    questions: state.questions.items,
    loadingQns: state.questions.loading
})

export default withRouter(connect(mapStateToProps, {fetchQuestions})(Request));

