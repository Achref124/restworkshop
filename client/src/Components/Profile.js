import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom'; // Pour rediriger après la suppression
import { deleteUser } from '../redux/Actions/UserActions'; // Importer l'action deleteUser


const Profile = () => {
  const user = useSelector(state => state.UserReducer.user); // Récupérer les infos utilisateur depuis Redux
  const dispatch = useDispatch(); // Permet de dispatcher l'action deleteUser
  const navigate = useNavigate(); // Permet de rediriger après suppression

  // Fonction de suppression du compte
  const handleDelete = async () => {
    if (user) {
      await dispatch(deleteUser(user._id)); // Dispatcher l'action de suppression
      localStorage.removeItem('token'); // Supprimer le token du localStorage (si tu utilises un token)
      navigate('/'); // Rediriger vers la page d'accueil après suppression
    }
  };
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div>
      <h2>Profile</h2>

<<<<<<< HEAD
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user?.photo} />
        <Card.Body>
          <Card.Title>{user?.username}</Card.Title>
          <Card.Title>Email: {user?.email}</Card.Title>
          <Card.Text>
            Age: {user?.age}
          </Card.Text>
          <Card.Text>
            Phone: {user?.phone}
          </Card.Text>
          {/* Remplacer "Go somewhere" par "Delete" et ajouter l'événement de suppression */}
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Link to={"/reset_password"}>  <Button variant="primary">
            RESET_PASSWORD
          </Button></Link>
        </Card.Body>
      </Card>
=======
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
>>>>>>> 422158745f535363f78d0e5a76b0788cc5018098
    </div>
  );
};

export default Profile;
