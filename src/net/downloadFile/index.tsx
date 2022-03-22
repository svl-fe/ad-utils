/**
 * 下载文件
 */
export function downLoadFile(url: string, fileName: string = '') {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'blob';
  request.onload = function () {
    const urlStr = window.URL.createObjectURL(request.response);
    const a = document.createElement('a');
    a.href = urlStr;
    a.download = fileName;
    a.click();
  };
  request.send();
}

export default downLoadFile;
