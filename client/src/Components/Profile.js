import React from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Profile = () => {
  const user=useSelector(state=>state.UserReducer.user)
  console.log(user)
  return (
    <div>Profile

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user?.photo} />
      <Card.Body>
        <Card.Title>{user?.username}</Card.Title>
        <Card.Title>email:{user?.email}</Card.Title>
        <Card.Text>
          age: {user?.age}
        </Card.Text>
        <Card.Text>
          phone: {user?.phone}
        </Card.Text>
        <Button variant="primary">delete account</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile