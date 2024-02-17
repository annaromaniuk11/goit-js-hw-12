import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/err.svg';
import xIcon from '../img/x.svg';

export function onWarning(message) {
    iziToast.warning({
        title: 'Sorry,',
        titleColor: '#FFFFFF',
        message,
        messageColor: '#FFFFFF',
        messageSize: '16px',
        backgroundColor: '#FFA000',
        iconUrl: dangIcon,
        position: 'center',
        close: false,
        buttons: [
            [
                `<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${xIcon}>
        </button>`,
                function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast);
                },
            ],
        ]
    });
}

export function onRejected(error) {
    iziToast.show({
        title: 'Error',
        titleColor: '#FFFFFF',
        message: error.message,
        messageColor: '#FFFFFF',
        messageSize: '16px',
        backgroundColor: '#EF4040',
        iconUrl: errorIcon,
        position: 'topRight',
        close: false,
        buttons: [
            [
                `<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${xIcon}>
        </button>`,
                function (instance, toast) {
                    instance.hide({ transitionOut: 'fadeOut' }, toast);
                },
            ],
        ]
    });
}