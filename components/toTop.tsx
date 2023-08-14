import React from 'react';
import { useEffect } from 'react'
import $ from "jquery"

const ToTop = () => {
    const toTop = () => {
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      }
      
      useEffect(() => {
        $(window).scroll(function(){
          if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
          } else {
            $('.ir-arriba').slideUp(300);
          }
        });
      }, [])
      return ( <span className="ir-arriba fa-solid fa-up-long" onClick={toTop}>Arriba</span>)
}

export default ToTop

