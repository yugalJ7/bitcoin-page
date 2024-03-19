import React from "react";
import "./team.scss";

const data = [
  {
    id: "1",
    img: "src/assets/Team-member/member-1.jpeg",
    name: "John Smith",
    desg: "Designation here",
    aboutMember:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent Interau",
  },
  {
    id: "2",
    img: "src/assets/Team-member/member-2.jpeg",
    name: "Elina Williams",
    desg: "Designation here",
    aboutMember:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent Interau",
  },
  {
    id: "3",
    img: "src/assets/Team-member/member-3.jpeg",
    name: "John Smith",
    desg: "Designation here",
    aboutMember:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent Interau",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team-intro">
        <p className="heading mg">Team</p>
        <p className="team-content mg">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <div className="team-members mg">
          {data.map((data) => {
            return (
              <div
                className="member"
                key={data.id}
                style={{ backgroundColor: "#E8F4FD" }}
              >
                <div>
                  <img
                    src={data.img}
                    alt={data.name}
                    style={{
                      width: "5.9rem",
                      height: "6.3rem",
                      borderRadius: "8px",
                    }}
                  />
                  <p
                    className="mg-0"
                    style={{
                      fontSize: "13px",
                      fontWeight: "550",
                      margin: "7px 0 0 0",
                    }}
                  >
                    {data.name}
                  </p>
                  <p
                    className="mg-0"
                    style={{
                      fontSize: "11px",
                      margin: "0px",
                      color: "#738595",
                    }}
                  >
                    {data.desg}
                  </p>
                </div>
                <div>
                  <p
                    className="team-content"
                    style={{ color: "black", fontWeight: "300" }}
                  >
                    {data.aboutMember}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
