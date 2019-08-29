
function product() {
    $.getJSON('tokopedia.json', function (data) {
        $.each(data, function (i, val) {
            $('#content').append('<div class="col-md-3 mt-5"><div class="card"> <img src="https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/2/19/487478/487478_e4c453a1-16da-4739-9150-d896c8f74285.jpg" class="card-img-top" alt="..."><div class="card-body"><h6 class="card-title">' + val.title + '</h6><p class="card-text">Rp. ' + val.price + '</p><p class="card-text">' + val.seller + '</p><p class="card-text">' + val.category + '</p> <a href="#" class="btn btn-outline-success">Beli Sekarang</a></div></div></div>');
        })
    })
}

product();

$('.nav-item').on('click', function () {
    let kategory = $(this).html();
    $('#kategory').html(kategory);

    $.getJSON('tokopedia.json', function (data) {
        let content = '';
        $.each(data, function (i, val) {
            if (kategory.toLowerCase() == val.category) {
                content += '<div class="col-md-3 mt-5"><div class="card"> <img src="https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/2/19/487478/487478_e4c453a1-16da-4739-9150-d896c8f74285.jpg" class="card-img-top" alt="..."><div class="card-body"><h6 class="card-title">' + val.title + '</h6><p class="card-text">Rp. ' + val.price + '</p><p class="card-text">' + val.seller + '</p><p class="card-text">' + val.category + '</p> <a href="#" class="btn btn-outline-success">Beli Sekarang</a></div></div></div>';
            }
        })
        $('#content').html(content)

    })
})