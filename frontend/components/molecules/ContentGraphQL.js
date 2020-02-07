import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentGraphQL extends Component{

  componentDidMount(){
    console.log("inside the contentGraphQL component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the GraphQL page
      </div>
    );
  }
}

export default ContentGraphQL;