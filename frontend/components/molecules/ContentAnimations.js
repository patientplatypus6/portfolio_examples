import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentAnimations extends Component{

  componentDidMount(){
    console.log("inside the contentAnimations component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the animations page
      </div>
    );
  }
}

export default ContentAnimations;