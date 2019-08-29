
function movies(search = 'avengers') {
    $.ajax({
        url: 'http://www.omdbapi.com/',
        method: 'GET',
        data: {
            apikey: 'beaa4343',
            s: search
        },
        dataType: 'JSON',
        success: function (data) {
            $('#content').html("");
            if (data.Response === "True") {
                $.each(data.Search, function (i, val) {
                    let content = $('#content');
                    let card = `
                        <div class=" col-md-3 mb-5">
                            <div class="card">
                                <img src="`+ val.Poster + `" class="card-img-top" width="20px">
                                <div class="card-body">
                                    <h6 class="card-title">`+ val.Title + `</h6>
                                    <span class="card-text">`+ val.Year + `</span><br>
                                    <p class="card-text"> ` + val.Type + `</p>
                                    <a href="#" class="btn btn-primary btn-detail" data-toggle="modal" data-target="#modal-detail" data-id = "`+ val.imdbID + `"> Detail</a>
                                </div>
                            </div>
                        </div>
                    `;
                    content.append(card);
                })

            } else {
                $('#content').html(`
                    <div class="col">
                    <h1 class="text-center">` + data.Error + `</h1>
                    </div>
                `)
            }
        }
    })
}
movies();

$('#search').on('click', function () {
    let search_by = $('.search-value').val();
    movies(search_by);
})

$('.search-value').on('keyup', function (event) {
    if (event.keyCode === 13) {
        let search_by = $('.search-value').val();
        movies(search_by);
    }
})

$(document).on('click', '.btn-detail', function () {
    $('.modal-body').html('');
    $.ajax({
        url: 'http://www.omdbapi.com/',
        method: 'GET',
        dataType: 'JSON',
        data: {
            apikey: 'beaa4343',
            i: $(this).data('id')
        },
        success: function (data) {
            let dataModal = `
            <div class="row">
                <div class="col-md-6">
                    <ul class="list-group">
                        <li class="list-group-item">Title : <b>`+ data.Title + `</b></li>
                        <li class="list-group-item">Genre : <b>`+ data.Genre + `</b></li>
                        <li class="list-group-item">Director : <b>`+ data.Director + `</b></li>
                        <li class="list-group-item">Writer : <b>`+ data.Writer + `</b></li>
                        <li class="list-group-item">Actors : <b>`+ data.Actors + `</b></li>
                        <li class="list-group-item">Plot : <b>`+ data.Plot + `</b></li>
                        <li class="list-group-item">Country : <b>`+ data.Country + `</b></li>
                        <li class="list-group-item">imdbRating : <b>`+ data.imdbRating + `</b></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <img src="`+ data.Poster + `" class="img-fruid">
                </div>
            </div>
            `;
            $('.modal-body').html(dataModal)
        }
    })
})