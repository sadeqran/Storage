import React from 'react'
import SidebarItems from "../../components/SidebarItems";


export default function Sidebar() {
  return (
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
  )
}
