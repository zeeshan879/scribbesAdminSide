import React from 'react'
import ua from "../../Asstes/style/user_Action.module.css"
import Accordion from 'react-bootstrap/Accordion';
const UserAction = () => {

  
  return (
<>
<div className={ua.main_container}>
  <div className={ua.acordion_wraper}>
  <Accordion className="ua">
      <Accordion.Item eventKey="0">
        <Accordion.Header className={ua.acordion_heading}>Posts</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        </Accordion.Body>
      </Accordion.Item>
            <Accordion.Item eventKey="1">
        <Accordion.Header className={ua.acordion_heading}>Comments</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        </Accordion.Body>
      </Accordion.Item>
            <Accordion.Item eventKey="3">
        <Accordion.Header className={ua.acordion_heading}>Activities</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        </Accordion.Body>
      </Accordion.Item>
            <Accordion.Item eventKey="4">
        <Accordion.Header className={ua.acordion_heading}>Searches</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>


</>
  )
}

export default UserAction