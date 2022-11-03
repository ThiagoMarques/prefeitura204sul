$(function () {
  const token =
    'IGQVJYVXFYYTFfU2w5NWNVcmc3SzFIZA2I4NXg3S2gyRkhkYWFrQXpwTFB4cUFMcnNPRTZAvOHVzRmV2VjRVVnY4Tld1QlpZAMWVpVUl6czBVcG9mY3dsbGdsX3Y4bHh1RnAtbk5sMzdraDdvTEdrMUVVMgZDZD'

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
