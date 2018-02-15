import React, { Component } from 'react'

export default class CBTTemplate extends Component {
  render() {
    return (
        <p className="cbt-template">
            <h2>CBT Template:</h2>
            <ul>
                <li>
                    What happened that upset you?
                </li>
                <li>
                    Identify the emotions you feel.
                </li>
                <li>
                    Rate each mood on a scale of 1-100.
                </li>
                <li>
                    What negative automatic thought or thoughts are associated with the strongest emotion?
                </li>
                <li>
                    Play attorney and produce evidence that supports and then evidence that refutes the negative automatic thought.
                </li>
                <li>
                    Rewrite or reframe your negative automatic thought so that it is a balance of thinking and feelings.  (Listen to your instincts.)
                </li>
            </ul>
        </p>
    );
  }
}
