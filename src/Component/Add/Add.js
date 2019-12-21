import React, {Component} from 'react';
import {Categories} from "../../constans";
import axiosApi from "../../axiosApi";
import {FormGroup, Input, Label} from "reactstrap";

class Add extends Component {
    state={
        author: '',
        category: Categories[0],
        text: '',
    };
    getInput = e =>{this.setState({[e.target.name] : e.target.value})};
    postQuotes = async (e)=>{
        e.preventDefault();
        const objectQuotes= {
            author: this.state.author,
            category: this.state.category,
            text: this.state.text,
        };

       await axiosApi.post('/quotes.json', objectQuotes);
       this.props.history.replace('/quotes');
    };
    render() {
        return (
            <div>
                <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.getInput}/>
                <input type="textarea" name="text" value={this.state.text} placeholder="text" onChange={this.getInput}/>
                <FormGroup>
                    <Label for="category">Category :</Label>
                    <Input type="select" name="category" id="category" value={this.state.category} onChange={this.getInput}>
                        {Categories.map(c=> <option key={c} value={c}>{c}</option>)}
                    </Input>
                </FormGroup>
                <button onClick={this.postQuotes}>Add</button>
            </div>
        );
    }
}

export default Add;