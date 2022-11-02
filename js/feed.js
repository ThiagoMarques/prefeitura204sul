$(function () {
  const token =
    'IGQVJVaTh0cjdWY2hjS25rRVloNnE0emhncU9qZAFY2RzFzdG1pSGJVU3F0bFFoMWVaelJERVhNdFZAUcEliaVhSblJDclFpR0dIOFppSmdRbDFDQTBOVGJnd1NQRkhERjJMVkJOajZA6Wk9TUEw4WjRjdgZDZD'

  const url =
    'https://graph.instagram.com/me/media?access_token=' +
    token +
    '&fields=media_url,media_type,caption,permalink'

  $.get(url).then(function (response) {
    let data = response.data
    let content = '<div class="row row-feed">'

    for (p = 0; p < data.length; p++) {
      let feed = data[p]
      let title = feed.caption !== null ? feed.caption : ''
      if (title === undefined) {
        title = 'Texto não inserido'
      }
      let type = feed.media_type
      if (type === 'VIDEO') {
        content +=
          '<div class="col-lg-4 col-md-4 col-sm-6 col-12" style="max-height: 40vh"><video controls class="w-100" style="max-height: 40vh"><source src="' +
          feed.media_url +
          '"</video></div>'
      }
      if (type === 'IMAGE') {
        content +=
          '<div class="col-lg-4 col-md-4 col-sm-6 col-12"><img class="p-3" style="width: 90%; max-height: 40vh; cursor: pointer" title="' +
          title +
          '" alt="' +
          title +
          '"src="' +
          feed.media_url +
          '"onclick="window.open(\'' +
          feed.permalink +
          '\')"><div class="content-feed"><span class="text-feed">"' +
          title +
          '"</span></div></div>'
      }
      if (type === 'CAROUSEL_ALBUM') {
        content +=
          '<div class="col-lg-4 col-md-4 col-sm-6 col-12"><img class="p-3" style="width: 90%; max-height: 40vh; cursor: pointer" title="' +
          title +
          '" alt="' +
          title +
          '"src="' +
          feed.media_url +
          '"onclick="window.open(\'' +
          feed.permalink +
          '\')"><div class="content-feed"><span class="text-feed">"' +
          title +
          '"</span></div></div>'
      }
    }
    content += '</div>'
    $('#insta').html(content)
  })
})
