import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentIllustrations extends Component{

  componentDidMount(){
    console.log("inside the contentIllustrations component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the Illustrations page
      </div>
    );
  }
}

export default ContentIllustrations;