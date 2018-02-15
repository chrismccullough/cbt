import React, { Component } from 'react'

function EntriesList(props) {
    const entries = props.entries;
    const entryItems = entries.map((entry, index) =>
        <li key={index} className="entry">
            <span className="date">{entry.date}</span>
            <span className="title">{entry.title}</span>
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
