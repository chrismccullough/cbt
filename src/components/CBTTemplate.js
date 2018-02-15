import React, { Component } from 'react'

function CBTSteps(props) {
    const steps = props.steps;
    const stepItems = steps.map((step, index) =>
        <li key={index}>{step.title}</li>
    );

    return (
        <ul>{stepItems}</ul>
    )
}

export default class CBTTemplate extends Component {
  render() {
      const steps = [
          { title: "What happened that upset you?"},
          { title: "Identify the emotions you feel."},
          { title: "Rate each mood on a scale of 1-100."},
          { title: "What negative automatic thought or thoughts are associated with the strongest emotion?"},
          { title: "Play attorney and produce evidence that supports and then evidence that refutes the negative automatic thought."},
          { title: "Rewrite or reframe your negative automatic thought so that it is a balance of thinking and feelings.  (Listen to your instincts.)"}
      ];
    return (
        <div className="cbt-template">
            <h2>CBT Template:</h2>
            <CBTSteps steps={steps} />
        </div>
    );
  }
}
