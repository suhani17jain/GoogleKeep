import React from "react";
import "./sideNavBar.css";


const SideNavBar = () => {
    const object = {
        0: {
            img : '',
            name: 'Notes',
        },
        1: {
            img : '',
            name: 'Reminder',
        },
        2: {
            img: '',
            name: 'Archieve',
        },
    }
  return (
      <div className='sidenav'>
              {
                  Object.keys(object).map((a)=> {
                      return (
                          <div key={a}>{object[a].name}</div>
                      )
                  })
              }
      </div>

  );
}

export default SideNavBar;
