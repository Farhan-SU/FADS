import React from 'react';
import Navbar from '../components/Navbar';
import {withRouter} from "react-router-dom";
import '../assets/styles/layout.scss';


class Layout extends React.Component {
  render() {
     return (
      <>
      <Navbar/>
      <main>
         {this.props.children}
      </main>   
      </>
     );
  }
}
export default withRouter(Layout);


// import { Transition, TransitionGroup } from "react-transition-group";
// import Link from "next/link";
// import gsap from "gsap";
// const Layout = ({ path, children }) => {
//    return (
//      <div>
//        <header>
//          <Link href="/">
//            <a className="nav-link">Home</a>
//          </Link>
//          <Link href="/about">
//            <a className="nav-link">About</a>
//          </Link>
//        </header>
//        <div className="layout-content">
//          <TransitionGroup>
//            <Transition
//              onEnter={(node) => {
//                gsap.killTweensOf(node);
//                gsap.set(node, { clearProps: "all" });
//                node.classList.add("absolute");
//                gsap.to(node, {
//                  duration: 0.3,
//                  x: 0,
//                  autoAlpha: 1,
//                  onComplete() {
//                    node.classList.remove("absolute");
//                  }
//                });
//              }}
//              onExit={(node) => {
//                gsap.to(node, {
//                  duration: 0.3,
//                  x: -200,
//                  autoAlpha: 0
//                });
//              }}
//              key={path}
//              appear={true}
//              timeout={300}
//            >
//              <div className="container">
//                <div className="content">{children}</div>
//              </div>
//            </Transition>
//          </TransitionGroup>
//        </div>
//      </div>
//    );
//  };
 
//  export default Layout;
 