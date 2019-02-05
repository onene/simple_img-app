function getImageSizeInBytes(imgURL) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', imgURL, true);
    xhr.send(null);
    var headerText = xhr.getResponseHeader('Content-Type')
    return headerText
}
var btn = document.getElementById('btn')
btn.addEventListener('click', go => {
    var inp = document.getElementById('inp').value;
    if (inp >= 30) {
        alert('Ваксимально возможное колличество картинок для отображения - 30.' + '\n' + 'Введите число меньше 30-ти')
    } else {

        for (let i = 1; i <= inp; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', 'https://picsum.photos/200/300');
            img.onload = function() {
                img.setAttribute('title', img.width + 'px' + ' x ' + img.height + 'px ' + 'size ' + getImageSizeInBytes('https://picsum.photos/200/300') + ' kB');
            }

            document.getElementById('app').appendChild(img);
        }
        var report = document.createElement('button');
        report.innerHTML = 'show report'
        report.id = 'report'
        document.getElementById('app').appendChild(report);
        var rep = document.getElementById('report');
        rep.addEventListener('click', tbl => {
            var div = document.createElement('div');
            div.setAttribute('id', 'div')
            document.getElementById('app').appendChild(div)
            var tableArr = ['<table><td>№</td><td>width</td><td>height</td><td>SIZE</td>'];
            for (i = 0; i < inp; i++) {
                var imgs = document.querySelectorAll('img');

                for (var j = 0; j < imgs.length; j++) {
                    var w = imgs[i].width;
                    var h = imgs[i].height;
                    var s = imgs[i].getAttribute('title');
                    var size = s.split(' ')[4]
                }

                tableArr.push('<tr><td>' + parseInt(i + 1) + '</td>' + '<td>' + w + 'px' + '</td>' + '<td>' + h + 'px' + '</td><td>' + size + '</td></tr>');
            }
            tableArr.push('</table>');
            document.getElementById('div').innerHTML = tableArr.join('')

        });
    }
})