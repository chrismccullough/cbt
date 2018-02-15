import React, { Component } from 'react'

function ReferenceLinkList(props) {
    const links = props.links;
    const linkItems = links.map((link, index) =>
        <li key={index}><a href={link.link} target="_blank">{link.title}</a></li>
    );

    return (
        <ul>{linkItems}</ul>
    )
}

export default class Footer extends Component {
    render() {
        const links = [
            { title: "Wikipedia", link: "https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy"},
            { title: "Beck Institute", link: "https://beckinstitute.org/get-informed/what-is-cognitive-therapy/"},
            { title: "Positive Psychology Program", link: "https://positivepsychologyprogram.com/cbt-cognitive-behavioral-therapy-techniques-worksheets/"},
            { title: "Psychology Today", link: "https://www.psychologytoday.com/us/therapists/cognitive-behavioral-cbt/wa/oak-harbor"}
        ];
        return (
            <footer className="app-footer">
                <h2>References:</h2>
                <ul>
                    <ReferenceLinkList links={links} />
                </ul>
            </footer>
        );
    }
}
