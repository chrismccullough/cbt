import React, { Component } from 'react';
import Moment from 'react-moment';

function EntriesList(props) {
    const entries = props.entries;
    const entryItems = entries.map((entry, index) =>
        <li key={index} className="entry">
            <span className="date"><Moment format="MM/DD/YYYY" date={entry.date} /></span>
            <span className="title">{entry.title}</span>
            -
            <span className="text">{entry.text}</span>
        </li>
    );

    return (
        <ul className="entries-list">{entryItems}</ul>
    )
}

export default class Entries extends Component {
  render() {
      const entries = [
          {date: "02/15/2018", title: "Foo Bar", step: 1, text: "Do lorem ipsum"},
          {date: "02/15/2018", title: "Dim Sum", step: 1, text: "Do lorem ipsum"},

      ];
    return (
    <div className="entries">
        Entries:<br/>
        <EntriesList entries={entries} />
    </div>
    );
  }
}
