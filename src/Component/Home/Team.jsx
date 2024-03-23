import React from 'react';
import data from '../../data.json';

const Team = () => {
  return (
    <section className="team">
      <div className="team_head">
        <h2>Our Core Team</h2>
        <h4>What We Provide You?</h4>
      </div>

      <div className="team_boxes">
        {data.team.map((team, i) => {
          return (
            <div className="box" key={i}>
              <h3>{team.name}</h3>
              <div className="box_para">
                <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
                <p>{team.description}</p>
                <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
              </div>
              <div className="contact">
                <div className="box_contact">
                  <a href="#">
                    <box-icon name="phone-call" color="#ffffff"></box-icon>
                  </a>

                  <a href="#">
                    <box-icon name="whatsapp" type="logo" color="#ffffff"></box-icon>
                  </a>

                  <a href="#">
                    <box-icon name="instagram" type="logo" color="#ffffff"></box-icon>
                  </a>

                  <a href="#">
                    <box-icon type="logo" name="linkedin" color="#ffffff"></box-icon>
                  </a>
                </div>{' '}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
