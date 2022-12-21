import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from '../data/SidebarData'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import styles from "./sidenav.module.css"

export const Sidebar = () => {

  const [open, setOpen] = useState(true)

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className={ open ? styles.sidenav : styles.sidenavClosed }>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
      </button>
        {
          SidebarData.map( (item) => {
            return (
              <NavLink 
                key={ item.id }
                className={ styles.sideItem }
                to={ item.link }
              >
                { item.icon } 
                <span className={ styles.linkText }>{ item.title }</span>
              </NavLink>
            )
          })
        }
    </div>
  )
}
