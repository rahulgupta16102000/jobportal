import React from 'react'
import { useNavigate } from 'react-router-dom'

function RecentPost(props) {
    // console.log('props',props)
    const navigate=useNavigate()
   const {item} = props
   console.log("item",item)

   const handleRecentPosts=()=>{
    console.log('click')
    navigate(`/jobs/${item.companyName}/${item.employmentType}/${item.post_number}`,item)
    window.location.reload()
   }
  return (
    
    <div style={{borderRadius: '18px',
      boxShadow:  '5px 5px 23px #575656,-5px -5px 23px #ffffff',width:'350px',margin:'0.8rem'}}>
    <button style={{border:'none'}} onClick={handleRecentPosts}  > 
    <div style={{padding:'1rem',margin:'1rem'}}>
    <p style={{ color: '#333'  }}>{item.companyName} is hiring for {item.jobRole}</p>
    <p  ><strong>Experience Range:</strong> {item.experienceRange} year</p>
    <p  ><strong>Job Locations:</strong> {item.jobLocations.join(', ')}</p>
    </div>
    </button>

    </div>
  )
}

export default RecentPost