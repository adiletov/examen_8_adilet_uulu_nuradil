import React, {Component} from 'react';
import {Categories} from "../../constans";
import {NavLink} from "react-router-dom";
import './Quotes.css';
import axiosApi from "../../axiosApi";
import { Card, CardText, CardTitle} from "reactstrap";
class Quotes extends Component {
    state={
        quotes: [],
    };
    deleteQuotes = async ( id) =>{
        await axiosApi.delete('/quotes/' + id + '.json');
        await this.requestData();
        this.props.history.replace('/');
    };

     requestData = async()=>{
         let url = '/quotes.json';
         if (this.props.match.params.name){
             url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
         }
         const response = await axiosApi.get(url);
         response.data ? this.setState({quotes: response.data}) : this.setState({quotes: ''})
        };

         componentDidMount() {
           this.requestData();
        }

        componentDidUpdate(prevProps) {
             if (prevProps.match.params.name!==this.props.match.params.name){
                return this.requestData();
             }
            }

    render() {
        return (
                <div className="content">
                    <div className="said-bar">
                        <ul>
                            <li><NavLink to={'/quotes'}>All</NavLink></li>
                            {Categories.map(c => <li key={c}>
                                <NavLink  to={'/quotes/' + c}>{c}</NavLink>
                            </li>)}
                        </ul>
                    </div>
                    <div className="oneCard">
                        {Object.keys(this.state.quotes).map(id=> (
                            <Card key={id}>
                                <CardText> категория : {this.state.quotes[id].category}</CardText>
                                <CardTitle>Автор: {this.state.quotes[id].author}</CardTitle>
                                <CardText>текст: {this.state.quotes[id].text}</CardText>
                                <NavLink to={`/quotes/${id}/edit`}>Редактировать</NavLink>
                                <button onClick={()=>this.deleteQuotes( id)}>Delete</button>
                            </Card>))}
                    </div>
                </div>
        );
    }
}

export default Quotes;