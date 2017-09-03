import React, {PropTypes} from 'react';
import swal from 'sweetalert2';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component{
  constructor(props, context){ 
    super(props, context);
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.state = { 
      course: {title: ''}
    };
  }
  

  onClickSave(){ 
    this.props.actions.createCourse(this.state.course);
  }

  onTitleChange(e){ 
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }


  render(){
    return(
      <div>
        <h1>Courses Page</h1>
        <h2>Add Course </h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>
        <input
          type="submit"
          onClick={this.onClickSave}
          value="save" />
        {this.props.courses.map((course, i)=>{ 
          return <div key={i}> {course.title} </div>
        })}
      </div>
    );
  }
}

CoursesPage.propTypes = { 
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state){ 
  return {courses: state.courses };
}


  
function mapDispatchToProps(dispatch){ 
  return { 
    actions: bindActionCreators(courseActions,dispatch)
    // createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
