import Izzati from 'react-native-izzati';
import RNFetchBlob from 'react-native-fetch-blob';

export function download(url) {
    try{
    let i = new Izzati("http://192.168.100.113:5020/")
    return new Promise(resolve => {
        i.send({text: {url: url}, response: {base64: true}}, (out) => {
        if (out.err !== undefined) {
            return out
        }
        out = out.text
        RNFetchBlob
            .config({
            // response data will be saved to this path if it has access right.
            //path : (dirs.DocumentDir + '/' + out.title + '.mp4').replace(/\s/g, '')
            fileCache: true,
            appendExt: 'mp4'
            })
            .fetch('GET', out.url, {

            })
            .then((res) => {
                data = {
                    path: res.path(),
                    thumbnail: out.thumbnail,
                    title: out.title,
                    author: out.author,
                }
                resolve(data)
        })
    });
    })
    } catch (e) {
        console.log(e)
    }
}