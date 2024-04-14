import style from './Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Background from '../assets/Background.png'
import adresse from '../assets/adresse.png'
import Target from '../assets/Target.png'
import banhmi from '../assets/banhmi.png'
import Pizza from '../assets/Pizza.png'
import ReadMore from './Readmore';
import logodoan from '../assets/logodoan.png'
import logophone from '../assets/logophone.png'
import Logo from '../assets/Logo.png';

import appstore from '../assets/appstore.png'
import CHplay from '../assets/CHplay.png'
import squarefacebook1 from '../assets/squarefacebook1.svg'
import squareinstagram from '../assets/squareinstagram.svg'
import squaretwitter from '../assets/squaretwitter.svg'
function Main()
{
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const Padding ={
        Padding:'15px'
    };
    const PromoItem = ({ imgSrc, title, categories, rating, time, distance, offer }) => (
        
           <a className={style.promo_item}   href="" >
                <div className={style.Promo_container}>
                    <img src={imgSrc} alt={title} className={style.promo_img}/>
                <div className={style.promo_tag}>Promo</div>
                </div>
                
                <div className={style.item_content}>
                    <h3>{title}</h3>
                    <p>{categories}</p>
                    <div className={style.item_info}>
                        <span className={style.rating}>⭐️{rating}</span>
                        <span className={style.time}> 🕒{time} phút</span>
                        <span className={style.distance}> • {distance} km</span>
                    </div>
                    <div className={style.offer}>💲{offer}</div>
                </div>
            </a> 
        
        
      );
      const ItemFood = ({ imgSrc, title }) => (
        <a className={style.CacMonAn}>
          <div className={style.phanloai}>
            <div className={style.img_monan}>
              <img className= {style.img_Monan}src={imgSrc} />
            </div>
            <div className={style.text_monan}>
              <h3> {title} </h3>
            </div>
          </div>
        </a>
      );
      
    return(

      <div className={style.Main_Container}>
        <div className={style.Container}>
            <img className ={style.Background}src={Background} alt="background" />
            <div className={style.adress_container}>
                <div className={style.adress_box}>
                    <div className={style.Greeting}>
                      <h2>
                    Good Morning
                    </h2>
                    <h1>
                    Where should we deliver your food today?
                    </h1>  
                    </div>
                    
                    <div className={style.input_container}>
                        <img src={adresse} alt="Left Icon" className={style.input_icon_left} />
                        <input type="text" placeholder="Nhập địa chỉ của bạn" className={style.address_input}/>
                        <img src={Target} alt="Right Icon" className={style.input_icon_right} />
                    </div>
                    <button className={style.Search}>
                        Tìm kiếm
                    </button>
                </div>
            </div>
           <div className={style.Hr}>
                <hr></hr>
           </div>
           <div className={style.Carousel_Container}>
            <div className={style.Promo_Adress}>
                <h1 className={style.Title}>
                    <span className={style.Promo_At}>
                    Ưu đãi GrabFood tại 
                    </span>
                    <span className={style.Green_text}>
                          Hà Nội
                    </span>
                </h1>

            </div>
            <Carousel draggable={true} responsive={responsive}  infinite={true} swipeable={false} >
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                <div className={style.jss1}> 
                    <PromoItem
                    imgSrc={banhmi}
                    title="Cơm Gà Da Giòn Phú Quý - Huỳnh Tấn Phát"
                    categories="Cơm, Bún - Phở - Mì - Hủ tiếu, Bún - Phở..."
                    rating="4.4"
                    time="15"
                    distance="3.5"
                    offer="Ưu đãi đến 45K"
                  />
                </div>
                
            </Carousel>
            <button className={style.See_all_promo}>
                <span>See all promotions</span>
            </button>
           </div>

           <div className={style.Monan}>
            <div className={style.title_Monan}>
              <h1>There's something for everyone!</h1>
            </div>


            <div className={style.grid_monan}>

              <ItemFood
                imgSrc={Pizza}
                title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              <ItemFood
              imgSrc={Pizza}
              title="Hủ tiếu"
              />
              
            </div>

          </div>
          <div className={style.whyorder}>
            <div className={style.title_news}>
              <h1>Vì sao bạn nên Order trên GrabFood?</h1>
            </div>

            <div className={style.text_thongbao}>
              <ul className={style.thongbao}>
                <li className={style.noidung}> <span className={style.ticker}>✔ </span> <span className={style.todam}>Nhanh nhất</span> - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</li>
                <li className={style.noidung}> <span className={style.ticker}>✔ </span> <span className={style.todam}>Dễ dàng nhất</span> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</li>
                <li className={style.noidung}> <span className={style.ticker}>✔ </span> <span className={style.todam}>Đáp ứng mọi nhu cầu</span> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.</li>
                <li className={style.noidung}> <span className={style.ticker}>✔ </span> <span className={style.todam}>Thanh toán dễ dàng</span> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</li>
                <li className={style.noidung}> <span className={style.ticker}>✔ </span> <span className={style.todam}>Nhiều quà tặng hơn</span> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn cho bạn.</li>
              </ul>
            </div>
          </div>

          <div className={style.question}>
            <div className={style.title_quetions}>
              <h1>Những câu hỏi thường gặp</h1>
            </div>
            <div className={style.text_quetions}>
              <h2>GrabFood là gì?</h2>
              <p className={style.noidung}>Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam</p>
            </div>
            <div className={style.button_promotions}>
            <ReadMore />
            </div>
          </div>
          <div className={style.gioithieuapp}>
          <div className={style.container_top_footer}>
            <div className={style.top_footer}>
              <img src={logodoan} alt="Logo Đồ Ăn" />
              <h2>Curated restaurants</h2>
              <p>From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</p>
            </div>

            <div className={style.top_footer}>
              <img src={logophone} alt="Mobile app" />
              <h2>More cool features available on the app</h2>
              <p>Download Grab app to use other payment methods and enjoy seamless communication with your driver.</p>
              <div className={style.download_buttons}>
                <a href="https://grab.onelink.me/2695613898?pid=www.bing.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid647268330%3Fmt%3D8%26l%3Dvi"><img src={appstore} alt="App Store" /></a>
                <a href="https://grab.onelink.me/2695613898?pid=www.bing.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Dvi_VN"><img src={CHplay} alt='CH Play' /></a>
              </div>
            </div>
          </div>
          <div className={style.Footer_Container}>
            <div className={style.Footer}>
                <div className={style.Logo_Container}>
                    <a className={style.imglogo_footer} href='/'>
                        <img src={Logo} className={style.Logo_footer} alt="Logo" />
                    </a> 
                </div>
            

        <hr className={style.HorizontalLine1} />
        <div className={style.footer_content}>


          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Về GrabFood</a></li>
              <li><a href="#">Về Grab</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Mở quán trên GrabFood</a></li>
              <li><a href="#">Trở thành tài xế Grab</a></li>
            </ul>
          </div>
          <div className={style.footer_column}>
            <ul className={style.footer_links}>
              <li><a href="#">Trung tâm hỗ trợ</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div className={style.social_icons}>
            <a href="https://www.facebook.com/grabvn"><img src={squarefacebook1} alt="facebook" /></a>
            <a href="https://www.instagram.com/grabfoodvietnam/"><img src={squareinstagram} alt="instagram" /></a>
            <a href="https://twitter.com/grabvn"><img src={squaretwitter} alt="twitter" /></a>
          </div>
        </div>
        <hr className={style.HorizontalLine1} />
        <div className={style.finishfooter}>
          <div className={style.download_buttons}>
            <a href="#"><img src={appstore} alt="App Store" /></a>
            <a href="#"><img src={CHplay} alt="Google Play" /></a>
          </div>
          <div className={style.copyright}>
            © 2024 Grab &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Câu hỏi thường gặp • Chính sách bảo mật
          </div>
        </div>
        </div>
        </div>
        </div>
           
        </div>
        
      </div>
     
    );
}
export default Main