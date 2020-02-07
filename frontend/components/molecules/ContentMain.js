import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentMain extends Component{
  render(){
    return(
      <div className={styles.mainContainer}>
        hello there main
      </div>
    );
  }
}

export default ContentMain;