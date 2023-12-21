import {Link} from "react-router-dom";
import React from "react";


export default function Navbar(){
  let img={
    height:"15%",
    width:"15%",
    borderRadius:"45%"
  }
  
   return  ( 
    <>
    <div>
    <div className="header" style={{backgroundColor: "#164863"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMB8cCp__yOIsNq2QWPruTIU6aagud-FNcCA&usqp=CAU" alt="Icon" style={img}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/plans">Buy Plans</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/history" >Transaction History</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/help">Help</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/">Personal Details</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
    </>
  )
}



// import {Link} from "react-router-dom";
// import React from "react";


// export default function Navbar(){
//   let img={
//     height:"15%",
//     width:"15%",
//     borderRadius:"45%"
//   }
  
//    return  ( 
//     <>
//     <div>
//     <div className="header" style={{backgroundColor: "#164863"}}>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/consumer/home">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMB8cCp__yOIsNq2QWPruTIU6aagud-FNcCA&usqp=CAU" alt="Icon" style={img}/>
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link" aria-current="page" to="/consumer/home">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/consumer/plans">Buy Plans</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/history" >Transaction History</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/consumer/help">Help</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item" href="/">Personal Details</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><a className="dropdown-item" href="/">Log Out</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// </div>
// </div>
//     </>
//   )
// }