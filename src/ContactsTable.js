import React, { Component } from 'react';
import TableContent from './ContactsListItem';

export default class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.contacts.map((tableItem) => (
                   <TableContent 
                    deleteItemFromList={this.props.deleteItemFromList} 
                    key={tableItem.id} 
                    item={tableItem} />
                ))}
                </tbody>
            </table>
        )
    }
}
