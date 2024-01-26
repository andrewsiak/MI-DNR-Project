const Campground = () => {
    const [a_campground, setCampground] = useState(null);
    useEffect(() => {
      fetch("api/campgrounds", {
        method: "GET",
        // headers: {
        //   "Key": "your-api-key",
        //   "Host": "something.com",
        // },
      })
        .then((response) => response.json())
        .then((campgroundData) => {
          setCampground(campgroundData[0]);
          console.log(campgroundData);
        })
        .catch((error) => console.log(error));
    }, []);
  
    
    return (
      <Container>
      <div>
        <h2>Show Something!</h2>
  {/*         
          version 1: */}
          {/* {a_campground.map((campground) => (
            <div className="campground" key={campground_id}>
              <h3> {campground.text}</h3>
            </div>
          ))} */}
  
          {/* version 2: */}
        {/* {campground && <p>{campground}</p>} */}
      </div>
      </Container>
    );
  }
  export default Campground;