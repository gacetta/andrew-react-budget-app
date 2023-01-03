// My code:

import React from "react";
import { useLocation, useParams } from 'react-router-dom';

const EditExpensePage = () => {
  let location = useLocation();
  let { id } = useParams();
  console.log(location);
  console.log(id);
  return (
    <div>
      Editing expense with id of {id}
    </div>
  )
}

export default EditExpensePage;


// // Andrew's Code:

// import React from "react";

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       Editing expense with id of {props.match.params.id}
//     </div>
//   )
// }

// export default EditExpensePage;