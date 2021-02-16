import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
} from 'mdbreact';
import { BioContainer, BufferRow } from './styles';
import {IconLink} from '../Home/styles'

const Bio = () => {
  return (
    <BioContainer>
      <MDBContainer>
        <BufferRow />
        <MDBRow>
          <MDBCol size="12" className="bio-col">
            <MDBJumbotron>
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                  <img
                    className="rounded z-depth-2"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGbtzEVxMyYbA/profile-displayphoto-shrink_400_400/0/1609959173878?e=1619049600&v=beta&t=fzIQYkJuCJP1eYJ8F1xkYQRcp35Lj471mXXHbgu3d0c"
                    alt="Jerome Ortega"
                  />
                  </MDBCol>
                  <MDBCol>
                    <h1 className="h1 display-4">Hey there!</h1>
                    <p className="lead">
                      Can't wait to meet you.
                    </p>
                    <hr className="my-2" />
                    <p className="smaller-text">
                      I enjoy challenging myself to be a better friend and developer each and every day.
                      I am integrity-focused and amiable to those around me in the pursuit of a culture of inclusion,
                      accountability, and lifelong learning. I look forward to the opportunity to continue maturing
                      my skill-set and work with driven people. I find this profession to be full of people from all
                      kinds of backgrounds, and I really like getting to know everyone I can. I live with my wife in
                      Walnut Creek, in the sunny state of California. I love video games, playing drums, watching movies,
                      and cooking dinner.
                    </p>
                    <hr />
                    <p className="smaller-text">
                      I am currently enrolled in the Computer Science program at CSU Monterey Bay, and I've learned a ton so far.
                      By the time I'm done, I should have all the skills necessary to branch out beyond web development, and take
                      on new challenges. My professional goal is to be an Engineering Manager at my current company by the time I
                      graduate from the CSUMB program at the end of 2022.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </BioContainer>
  );
}

export default Bio;
