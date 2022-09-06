let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {

            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                ddd.appendChild(li)
            })
            n += 1;
        }


    };
    request.send();
}

getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {

            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }

    }
    request.send()
};

getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {

            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }

    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        const html = document.createElement('html')
        html.innerHTML = request.response
        document.body.appendChild(html)
    }
    request.onerror = () => {
        console.log('failed')
    }
    request.send()
}


getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('failed')
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {

        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else {
                alert('加载CSS失败')
            }
        }

    }
    request.send()
}
