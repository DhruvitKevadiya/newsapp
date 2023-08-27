import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;


  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
            <Route exact path="/" element={        <News setProgress= {this.setProgress} key="general" pageSize={this.pageSize} country='in' category="general" color='primary' apiKey={this.apiKey}/> } />
            <Route exact path="/business" element={        <News setProgress= {this.setProgress} key="business" pageSize={this.pageSize} country='in' category="business" color='success' apiKey={this.apiKey}/>} />
            <Route exact path="/entertainment" element={        <News setProgress= {this.setProgress} key="entertainment" pageSize={this.pageSize} country='in' category="entertainment" color='info' apiKey={this.apiKey}/>} />
            <Route exact path="/general" element={        <News setProgress= {this.setProgress} key="general" pageSize={this.pageSize} country='in' category="general" color='warning' apiKey={this.apiKey}/>}  />
            <Route exact path="/health" element={        <News setProgress= {this.setProgress} key="health" pageSize={this.pageSize} country='in' category="health" color='danger' apiKey={this.apiKey}/>} />
            <Route exact path="/science" element={        <News setProgress= {this.setProgress} key="science" pageSize={this.pageSize} country='in' category="science" color='secondary' apiKey={this.apiKey}/>} />
            <Route exact path="/sports" element={        <News setProgress= {this.setProgress} key="sports" pageSize={this.pageSize} country='in' category="sports" color='light' apiKey={this.apiKey}/>} />
            <Route exact path="/technology" element={        <News setProgress= {this.setProgress} key="technology" pageSize={this.pageSize} country='in' category="technology" color='primary' apiKey={this.apiKey}/>} />




          </Routes>
        </Router>
      </div>
    )
  }
}


;