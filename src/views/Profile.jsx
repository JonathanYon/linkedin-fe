import { Container, Row, Col } from "react-bootstrap";
// import "../Styles/Murilo.css";
import Dashboard from "../Components/ProfileComp/Dashboard";
import RightProfileCard from "../Components/SideCards/RightProfileCard";
import UserDisplay from "../Components/ProfileComp/UserDisplay";
import About from "../Components/ProfileComp/About";
import Activity from "../Components/ProfileComp/Activity";
import Featured from "../Components/ProfileComp/Featured";
import Experience from "../Components/ProfileComp/Experience/Experience";
import Interests from "../Components/skills/interests/Interests";
import Skills from "../Components/skills/interests/Skills";

const Profile = (props) => {
  props.setShowTopNavBar(true);
  return (
    <Container>
      <Row>
        <Col className="col-lg-8 pXaxis">
          <UserDisplay
          // userData={props.userData}
          />
          <Row>
            <Col className="col-12 mt-3 px-0">
              <Dashboard></Dashboard>
              <About></About>
              <Featured></Featured>
              <Activity></Activity>
            </Col>
          </Row>
          <Experience></Experience>
          <Row>
            <Col className="px-0">
              <Skills></Skills>
              <Interests></Interests>
            </Col>
          </Row>
        </Col>

        <Col className="col-4">
          <RightProfileCard
          // userData={props.userData}
          ></RightProfileCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
