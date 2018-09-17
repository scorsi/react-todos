import React, {Component} from 'react';

class FetchErrorComponent extends Component {
    render() {
        return (
            <div>
                <p>Could not fetch todos. {this.props.message}</p>
                <button onClick={this.props.onRetry}>Retry</button>
            </div>
        )
    }
}

export default FetchErrorComponent;