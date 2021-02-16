import React from 'react';
import {
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
} from 'mdbreact';

const CourseModal = ({
    isActive,
    closeModal,
    course,
}) => {
    const handleToggle = () => closeModal();

    return (
      <MDBModal isOpen={isActive} toggle={handleToggle} size="lg">
        <MDBModalHeader toggle={handleToggle}>{course.number} - {course.name}</MDBModalHeader>
        {
          course.modalData && (
            <MDBModalBody>
              <p>{course.modalData.info}</p>
              {course.modalData.assignments && (
                <>
                  <h4>Assignments</h4>
                  <ul>
                    {course.modalData.assignments.map(assignment => (
                      <li key={assignment.link}>
                        <a
                          href={assignment.link}
                          target='_blank'
                          rel="noreferrer"
                        >
                          {assignment.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </MDBModalBody>
          )
        }
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={handleToggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
}

export default CourseModal;
