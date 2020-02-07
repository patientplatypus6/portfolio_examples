import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentAbout extends Component{

  componentDidMount(){
    console.log("inside the contentAbout component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the About page
      </div>
    );
  }
}

export default ContentAbout;