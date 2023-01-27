// tweet form submission
const tweetForm = document.querySelector('.tweet-compose form');
tweetForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // create new tweet element
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet');
  newTweet.innerHTML = `
    <div class="tweet-header">
      <img src="https://picsum.photos/50/50" alt="Profile picture">
      <h3>${localStorage.getItem('username')}</h3>
      <span>@${localStorage.getItem('username')}</span>
      <span>· Just now</span>
    </div>
    <div class="tweet-content">
      <p>${tweetForm.querySelector('textarea').value}</p>
    </div>
    <div class="tweet-footer">
      <i class="fa fa-comment"></i>
      <i class="fa fa-retweet"></i>
      <i class="fa fa-heart"></i>
      <i class="fa fa-ellipsis-h"></i>
    </div>
  `;

  // insert new tweet at the top of the feed
  const tweetFeed = document.querySelector('.tweet-feed');
  tweetFeed.insertBefore(newTweet, tweetFeed.firstChild);

  // reset the form
  tweetForm.reset();
});

// image upload
const imageUpload = document.querySelector('#image-upload');
imageUpload.addEventListener('change', (event) => {
  const image = event.target.files[0];
  // do something with the image (e.g. upload to server)
});
