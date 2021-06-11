import React from "react";
import styles from "./Projects.module.css";
// import data from "../../assets/projects.json";

// class Projects extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     if (!this.state.data.length) {
//       this.setState({
//         data: data,
//       });
//     }
//   }
//   render() {
//
//     return (
//       <div>
//         {this.state.data.map((proj) => (
//           <Card proj={proj} />
//         ))}
//       </div>
//     );
//   }
// }

// function Card(props) {
//   return (
//     <div>
//       <h2 className="projectCatagory">{props.proj.projectName}</h2>
//       <p className="porjectDescription">{props.proj.projectInfo}</p>
//       {/* <ul className="porjectList">
//         {props.proj.projects.map((proj) => (
//           <li>{proj}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default Projects;

export default function Projects() {
  return (
    <div id="Projects" className={styles.container}>
      Projects
    </div>
  );
}
