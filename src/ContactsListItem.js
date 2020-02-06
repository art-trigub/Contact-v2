import React, { Component } from 'react'

export default class TableContent extends Component {
    deleteThisItem = (e) => {
        this.props.deleteItemFromList(this.props.item.id)
    }

    editThisItem = () => {
        this.props.editSelectedContact(this.props.item)
    }

    render() {
        return (
            <tr onClick={this.editThisItem}>
                <td>
                    {this.props.item.name}
                </td>
                <td>
                    {this.props.item.surname}
                </td>
                <td>
                    {this.props.item.age}
                    <button onClick={this.deleteThisItem}>delete</button>
                </td>
                
            </tr>
        )
    }
}
