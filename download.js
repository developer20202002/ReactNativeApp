/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import ytdl from "react-native-ytdl"
// import RNFetchBlob from 'rn-fetch-blob'
// import VideoPlayer from 'react-native-video-player';

var RNFS = require('react-native-fs');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();

        this.state = {
            videoUrl: undefined,
        };
    }
    createOrGetFilePath() {
        let filePath = '/storage/emulated/0/Download' + '/hehehe/';
        console.log('create paht', filePath);
        return new Promise((resolve, reject) => {
            RNFS.exists(filePath)
                .then((exists) => {
                    if (!exists) {
                        RNFS.mkdir(filePath)
                            .then(() => resolve(filePath))
                            .catch((error) => reject(error));
                    } else {
                        resolve(filePath);
                    }
                })
                .catch((error) => reject(error));
        });
    }

    componentDidMount() {
        // const storeData = async () => {
        //   try {
        //     const value = await AsyncStorage.getItem('name');
        //     if (!value) {
        //       await AsyncStorage.setItem('name', 'Hero Punjabi');
        //       console.log(await AsyncStorage.getItem('name'));
        //     }
        //     // if(value ===)
        //     // await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        //   } catch (error) {
        //     // Error saving data
        //   }
        // };
        storeData();
        videoID = "dyp2mLYhRkw"
        // this.createOrGetFilePath().then((result) => {
        //   console.log('Results>>', result);
        // })
        // ytdl.getInfo(videoID, {}, (err, info) => {
        //   if (err) console.log(err);
        //   console.log('>>formats', info.formats);
        //   let format = ytdl.chooseFormat(info.formats, { quality: 'medium' });
        //   if (format) {
        //     console.log('Info>>', info);
        //     var path = RNFS.DocumentDirectoryPath + '/v3.flv';
        //     console.log('path', path);

        //     RNFS.downloadFile(
        //       {
        //         fromUrl: info.formats[0].url,
        //         toFile: path,
        //         progress: (j, c, b) => {
        //           console.log('job>', j, c, b);
        //         }

        //       }).promise.then((res) => {
        //         Alert.alert('Downloaded', path);
        //       }).catch((e) => {
        //         Alert.alert('Error', e);
        //       });



        //     // let dirs = RNFetchBlob.fs.dirs
        //     // RNFetchBlob.config({
        //     //   // response data will be saved to this path if it has access right.
        //     //   // fileCache: true,
        //     //   // path: dirs.DCIMDir + '/my-video.mp4'
        //     //   addAndroidDownloads: {
        //     //     useDownloadManager: true, // <-- this is the only thing required
        //     //     // Optional, override notification setting (default to true)
        //     //     notification: true,
        //     //     // Optional, but recommended since android DownloadManager will fail when
        //     //     // the url does not contains a file extension, by default the mime type will be text/plain
        //     //     mime: 'video/mp4',
        //     //     description: 'File downloaded by download manager.'
        //     //   }
        //     // }).fetch('GET', info.formats[0].url)
        //     //   // listen to download progress event, every 10%
        //     //   .progress({ count: 10 }, (received, total) => {
        //     //     console.log('progress', received / total)
        //     //   })
        //     //   .then((resp) => {
        //     //     // RNFetchBlob.fs.scanFile([{ path: res.path() }])
        //     //     console.log('The file saved to ', resp.path())
        //     //     console.log('resp', resp);
        //     //     Alert.alert(resp.path())
        //     //     // ...
        //     //   })
        //     //   .catch((err) => {
        //     //     // ...
        //     //     console.error(err);
        //     //   })


        //     //Alert.alert('Format found!', JSON.stringify(info));
        //   }
        // });
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Javascript-you are an amazing !</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
