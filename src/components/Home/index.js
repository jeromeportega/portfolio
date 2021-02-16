import React from 'react';
import {
  MDBView,
  MDBMask,
  MDBTypography,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';

import { IconLink } from './styles';

const Home = () => {
  return (
    <MDBView src="https://miro.medium.com/max/4800/1*1B-oT1GhVqPImjgX_nFh4w.jpeg">
      <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
        <MDBTypography tag="h1" variant="display-3">Jerome Ortega</MDBTypography>
        <MDBTypography tag="h2">Software Engineer</MDBTypography>
        <MDBContainer>
          <MDBRow>
            <MDBCol style={{ marginBottom: '15px' }}>
              <IconLink href="https://github.com/jeromeportega" target="_blank">
                <MDBIcon
                  fab
                  size="2x"
                  icon="github"
                  style={{ marginRight: '20px' }}
                />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/jerome-ortega/" target="_blank">
                <MDBIcon
                  fab
                  size="2x"
                  icon="linkedin"
                />
              </IconLink>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <a href="https://csumb.edu/" target="_blank" rel="noreferrer">
          <img
            src="https://ilearn.csumb.edu/pluginfile.php/1/theme_fordson/headerlogo/1611734704/csumb_logo.png"
            alt="CSUMB Logo"
            style={{
              height: '100px',
              backgroundColor: 'white',
            }}
          />
        </a>
      </MDBMask>
    </MDBView>
  );
}

export default Home;
