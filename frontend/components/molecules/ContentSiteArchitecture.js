import react, {Component} from 'react';
import styles from '../../styles/molecules/content.module.css';

class ContentSiteArchitecture extends Component{

  componentDidMount(){
    console.log("inside the contentSiteArchitecture component componentDidMount")
  }

  render(){
    return(
      <div className={styles.mainContainer}>
        this is the SiteArchitecture page
      </div>
    );
  }
}

export default ContentSiteArchitecture;