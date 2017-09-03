import React from 'react';
import swal from 'sweetalert2';
import {connect} from 'react-redux';
import * as subjectActions from '../../actions/subjectAction';


class SubjectsPage extends React.Component{ 

  constructor(props){ 
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = { 
      subject: { 
        name: ''
      }
    }
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
      this.props.dispatch(subjectActions.createSubject( 
        this.state.subject
      ));
    }
  }

  handleRemove(index){ 
    this.props.dispatch(subjectActions.removeSubject(index));
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
                            className="btn btn-danger" 
                            onClick={()=>{this.handleRemove(i)}}>
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


function mapStateToProps(state, ownProps){ 
  return {subjects: state.subjects};
}

export default connect(mapStateToProps)(SubjectsPage);
