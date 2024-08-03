import React, { useEffect, useState } from 'react'
import { jobPostService } from '../_service/jobpost.service'
import JobPost from './JobPost';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


function GetJobs() {
  const [data, setData] = useState([]);

  const softwareEngineeringRoles = [
    "Associate Software Engineer",
    "Software Engineer (SDE-1)",
    "Senior Software Engineer (SDE-2)",
    "Lead Software Engineer (SDE-3)",
    "Principal Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "QA Engineer",
    "Mobile App Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "UI/UX Designer",
    "Product Manager",
    "Scrum Master",
    "Technical Lead",
    "Engineering Manager",
    "CTO (Chief Technology Officer)",
  ];

  useEffect(() => {

    jobPostService.getData()
      .then((res => {
        setData(res)
        console.log(res);
      }))
  }, [])


  const handleJobRole= async (value)=>{
    console.log('Job Role', value)
    await  jobPostService.handleJobRole({jobRole:value})
    .then((res)=>{console.log('job role',res);setData(res)})
    .catch((err)=>console.log(err))
  }

  console.log("data", data)
  return (
    <div style={{ marginTop: '5rem',minHeight: '65vh' }}>
      <div style={{display:'flex'}}>
        <div style={{
          // display: 'flex',
          // flexWrap: 'wrap',
          // justifyContent: 'flex-start',
          // alignItems: 'flex-start'
          flex:3
        }}>
        <div style={{display:'flex',justifyContent:'space-around'}}>
         <FormControl sx={{ minWidth: 200 }}>
         <InputLabel id="jobRole-label">Experience</InputLabel>

         <Select
          labelId="Experience-label"
           
          onChange={(e) => console.log('select',e.target.value)}
        >
          <MenuItem value="" disabled>Select Experience</MenuItem>
           
            <MenuItem   value={"fresher"}>
              Fresher
            </MenuItem>
            <MenuItem   value={"experienced"}>
              Exeprienced
            </MenuItem>
          
        </Select>
</FormControl>
         <FormControl sx={{ minWidth: 200 }}>
         <InputLabel id="outlined-jobRole-label" label='outlined' variant='outlined'>Company</InputLabel>

         <Select
          labelId="company-label"
           
          onChange={(e) => console.log('select',e.target.value)}
        >
          <MenuItem value="" disabled>Select Company</MenuItem>
           
            <MenuItem   value={"Startup"}>
              StartUp
            </MenuItem>
            <MenuItem   value={"MNCs"}>
              MNCs
            </MenuItem>
          
        </Select>
</FormControl>
         <FormControl sx={{ minWidth: 200 }}>
         <InputLabel id="jobRole-label">Job Role</InputLabel>

         <Select
          labelId="jobRole-label"
           
          onChange={(e) =>handleJobRole(e.target.value) }
        >
          <MenuItem value="" disabled>Select Job Role</MenuItem>
          {softwareEngineeringRoles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
</FormControl>




        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          {data && data.map((item, index) => {
            return <JobPost key={index} value={item} />
          })}
          </div>
        </div>
        {/* <div style={{flex:1}} >gewrhty</div> */}
      </div>
    </div>
  )
}

export default GetJobs