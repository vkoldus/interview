/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')
/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')
/// <reference path="../../typings/react-router/react-router.d.ts" />
import { Link } from 'react-router'

interface ContactListItemProps {
    id: string,
    name: string
}

class ContactListItem extends TypedReact.Component<ContactListItemProps, void> {

    public render() {
        return (
            <Link to={`/contact/${this.props.id}`}>
            <div className="item">
                <div className="in">
                    <div className="profile-pic"></div>
                    {this.props.name}
                </div>
            </div>
            </Link>
        )
    }   

}

export = TypedReact.createClass(ContactListItem)