import React from "react";
import NavbarInvictus from '../../components/Navbars/NavbarInvictus';
import ParamAdditionnel from '../../components/Simulateurs/ParamAdditionnel';
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Card,CardBody, Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    console.log(this.props)
    return (
      <>
      <NavbarInvictus/>
        <main className="profile-page relative" ref="main">
          <section className="section-profile-cover section-shaped my-0 mt-0" style={{  height: '370px'}}>
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className= "section section-lg pt-lg-0 mb--10">
            <Container>
              <Card className="card-profile shadow mt--0">
              <ParamAdditionnel />
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;
