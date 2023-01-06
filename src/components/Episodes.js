import { connect } from "react-redux";
import React from 'react';
import { getAllEpisodes } from "../store/actions";

class Episodes extends React.Component {

    getEpisodeList = () => {

        fetch('https://api.sampleapis.com/avatar/episodes')
        .then(response => response.json())
        .then(json => this.props.getAllEpisodes(json))
    }

    render() {
        return (
            <div>
                <h3>List of Episodes</h3>
                <button onClick={this.getEpisodeList}>Episodes</button>
                {
                    this.props.episodes.map(ep => {
                        return(
                            <p key={ep.id}>{ep.Title}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    episodes: state.episodes
});

const mapDispatchToProps = (dispatch) => ({
    getAllEpisodes: (episodes) => dispatch(getAllEpisodes(episodes))
});


export default connect(mapStateToProps, mapDispatchToProps)(Episodes)