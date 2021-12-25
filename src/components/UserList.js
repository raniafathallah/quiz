import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
 import { Link } from "react-router-dom";
// import AddCircleIcon from '@material-ui/icons/AddCircle';
 import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
import { Card,CardBody,CardSubtitle,CardText,CardTitle
} from 'reactstrap';
//import Quiz from '../../../crudquiz/src/components/Quiz';
// import {
//   ListGroup,
//   ListGroupItem,
//   Button,FormGroup,Input,Label
// } from "reactstrap";

export const UserList = () => {
  const { users } = useContext(GlobalContext);

  return (
    <div className="mt-4 App">
      {users.length > 0 ? (
   
         
               <>
               {users.length > 0 ? (
                 <>
                   {users.map(quiz => (
                <Card key={quiz.id}>
                <CardBody>
                <div className='video'> 
                    <iframe width="100%" height="345" src="https://www.youtube.com/embed/e6EGQFJLl04"
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
                <CardTitle tag="h2">
                   {quiz.title}
                </CardTitle>
                <CardText>
                   {quiz.description}
                </CardText>
            
                <CardSubtitle>
                   {quiz.score}
                </CardSubtitle>
                </CardBody>
                <CardBody>
            <div className='All_Questions'>
             {quiz.questions.map(qu=>
               <div>
               <div className='Question'> Q : {qu.question} </div>
               <div className='Answer'> A : {qu.answer} </div>
               </div>
              )}
           </div>
          
                <CardText className='TimeDivs'>
                  Created at  {quiz.updated}
                </CardText>
                <CardText className='TimeDivs'>
                   Updated  at :  {quiz.created}
                </CardText>
             
              <div className="ml-auto">
                <Link to={`/edit/${quiz.id}`}  className="btn mr-1 ">
                  <EditIcon className='editIcon'/>
                  </Link>

              </div>

                </CardBody>
                </Card>
            
                   ))}
                 </>
               ) : (
                   <h4 className="text-center">No Users</h4>
                 )}
             </>
       
     
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
    </div>
  )
}
