import React,{Component} from 'react';
import { FooterState } from './FooterType'
import './Footer.css'
import image from '../../assets/image.json';
class Footer extends Component<object,FooterState> {
  constructor(props:object){
    super(props);
  }

  render() {
    return(
      <div className="mt-5">
        <nav className="navbar navbar-light bg-light">
          <div className="nav mx-auto">
            <div className="col">
              <div className="navbar-brand">
                <img src={image.footer} alt="footer"/>
              </div>
            </div>

            <div className="col">
              <div>
                <span className="text-highlight">ข้อมูลลงทะเบียนประชาชน</span>
              </div>
              <div>
                <p>การรับสิทธิ์ การใช้งานแอปพลิเคชั่น<br/>"เป๋าตัง" และ "ถุงเงิน"<br/>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai<br/>โทร. 0 2111 1144</p>
              </div>
            </div>

            <div className="col">
              <div>
                <span className="text-highlight">ข้อมูลลงทะเบียนผู้ประกอบการ</span>
              </div>
              <div>
                <p>เงื่อนไขและวิธีเข้าร่วมมาตรการฯ<br/>ติดต่อ โทร. 0 2270 6400 กด 7</p>
              </div>
            </div>

            <div className="col">
              <div>
                <span className="text-highlight">ข้อมูลเที่ยวชิมช้อปใช้</span>
              </div>
              <div>
                <p>ติดต่อ ททท.<br/>โทร 1672</p>
              </div>
            </div>

          </div>
        </nav>
        <nav className="navbar foot-nav-bg">
            <ul className="nav mx-auto">
              <li className="nav-item mx-3">
                <span className="navbar-text footer-text">Copyright © 2003-2019</span>
              </li>
              <li className="nav-item mx-3">
                <span className="navbar-text footer-text">ลงทะเบียนเข้าร่วมมาตรการ</span>
              </li>
              <li className="nav-item mx-3">
                <span className="navbar-text footer-text">ขั้นตอนการเข้าร่วมทั้งหมด</span>
              </li>
              <li className="nav-item mx-3">
                <span className="navbar-text footer-text">รายชื่อร้านค้าที่เข้าร่วมรายการ</span>
              </li>
            </ul>
      </nav>
      </div>
    );
  }
}

export default Footer;