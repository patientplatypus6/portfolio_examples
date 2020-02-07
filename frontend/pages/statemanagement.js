import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentStateManagement from '../components/molecules/ContentStateManagement';
import Footer from '../components/molecules/Footer';
import withRedux from "next-redux-wrapper";
import { getPosts } from '../redux/actions/fooActions';
// import makeStore from '../components/redux/reduxComponent';
import { connect } from 'react-redux';

class StateManagement extends Component{


  static async getInitialProps({ store, isServer, pathname, query }) {
    //await store.dispatch(getPosts());
    return { custom: 'custom' };
  }


  handleSubmit = e => {
    console.log('inside handleSubmit')
    e.preventDefault();
    this.props.getPosts();
  };

  componentDidMount(){
    console.log('inside componentDidMount of State Management Page')
    console.log('value of this.props: ', this.props)
    console.log('value of this.props.foo: ', this.props.foo);
    console.log('value of this.props.custom: ', this.props.custom);
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={[styles.gridContentMain, styles.overflowScroll].join(" ")}>
            <ContentStateManagement
              handleSubmit={(e)=>this.handleSubmit(e)}
              foo={this.props.foo}
            />
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

// StateManagement = withRedux(makeStore, (state) => (
//   {foo: state.foo}
// ))(StateManagement);

export default connect(
  state => state,
  { getPosts }
)(StateManagement);


// export default StateManagement;