import React from 'react'; 
class  ListComponent extends React.Component{ 
  
  state={text:this.props.text,
      display:true,
      currentDate: new Date().toLocaleString()
    };

  Delete = () => {
    this.setState({display:false});
  }
  
  render(){ 
    if(this.state.display)
    {
      var resultHTML =  
      <>
      <div className='col-sm-12 col-lg-10  ms-lg-5 me-lg-5 mt-3' >
        <div className="card shadow-lg" >
          <div className="card-body">
            <p className="card-text">{this.state.text}</p>
            <p><small className='fw-bold'>{this.state.currentDate}</small></p>
            <button type='button' className='btn btn-success fw-bold align-self-center' onClick={this.Delete} >Remove Task</button>
          </div>
      </div>
      </div>
      </>
    }
    
    
    return  (
      <>
      {
        this.state.text &&
        <div className='container'>
          <div className='row row-cols-1'>
          {resultHTML}
          </div>
        </div>
      }
      </>
    )
  }
}



export {ListComponent};