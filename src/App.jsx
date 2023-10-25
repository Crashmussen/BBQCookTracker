import './App.css'
import CookList from './CookList'

//Sort by Date & Rating
// Plug in time you want to eat, calculate based on recipe time
// Calc total cook time

export default function App() {

  return (
    <>
      <h1 className="Header">Cook Tracker</h1>
      <CookList />      
    </>
  )
}