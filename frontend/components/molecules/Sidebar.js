import react, {Component} from 'react';
import styles from '../../styles/molecules/sidebar.module.css';
import ExpandableList from '../quarks/ExpandableList';

class Sidebar extends Component{

  state={
    listItems: [
      'Animations', 
      'Illustrations', 
      'State Management', 
      'CRUD', 
      'GraphQL', 
      'Site Architecture', 
      'About'
    ], 
    listItemExpl: [
      'here are some animation examples that are interesting', 
      'here is a way that I do some illustration work', 
      'here are some state management techniques',
      'here is a Create/Read/Update/Delete Example', 
      'here is how to set up graphQL with node', 
      'here is how I set up the code for this website', 
      'here is an about page that gives a bit of background on this project'
    ]
  }

  render(){
    return(
      <div className={styles.sidebarContainer}>
        <div className={styles.title}>
          Portfolio Examples
        </div>
        <div className={styles.expandableList}>
          <ExpandableList
            listItems={this.state.listItems}
            listItemExpl={this.state.listItemExpl}
          />
        </div>
        <div className={styles.titlehighlight}/>
      </div>
    );
  }
}

export default Sidebar;