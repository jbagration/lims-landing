import React, { useState, useEffect, useRef, useCallback } from 'react';
import './HeaderStyles.scss'; 
import DesktopHeader from './DesktopHeader';
import TabletHeader from './TabletHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null); 

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const handleBodyOverflowChange = useCallback(() => {
    const header = document.querySelector('header');
    const bodyOverflow = window.getComputedStyle(document.body).overflow;

    if (bodyOverflow === 'hidden') {
      header.style.zIndex = '8';
    } else {
      header.style.zIndex = '9';
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(handleBodyOverflowChange);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => {
      observer.disconnect();
    };
  }, [handleBodyOverflowChange]);

  const isDesktop = windowWidth >= 769;
  const isTablet = windowWidth >= 431 && windowWidth < 769;
  const isMobile = windowWidth < 431;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const scrollToSection = useCallback((sectionId) => {
    window.location.hash = sectionId;
    const screenWidth = window.innerWidth;
    if (isDesktop) {
      let scrollPosition = 0;
      if (screenWidth > 1440) {
        switch (sectionId) {
          case 'program':
            scrollPosition = 600;
            break;
          case 'features':
            scrollPosition = 1600;
            break;
          case 'pricing':
            scrollPosition = 2550;
            break;        
          case 'offer':
            scrollPosition = 3600;
            break;        
          case 'cases':
            scrollPosition = 5300;
            break;        
          case 'details':
            scrollPosition = 6300;
            break;        
          case 'news':
            scrollPosition = 7500;
            break;
          default:
            break;
        }
      } else if (screenWidth > 1024 && screenWidth <= 1440) {
        switch (sectionId) {
          case 'program':
            scrollPosition = 550;
            break;
          case 'features':
            scrollPosition = 1340;
            break;
          case 'pricing':
            scrollPosition = 2050;
            break;        
          case 'offer':
            scrollPosition = 2950;
            break;        
          case 'cases':
            scrollPosition = 4250;
            break;        
          case 'details':
            scrollPosition = 5050;
            break;        
          case 'news':
            scrollPosition = 5950;
            break;
          default:
            break;
        }
      } else if (screenWidth <= 1024) {
        switch (sectionId) {
          case 'program':
            scrollPosition = 400;
            break;
          case 'features':
            scrollPosition = 1000;
            break;
          case 'pricing':
            scrollPosition = 1550;
            break;        
          case 'offer':
            scrollPosition = 2200;
            break;        
          case 'cases':
            scrollPosition = 3200;
            break;        
          case 'details':
            scrollPosition = 3800;
            break;        
          case 'news':
            scrollPosition = 4500;
            break;
          default:
            break;
        }
      }
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
  } else if (isTablet) {
    const section = document.getElementById(sectionId);
    if (section) {
      let offset = 175;
      const scrollTop = section.offsetTop - offset;
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  } else if (isMobile & screenWidth <= 320) {
    let scrollPosition = 0; 
    switch (sectionId) {
      case 'program':
        scrollPosition = 700;
        break;
      case 'features':
        scrollPosition = 1600;
        break;
      case 'pricing':
        scrollPosition = 2300;
        break;        
      case 'offer':
        scrollPosition = 3500;
        break;        
      case 'cases':
        scrollPosition = 5250;
        break;        
      case 'details':
        scrollPosition = 6000;
        break;        
      case 'news':
        scrollPosition = 6900;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  } else if (isMobile) {
    const section = document.getElementById(sectionId);
    if (section) {
      let offset = 69;
      const scrollTop = section.offsetTop - offset;
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  }
}, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      setHeaderHeight(mobileMenuRef.current.clientHeight);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [windowWidth]);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [scrollToSection]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange); 
    };
  }, [handleHashChange]);

  if (isDesktop) {
    return <DesktopHeader headerRef={headerRef} openModal={openModal} scrollToSection={scrollToSection} isModalOpen={isModalOpen} closeModal={closeModal} />;
  } else if (isTablet) {
    return <TabletHeader headerRef={headerRef} openModal={openModal} scrollToSection={scrollToSection} isModalOpen={isModalOpen} closeModal={closeModal} />;
  } else {
    return <MobileHeader openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />;
  }
};

export default Header;
