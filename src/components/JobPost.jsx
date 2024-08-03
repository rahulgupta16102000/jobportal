import React from 'react';
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';


function JobPost(props) {
  const navigate = useNavigate()
  const { value } = props;
console.log("value",value)

  const handleSeeMore=()=>{
    console.log('click')
    navigate(`/jobs/${value.companyName}/${value.employmentType}/${value.post_number}`,value)
  }


  return (
    <div  >
      <div style={{padding:'1rem'}}>
      <h3 style={{ color: '#333' }}>{value.companyName} is hiring for {value.jobRole}</h3>
        {value.qualification && value.qualification.length > 0 && (
          <div>
            <strong>Qualification:</strong> {value.qualification.join('/')}
          </div>
        )}
        {/* {value.companyDescription && (
            <div>
            <strong>Company Description:</strong> {value.companyDescription}
          </div>
        )} */}
        {value.experienceRange && (
          <div>
            <strong>Experience Range:</strong> {value.experienceRange}
          </div>
        )}
         {value.jobRole && (
          <div>
            <strong>Job Role:</strong> {value.jobRole}
          </div>
        )}
        
        <Button  
              size="small"
              color="primary"
              onClick={handleSeeMore}
            >
              See More....</Button>         
      </div>
    </div>
  );
}

export default JobPost;
