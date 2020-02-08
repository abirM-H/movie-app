import React from 'react'

class Add extends React.Component{


render(){
    return(
        <div className='MovieSite'>
            
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Add Movie
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <input type="text" name="ratingsearch" placeholder="Search.."></input>
      <input type="text" name="imgsearch" placeholder="Search.."></input>
      <input type="text" name="titlesearch" placeholder="Search.."></input>
      <input type="text" name="yearsearch" placeholder="Search.."></input> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"data-dismiss="modal">Add</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

}

export default Add