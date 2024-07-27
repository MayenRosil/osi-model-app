export const layersData = {
    "osi": [
        {
            "title": "Aplicación",
            "description": "Maneja la interfaz entre las aplicaciones de usuario y el resto de la red. Contiene protocolos utilizados para las comunicaciones de proceso a proceso.",
            "devices": [
                { "title": "Servidor de aplicaciones" },
                { "title": "Estación de trabajo" }
            ],
            "ports": [
                { "title": "DNS" },
                { "title": "HTTP" },
                { "title": "P2P" },
                { "title": "POP" },
                { "title": "SMTP" },
                { "title": "Telnet" },
                { "title": "FTP" }
            ],
            "customClasses": "",
            "equal": 4
        },
        {
            "title": "Presentación",
            "description": "Encargada de la sintaxis y semántica de la información transmitida. Proporciona una representación común de los datos transferidos entre los servicios de capa de aplicación.",
            "devices": [],
            "ports": [
                { "title": "HTML" },
                { "title": "DOC" },
                { "title": "JPEG" },
                { "title": "MP3" },
                { "title": "AVI" },
                { "title": "Sockets" },
            ],
            "customClasses": "",
            "equal": 4
        },
        {
            "title": "Sesión",
            "description": "Maneja la comunicación y el control entre las aplicaciones de usuario. Proporciona servicios a la capa de presentación y para administrar el intercambio de datos.",
            "devices": [],
            "ports": [
                { "title": "TCP" },
                { "title": "SIP" },
                { "title": "RTP" },
                { "title": "RPC" },
            ],
            "customClasses": "",
            "equal": 4
        },
        {
            "title": "Transporte",
            "description": "Proporciona comunicación de extremo a extremo, confiable y ordenada. Define los servicios para segmentar, transferir y volver a ensamblar los datos de las comunicaciones individuales.",
            "devices": [],
            "ports": [
                { "title": "TCP" },
                { "title": "UDP" },
                { "title": "SCTP" },
                { "title": "SSL" },
                { "title": "TLS" },
            ],
            "customClasses": "",
            "equal": 3
        },
        {
            "title": "Red",
            "description": "Encamina los paquetes de datos a través de la red utilizando direcciones lógicas. Proporciona servicios para intercambiar los datos individuales a través de la red.",
            "devices": [],
            "ports": [
                { "title": "IP" },
                { "title": "ARP" },
                { "title": "IPsec" },
                { "title": "ICMP" },
                { "title": "IGMP" },
                { "title": "OSPF" },
            ],
            "customClasses": "",
            "equal": 2
        },
        {
            "title": "Enlace de datos",
            "description": "Transfiere datos de un nodo a otro en la misma red física. Describe métodos para intercambiar marcos de datos a través de un medio común.",
            "devices": [],
            "ports": [
                { "title": "Ethernet" },
                { "title": "MAC" },
                { "title": "VALN" },
                { "title": "ATM" },
                { "title": "HDP" },
                { "title": "Fibra" },
                { "title": "HDLC" },
                { "title": "PPP" },
            ],
            "customClasses": "",
            "equal": 1
        },
        {
            "title": "Física",
            "description": "Transmite datos a través de medios físicos como cables y señales eléctricas. Describe los medios para activar y desactivar conexiones físicas.",
            "devices": [
                { "title": "Switch" },
                { "title": "Router" }
            ],
            "ports": [
                { "title": "RS-232" },
                { "title": "RJ45" },
                { "title": "V 34" },
                { "title": "100BASE-TX" },
                { "title": "SDH" },
                { "title": "DSL" },
            ],
            "customClasses": "",
            "equal": 1
        }
    ],
    "tcpip": [
        {
            "title": " Aplicación",
            "description": "Proporciona servicios de red a las aplicaciones de usuario finales. Representa los datos para el usuario, además de la codificación y el control de cuadro de diálogo.",
            "devices": [],
            "ports": [
                { "title": "HTTP" },
                { "title": "DNS" },
                { "title": "DHCP" },
                { "title": "FTP" }
            ],
            "customClasses": "ultima",
            "equal": 4
        },
        {
            "title": "Transporte",
            "description": "Proporciona transferencia de datos confiable y control de flujo de extremo a extremo. Ademite la comunicación entre varios dispositivosa través de diversas redes.",
            "devices": [],
            "ports": [
                { "title": "TCP" },
                { "title": "UDP" },
            ],
            "customClasses": "",
            "equal": 3
        },
        {
            "title": "Internet",
            "description": "Encamina los paquetes de datos entre redes diferentes a través de dispositivos como routers. Determina la mejor ruta a través de la red.",
            "devices": [
                { "title": "Router" }
            ],
            "ports": [
                { "title": "IPv4" },
                { "title": "IPv6" },
                { "title": "ICMPv4" },
                { "title": "ICMPv6" },
            ],
            "customClasses": "",
            "equal": 2
        },
        {
            "title": "Acceso a la red",
            "description": "Proporciona conectividad física a la red para los dispositivos de usuario final. Controla los dispositivos de hardware y los medios que componen la red.",
            "devices": [],
            "ports": [
                { "title": "Ethernet" },
                { "title": "WLAN" },
                { "title": "SONET" },
                { "title": "SDH" },
            ],
            "customClasses": "primera",
            "equal": 1
        }
    ]
}
