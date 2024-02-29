let moviesList = [];

$(function () {
  $('#movie-form').on('submit', function (e) {
    // prevent submit from loading new page
    e.preventDefault();
    // save values of the inputs
    let movie = $('#title').val();
    let rating = $('#rating').val();

    // append movies to page
    let movieInfo = { movie, rating };
    const movieTable = createMovieTable(movieInfo);

    moviesList.push(movieInfo);

    $('#movie-list').append(movieTable);

    // reset form after submitting
    $('#movie-form').trigger('reset');
  });

  $('tbody').on('click', '.btn', function (e) {
    $(e.target).closest('tr').remove();
  });
});

// to create the table
function createMovieTable(obj) {
  return `
  <tr>
    <td>${obj.movie}</td>
    <td>${obj.rating}</td>
    <td>
      <button class="btn">
        Delete
      </button>
    </td>
  <tr>
`;
}
