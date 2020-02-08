import React, {Component} from 'react'


const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                isLoading: true
             }
        }
        componentDidMount = () =>
        setTimeout(() => {
          this.setState({
            isLoading: false
          });
        }, 3000);

        
            render() {
                if (this.state.isLoading === false)
                  return (
                    <div>
                      <OriginalComponent {...this.props} />
                    </div>
                  );
                else
                  return (
                    <div className="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  );
              }
            }
            return NewComponent;
          };
     
    export default UpdatedComponent ;
