import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentCRUD extends Component{

  componentDidMount(){
    console.log("inside the contentCRUD component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the CRUD page
      </div>
    );
  }
}

export default ContentCRUD;