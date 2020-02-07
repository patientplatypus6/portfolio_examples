import react, {Component} from 'react';

import styles from '../../styles/quarks/button.module.css';
import Router from 'next/router';

class Button extends Component{

  state={
    showExpl: -1
  }

  explRet=()=>{
    console.log("value of this.props.itemExpl: ", this.props.itemExpl)
    if(this.props.itemExpl){
      return(this.props.itemExpl)
    }else{
      return null;
    }
  }

  explClick=(keyVal)=>{
    if(keyVal==0){
      Router.push('/animations');
    }else if(keyVal==1){
      Router.push('/illustrations');
    }else if(keyVal==2){
      Router.push('/statemanagement');
    }else if(keyVal==3){
      Router.push('/crud');
    }else if(keyVal==4){
      Router.push('/graphql');
    }else if(keyVal==5){
      Router.push('/sitearchitecture');
    }else if(keyVal==6){
      Router.push('/about');
    }
  }

  explIsShown=(val)=>{

  }

  render(){
    return(
      <div className={styles.button}>
        {this.props.keyVal>-1?(
          <div>
            <div
              style={{
                textDecoration: 'underline'
              }}
              onMouseEnter={() => this.setState({showExpl: this.props.keyVal})}
              onMouseLeave={() => this.setState({showExpl: -1})}
              onClick={()=>{
                console.log('value of keyVal is: ', this.props.keyVal)
                this.explClick(this.props.keyVal)}
              }
            >
              {this.props.item}
            </div>
            {
              this.props.listItemExpl.map((element, key)=>{
                if(key==this.state.showExpl){
                  return(
                    <div key={key}
                      style={{
                        maxHeight: this.state.showExpl==key?'10vh':'0%', 
                        background: 'white', 
                        color: 'darkblue', 
                        margin: '5px 0 5px 0'
                      }}
                    >
                      {this.props.listItemExpl[this.state.showExpl]}
                    </div>
                  )
                }else{
                  return null;
                }
              })
            }
          </div>
        ):(
          <div>
            {this.props.item}
          </div>
        )}
      </div>
    )
  }
}

export default Button;