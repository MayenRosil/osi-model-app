
import '../styles/layers.css';
import { Tooltip } from 'react-tooltip'


const Layers = ({ layers, setLayers }) => {

    const desSelectLayer = () => {
        const updatedTCPIPLayers = layers.tcpip;
        const updatedOSILayers = layers.osi;
        updatedOSILayers.map((e, i) => {
            updatedOSILayers[i].customClasses = e.customClasses.replace(' selected', '')
        })
        updatedTCPIPLayers.map((e, i) => {
            updatedTCPIPLayers[i].customClasses = e.customClasses.replace(' selected', '')
        })
      }

    const selectOSILayer = (layerData) => {
        //Obtiene el elemento coincidente en la capa OSI y su indice
        const updatedOSILayers = layers.osi;
        const index = updatedOSILayers.findIndex(layer => layer.title === layerData.title);

        //Obtiene el elemento coincidente en la capa TCP/IP y su indice
        const updatedTCPIPLayers = layers.tcpip;
        const indexTCPIP = updatedTCPIPLayers.findIndex(layer => layer.equal === layerData.equal);

        if (index !== -1) {
            //elimina la clase 'selected' de los que ya la tengan
            updatedOSILayers.map((e, i) => {
                updatedOSILayers[i].customClasses = e.customClasses.replace(' selected', '')
            })
            updatedTCPIPLayers.map((e, i) => {
                updatedTCPIPLayers[i].customClasses = e.customClasses.replace(' selected', '')
            })

            //agrega la clase selected al elemento en la capa OSI y al coincidente en la capa TCP/IP
            updatedOSILayers[index].customClasses = (updatedOSILayers[index].customClasses || '') + ' selected';
            updatedTCPIPLayers[indexTCPIP].customClasses = (updatedTCPIPLayers[indexTCPIP].customClasses || '') + ' selected';
            setLayers({ tcpip: updatedTCPIPLayers, osi: updatedOSILayers })
        } else {
            console.log(`No se encontró el elemento correspondiente para ${layerData.title}`);
        }
    };

    const selectTCPIPLayer = (layerData) => {
        //Obtiene el elemento coincidente en la capa TCP/IP y su indice
        const updatedTCPIPLayers = layers.tcpip;
        const index = updatedTCPIPLayers.findIndex(layer => layer.title === layerData.title);

        //Obtiene los elementos coincidentes en la capa OSI y sus indices
        const updatedOSILayers = layers.osi;
        let elements = [];
        updatedOSILayers.map((e, i) => {
            if (e.equal === layerData.equal) elements.push(i);
        })

        if (index !== -1) {
            //elimina la clase 'selected' de los que ya la tengan
            updatedOSILayers.map((e, i) => {
                updatedOSILayers[i].customClasses = e.customClasses.replace(' selected', '')
            })
            updatedTCPIPLayers.map((e, i) => {
                updatedTCPIPLayers[i].customClasses = e.customClasses.replace(' selected', '')
            })

            //agrega la clase selected al elemento en la capa TCP/IP y a los coincidentes en la capa OSI
            updatedTCPIPLayers[index].customClasses = (updatedTCPIPLayers[index].customClasses || '') + ' selected';
            elements.map((e, i) => {
                updatedOSILayers[e].customClasses = (updatedOSILayers[e].customClasses || '') + ' selected';
            })
            setLayers({ tcpip: updatedTCPIPLayers, osi: updatedOSILayers })
        } else {
            console.log(`No se encontró el elemento correspondiente para ${layerData.title}`);
        }
    };
    

    return (
        <div className='table-container'>
            <div className='osi-model-container'>
                <h2>Modelo OSI</h2>
                {layers.osi.map((layer, i) => {
                    return (
                        <span key={i} className={layer.customClasses} onClick={() => selectOSILayer(layer)}
                        onMouseEnter={() => selectOSILayer(layer)}
                        data-tooltip-id={i+layer.title} data-tooltip-content={"hello\nworld"}
                        >
                            <b>{layer.title}</b>
                            <Tooltip id={i+layer.title} className='toolTip' opacity={1}
                                style={{ backgroundColor: "rgb(134, 225, 80)", color: "#222" }} 
                                render={({ content, activeAnchor }) => (
                                    <div>
                                        {layer.description}
                                      <br/>
                                        Protocolos: 
                                        {layer.ports.map((p, k) => {
                                            return (
                                                <b> {p.title},</b>
                                            )
                                        })}
                                    </div>
                                  )}
                            />
                        </span>
                    )
                })}
            </div>
            <div className='tcpip-model-container'>
            <h2>Modelo TCP/IP</h2>
                {layers.tcpip.map((layer, i) => {
                    return (
                        <span key={i} className={layer.customClasses} onClick={() => selectTCPIPLayer(layer)}   
                        onMouseEnter={() => selectTCPIPLayer(layer)}
                        data-tooltip-id={i+layer.title} data-tooltip-content={layer.description}
                        >
                            <b>{layer.title}</b>
                            <Tooltip id={i+layer.title} className='toolTip' opacity={1}
                                style={{ backgroundColor: "rgb(39, 206, 245)", color: "#222" }} 
                                render={({ content, activeAnchor }) => (
                                    <div>
                                        {layer.description}
                                      <br/>
                                        Dispositivos: 
                                        {layer.devices.map((d, j) => {
                                            return (
                                                <b> {d.title},</b>
                                            )
                                        })}
                                      <br/>
                                        Protocolos: 
                                        {layer.ports.map((p, k) => {
                                            return (
                                                <b> {p.title},</b>
                                            )
                                        })}
                                    </div>
                                  )}
                            />
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default Layers;
