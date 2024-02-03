import Campground_list from "../campgrounds_list/Campgrounds_list";
import { Container } from "react-bootstrap";



const Campground_details = () => {
    // const [currentCampground, setCurrentCampground] = useState(null);
    // useEffect(
    // //     () => {
    // //   fetch("api/campgrounds", {
    // //     method: "GET",
    // //     // headers: {
    // //     //   "Key": "your-api-key",
    // //     //   "Host": "something.com",
    // //     // },
    // //   })
    // //     .then((response) => {
    // //       console.log(response);
    // //       return response.json()
    // //     })
    // //     .then((campgroundData) => {
    // //       setAllCampgrounds(campgroundData);
    // //       console.log(campgroundData);
    // //     })
    // //     .catch((error) => console.log(error));
    // // }, 
    // []);
  
  
    return (
      <Container>
        <div>
          <h2>This is the selected Campground</h2>
          {/* <ol className="list-group">
              {(allCampgrounds ?? []).map((campgroundData) => {
  
                  return(
                      <li className="list-group-item" key={campgroundData.campground_id}> {campgroundData.name}</li>
                  )
              })}
          </ol> */}
  
        </div>
      </Container>
    );
  }
  
  export default Campground_details;