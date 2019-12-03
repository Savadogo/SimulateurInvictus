import React from 'react';
import { Card,CardBody, Row, Col } from "reactstrap";

class ChoixPack extends React.Component{
    constructor(){
        super()
        this.state={
            packChoisi:null,
            packColor: {
           Premium:"default",
            Serenite:"default",
            Essentiel:"default",
            Basic:"default"
          }
    }}
handlePackChoice= (e)=>{
    const id=e.currentTarget.id
    const packColor= {
      Premium:"default",
       Serenite:"default",
       Essentiel:"default",
       Basic:"default"
     }
    packColor[id]="success"
      this.setState({packColor:packColor})
    }
render(){
    return(
        <div>
        <Row className="justify-content-center">
        <span className="heading-title info">Choix du pack</span>
      </Row>
          <div className="px-4">
            <div className="mt-2 py-5 border-top text-center">
            <Row className="justify-content-center">
            <Col lg="8">
              <Row className="row-grid">
              <Col lg="6" className="mb-2">
              <Card className="card" id="Premium" color={this.state.packColor["Premium"]} type="button" onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className="text-neutral text-uppercase">
              Pack premium
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card" id="Serenite" color={this.state.packColor["Serenite"]}  type="button" onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className="text-neutral text-uppercase">
              Pack Serenité
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card" id="Essentiel" color={this.state.packColor["Essentiel"]}  type="button" onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className="text-neutral text-uppercase">
              Pack essentiel
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card info" id="Basic" color={this.state.packColor["Basic"]}  type="button" onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className="text-neutral text-uppercase">
              Pack basic
            </h6>
              </CardBody>
              </Card>
              </Col>
              </Row>
              </Col>
              </Row>
            </div>
          </div>
          </div>
    )
}
}
export default ChoixPack;