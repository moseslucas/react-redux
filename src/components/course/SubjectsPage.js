import React, {PropTypes} from 'react';
import swal from 'sweetalert2';
import {connect} from 'react-redux';
import * as subjectActions from '../../actions/subjectAction';
import {bindActionCreators} from 'redux';
class SubjectsPage extends React.Component{ 

  constructor(props){ 
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = { 
      subject: { 
        name: ''
      }
    }
  }
  
  handleSelect(name){ 
    this.props.actions.selectSubject(name);
  }

  handleChange(e){ 
    this.setState({ 
      subject:{ 
        [e.target.name]: e.target.value
      }
    })
  }

  handleSave(){ 
    if(!!this.state.subject.name){ 
      this.props.actions.createSubject(this.state.subject);
    }
  }

  handleRemove(name){ 
    this.props.actions.removeSubject(name);
  }

  render(){ 
    self = this;
    return( 
      <div>
        <h1>Subject </h1>
        <div className="form-group">
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
             className="form-control"/>
          <button 
            onClick={this.handleSave}
            className="btn btn-success btn-block">
            Add
          </button>

          <div className="jumbotron">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                </tr>
              </thead>
              <tbody>
                { 
                  this.props.subjects.map((subject,i)=>{ 
                    return( 
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{subject.name}</td>
                        <td>
                          <button
                            className="btn btn-warning" 
                            onClick={()=>{this.handleSelect(subject.name)}}>
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger" 
                            onClick={()=>{this.handleRemove(subject.name)}}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }

}


SubjectsPage.propTypes = { 
  subjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps){ 
  return {subjects: state.subjects};
}

function mapDispatchToProps(dispatch){ 
  return{ 
    actions: bindActionCreators(subjectActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubjectsPage);
