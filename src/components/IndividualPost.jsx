import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobPostService } from '../_service/jobpost.service';
import RecentPost from './RecentPost';


function IndividualPost() {
  const { id,companyName,employmentType } = useParams();
  const [value, setValue] = useState();
  const [recentPost,setRecentPost]= useState();
 console.log('id,companyName,employmentType',id,companyName,employmentType)
  
  useEffect(() => {
    // Fetch individual job post
    const fetchJobPost = async () => {
      try {
        const res = await jobPostService.getByPostNumber(id);
        setValue(res);
      } catch (error) {
        console.error('Error fetching individual job post:', error);
      }
    };

    fetchJobPost();
  }, [id]);

  useEffect(() => {
    // Fetch recent posts
    const fetchRecentPosts = async () => {
      try {
        const res = await jobPostService.recentPosts();
        setRecentPost(res);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);
console.log("recentPost",recentPost)
console.log('value',value)
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    {/* <div style={{flex:1}}></div> */}
      <div style={{
        borderRadius: '26px',
        background: '#ffffff',
        boxShadow: '7px 7px 14px #707070, -7px -7px 14px #ffffff',
        margin: '1rem',
        flex: 3,
        padding: '2rem',
        overflowY: 'auto',  
        // maxHeight: '70vh',
      }}>
        {value && (
          <div>
            <h1 style={{ color: '#333', fontSize: '2.5rem' }}>{value.companyName} is hiring for {value.jobRole}</h1>
            <p style={{ fontSize: '1.2rem' }}><strong>Employment Type:</strong> {value.employmentType}</p>
            <p style={{ fontSize: '1.2rem' }}><strong>Job Role:</strong> {value.jobRole}</p>
            {value.qualification && value.qualification.length > 0 && (
              <p style={{ fontSize: '1.2rem' }}><strong>Qualification:</strong> {value.qualification.join('/')}</p>
            )}
            <p style={{ fontSize: '1.2rem' }}><strong>Experience Range:</strong> {value.experienceRange} year</p>
            {value.jobLocations && (
              <p style={{ fontSize: '1.2rem' }}><strong>Job Locations:</strong> {value.jobLocations.join(', ')}</p>
            )}
            {value.batch && (
              <p style={{ fontSize: '1.2rem' }}><strong> Eligible Batch:</strong> {value.batch}</p>
            )}
            <p style={{ fontSize: '1.2rem' }}><strong>CTC:</strong> {value.ctc}</p>
            {value.company && (
              <p style={{ fontSize: '1.2rem' }}><strong>Company:</strong> {value.company}</p>
            )}
            {value.companyDescription && (
              <div>
                <h3 style={{ color: '#555', fontSize: '1.8rem' }}><strong>About Company:</strong></h3>
                <p style={{ fontSize: '1.2rem' }}>{value.companyDescription}</p>
              </div>
            )}
            {value.eligibilityDetails && value.eligibilityDetails.length > 0 && value.eligibilityDetails[0]!=""  && (
              <div>
                <strong style={{ fontSize: '1.2rem' }}>Eligibility Details:</strong>
                <ul style={{ fontSize: '1.2rem' }}>
                  {value.eligibilityDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {value.jobDescription && value.jobDescription.length > 0 && value.jobDescription[0]!=="" && (
              <div>
                <strong style={{ fontSize: '1.2rem' }}>Job Description:</strong>
                <ul style={{ fontSize: '1.2rem' }}>
                  {value.jobDescription.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {value.responsibility && value.responsibility.length > 0 && value.responsibility[0]!==""  && (
              <div>
                <strong style={{ fontSize: '1.2rem' }}>Responsibility:</strong>
                <ul style={{ fontSize: '1.2rem' }}>
                  {value.responsibility.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {value.applyLink && (
              <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                <strong>More Details & Apply Link:</strong> <a href={value.applyLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Apply Here</a>
              </p>
            )}
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
         Adv
      </div>
    </div>
    <div style={{display:'flex'}}>
    <div style={{flex:3}}>
        <h1>Recent Posts....</h1>
            <div style={{display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'}}>
              {recentPost && recentPost.map((item,index)=>{
               return <RecentPost item={item} key={index}/>
              })}
            </div>
       
        </div>
        <div style={{flex:1}}>
        <h1>Adv</h1>
            
        </div>
    </div>
    </div>
  );
}

export default IndividualPost;
