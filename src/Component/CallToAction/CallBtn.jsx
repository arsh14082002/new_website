import './Styles/CallToAction.scss';

const CallingBtn = () => {
  return (
    <div className="calling_btn_fun">
      <a href="tel:+919999629495" rel="noreferrer" target="_blank">
        <div className="cont_btn">
          <box-icon name="phone-call" color="#ffffff"></box-icon>
        </div>
      </a>
    </div>
  );
};

export default CallingBtn;
