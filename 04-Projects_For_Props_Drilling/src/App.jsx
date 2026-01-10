import Card from "./Components/Card"
import images from "./assets/images"

const App = () => {

  const jobOpenings = [
    {
      brandLogo: images.google,
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "California, USA"
    },
    {
      brandLogo: images.apple,
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "California, USA"
    },
    {
      brandLogo: images.meta,
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "New York, USA"
    },
    {
      brandLogo: images.amazon,
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 50,
      location: "Seattle, USA"
    },
    {
      brandLogo: images.netflix,
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "California, USA"
    },
    {
      brandLogo: images.microsoft,
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Washington, USA"
    },
    {
      brandLogo: images.tesla,
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Texas, USA"
    },
    {
      brandLogo: images.ibm,
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Java Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "London, UK"
    },
    {
      brandLogo: images.oracle,
      companyName: "Oracle",
      datePosted: "6 days ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Texas, USA"
    },
    {
      brandLogo: images.adobe,
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 58,
      location: "California, USA"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, key) {
        console.log(key);

        return <div key={key}>
          <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App

/*
We pass key so that React can keep track of the elements.
*/