import React from "react";



export const Portfolio = ({section,data}) => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">{section}</h3>
            <p className="subtitle-a"></p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {data.map((e) => (
          <div className="col-md-4">
            <div className="work-box" style={{padding:"10px 0"}}>
              <a href={e.img[0]} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img src={e.img[0]} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{e.title}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{e.description}</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a  style={{marginLeft:"20px",marginBottom:"20px"}} href={e.link} target="_blank">
                {e.link}
              </a>
              {e.img.map((e) => (
                <a
                  href={e}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}


// class Portfolio extends React.Component {
//   render() {
//     return (
     
//     );
//   }
// }

// export default Portfolio;