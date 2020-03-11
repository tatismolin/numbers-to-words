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
        this.setState({
            newValue: this.toWords(value)
        });
    };

    toWords = (number) => {

        const groupA = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
        const groupB = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
        const groupC = "hundred";
        const groupD = "thousand million billion trillion".split(" ");

        let givenNumber = number;
        let result = [];
        let comma = 0;

        while(givenNumber > 0){

            let words = [];
            let n = givenNumber % 1000;
            givenNumber = Math.floor(givenNumber / 1000);

            if(n > 99){
                words.push(groupA[Math.floor(n / 100)]);
                words.push(groupC);
                n %= 100
            };

            if(n > 19){
                words.push(groupB[Math.floor(n / 10) - 2]);
                n %= 10;
            };

            if(n > 0){
                words.push(groupA[n]);
            };

            if(words.length > 0){
                if(comma > 0){
                    words.push(groupD[comma - 1]);
                };
                result.push(words.join(" "));
            };

            comma++;

        };

        if(result.length > 0){
            result = result.reverse();
            return result.join(" ");
        }else{
            return "zero"
        };

    };

    render(){
        const {newValue} = this.state;
        return(
            <div className="form" onSubmit={this.handleSubmit}>
            {newValue === " "
                ? (<form className="input-form">
                    <input 
                        name="number"
                        placeholder="Please enter a number..."
                        type="number"
                        onChange={this.handleChange}>
                    </input>
                    <button 
                        id="button-test-id"
                        type="submit">
                        SUBMIT
                    </button>
                  </form>)
                : <Result newValue={newValue} />
            }
            </div>
        );
    };

};

export default Form;
