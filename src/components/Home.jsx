import React from 'react'
import { NavBar } from './NavBar'
import { Category } from './Category'
import { Hero } from './Hero'
import { HeadLineCards } from './HeadLineCards'
import { Food } from './Food'

export const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <HeadLineCards/>
        <Food/>
        <Category/>
    </div>
  )
}
