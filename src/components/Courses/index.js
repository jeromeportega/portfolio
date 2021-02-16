import React, { useState } from 'react';
import CourseModal from './CourseModal';
import { CoursesContainer } from './styles';
import { BufferRow } from '../Bio/styles';
import courses from './courses';
import {
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdbreact';

const Courses = () => {
  const [courseModalActive, setCourseModalActive] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleCourseClick = (data) => {
    setModalData(data);
    setCourseModalActive(true);
  }

  return (
    <>
      <CoursesContainer>
        <MDBContainer>
          <BufferRow />
          <MDBRow>
            {
              courses.map(course => (
                <MDBCol key={course.number} md="6" style={{ marginBottom: '30px'}}>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardTitle className="card-title-height">{course.name}</MDBCardTitle>
                      <MDBCardText>{course.number}</MDBCardText>
                      <MDBBtn
                        href="#"
                        disabled={!course.modalData}
                        onClick={() => handleCourseClick(course)}
                      >
                          {!course.modalData ? 'In Progress' : 'Completed - See More'}
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
            }
          </MDBRow>
        </MDBContainer>
      </CoursesContainer>
      <CourseModal
        isActive={courseModalActive}
        closeModal={() => setCourseModalActive(false)}
        course={modalData}
      />
    </>
  );
}

export default Courses;
