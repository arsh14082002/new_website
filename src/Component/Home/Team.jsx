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
        {data.team.map((teamMember, index) => {
          return (
            <div className="box" key={index}>
              <h3>{teamMember.name}</h3>
              <p>
                <em>{teamMember.designation}</em>
              </p>{' '}
              {/* Display designation */}
              <div className="box_para">
                <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
                <p>{teamMember.description}</p>
                <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
              </div>
              <div className="contact">
                <div className="box_contact">
                  <a href={`tel:${teamMember.contact[0].mobile}`}>
                    <box-icon name="phone-call" color="#ffffff"></box-icon>
                  </a>

                  <a href={teamMember.contact[0].whatsapp} target="_blank">
                    <box-icon name="whatsapp" type="logo" color="#ffffff"></box-icon>
                  </a>

                  <a href={teamMember.contact[0].instagram} target="_blank">
                    <box-icon name="instagram" type="logo" color="#ffffff"></box-icon>
                  </a>

                  <a href={teamMember.contact[0].linkedin} target="_blank">
                    <box-icon type="logo" name="linkedin" color="#ffffff"></box-icon>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
