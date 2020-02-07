import react, {Component} from 'react';

import ChildExample from '../quarks/ChildExample';

import styles from '../../styles/molecules/main.module.css';
import buttonStyle from '../../styles/quarks/button.module.css';


class ContentStateManagement extends Component{

  state={
    counter: 0, 
    childCounter: 0,
    inputVariable: '', 
    foo: '', 
    fooJSON: []
  }

  componentDidMount(){
    console.log("inside the contentStateManagement component componentDidMount")
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.foo!=this.props.foo){
      this.setState({foo: JSON.stringify(this.props.foo["foo"])}, ()=>{
        console.log('value of foo: ', JSON.parse(this.state.foo))
        this.setState({fooJSON: JSON.parse(this.state.foo)})
      })
    }
  }

  childCounterFn=(counter)=>{
    this.setState({childCounter: counter})
  }

  render(){

    return(
      <div className={styles.mainContainer}>
        <div
          style={{
            textDecoration: 'underline', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'center', 
            fontSize: '2rem'
          }}
        >
          State Management
        </div>
        <div
          style={{
            textDecoration: 'underline', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
          Increment/Decrement
        </div>
        <div
          style={{
            textDecoration: 'none', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
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
              onClick={()=>{this.setState({counter: this.state.counter-1})}}
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
                {this.state.counter}
              </div>
              <div
                className={[styles.noselect, buttonStyle.button, buttonStyle.fadeIn].join(" ")}
                style={{
                  flex: 1, 
                  textAlign: 'center', 
                  border: '1px black solid'
                }}
                onClick={()=>{this.setState({counter: this.state.counter+1})}}
              >
                +
              </div>
              <div style={{flex: 1}}></div>
          </div>
        </div>
        <div
          style={{
            textDecoration: 'underline', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
          Input Variable
        </div>
        <div
          style={{
            textDecoration: 'none', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
          <div
            style={{
              display: 'flex', 
              flexDirection: 'row', 
              width: '100%', 
              fontSize: '2rem'
            }}
          >
            <div 
              style={{
                flex: 1, 
                fontSize: '1rem', 
                lineHeight: '2rem'
              }}
            >
            <input
              type="text" 
              id="myText" 
              placeholder="Enter some text..."
              value={this.state.inputVariable}
              onChange={(e)=>{this.setState({inputVariable: e.target.value})}}
              ></input>
            </div>
            <div 
              style={{
                flex: 5, 
                lineHeight:'2rem'
              }}
            >
              {this.state.inputVariable}
            </div>
          </div>
        </div>
        <div
          style={{
            textDecoration: 'underline', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
          Nested Component Inheritance
        </div>
        <div
          style={{
            textDecoration: 'none', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem', 
            fontSize: '1.2rem'
          }}
        >
          <ChildExample
            childCounter={this.state.childCounter}
            childCounterFn={(counter)=>{this.childCounterFn(counter)}}
          />
        </div>
        <div
          style={{
            textDecoration: 'underline', 
            fontWeight: '900', 
            width: '100%', 
            textAlign: 'left',
            margin: '1rem',
            fontSize: '1.2rem'
          }}
        >
          Redux
        </div>
        <div  
          className={[styles.noselect, buttonStyle.button, buttonStyle.fadeIn].join(" ")}
          style={{
            textAlign: 'center', 
            border: '1px black solid',
            width: '10rem',
            margin: '2rem', 
            marginBottom: '0.5rem',
            marginTop: '0.5rem'
          }}
          
          onClick={(e)=>{
            console.log('button has been clicked') 
            this.props.handleSubmit(e)

          }}
        >
          Load
        </div>
        <div>
        {/* {"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"} */}
          {this.state.foo.length<20?
            null:(
              <div
                style={{
                  maxHeight: '25vh', 
                  overflow: 'hidden', 
                  overflowY: 'auto', 
                  border: '2px dashed grey', 
                  padding: '4px', 
                  margin: '4px'
                }}
              >
                <div
                  style={{
                    width: '95%', 
                    marginLeft: 'calc(2.5% - 4px)', 
                    border: '2px black solid', 
                    display:'flex', 
                    flexDirection: 'row'
                  }}
                >
                  <div
                    style={{
                      flex: 1, 
                      textAlign: 'center'
                    }}
                  >
                    userId
                  </div>
                  <div
                    style={{
                      flex: 1, 
                      textAlign: 'center'
                    }}
                  >
                    id
                  </div>
                  <div
                    style={{
                      flex: 2, 
                      textAlign: 'center'
                    }}
                  >
                    title
                  </div>
                  <div
                    style={{
                      flex: 6, 
                      textAlign: 'center'
                    }}
                  >
                    body
                  </div>
                </div>
                {
                  this.state.fooJSON.map((element, key) => {
                    return(
                      <div key={key}>
                        <div
                          style={{
                            width: '95%', 
                            marginLeft: 'calc(2.5% - 4px)', 
                            borderBottom: '2px solid black',
                            borderLeft: '2px solid black', 
                            borderRight: '2px solid black',
                            display:'flex', 
                            flexDirection: 'row'
                          }}
                        >
                          <div
                            style={{
                              flex: 1, 
                              textAlign: 'center'
                            }}
                          >
                            {JSON.stringify(element["userId"])}
                          </div>
                          <div
                            style={{
                              flex: 1, 
                              textAlign: 'center'
                            }}
                          >
                            {JSON.stringify(element["id"])}
                          </div>
                          <div
                            style={{
                              flex: 2, 
                              textAlign: 'center'
                            }}
                          >
                            {JSON.stringify(element["title"])}
                          </div>
                          <div
                            style={{
                              flex: 6, 
                              textAlign: 'center'
                            }}
                          >
                            {JSON.stringify(element["body"])}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )  
          }
        </div>
      </div>
    );
  }
}

export default ContentStateManagement;