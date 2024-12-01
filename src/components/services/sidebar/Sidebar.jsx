import React from 'react';
import SidebarItem from './SidebarProps';
import { NavLink } from 'react-router-dom';
import { Icon10, Icon11, Icon12, Icon13, Icon19 } from '../../globalIcons/Icons';

function Sidebar() {

  const allData = [
    {
      icon: <Icon11 className='monitor-icon' />,
      title: 'Bots',

    },
    {
      icon: <Icon10 />,
      title: 'Translate',

    },
    {
      icon: <Icon12 />,
      title: 'Sentiment',

    },
    {
      icon: <Icon13 className='menu-icon' />,
      title: 'Aspect Base Sentiment',
    },
    {
      icon: <Icon19 />,
      title: 'Text Analysis',
    },
  ]

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-title'>HİZMETLERİMİZ</div>
        <div className='sidebar-container'>
          <button>
            <NavLink to="/services/bots">
              <SidebarItem serviceIcon={allData[0].icon} serviceTitle={allData[0].title} />
            </NavLink>
          </button>
          <button>
            <NavLink to="/services/translate">
              <SidebarItem serviceIcon={allData[1].icon} serviceTitle={allData[1].title} />
            </NavLink>
          </button>
          <button>
            <NavLink to="/services/text-analysis/sentiment">
              <SidebarItem serviceIcon={allData[2].icon} serviceTitle={allData[2].title} />
            </NavLink>
          </button>
          <button>
            <NavLink to="/services/aspect-base">
              <SidebarItem serviceIcon={allData[3].icon} serviceTitle={allData[3].title} />
            </NavLink>
          </button>
          <button>
            <NavLink to="/services/text-analysis">
              <SidebarItem serviceIcon={allData[4].icon} serviceTitle={allData[4].title} />
            </NavLink>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;