import React, { Component } from 'react'

export default class TableContent extends Component {
    deleteThisItem = (e) => {
        this.props.deleteItemFromList(this.props.item.id)
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.item.name}
                </td>
                <td>
                    {this.props.item.surname}
                </td>
                <td>
                    {this.props.item.age}
                </td>
                <button onClick={this.deleteThisItem}>delete</button>
            </tr>
        )
    }
}
