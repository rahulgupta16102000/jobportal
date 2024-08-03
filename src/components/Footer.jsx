import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div style={{
         borderTopLeftRadius:'10px',
         borderTopRightRadius:'10px',
        boxShadow:  '5px 5px 10px #666666,-5px -5px 10px #ffffff' }}>
        <div style={{display:'flex'}}>
        <div style={{flex:2,padding:'4rem'}}>
        @Designed and Developed by <strong>Rahul Kumar Gupta</strong>
         </div>
         <div style={{flex:2,padding:'4rem'}}>Links
         <div id="centerdivv" class="centrdiv">
                        <a href="https://www.facebook.com/profile.php?id=100018318378934" target="_blank"
                            data-aos-offset="90" class="main">
                            {/* <i class="fa fa-2x fa-facebook" aria-hidden="true"></i> */}
                            <FacebookIcon/>
                        </a>
                        <a href="https://www.instagram.com/i_am_guptarahul/" target="_blank" data-aos-offset="90"
                            class="main">
                            {/* <i class="fa fa-2x fa-instagram" aria-hidden="true"></i> */}
                            <InstagramIcon/>
                        </a>
                        <a href="https://twitter.com/RahulGu45990375" target="_blank" data-aos-offset="90" class="main">
                            {/* <i class="fa fa-2x fa-twitter" aria-hidden="true"></i> */}
                            <TwitterIcon/>
                        </a>
                        
                        <a href="https://github.com/rahulgupta16102000" target="_blank" data-aos-offset="90"
                            class="main">
                            {/* <i class="fa fa-2x fa-github" aria-hidden="true"></i> */}
                            <GitHubIcon/>
                        </a>

                        <a href="https://www.linkedin.com/in/rahul-gupta-989220173/" target="_blank"
                            data-aos-offset="90" class="main">
                            {/* <i class="fa fa-2x fa-linkedin" aria-hidden="true"></i> */}
                            <LinkedInIcon/>
                        </a>
                         

                    </div>
         </div>
         </div>
         </div>
  )
}

export default Footer