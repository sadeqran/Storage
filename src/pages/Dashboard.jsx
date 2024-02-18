import React, { useEffect } from "react";
import { setDashboardChart } from "../utils/dashboardChart";
import SidebarItems from "../components/SidebarItems";

const Dashboard = () => {
  // useEffect(() => {
  //   const labels = ["فروردین", "اردیبهشت", "خرداد", "تیر"];
  //   const datapoints = [0, 100, 0, 20];
  //   setDashboardChart(labels, datapoints);
  // }, []);

  return (
    <div className="dashboard faj">
      <div className="moraba_vasat">
        <div className="blue_sidebar bxshadow">
          <div className="header_sidebar faj">
            <img
              alt="/"
              className="talyImg"
              src="https://talypark.com/wp-content/uploads/2022/12/Logo-Talypark.png"
            />
            <div className="avatar">
              <img
                className="w-100 rounded-circle bxshadow"
                src="https://avatars.githubusercontent.com/u/109485162?v=4"
                alt="/"
              />
            </div>
          </div>
          <ul className="items_sidebar faj">
            <SidebarItems icon="fa-solid fa-house" title="داشبورد" path="/" />
            <SidebarItems
              icon="fa-solid fa-user"
              title="کاربران"
              path="/users"
            />
            <SidebarItems icon="fa-solid fa-gear" title="تنظیمات" />
            <SidebarItems icon="fa-solid fa-lock" title="رمز عبور" />
            <SidebarItems
              icon="fa-solid fa-arrow-right-from-bracket"
              title="خروج"
            />
            <SidebarItems
              icon="fas fa-cube"
              title="مدیریت محصول"
              path="/products"
            />
            <SidebarItems icon="fas fa-copyright" title="مدیریت برندها" />
            <SidebarItems icon="fab fa-pagelines" title="مدیریت گارانتی ها" />
            <SidebarItems icon="fas fa-palette" title="مدیریت رنگ ها" />
            <SidebarItems icon="fas fa-luggage-cart" title="مدیریت سفارشات" />
          </ul>
        </div>
        <div className="context">
          <div className="header_context">
            <div className="welcome">
              <h6 className="h6_welcome">خوش آمدی ،</h6>
              <h4 className="h3_welcome">
                <strong>صادق رنجبر</strong>
              </h4>
            </div>
            <button className="upload bxshadow">
              ورودی<i className="fas fa-upload mr-1"></i>
            </button>
          </div>
          <div className="blue_box bxshadow faj">
            زندگی همینه ، ازش نترس ، ادامه بده
          </div>
          <div className="middle">
            <div className="total_box bxshadow">
              <div className="title_bx">موجودی</div>
              <div className="inventory">
                <div className="num">1,134</div>
                <div className="num_span">مورد</div>
              </div>
            </div>
            <div className="mx-20"></div>
            <div className="total_box bxshadow">
              <div className="title_bx">سفارشات</div>
              <div className="inventory">
                <div className="num">4</div>
                <div className="num_span">مورد</div>
              </div>
            </div>
          </div>
          <div className="white_box bxshadow faj">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="ads">
          <div className="header_ads">
            <div className="search">
              <input className="search" placeholder="جست و جو" />
              <button className="search-btn bxshadow">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <button className="alert_btn faj bxshadow">
              <div className="num_alert_btn faj">2</div>
              <i className="fa-regular fa-bell"></i>
            </button>
          </div>
          <div className="top bxshadow">
            <div className="title_bx">پرکاربرد ترین</div>
            <div className="top_products">
              <div className="top_products_bx mb-15">
                <img
                  alt="/"
                  className="img_icon"
                  src="./assets/images/keyboard.png"
                />
                <div className="title_top_bx">
                  <div>کیبورد</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
              </div>

              <div className="top_products_bx mb-15">
                <img
                  alt="/"
                  className="img_icon"
                  src="./assets/images/mouse.png"
                />
                <div className="title_top_bx">
                  <div>موس</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
              </div>

              <div className="top_products_bx mb-15">
                <img
                  alt="/"
                  className="img_icon"
                  src="./assets/images/monitor.png"
                />
                <div className="title_top_bx">
                  <div>مانیتور</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
              </div>

              <div className="top_products_bx mb-15">
                <img
                  alt="/"
                  className="img_icon"
                  src="./assets/images/printer.png"
                />
                <div className="title_top_bx">
                  <div>کارتریج</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
              </div>
              <div className="top_products_bx">
                <img
                  alt="/"
                  className="img_icon"
                  src="./assets/images/sys.png"
                />
                <div className="title_top_bx">
                  <div>کیس</div>
                  <div className="mark_to">&rsaquo;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20"></div>
          <div className="balance bxshadow faj">
            <div className="title_bx khoroji">خروجی</div>
            <div className="inventory">
              <div className="num">155</div>
              <div className="num_span">مورد</div>
            </div>
            <button className="upload balance_btn bxshadow">
              خروجی <i className="fas fa-download mr-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
