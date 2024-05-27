import Img from '../../assets/prase.png';

function Header() {
  return (
    <>
      <div className="header">
        <div className="box">
          <div className="left">
            <h3>陌生人，我也为你祝福</h3>
            <h3>愿你有一个灿烂的前程</h3>
            <h3>愿你有情人终成眷属</h3>
            <h3>愿你在尘世获得幸福</h3>
          </div>
          <div className="right" >
            <img src={Img} alt="" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;