import $ from 'jquery';
require([ 'strophejs-plugin-pubsub'], function(strophe) {
    $(document).ready(function () {
        console.log("Using Strophe", strophe.Strophe.VERSION);
    });
});
//          const Strophe = strophe.Strophe;
//
//         //console.log("Strophe Plugins", strophePlugins );
//
//         const BOSH_SERVICE = 'http://localhost:7070/http-bind/';
//         let connection = null;
//
//         function log(msg, data)
//         {
//             let tr = document.createElement('tr');
//             let th = document.createElement('th');
//             th.setAttribute( "style", "text-align: left; vertical-align: top;" );
//             let td;
//
//             th.appendChild( document.createTextNode(msg) );
//             tr.appendChild( th );
//
//             if (data) {
//                 td = document.createElement('td');
//                 let pre = document.createElement('code');
//                 pre.setAttribute("style", "white-space: pre-wrap;");
//                 td.appendChild(pre);
//                 pre.appendChild( document.createTextNode( vkbeautify.xml(data) ) );
//                 tr.appendChild(td);
//             } else {
//                 th.setAttribute('colspan', '2');
//             }
//
//             $('#log').append(tr);
//         }
//
//         function rawInput(data)
//         {
//             log('RECV', data);
//         }
//
//         function rawOutput(data)
//         {
//             log('SENT', data);
//         }
//
//         function onConnect(status)
//         {
//             if (status == Strophe.Status.CONNECTING) {
//                 log('Strophe is connecting.');
//             } else if (status == Strophe.Status.CONNFAIL) {
//                 log('Strophe failed to connect.');
//                 $('#connect').get(0).value = 'Connect';
//             } else if (status == Strophe.Status.DISCONNECTING) {
//                 log('Strophe is disconnecting.');
//             } else if (status == Strophe.Status.DISCONNECTED) {
//                 log('Strophe is disconnected.');
//                 $('#connect').get(0).value = 'Connect';
//             } else if (status == Strophe.Status.CONNECTED) {
//                 log('Strophe is connected.');
//                 connection.disconnect();
//             }
//         }
//
//         $(document).ready(function () {
//             connection = new Strophe.Connection(BOSH_SERVICE);
//             connection.rawInput = rawInput;
//             connection.rawOutput = rawOutput;
//
//             $('#connect').bind('click', function () {
//                 let button = $('#connect').get(0);
//                 if (button.value == 'Connect') {
//                     button.value = 'Disconnect';
//
//                     connection.connect($('#jid').get(0).value,
//                         $('#pass').get(0).value,
//                         onConnect);
//                 } else {
//                     button.value = 'Connect';
//                     connection.disconnect();
//                 }
//             });
//         });
//     });
// });
