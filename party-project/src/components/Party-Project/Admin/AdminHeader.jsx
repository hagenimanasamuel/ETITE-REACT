//Importing dependencies
import React from 'react';
import AdminSidebar from './AdminSidebar';
import { BiSearch, BiBell, BiMessage, BiPlayCircle, BiDownArrow, BiDownArrowAlt  } from 'react-icons/bi';
import AdminContent from './AdminContent';


//Creating Admin Component Holder
export default function AdminHeader() {
    return (
        <>
            <main className="admin-home">
                <div className="admin-home-sidebar">
                    <AdminSidebar />
                </div>
                <div className="admin-home-contents">
                    <div className="admin-home-header">
                        <h1 className='font-bold text-2xl' style={{color: '#fff'}}>Linkfy CC</h1>
                        <div className="search-bar">
                            <input type="text" placeholder='Search for an event...' />
                            <button><BiSearch /></button>
                        </div>
                        <div className="header-navs">
                            <ul className='flex text-2xl'>
                                <li><BiBell /></li>
                                <li><BiMessage /></li>
                                <li><BiPlayCircle /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="admin-view">
                        <div className="admin-profile">
                        </div>
                        <button><BiDownArrow /></button>
                    </div>
                </div>
                <div className="admin-home-contents">
                    <AdminContent />
                </div>
            </main>
        </>
    )
}