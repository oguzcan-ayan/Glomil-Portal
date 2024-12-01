import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Icon01, Icon02, Icon03, Icon04, Icon05, Icon06, Icon07 } from '../globalIcons/Icons';
import Logo from "../logo/Logo";

function Header() {

  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerButtonOpen, setIsHamburgerButtonOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchboxRef = useRef(null);

  useEffect(() => {

    const handleResponsiveHeader = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth && innerWidth <= 1200) {
        setIsMobile(true);
      }
      else {
        setIsMobile(false);
      }
    }
    handleResponsiveHeader();

    window.addEventListener("resize", handleResponsiveHeader);

    return () => {
      window.removeEventListener("resize", handleResponsiveHeader);
    }
  }, [])

  useEffect(() => {

    const handleClickOutsideSearchbox = (event) => {
      if (searchboxRef.current && !searchboxRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideSearchbox);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearchbox);
    }
  }, [searchboxRef])

  const renderNavigation = (isMobile) => {
    const navs = [
      {
        name: "Anasayfa",
        path: "/",
      },
      {
        name: "Hizmetler",
        path: "/services",
      },
      {
        name: "Paketler",
        path: "/packets",
      },
      {
        name: "Ürünler",
        path: "/products",
      },
    ];

    return (
      <div className="main-contents">
        {navs.map((nav, index) => (
          <button className="main-contents-buttons" key={index}>
            <NavLink
              key={index}
              to={nav.path}
              onClick={() => isMobile && setIsHamburgerButtonOpen(false)}
            >
              {nav.name}
            </NavLink>
          </button>
        ))}
      </div>
    );
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
  }

  const handleSearchBlur = () => {
    setSearchVisible(false);
  }

  const handleSearchFocus = () => {
    setSearchVisible(true);
  }

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  }

  const handleButtonClick = () => {
    setIsHamburgerButtonOpen(!isHamburgerButtonOpen);
  }

  const renderSearchBox = () => {
    return (
      <div className="searchbox" ref={searchboxRef}>
        <Icon01 className="search-icon" />
        <input
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={handleSearchClick}
        />
        {searchVisible && (
          <div className="searchbox-info" onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
            <NavLink to="/">
              <button onClick={handleCloseSearch}>Anasayfa</button>
            </NavLink>
            <NavLink to="/services">
              <button onClick={handleCloseSearch}>Hizmetler</button>
            </NavLink>
            <NavLink to="/services/bots">
              <button onClick={handleCloseSearch}>Bots</button>
            </NavLink>
            <NavLink to="/services/text-analysis/sentiment">
              <button onClick={handleCloseSearch}>Sentiment</button>
            </NavLink>
            <NavLink to="/services/text-analysis">
              <button onClick={handleCloseSearch}>Text Analizi</button>
            </NavLink>
          </div>
        )}
      </div>
    );
  }

  if (isMobile) {
    return (
      <>
        <div className="portal-header">

          <div className="portal-header-up">
            <Logo />

            <button
              className="more-btn"
              onClick={handleButtonClick}
            >
              {isHamburgerButtonOpen ? <Icon04 /> : <Icon05 />}
            </button>
          </div>

          {isHamburgerButtonOpen &&
            <div className="portal-header-down">

              {renderNavigation(isMobile)}

              <div className="portal-header-down-right">

                {renderSearchBox()}

                <div className="user-contents">
                  <Icon06 className="bell-icon" />
                  <Icon07 className="help-icon" />
                  <Icon02 className="settings-icon" />
                  <div className="user-log">
                    <span className="user-active-dot"></span>
                    <Icon03 className="user-icon" />
                  </div>
                  <div className="user-info">
                    <span className="username">Glomil</span>
                    <div className="user-mail">glml@glomil.com</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </>
    )
  }

  else {
    return (
      <>
        <div className='portal-header'>
          <div className="portal-header-left">
            <Logo />
            {renderNavigation(isMobile)}
          </div>

          <div className="portal-header-right">

            {renderSearchBox()}

            <div className="user-contents">
              <Icon06 className="bell-icon" />
              <Icon07 className="help-icon" />
              <Icon02 className="settings-icon" />
              <div className="user-log">
                <span className="user-active-dot"></span>
                <Icon03 className="user-icon" />
              </div>
              <div className="user-info">
                <span className="username">Glomil</span>
                <div className="user-mail">glml@glomil.com</div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default Header;