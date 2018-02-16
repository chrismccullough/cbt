import React, { Component } from 'react';
import MomentInput from 'react-moment-input';

function FormLabel(props) {
    return (
        <label htmlFor={props.id}>{props.label}:&nbsp;</label>
    )
}

function FormField(props) {
    var {...other} = props;

    if(props.type && props.type === "textarea") {
        return (
            <div className={props.id + "-form-group"}>
                <FormLabel label={props.label} id={props.id} />
                <textarea
                    aria-label={props.label}
                    className={props.id}
                    name={props.id}
                    title={props.label}
                    {...other}
                ></textarea>
            </div>
        )
    } else {
        return (
            <div className={props.id + "-form-group"}>
                <FormLabel label={props.label} id={props.id} />
                <input
                    aria-label={props.label}
                    className={props.id}
                    name={props.id}
                    title={props.label}
                    {...other}
                />
            </div>
        )
    }
}

export default class AddEntry extends Component {
    render() {
        return (
            <div>
                <h3>Add Entry Form:</h3>

                    <form className="add-entry">
                        <MomentInput
                            className="date"
                            format="MM-DD-YYYY HH:mm"
                            options={true}
                            readOnly={true}
                            icon={true}
                            onChange={(date)=> {console.log(date)}}
                        />

                        <FormField label="Title" id="title" type="text" placeholder="Title" />

                        <FormField label="What happened that upset you" id="what-happened" type="textarea" placeholder="What happened that upset you?" />
                    </form>
            </div>
        )
    }
}
