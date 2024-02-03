import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";



const Campground_body = () =>{
    // const [active, setActive] = useState("FirstCard");
  
      return(
        <div>
        <Campground_list />
        <Campground_details />
        </div>

      )};

export default Campground_body;