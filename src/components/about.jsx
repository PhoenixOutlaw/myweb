import React from "react";
import me from "../img/me.jpg"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "85%", value: "85" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Redux_skill",
          content: "Redux",
          porcentage: "65%",
          value: "65",
        },
        {
          id: "Nodejs_skill",
          content: "Nodejs",
          porcentage: "70%",
          value: "60",
        },

        {
          id: "Express_skill",
          content: "Express",
          porcentage: "55%",
          value: "55",
        },

        {
          id: "mern_skill",
          content: "Mern Stack",
          porcentage: "65%",
          value: "65",
        },
        {
          id: "mongo_skill",
          content: "MongoDB",
          porcentage: "55%",
          value: "55",
        },
        {
          id: "mysql_skill",
          content: "Mysql",
          porcentage: "55%",
          value: "55",
        },
        {
          id: "c_skill",
          content: "c++",
          porcentage: "60%",
          value: "60",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hey there, I am a Web developer based in Delhi. I have worked as a React frontend developer but i also have some knowledge of the backend. I have been using React for about a year, so I have good experience in building a responsive , fluid and interactive website. ",
        },
        // {
        //   id: "second-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => (
                        <div key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      <div className="d-flex flex-column" style={{gap:"50px"}}>
                        <img
                          src={me}
                          className="rounded-circle shadow-4"
                          style={{ width: "180px",height: "180px", objectFit:" cover",objectPosition: "top",margin:"auto",}}
                          alt="Avatar"
                        />
                        {this.state.about_me.map((content) => {
                          return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
