import React from 'react';
import {withRouter} from "react-router-dom";
import '../assets/styles/layout.scss';


class Layout extends React.Component {
  render() {
     return (
      <>
         <div className="parentwrapper"> 
         <main className="maincontentwrap">
              {this.props.children}
          </main>
          </div>
      </>
     );
  }
}
export default withRouter(Layout);