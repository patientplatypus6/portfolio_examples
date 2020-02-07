import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentSiteArchitecture from '../components/molecules/ContentSiteArchitecture';
import Footer from '../components/molecules/Footer';

class SiteArchitecture extends Component{

  componentDidMount(){
    console.log('value of SiteArchitecture styles: ', styles)
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={styles.gridContentMain}>
            <ContentSiteArchitecture/>
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default SiteArchitecture;