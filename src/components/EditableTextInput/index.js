import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {isInputVisible: true, inputText: ''}

  onInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  onToggleOutput = () => {
    this.setState(prevState => ({isInputVisible: !prevState.isInputVisible}))
  }

  render() {
    const {isInputVisible, inputText} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <h2 className="heading">Editable Text Input</h2>
          {isInputVisible === true ? (
            <>
              <div className="input-container">
                <input
                  type="text"
                  value={inputText}
                  className="input-styles"
                  onChange={this.onInputChange}
                />
                <button
                  type="button"
                  className="button-styles"
                  onClick={this.onToggleOutput}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="input-container">
                <p className="saved-text">{inputText}</p>
                <button
                  type="button"
                  className="button-styles"
                  onClick={this.onToggleOutput}
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
