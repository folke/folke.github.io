
hexo.extend.tag.register('card', function(args, content) {
    var url = args[0];
    content = content || url;
    return '<a class="embedly-card" href="' + url + '">' + content + '</a>';
}, {ends: true});