import * as React from "react";
const { createRef } = React;

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRelay extends React.Component<{}, State> {
  state = {
    word: "허범성",
    value: "",
    result: ""
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const input = this.onRefInput.current;
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        value: "",
        result: "딩동댕"
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        value: "",
        result: "땡"
      });
      if (input) {
        input.focus();
      }
    }
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  input: HTMLInputElement | null = null;

  onRefInput = createRef<HTMLInputElement>();

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>click</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelay;
