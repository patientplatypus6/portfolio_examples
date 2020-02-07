import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentCRUD from '../components/molecules/ContentCRUD';
import Footer from '../components/molecules/Footer';

class CRUD extends Component{

  componentDidMount(){
    console.log('value of CRUD styles: ', styles)
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={styles.gridContentMain}>
            <ContentCRUD/>
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default CRUD;