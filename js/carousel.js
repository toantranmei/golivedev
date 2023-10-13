$(".single-item").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
      },
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      },
    },
    ],
    prevArrow: `<button type="button" class="roadmap-prev slick-prev pull-left slick-arrow" aria-disabled="false" style="display: flex;"><i class="bi bi-caret-left-fill"></i></button>`,
    nextArrow: `<button type="button" class="roadmap-next slick-next pull-right slick-arrow" style="display: flex;" aria-disabled="false"><i class="bi bi-caret-right-fill"></i></button>`
    
});
