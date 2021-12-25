import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: [ 
    {
      "id":'1',
      "title": "Luke Bryan - Most People Are Good ",
      "score": 30,
      "description": "The official music video for Luke Bryan's Most People Are GoodI believe kids oughta stay kidsAs long as they canTurn off the screen, go climb a tree",
      "url": "https://www.youtube.com/embed/e6EGQFJLl04",
      "questions":[{"question":'How many actors in this video?',"answer":'6 actors'},{"question":'how many views on this video in 2021',"answer":' I donot know '}],
      "created": "2020-09-09 09:26:39",
      "updated":"2020-09-09 09:26:39"   
    
    },
    {
      "id":'2',
      "title": "Luke Bryan - Most People Are Good ",
      "score": 31,
      "description": "The official music video for Luke Bryan's Most People Are GoodI believe kids oughta stay kidsAs long as they canTurn off the screen, go climb a tree",
      "url": "https://www.youtube.com/embed/e6EGQFJLl04",
      "questions":[{"question":'How many actors in this video?',"answer":'6 actors'},{"question":'how many views on this video in 2021',"answer":' I donot know '}],
      "created": "2020-09-09 09:26:39",
      "updated":"2020-09-09 09:26:39"   
    
    },
    
    // {
    //   "created": "2020-09-09 09:26:39",
    //   "description": "The official music video for Luke Bryan's Most People Are GoodI believe kids oughta stay kidsAs long as they canTurn off the screen, go climb a tree",
    //   "id": 30,
    //   "modified": "2020-09-09 09:26:39",
    //   "questions_answers": [
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 122,
    //           "is_true": "false",
    //           "text": "when did this video make ?"
    //         },
    //         {
    //           "id": 123,
    //           "is_true": "false",
    //           "text": "who sign here?"
    //         },
    //         {
    //           "id": 124,
    //           "is_true": "true",
    //           "text": "how many actors participate in this video "
    //         },
    //         {
    //           "id": 125,
    //           "is_true": false,
    //           "text": "question 1 answer 4 false"
    //         }
    //       ],
    //       "feedback_false": "question 1 false feedback",
    //       "feedback_true": "question 1 true feedback",
    //       "id": 53,
    //       "text": "question 1 text"
    //     },
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 126,
    //           "is_true": true,
    //           "text": "question 2 answer 1 true"
    //         },
    //         {
    //           "id": 127,
    //           "is_true": false,
    //           "text": "question 2 answer 2 false"
    //         }
    //       ],
    //       "feedback_false": "question 2 false feedback",
    //       "feedback_true": "question 2 true feedback",
    //       "id": 54,
    //       "text": "question 2 text"
    //     },
    //     {
    //       "answer_id": null,
    //       "answers": [
    //         {
    //           "id": 128,
    //           "is_true": false,
    //           "text": "question 3 answer 1 false"
    //         },
    //         {
    //           "id": 129,
    //           "is_true": true,
    //           "text": "question 3 answer 2 true"
    //         },
    //         {
    //           "id": 130,
    //           "is_true": false,
    //           "text": "question 3 answer 3 false"
    //         }
    //       ],
    //       "feedback_false": "question 3 false feedback",
    //       "feedback_true": "question 3 true feedback",
    //       "id": 55,
    //       "text": "question 3 text"
    //     }
    //   ],
    //   "score": "30",
    //   "title": "Luke Bryan - Most People Are Good ",
    //   "url": "https://www.youtube.com/embed/e6EGQFJLl04"
    // }
]

}

// Create Context
export const GlobalContext = createContext(null);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}