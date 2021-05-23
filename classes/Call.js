import { Linking } from 'react-native'

export default class Call {
    constructor(){
        this.phoneNumber ="";
        this.baseUri = "";
    }

    
       
    async make(phoneNumber) {
        const url = this.baseUri + phoneNumber;
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            console.log(`Don't know how to open this URL: ${url}`)
        }
    }

}