import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Categories} from "../../constans";
import {FormGroup, Input, Label} from "reactstrap";
import './Edit.css';

class Edit extends Component {
    state={
        author: '',
        category: '',
        text: '',
    };

   async componentDidMount() {
       const id = this.props.match.params.id;
      const response = await axiosApi.get('/quotes/' + id + '.json');
      this.setState({author: response.data.author, category: response.data.category, text: response.data.text})
    }
    getInputVal=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };
    postQuotes= async (e)=>{
       e.preventDefault();
       const editQuetos = {
           author: this.state.author,
           category: this.state.category,
           text: this.state.text,
       };
      await axiosApi.put('/quotes/' + this.props.match.params.id + '.json', editQuetos);
      this.props.history.replace('/quotes');
    };

    render() {
        return(
            <div className="edit">
                <form action="" onSubmit={this.postQuotes}>
                    <input className="inp"
                           type="text"
                           name="author"
                           value={this.state.author}
                           placeholder="author"
                           onChange={this.getInputVal}
                    />
                    <input className="inp"
                           type="textarea"
                           name="text"
                           value={this.state.text}
                           placeholder="text"
                           onChange={this.getInputVal}
                    />
                    <FormGroup>
                        <Label for="category">Category :</Label>
                        <Input type="select"
                               name="category"
                               id="category"
                               value={this.state.category}
                               onChange={this.getInputVal}
                        >
                            {Categories.map(c=> <option key={c} value={c}>{c}</option>)}
                        </Input>
                    </FormGroup>
                    <button onClick={this.postQuotes}>Add</button>
                </form>

            </div>
        );
    }
}

export default Edit;