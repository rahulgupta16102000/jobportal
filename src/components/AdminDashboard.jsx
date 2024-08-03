import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./AdminDashboard.css"
import { cities } from 'indian-cities-json';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { jobPostService } from '../_service/jobpost.service';
import { TextareaAutosize } from '@mui/material';



const validationSchema = Yup.object().shape({
  jobHeading: Yup.string().required('Job Heading is required'),
  month: Yup.string().required('Month is required'),
  year: Yup.number().required('Year is required'),
  experienceRange: Yup.string().required('Experience Range is required'),
  jobRole: Yup.string().required('Job Role is required'),
  ctc: Yup.string().required('CTC is required'),
  jobLocations: Yup.array().of(Yup.string()).required('Job Locations is required'),  employmentType: Yup.string().required('Employment Type is required'),
  company: Yup.string().required('Company is required'),
  qualification: Yup.array().of(Yup.string()).required('Qualification is required'),
  batch: Yup.string().required('Batch is required'),
  eligibilityDetails: Yup.array().of(Yup.string()).required('Eligibility Details is required'),
  jobDescription: Yup.array().of(Yup.string()).required('Job Description is required'),
  responsibility: Yup.array().of(Yup.string()).required('Responsibility is required'),
  applyLink: Yup.string().url('Must be a valid URL').required('Apply Link is required'),
});

const initialValues = {
  companyName: '',
  experience:'',
  companyDescription:'',
  jobHeading: '',
  month: '',
  year: '',
  experienceRange: '',
  jobRole: '',
  ctc: '',
  jobLocations: [],
  employmentType: '',
  company: '',
  qualification: [''],
  batch: '',
  eligibilityDetails: [''],
  jobDescription: [''],
  responsibility: [''],
  applyLink: '',
};

const getData=async()=>{

  await jobPostService.getData()
  .then((res)=>{console.log('res',res)})
  .catch(err=>console.log(err))
}
getData()
const handleSubmit = async (values) => {
  console.log(values)
   jobPostService.postJob(values)
   .then((res)=>{console.log("jobs post",res);
    window.alert('post added')
    window.location.reload()})
   .catch(err=>console.log(err))
};

const indianCities = cities.map(city => city.name);

const engineeringQualifications = ['B.Tech', 'M.Tech', 'B.E', 'M.E', 'B.Sc', 'M.Sc', 'Ph.D', 'Diploma','BCA','MCA', 'Other'];
const currentYear = new Date().getFullYear();
const batchYears = Array.from({ length: 4 }, (_, index) => currentYear - index);
const softwareEngineeringRoles = [
  'Associate Software Engineer',
  'Software Engineer (SDE-1)',
  'Senior Software Engineer (SDE-2)',
  'Lead Software Engineer (SDE-3)',
  'Principal Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'QA Engineer',
  'Mobile App Developer',
  'Data Scientist',
  'Machine Learning Engineer',
  'UI/UX Designer',
  'Product Manager',
  'Scrum Master',
  'Technical Lead',
  'Engineering Manager',
  'CTO (Chief Technology Officer)',
  'All'
];
const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ errors, touched, isSubmitting, values, setFieldValue }) => (
          <Form  >

            <div className="form-row">
              <div className="form-group col">
                <label>
                  Job Heading:                </label>

                  <Field  name="jobHeading" as={TextareaAutosize} rows={10} className='inputfields' />
                  <ErrorMessage name="jobHeading" component="div" className="error" />
              </div>
              <div className="form-group col">
                <label>
                  Company Name:                </label>

                  <TextareaAutosize type="text" name="companyName" as={TextareaAutosize} rows={3} className='inputfields' />
                  <ErrorMessage name="companyName" component="div" className="error" />
              </div>
           
            </div>


<div className="form-row"> 
<div className="form-group col">
                <label>
                  Company Description:</label>
                  <Field type="text" name="companyDescription" as={TextareaAutosize} rows={3} className='inputfields'/>
                  <ErrorMessage name="companyDescription" component="div" className="error" />
                
              </div>
              <div className="form-group col">
                <label>
                  Experience Range:  </label>
                  <Field type="text" name="experienceRange" as={TextareaAutosize} rows={3} className='inputfields'/>
                  <ErrorMessage name="experienceRange" component="div" className="error" />
              
              </div>
</div>


            <div className="form-row">
              <div className="form-group col">
                <label>
                  Month:</label>
                  <Field type="text" name="month" as={TextareaAutosize} rows={3} className='inputfields'/>
                  <ErrorMessage name="month" component="div" className="error" />
                
              </div>
              <div className="form-group col">
                <label>
                  Year: </label>
                  <Field type="number" name="year" as={TextareaAutosize} rows={3} className='inputfields'/>
                  <ErrorMessage name="year" component="div" className="error" />
               
              </div>
            </div>

            <div className="form-row">
             
              <div className="form-group col">
              <label>
      Job Role: </label>
      <FormControl sx={{  width:"100%" }}>
        <InputLabel id="jobRole-label">Job Role</InputLabel>
        <Select
          labelId="jobRole-label"
          id="jobRole"
          name="jobRole"
          value={values.jobRole}
          style={{width:"100%"}}
           onChange={(e) => setFieldValue('jobRole', e.target.value)}
        >
          <MenuItem value="" disabled>Select Job Role</MenuItem>
          {softwareEngineeringRoles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ErrorMessage name="experience" component="div" className="error" />
   
              </div>
              <div className="form-group col">
                <label>
                experience: </label>
                  <FormControl  sx={{  width:"100%" }}>
                    <InputLabel id="experience-label">experience</InputLabel>
                    <Select
                      labelId="experience-label"
                      id="experience"
                      name="experience"
                      value={values.experience}
                      className='inputfields'
                      style={{width:"100%"}}
                      onChange={(e) => setFieldValue('experience', e.target.value)}
                    >
                      <MenuItem value="fresher">Fresher</MenuItem>
                      <MenuItem value="experienced">Experienced</MenuItem>
                    </Select>
                  </FormControl>
                  <ErrorMessage name="experience" component="div" className="error" />
               
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  CTC:   </label>
                  <Field type="text" name="ctc" className='inputfields' />
                  <ErrorMessage name="ctc" component="div" className="error" />
             
              </div>
              <div className="form-group col">
                <label>
                  Job Locations:</label>
                  <Autocomplete
                  multiple
                    disablePortal
                    id="combo-box-demo"
                    options={indianCities}
                    sx={{  width:"100%" }}
                    value={values.jobLocations}
                     className='inputfields'
                      
                    onChange={(e, newValue) => setFieldValue('jobLocations', newValue)}
                    renderInput={(params) => <TextField {...params} label="Job Locations" />}
                  />
                  <ErrorMessage name="jobLocations" component="div" className="error" />
                
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  Employment Type:</label>
                  <FormControl sx={{  width:"100%" }}>
                    <InputLabel id="employmentType-label">Employment Type</InputLabel>
                    <Select
                      labelId="employmentType-label"
                      id="employmentType"
                      name="employmentType"
                      value={values.employmentType}
                      className='inputfields'
                       onChange={(e) => setFieldValue('employmentType', e.target.value)}
                    >
                      <MenuItem value="full-time">Full Time</MenuItem>
                      <MenuItem value="internship">Internship</MenuItem>
                    </Select>
                  </FormControl>
                  <ErrorMessage name="employmentType" component="div" className="error" />
                
              </div>

              <div className="form-group col">
                <label>
                  Company: </label>
                  <FormControl sx={{  width:"100%" }}>
                    <InputLabel id="company-label">Company</InputLabel>
                    <Select
                      labelId="company-label"
                      id="company"
                      name="company"
                      value={values.company}
                      className='inputfields'
                       onChange={(e) => setFieldValue('company', e.target.value)}
                    >
                      <MenuItem value="Startup">Startup</MenuItem>
                      <MenuItem value="MNCs">MNCs</MenuItem>
                    </Select>
                  </FormControl>
                  <ErrorMessage name="company" component="div" className="error" />
               
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
              <label>
        Qualification: </label>
        <Field
          as="select"
          name="qualification"
          multiple={true}
          value={values.qualification}
          className='inputfields'
          onChange={(e) => setFieldValue('qualification', Array.from(e.target.selectedOptions, (option) => option.value))}
        >
          {engineeringQualifications.map((qualification) => (
            <option key={qualification} value={qualification}>
              {qualification}
            </option>
          ))}
        </Field>
        <ErrorMessage name="qualification" component="div" className="error" />
     
              </div>
              <div className="form-group col">
                <label>
                  Batch: </label>
                  <Field className='inputfields' type="text" name="batch" value={values.batch}  >
                   
                  </Field>
                  <ErrorMessage name="batch" component="div" className="error" />
               
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  Eligibility Details: </label>
                  <FieldArray
                    name="eligibilityDetails"
                    render={({ push, remove }) => (
                      <div>
                        {values.eligibilityDetails.map((detail, index) => (
                          <div key={index}>
                            <Field
                            as={TextareaAutosize} rows={3} className='inputfields'
                              type="text"
                              name={`eligibilityDetails[${index}]`}  
                            />
                            {index > 0 && (
                              <button type="button" onClick={() => remove(index)}>
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push('')}
                        >
                          Add More
                        </button>
                      </div>
                    )}
                  />
                  <ErrorMessage name="eligibilityDetails" component="div" className="error" />
               
              </div>
              <div className="form-group col">
                <label>
                  Job Description: </label>
                  <FieldArray
                    name="jobDescription"
                    render={({ push, remove }) => (
                      <div>
                        {values.jobDescription.map((detail, index) => (
                          <div key={index}>
                            <Field
                            as={TextareaAutosize} rows={3} className='inputfields'
                              type="text"
                              name={`jobDescription[${index}]`}
                               
                            />
                            {index > 0 && (
                              <button type="button" onClick={() => remove(index)}>
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push('')}
                        >
                          Add More
                        </button>
                      </div>
                    )}
                  />
                  <ErrorMessage name="jobDescription" component="div" className="error" />
               
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>
                  Responsibility:                </label>

                  <FieldArray
                    name="responsibility"
                    render={({ push, remove }) => (
                      <div>
                        {values.responsibility.map((detail, index) => (
                          <div key={index}>
                            <Field
                            as={TextareaAutosize} rows={3} className='inputfields'
                              type="text"
                              name={`responsibility[${index}]`}
                             />
                            {index > 0 && (
                              <button type="button" onClick={() => remove(index)}>
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push('')}
                        >
                          Add More
                        </button>
                      </div>
                    )}
                  />
                  <ErrorMessage name="responsibility" component="div" className="error" />
              </div>
              <div className="form-group col">
                <label>
                  Apply Link: </label>
                  <Field type="text" name="applyLink"  as={TextareaAutosize} rows={3} className='inputfields' />
                  <ErrorMessage name="applyLink" component="div" className="error" />
               
              </div>
            </div>

           <div style={{    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem'
}}>

            <button type="submit">Add Job Post</button>
           </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminDashboard;
