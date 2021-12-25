import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
// import DatePicker from "react-datepicker";

import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
//import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { array, boolean, number, object, string, ValidationError } from 'yup';

import { Heading } from './Heading';


export const AddUser = () => {

  const { addUser,users } = useContext(GlobalContext);
  const history = useHistory();
  const emptyAnswer = { answer: '', question : '' };

  return (
    <div className='form'>
      <Heading/>
      <Card>
      <CardContent>
        { <Formik
          initialValues={{
            id:''+users.length+1,
            title: '',
            score:0,
            description:'',
            url:'https://www.youtube.com/embed/e6EGQFJLl04',
            questions: [emptyAnswer],
            created:new Date().getDate(),
            updated:new Date().getDate(),
          }}
          validationSchema={object({
              title: string().required('Your Title is required'),
              score:number()
              .required('Your Score is required'),
              description:string()
              .required('Your Description is required'),
              url:string()
               .required('Your Url is required'),
               questions: array(
              object({
                question: string()
                  .required('question name needed'),
                answer: string()
                  .required('answer needed'),
              }),
           
            )
              .min(1, 'You need to provide at least 1 question')
              .max(3, 'You can only provide 3 question'),
          })}
          onSubmit={ (values) => {
              console.log('my values', values);
               addUser(values);
              history.push("/");
          
         //  return new Promise((res) => {setTimeout(res, 2500); });
          }}
        >
          {({ values, errors, isSubmitting, isValid }) => (
            <Form autoComplete="off" className='fromFormik'>
              <h2 style={{color: 'rgb(21 137 149)'}}>Add New Quiz</h2>
              <Grid container direction="column" spacing={2}>
                <p className='Error'>{errors.title}</p>
                <Grid item>
                  <Field className="InputField"   name="title"  placeholder=" Enter  Title"/>
                {/* </Grid>
                <p className='Error'>{errors.description}</p>
                <Grid item> */}
                  <Field  className="InputField"  name="description"  placeholder=" Enter description"/>
                </Grid>
                <Grid item>
                  <Field  className="InputField"  name="score" placeholder=" Enter score"     />
                </Grid>
                <Grid item>
                  <Field className="InputField" name="url"  placeholder=" Enter url" />
                </Grid>
                <Grid item>
                  <Field className="InputField" name="created"  type="Date" placeholder=" Enter date" />
                </Grid>
                <Grid item>
                  <Field className="InputField" name="updated"  type="Date" placeholder=" Enter last time updated" />
                

                </Grid>
         
                <FieldArray name="questions">
                  {({ push, remove }) => (
                    <React.Fragment>
                      <Grid item>
                        <Typography variant="body2">
                          All your questions
                        </Typography>
                      </Grid>

                      {values.questions.map((_, index) => (
                        <Grid
                          container
                          item
                   
                          key={index}
                          spacing={2}
                        >
                          <Grid item container spacing={2} xs={12} sm="auto">
                            <Grid item xs={12} sm={4}>
                              <Field
                                
                                name={`questions.${index}.question`}
                            
                              />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <Field
                                
                                name={`questions[${index}].answer`}
                                type="text"
                              
                              />
                            </Grid>
                            <Button
                              disabled={isSubmitting}
                              onClick={() => remove(index)}>
                              <DeleteIcon />
                            </Button>
                          </Grid>
                   
                        </Grid>
                      ))}

                      <Grid item>
                        {typeof errors.questions === 'string' ? (
                          <Typography color="error">
                            {errors.questions}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          onClick={() => push(emptyAnswer)}
                         className='AddQuestion'>
                          Add Question
                        </Button>
                      </Grid>
                    </React.Fragment>
                  )}
                </FieldArray>
                <Grid item>
                  <Button className='SubmitBtn '
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.9rem" />
                      ) : undefined
                    }
                  >
                    {isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>

            
                  <Link to="/" className="btn btn-danger ml-2 CancelBtn" >Cancel</Link>
                </Grid>
              </Grid>

              {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
            </Form>
          )}
        </Formik> }
      </CardContent>
    </Card>
  
   
    </div>
  )
}




