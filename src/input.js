import './App.css';
import React, { Component } from 'react';
import {Form,FormGroup,Label,Input,Col,Button} from 'reactstrap';
import GMap from './map';

class InputCoordinates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 0,
            lang: 0,
            touched: {
                lat: false,
                lang: false
            }
        };
         
    
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
      const target=event.target;
      const value =  target.value;
      const name=target.name;

      this.setState({
          [name]:value
      });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Current Coordinates are: ' + JSON.stringify(this.state));
        alert('Current Coordinates are: ' + JSON.stringify(this.state));             
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    render() {
          
        return(
             
                <React.Fragment>
                   <div className="container">
                    <div className="row row-content justify-content-center">
                        <div className="col-10 col-md-8 offset-md-3">
                            <h3>Input Coordinates</h3>
                        </div>
                        <br/>
                        <div className="col-10 col-md-8">
                           <Form onSubmit={this.handleSubmit}>
                           <FormGroup row>
                                <Label htmlFor="lat" md={2}>Latitude</Label>
                                <Col md={10}>
                                    <Input type="lat" name="lat"
                                        placeholder="Latitude"
                                        value={this.state.lat}
                                    
                                        onBlur={this.handleBlur('lat')}
                                        onChange={this.handleInputChange} />
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lang" md={2}>Longitude</Label>
                                <Col md={10}>
                                    <Input type="lang" name="lang"
                                        placeholder="Longitude"
                                        value={this.state.lang}
                                    
                                        onBlur={this.handleBlur('lang')}
                                        onChange={this.handleInputChange} />
                                    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                                </FormGroup>
                                
                           </Form>

                        </div>
                        <GMap user={this.state}/>                        
                    </div>
                   </div>
                   </React.Fragment>
             
        );
    }
}
export default InputCoordinates;