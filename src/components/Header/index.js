import './index.css'

const Header = () => (
  <>
    <div className="header-bg">
      <div>
        <h1 className="main-heading">Movies</h1>
        <p>Home</p>
        <p>Popular</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dk2sgowxz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1678865963/search_yeeujb.svg"
          alt="search"
        />
        <img
          src="https://res.cloudinary.com/dk2sgowxz/image/upload/v1678865358/Avatar_mjcbnv.svg"
          alt="avatar"
        />
      </div>
    </div>
  </>
)
export default Header
