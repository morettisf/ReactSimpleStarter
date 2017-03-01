import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDt0J8EdrSwNyAeoTKzk7UBAwdiurvCF9Y'

// create a new component, produces some HTML
// some HTML
class App extends Component { // created a new class called App, extend it React Component functionality
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    
    // lodash debounce limits search display rendering every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    )
  }
}

// place into DOM
// make an instance of component with angle brackets and slash. Place it into target div.

ReactDOM.render(<App />, document.querySelector('.container'))