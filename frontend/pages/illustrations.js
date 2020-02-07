import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentIllustrations from '../components/molecules/ContentIllustrations';
import Footer from '../components/molecules/Footer';

class Illustrations extends Component{

  componentDidMount(){
    console.log('value of Illustrations styles: ', styles)
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={styles.gridContentMain}>
            <ContentIllustrations/>
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Illustrations;