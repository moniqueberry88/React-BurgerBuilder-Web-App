import React, {Component} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux';
class Modal extends Component {
    componentWillUpdate(){
        console.log("[Modal Updated]");
    }

    shouldComponentUpdate(nextProp, nextState){
        return nextProp.show !== this.props.show;
    }
    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.exitModal}/>
                <div
                    className={classes.Modal}
                    style={{
                    transform: this.props.show
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: this.props.show
                        ? '1'
                        : '0'
                }}>
                    {this.props.children}
                </div>
    
            </Aux>
        )
    }
}

export default Modal;