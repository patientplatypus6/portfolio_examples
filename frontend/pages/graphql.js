import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentGraphQL from '../components/molecules/ContentGraphQL';
import Footer from '../components/molecules/Footer';

class GraphQL extends Component{

  componentDidMount(){
    console.log('value of GraphQL styles: ', styles)
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={styles.gridContentMain}>
            <ContentGraphQL/>
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default GraphQL;