import react, {Component} from 'react';
import styles from '../styles/molecules/main.module.css';

import Sidebar from '../components/molecules/Sidebar';
import ContentAnimations from '../components/molecules/ContentAnimations';
import Footer from '../components/molecules/Footer';

class Animations extends Component{

  componentDidMount(){
    console.log('value of animations styles: ', styles)
  }

  render(){
    return(
      <div className='height100Width100'>
        <div className={styles.gridContainerMain}>
          <div className={styles.gridSidebarMain}>
            <Sidebar/>
          </div>
          <div className={styles.gridContentMain}>
            <ContentAnimations/>
          </div>
          <div className={styles.gridFooterMain}>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Animations;