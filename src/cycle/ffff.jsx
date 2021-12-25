// import React, { useState, useContext,useEffect } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuid } from "uuid";
// import { Link, useHistory } from "react-router-dom";
// import DeleteIcon from '@material-ui/icons/Delete';
// import {
//   Button,
//   Card,
//   CardContent,
//   CircularProgress,
//   Grid,
//   Typography
// } from '@material-ui/core';

// import { array, boolean, number, object, string, ValidationError } from 'yup';
// import { Heading } from './Heading';
// import { Formik, Field, Form, useField, useFormikContext ,FieldArray} from 'formik';
// import IdContext from "../context/IdContext";

// const MyField = (props) => {
//    const{idd, setIdd}=useContext(IdContext);
//   const { editUser, users } = useContext(GlobalContext);

//   const {setFieldValue,} = useFormikContext();
//   const [field, meta] = useField(props);
//   React.useEffect(() => {

//    const selecteduser = users.find(user => user.id === idd); 

//    if(props.name=="title"){ setFieldValue(props.name,selecteduser.title);}
//    else if(props.name=="score"){ setFieldValue(props.name,selecteduser.score);}
//    else if(props.name=="description"){ setFieldValue(props.name,selecteduser.description);}
//    else if(props.name=="url"){ setFieldValue(props.name,selecteduser.url);}
//    else if(props.name=="created"){ setFieldValue(props.name,selecteduser.created);}
//    else if(props.name=="updated"){ setFieldValue(props.name,selecteduser.updated);}
//   }, [ setFieldValue, props.name]);

//   return (
//     <>
//       <Grid item>
//           <Field  {...props} {...field}/>
//       </Grid>
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

// const MyField2= (props) => {
//   const { editUser, users } = useContext(GlobalContext);

//   const {setFieldValue,} = useFormikContext();
//   const [field, meta] = useField(props);

//   const{idd, setIdd}=useContext(IdContext);

//   const selecteduser = users.find(user => user.id === idd); 
//   let quesNum=selecteduser.questions.length-1;

//   let Allelements=[];
//   do{
//    // quesNum--;
//     const element =
//     <div>
//             <FieldArray name={`questions.${quesNum}`}>
//                       <div className="row">
//                         <div className="col">
//                           <Field
                         
//                             name={`questions[${quesNum}].question`}           
//                           />
//                         </div>
//                         <div className="col">
//                           <Field
//                                name={`questions[${quesNum}].answer`}   />
//                         </div>
//                       </div>
//             </FieldArray>
//     </div>;
//     //let Allelements=[element];
//      Allelements=[element,Allelements,];
//      quesNum--;
//   }
//   while(quesNum>=0)

//   React.useEffect(() => {

//  if(props.name=="questions"){ setFieldValue(props.name,selecteduser.questions);}

//   }, [ setFieldValue, props.name,quesNum]);

//   return (
//     <>
//     <div>
//       {Allelements}
//     </div>
  
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

// export const EditUser = (props) => { {
 

//   const { editUser, users } = useContext(GlobalContext);
//   const history = useHistory();
//   const currentUserId = props.match.params.id;
//   const [idd, setIdd]=useState(currentUserId);

//   const initialValues = {  title: '' };
//   return (

//    <IdContext.Provider value={{idd, setIdd}}>
//     <div className="App">
//       <Heading/>
//       <div className='fromFormik'>
//       <h2   style={{color: 'rgb(21 137 149)',textAlign:'left'}}>Edit Quiz</h2>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           editUser(values);
//           console.log("edited:"+values);
//           history.push("/")
//         }}
//       >
//         <div className="section">
  
//           <div>
         
//           </div>
//           <Form>

//             <label style={{display:'block'}}>
//               title
             
//               <MyField name="title"  className="InputField"/>
//               <MyField name="score" className="InputField" />
//               <MyField name="description"  className="InputField"/>
//               <MyField name="url"  className="InputField"/>
//               <div className='QuestionsDV'>
//                 Questions
//                 <MyField2 name ="questions"/> 
//               </div>
//               <MyField name="created"  className="InputField"/>
//               <MyField name="updated"  className="InputField"/>
           
//             </label>
//             <button type="submit" className='SubmitBtn'>Submit</button>
//           </Form>
//         </div>
//       </Formik>
//       </div>
//     </div>
//    </IdContext.Provider>
//   );
// }
// }









// //////////////////////////////
// import React, { useState, useContext,useEffect } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuid } from "uuid";
// import { Link, useHistory } from "react-router-dom";
// import DeleteIcon from '@material-ui/icons/Delete';
// import {
//   Button,
//   Card,
//   CardContent,
//   CircularProgress,
//   Grid,
//   Typography
// } from '@material-ui/core';
// //import { Field, FieldArray, Form, Formik } from 'formik';
// import { array, boolean, number, object, string, ValidationError } from 'yup';
// import { Heading } from './Heading';
// //import React from 'react';
// //import ReactDOM from 'react-dom';
// import { Formik, Field, Form, useField, useFormikContext ,FieldArray} from 'formik';
// import IdContext from "../context/IdContext";

// const MyField = (props) => {
//   const{idd, setIdd}=useContext(IdContext);
//   console.log("iddddd up "+idd);
//   const { editUser, users } = useContext(GlobalContext);
//   const {setFieldValue,} = useFormikContext();
//   const [field, meta] = useField(props);
//   React.useEffect(() => {
//    const selecteduser = users.find(user => user.id === idd); 
//    console.log(selecteduser);
//    console.log(props)
//    if(props.name=="id"){ setFieldValue(props.name,idd);}
//    else if(props.name=="title"){ setFieldValue(props.name,selecteduser.title);}
//    else if(props.name=="score"){ setFieldValue(props.name,selecteduser.score);}
//    else if(props.name=="description"){ setFieldValue(props.name,selecteduser.description);}
//    else if(props.name=="url"){ setFieldValue(props.name,selecteduser.url);}
//    else if(props.name=="created"){ setFieldValue(props.name,selecteduser.created);}
//    else if(props.name=="updated"){ setFieldValue(props.name,selecteduser.updated);}
//    console.log(selecteduser.questions.length);
//   }, [ setFieldValue, props.name]);

//   return (
//     <>
//       <Grid item>
//           <Field  {...props} {...field}/>
//       </Grid>
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

// const MyField2= (props) => {
//   const { editUser, users } = useContext(GlobalContext);

//   const {setFieldValue,} = useFormikContext();
//   const [field, meta] = useField(props);
//   const{idd, setIdd}=useContext(IdContext);

//   const selecteduser = users.find(user => user.id === idd); 
//   let quesNum=selecteduser.questions.length-1;

//   let Allelements=[];
//   do{
//     const element =
//     <div>
//             <FieldArray name={`questions.${quesNum}`}>
//                       <div className="row">
//                         <div className="col">
//                           <Field
                         
//                             name={`questions[${quesNum}].question`}           
//                           />
//                         </div>
//                         <div className="col">
//                           <Field
//                                name={`questions[${quesNum}].answer`}   />
//                         </div>
//                       </div>
//             </FieldArray>
//     </div>;

//      Allelements=[element,Allelements,];
//      quesNum--;
//   }
//   while(quesNum>=0)

//   React.useEffect(() => {
//    const selecteduser = users.find(user => user.id === idd); 
//    console.log(selecteduser);
//    console.log(props)
//    console.log(selecteduser.questions.length);
//    console.log(selecteduser.questions[0].question);
//  if(props.name=="questions"){ setFieldValue(props.name,selecteduser.questions);}

//   }, [ setFieldValue, props.name,quesNum]);

//   return (
//     <>
//     <div>
//       {Allelements}
//     </div>
  
//       {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//     </>
//   );
// };

// export const EditUser = (props) => { {


//   const { editUser, users } = useContext(GlobalContext);
//   const history = useHistory();
//   const currentUserId = props.match.params.id;
//   const [idd, setIdd]=useState(currentUserId);
 
// alert(currentUserId);
//   React.useEffect(() => {

 
//   }, [users]);
//   const initialValues = {  title: '' };
//   return (

//     <IdContext.Provider value={{idd, setIdd}}>
//     <div className="App">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           alert(JSON.stringify(values, null, 2));
          
//           editUser(values);
//           console.log("edited:"+values);
//           history.push("/")
//         }}
//       >
//         <div className="section">
  
//           <div>
         
//           </div>
//           <Form>

//             <label>
//               title
//               <MyField name="id" />
//               <MyField name="title" />
//               <MyField name="score" />
//               <MyField name="description" />
//               <MyField name="url" />
//               <div>
//                 Questions
//                 <MyField2 name ="questions"/> 
//               </div>
//               <MyField name="created" />
//               <MyField name="updated" />
           
//             </label>
//             <button type="submit">Submit</button>
//           </Form>
//         </div>
//       </Formik>
//     </div>
//     </IdContext.Provider>
//   );
// }
// }





