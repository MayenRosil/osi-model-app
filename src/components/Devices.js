import { useState } from 'react';
import '../styles/devices.css';
import { Tooltip } from 'react-tooltip'

const Devices = ({ devices, setDevices }) => {

    const [selectedDevice, setSelectedDevice] = useState(
        {
            "description": "Dispositivo que conecta",
            "title": "Router",
            "layer_number": "3",
            "layer_title": "Capa de Red",
            "image": "https://i.blogs.es/3f89a3/41vupqun30l._sl500_/original.jpeg",
            "brands": [
                {
                    "title": "Cisco",
                }
            ],
            "ports": [
                {
                    "title": "Puerto 35"
                }
            ],
            "compatible_brands": [
                {
                    "title": "Cisco"
                }
            ]
        }
    )

    return (
        <>
            <div className='gallery-container'>
                <h2 className='subtitle'>Dispositivos</h2>
                <div className='devices-gallery-container'>
                    {devices.devices.layers.map((layer, i) => {
                        return (
                            <div key={i} className='layer-container'>
                                <div key={i} className='layer-title'>
                                    <b>Capa {layer.number}: {layer.title}</b>
                                </div>
                                <div key={i} className='layer-item-container'>
                                    {layer.devices.map((device, i) => {
                                        return (
                                            <span key={i} className='span' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedDevice(device)} >
                                                <b className='device-title'>{device.title}</b>
                                                <img src={device.image} width={100} height={100} />
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style={{ color: "white" }}>
                    <div class="modal-content">
                        <div class="modal-header" style={{ display: "flex", flexDirection: 'column', alignItems: "flex-start" }}>
                            <h3 class="modal-title fs-3" id="exampleModalLabel">{selectedDevice.title}</h3>
                            <h4 class="modal-title fs-5" id="exampleModalLabel">Capa {selectedDevice.layer_number}: {selectedDevice.layer_title}</h4>
                        </div>
                        <div class="modal-body">
                            <div style={{ display: "flex", justifyContent: 'center' }}>
                                <img src={selectedDevice.image}
                                    width={300} height={200}
                                    style={{objectFit: 'fill'}}
                                />
                            </div>
                            <br />
                            <h4 class="modal-title fs-5" id="exampleModalLabel">Descripcion</h4>
                            <p class="modal-title " id="exampleModalLabel">{selectedDevice.description}</p>
                            <br />

                            {selectedDevice.brands &&
                                <>
                                    <h4 class="modal-title fs-5" id="exampleModalLabel">Marcas fabricadas</h4>
                                    {
                                        selectedDevice.brands?.map((brand, i) => {
                                            return (
                                                <>
                                                    <p class="modal-title " id="exampleModalLabel"> {brand.title},</p>
                                                    {brand.description &&
                                                        <i>{brand.description}</i>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <br />
                                </>
                            }

                            {selectedDevice.ports &&
                                <>
                                    <h4 class="modal-title fs-5" id="exampleModalLabel">Puertos</h4>
                                    {
                                        selectedDevice.ports?.map((port, i) => {
                                            return (
                                                <>
                                                    <p class="modal-title " id="exampleModalLabel"> {port.title},</p>
                                                    {port.description &&
                                                        <i>{port.description}</i>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <br />
                                </>
                            }

                            {selectedDevice.protocols &&
                                <>
                                    <h4 class="modal-title fs-5" id="exampleModalLabel">Protocolos</h4>
                                    {
                                        selectedDevice.protocols?.map((protocol, i) => {
                                            return (
                                                <>
                                                    <p class="modal-title " id="exampleModalLabel"> {protocol.title},</p>
                                                    {protocol.description &&
                                                        <i>{protocol.description}</i>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <br />
                                </>
                            }

                            {selectedDevice.compatible_brands &&
                                <>
                                    <h4 class="modal-title fs-5" id="exampleModalLabel">Marcas compatibles / Usos comunes</h4>
                                    {
                                        selectedDevice.compatible_brands?.map((comp, i) => {
                                            return (
                                                <>
                                                    <p class="modal-title " id="exampleModalLabel"> {comp.title},</p>
                                                    {comp.description &&
                                                        <i>{comp.description}</i>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <br />
                                </>
                            }

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Devices;