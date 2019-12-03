import React from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    DropdownMenu,
    DropdownItem,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
  class ParamAdditionnel extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
            <Row className="justify-content-center">
            <span className="heading-title info">Parametres additionnels</span>
          </Row>
              <div className="px-4">
                <div className="mt-2 py-5 border-top text-center">
                <Row className="justify-content-center">
                <Col lg="8">
                <FormGroup>
                <Row>
                <Col lg="4" className="align-content-start">
                <Badge for="age" className="text-uppercase mb-0" style={{textAlign:'left'}}>age du tuteur:</Badge>
                </Col>
                <Col >
                <Input
                  className="form-control"
                  placeholder="Indiquer l'âge du tuteur"
                  type="number" 
                  name="age"
                  id="age"
                  step="1" 
                  pattern="\d+"
                  min="18" 
                  max="65"
                  value="18"
                />
                </Col>
                </Row>
                </FormGroup>
                <FormGroup>
                <Row>
                <Col lg="4" className="align-content-start">
                <Badge for="capital" className="text-uppercase mb-0" style={{textAlign:'left'}}>Rente annuelle:</Badge>
                </Col>
                <Col >
              <Input
              className="form-control"
              placeholder="Indiquer le capital rente annuel desiré"
              type="number" 
              name="capital"
              id="capital"
              step="100000" 
              pattern="\d+"
              min="600000" 
              max="15000000"
              value="600000"
              />
              </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Row>
              <Col lg="4" className="justify-content-start">
              <Badge for="nrente" className="text-uppercase mb-0" style={{textAlign:'left'}}>nombre d'années rente:</Badge>
              </Col>
              <Col >
              <Input
              className="form-control"
              placeholder="Indiquer le nombre d'années de paiement de la rente"
              type="number" 
              name="nrente"
              id="nrente"
              step="1" 
              pattern="\d+"
              min="1" 
              max="5"
              value="1" 
              />
              </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Row>
              <Col lg="4" className="align-content-start">
              <Badge for="periodeRente" className="text-uppercase mb-0" style={{textAlign:'left'}}>Periodicité rente:</Badge>
              </Col>
              <Col >
              <select name="periodeRente" id="periodeRente"  className="form-control">
              <option id="annuelRente" name="annuelRente"  >
              Annuel
              </option>
              <option id="semestrielRente" name="semestrielRente"  >
              Semestriel
              </option>
              <option id="trimestrielRente" name="trimestrielRente"  >
                Trimestriel
              </option>
              <option id="mensuelRente" name="mensuelRente" >
              Mensuel
            </option>
            </select>
              </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Row>
              <Col lg="4" className="justify-content-start">
              <Badge for="ncotisation" className="text-uppercase mb-0" style={{textAlign:'left'}}>nombre d'années cotisation:</Badge>
              </Col>
              <Col >
              <Input
              className="form-control"
              placeholder="Pendant combien d'années comptez vous économiser?"
              type="number" 
              name="ncotisation"
              id="ncotisation"
              step="1" 
              pattern="\d+"
              min="5" 
              max="15"
              value="5" 
              />
              </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Row>
              <Col lg="4" className="align-content-start">
              <Badge for="periodeCotisation" className="text-uppercase mb-0" style={{textAlign:'left'}}>Periodicité cotisation:</Badge>
              </Col>
              <Col >
              <select name="periodeCotisation" id="periodeCotisation"  className="form-control">
              <option id="annuelCotisation" name="annuelCotisation"  >
              Annuel
              </option>
              <option id="semestrielCotisation" name="semestrielCotisation"  >
              Semestriel
              </option>
              <option id="trimestrielCotisation" name="trimestrielCotisation"  >
                Trimestriel
              </option>
              <option id="mensuelCotisation" name="mensuelCotisation" >
              Mensuel
            </option>
            </select>
              </Col>
              </Row>
              </FormGroup>
              <FormGroup>
              <Row>
              <Col lg="4" className="align-content-start">
              <Badge for="majoration" className="text-uppercase mb-0" style={{textAlign:'left'}}>Majoration rente en cas de décès:</Badge>
              </Col>
              <Col >
              <select name="majoration" id="majoration"  className="form-control">
              <option id="firstQ" name="firstQ"  >
              0%
              </option>
              <option id="secondQ" name="secondQ"  >
              25%
              </option>
              <option id="thirthQ" name="thirthQ"  >
                50%
              </option>
              <option id="fourthQ" name="fourthQ" >
              75%
            </option>
            <option id="sixthQ" name="sixthQ" >
            100%
          </option>
            </select>
              </Col>
              </Row>
              </FormGroup>
                </Col>
                </Row>
                </div>
                </div>
            </div>
            )}
  }
  export default ParamAdditionnel;