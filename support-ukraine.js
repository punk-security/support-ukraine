// Copyright (c) Punk Security Ltd. All rights reserved.
// Licensed under the MIT license:
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

fetch("https://www.cloudflare.com/cdn-cgi/trace")
.then(response => {
    return response.text();
})
.then(data => {
    var
        regex = new RegExp("loc=RU\n", "gmi");

    if(regex.test(data))
        window.setTimeout(showSupportUkraineMessage, 5000);
});

function showSupportUkraineMessage() {
    document.body.innerHTML = "<div style='text-align:center;background:white;position:fixed;top:0;left:0;bottom:0;right:0'><p style='color:black;'>Until Russia leaves Ukraine and allow the Ukrainian people to be free. All Russian IP addresses will be blocked from our web services.</p><img style='height:90%' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg'/></div>";
}