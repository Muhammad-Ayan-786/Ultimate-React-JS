import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: "./public/image5.avif",
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias amet repellat delectus!',
      tag: 'Satisfied',
      color: 'gold'
    },
    {
      img: "./public/image1.avif",
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias amet repellat delectus!',
      tag: 'Satisfied',
      color: 'lightseagreen'
    },
    {
      img: "./public/image2.jpg",
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias amet repellat delectus!',
      tag: 'Underserved',
      color: 'hotpink'
    },
    {
      img: "./public/image3.jpg",
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias amet repellat delectus!',
      tag: 'Underbanked',
      color: 'orange'
    },
    {
      img: "./public/image4.avif",
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias amet repellat delectus!',
      tag: 'Satisfied',
      color: 'blue'
    },
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App