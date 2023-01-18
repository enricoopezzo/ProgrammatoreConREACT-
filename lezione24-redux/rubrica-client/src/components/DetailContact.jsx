import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStateToProps = (state) => {
  return { contacts: [...state] }
}

function DetailContact({contacts}) {

  const {id} = useParams();
  const [contact, setContact] = useState();

  useEffect(() => {
    let obj = contacts.find(c => c.id === +id)
    setContact(obj);
  }, [])
  

  return (
    <>
    {contact && 
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{contact.fullname}</Card.Title>
        <Card.Text>City: {contact.city}</Card.Text>
        <Card.Text>Email: {contact.email}</Card.Text>
        <Card.Text>Phone: {contact.phone}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    }   
    </>
  )
}

export default connect(mapStateToProps)(DetailContact)