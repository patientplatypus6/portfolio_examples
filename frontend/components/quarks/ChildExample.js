import react, {Component} from 'react';
import styles from '../../styles/molecules/main.module.css';
import buttonStyle from '../../styles/quarks/button.module.css';


class ChildExample extends Component{

  state={
    childCounter: 0
  }

  render(){
    return(
      <div
        style={{
          display: 'flex', 
          flexDirection: 'row', 
          width: '100%', 
          fontSize: '3rem'
        }}
      >
        <div style={{flex: 1}}></div>
        <div
          className={[styles.noselect, buttonStyle.button, buttonStyle.fadeIn].join(" ")}
          style={{
            flex: 1, 
            textAlign: 'center', 
            border: '1px black solid'
          }}
          onClick={()=>{this.props.childCounterFn(this.props.childCounter-1)}}
        >
          -
        </div>
          <div
            style={{
              flex: 2,
              fontSize: '3rem',
              textAlign: 'center'
            }}
          >
            {this.props.childCounter}
          </div>
          <div
            className={[styles.noselect, buttonStyle.button, buttonStyle.fadeIn].join(" ")}
            style={{
              flex: 1, 
              textAlign: 'center', 
              border: '1px black solid'
            }}
            onClick={()=>{this.props.childCounterFn(this.props.childCounter+1)}}
          >
            +
          </div>
          <div style={{flex: 1}}></div>
      </div>
    );
  }
}

export default ChildExample;