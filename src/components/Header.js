import React from "react"
import { NavLink } from 'react-router-dom'

export const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink to='/' className={({ isActive }) => isActive ? 'is-active' : undefined} end>Dashboard -</NavLink>
    <NavLink to='/create' className={({ isActive }) => isActive ? 'is-active' : undefined}>- Create Expense -</NavLink>
    <NavLink to='/help' className={({ isActive }) => isActive ? 'is-active' : undefined}>- Help</NavLink>
  </header>
)