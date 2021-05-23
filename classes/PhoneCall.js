import Call from './Call';

export default class PhoneCall extends Call {
    constructor(){
        super();
        this.baseUri = "tel:+";
    }


}