import React from 'react';
import { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { HashRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import './App.css'




export default class App extends Component {
  

  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  pageSize = 18;
  country = 'us';
 
  render() {
    return (
      <React.Fragment>       

        <HashRouter>
      
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={2.3}
          
          />

          <Navbar />
          {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} api={'6671321bc7f34f94b61d93703e2d7b9e'} category='science'/> */}

          <Routes>

            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={this.country} category='business' />}></Route>
            <Route exact path="entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.country} category='/entertainment' />}></Route>
            <Route exact path="general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={this.country} category='/general' />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={this.country} category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={this.country} category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={this.country} category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={this.country} category='technology' />}></Route>



          </Routes>

        </HashRouter>

      </React.Fragment>
    )
  }
}
