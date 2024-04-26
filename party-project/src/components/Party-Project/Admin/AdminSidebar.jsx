import React from 'react';
import { BiAddToQueue, BiConversation, BiHelpCircle, BiHome, BiParty, BiPlusCircle } from 'react-icons/bi';

export default function AdminSidebar() {
    return (
        <>
            <div className="admin--header">
                <div className="logo flex justify-center">
                    <h2 className='text-3xl font-bold'>Party Host</h2>
                </div>
                <div className="sidenavs flex-1">
                    <ul>
                        <li><i><BiHome /></i> Home</li>
                        <li><i><BiParty /></i>Parties</li>
                        <li><i><BiPlusCircle /></i>Publish</li>
                        <li><i><BiAddToQueue /></i>Tickets</li>
                        <li><i><BiConversation /></i>Contact us</li>
                        <li><i><BiHelpCircle /></i>About Us</li>
                    </ul>
                </div>
            </div>
        </>
    )
}