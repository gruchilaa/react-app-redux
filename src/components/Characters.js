import { Component } from "react";
import { connect } from "react-redux";
import { getAllCharacters } from "../store/actions";

class Characters extends Component {


    getCharacterList = () => {

        //Call the api
        fetch('https://api.sampleapis.com/avatar/characters')
            .then(response => response.json())
            .then(json => {
                const characters = json;
                this.props.getCharacterList(characters);  })
            .catch(error => {
                
            })
    }

    render() {
        return (
            <div>
                <h3>List of Characters</h3>
                <button onClick={this.getCharacterList}>Characters</button>
               {
                this.props.characters.map(character => {
                    return (
                        <p key={character.id}>{character.name}</p>
                    )
                })
               }
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    characters: state.characters
});

const mapDispatchToProps = (dispatch) => ({
    getCharacterList: (characters) => {dispatch(getAllCharacters(characters))}
})

export default connect(mapStateToProps,mapDispatchToProps)(Characters);