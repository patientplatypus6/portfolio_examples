import react, {Component} from 'react';
import Button from './Button';

class ExpandableList extends Component{

  componentDidMount(){
    console.log('value of this.props.listItems: ', 
      this.props.listItems);
  }

  render(){
    return(
      <div
        style={{ 
          background: 'black', 
          color: 'white'
        }}
      >
        {
          this.props.listItems.map((element, key) => (
            <div key={key}>
              <Button keyVal={key} item={element} listItemExpl={this.props.listItemExpl}/>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ExpandableList;