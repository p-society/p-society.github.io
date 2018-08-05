function changePage(event) {
      
    var pageNo = $j(this).html();
    
    $j('.portfolio-page').hide();
    $j('#page-' + pageNo).fadeIn();
    $j('.pagination li').removeClass('active');
    $j(this).addClass('active');
}
$j(function () {
    $j('.pagination li').click(changePage);
    $j('.portfolio-item').magnificPopup({ 
        type: 'image',
        gallery:{
        enabled:true
        }
    });
});