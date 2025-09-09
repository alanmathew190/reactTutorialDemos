
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  let persons = [{
    name: "Alan",
    image: "./src/images/1.jpg",
    des:"Web Developer"
  },
    {
    name: "John",
    image: "./src/images/2.jpg",
    des:"Web Developer"
    },
    {
    name: "Mathew",
    image: "./src/images/3.jpg",
    des:"Web Developer"
  },
    {
    name: "John",
    image: "./src/images/2.jpg",
    des:"Web Developer"
    },
    {
    name: "Mathew",
    image: "./src/images/3.jpg",
    des:"Web Developer"
  }
]

  return (
    <>
      <ProfileCard persons={ persons} />
    </>
  )
}

export default App
