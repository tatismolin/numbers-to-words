import React, {Component} from "react";
import Result from "./Result";
import "../styles/Form.css";


class Form extends Component{

    state = {
        value: " ",
        newValue: " "
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    resetForm = () => {
        this.setState({
          value: " "
        });
    };

    handleSubmit = (event) => {
        const {value} = this.state;
        event.preventDefault();
        this.resetForm();
        // this.setState({
        //     newValue: value
        // });
    };

    render(){
        const {newValue} = this.state;
        return(
            <div className="form" onSubmit={this.handleSubmit}>
            {newValue === " "
                ? (<form className="input-form">
                    <input 
                        placeholder="Please enter a number..."
                        type="number"
                        onChange={this.handleChange}>
                    </input>
                    <button type="submit">SUBMIT</button>
                  </form>)
                : <Result newValue={newValue} />
            }
            </div>
        );
    };

};

export default Form;
