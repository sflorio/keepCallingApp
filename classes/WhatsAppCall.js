import Call from './Call';

export default class WhatsAppCall extends Call {
    constructor(){
        super();
        this.baseUri = "https://wa.me/";
    }


}