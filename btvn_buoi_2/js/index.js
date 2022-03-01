const searchBtn = document.getElementById('searchQuerySubmit');
const searchInput = document.getElementById('searchQueryInput');

searchBtn.addEventListener('click', () => {
    const login = searchInput.value;
    console.log(login);
    fetch(`https://api.github.com/users/${login}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            if (result.login === undefined) {
                console.log(result);
                Swal.fire(`User ${result.message}`);
            } else {
                console.log(result);
                Swal.fire({
                    html:
                        `<div class="wrapper-list">
                      <ul class="mat_list card scrollable">
                          <div class="mat_list_title"
                              style="background-image:url(${result.avatar_url});">
                              <h1>${result.login}</h1>
                          </div>
                          <li><a>Link Github: ${result.html_url}</a></li>
                          <li>Tên: ${result.name}</li>
                          <li>Followers: ${result.followers}</li>
                          <li>Following: ${result.following}</li>
                      </ul>
                  </div>`,
                    height: 600,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        '<i class="fa fa-thumbs-up"></i> Ok',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                })
            }
            
        })
        .catch(err => {
            console.log(err);
        })
})